import {Modal,Row,Col,Select,Input,Button, Dropdown, message,Form} from 'antd'
import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import moment from 'moment'
import { GoClock } from "react-icons/go";
import {showLoading,hideLoading} from '../../../redux/slice/userSlice'
import {useDispatch, useSelector}from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addGroupBook, getBookingTurfByDate, MakePayment } from '../../api/book';
import { bookTurf } from '../../api/book';
import { generateTimeSlots,getAvailableSlots } from '../../utils/slotUtils'
const BookModel = ({
    isBookModal,
    setIsBookModal,
    turf
}) => {
    const [duration,setDuration]=useState(1)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [active,setActive]=useState('book')
    const [bookType,setBookType]=useState('book')
    const[booking,setBooking]=useState([])
    const{user}=useSelector(store=>store.users)
    const [selectedTime,setSelectedTime]=useState(Number)
    const[slotModal,setSlotModal]=useState(false)
    const[filterSlots,setFilterSlots]=useState([])
    const[open,setOpen]=useState(false)
    const[date,setDate]=useState(moment().format('YYYY-MM-DD'))
    const book=async(transactionId)=>{
    try {
        dispatch(showLoading())
        const startHour=Number(selectedTime.split(':')[0])
        const endTime=startHour +duration
        
        let response
        if(bookType==='book'){
           response= await bookTurf({
            date:date,
            duration,
            startTime:startHour,
            turf:turf._id,
            bookedBy:user._id,
            totalPrice:price *duration,
            transactionId,
            endTime,
            owner:turf.owner._id   
        })
        }
        else{
            response=await addGroupBook({
                date:date,
                startTime:startHour,
                hostedBy:user._id,
                totalPrice,
                owner:turf.owner_id,
                transactionId

            })
        }
        if(response.success){
                message.success('Turf booked Successfully')
                navigate('/myBookings')
        }
        else{
            message.warning(response.message)
        }
    } catch (error) {
        console.log(error.message);     
    }
}  
const slots=generateTimeSlots(turf.open,turf.close,date)
    const availableSlots=getAvailableSlots(slots,booking)
    
     const getData=async()=>{
    try {
        const response=await getBookingTurfByDate(turf?._id,date)
        console.log('inside the fun');
        
        if(response.success){
            setBooking(response.data)
            console.log(booking); 
        }
    } catch (error) {
        console.log(error.message);
        
    }finally{
dispatch(hideLoading())
    }
}


useEffect(()=>{
getData()
},[])
    const handleTimeChange=(e)=>{
        const selectedTime=parseInt(e.target.value)
        setSelectedTime(selectedTime)
    }

        const handlePayment=async()=>{
                    if(!stripe || !elements){
                        message.warning('Stripe not loaded')
                        return 
                    }
                    try {
                        dispatch(showLoading())
                        const payload={
                            amount:turf?.price*duration * 100,
                            userId:user?._id
                        }
                        
                        const response=await MakePayment(payload)
                        if(response.success){
                            const clientSecret=response.data.clientSecret
                            
                            const{paymentIntent,error}=await stripe.confirmCardPayment(
                                clientSecret,
                                {payment_method:{
                                card:elements.getElement(CardElement),
                                billing_details:{name:user?.name}     
                                }}
                            )
                            if(error){
                                message.error(error.message)
                            }
                            else if(paymentIntent.status==='succeeded'){
                                message.success('Payment successfull')
                                 await book(paymentIntent.id)    
                            }

                            }
                        
                    } catch (error) {
                        
                    }finally{
                        dispatch(hideLoading())  
                    }
                     }
    const stripe = useStripe();
    const elements = useElements();
    const handleDec=()=>{
    if(duration ===1){
        return
    }
    else{
        setDuration(duration-1)
    }
}
const handleInc=()=>{
    if(duration ===24){
        return 
    }
    else{
        setDuration(duration+1)
    }
}

const handleDateChange=(e)=>{
setDate(moment(e.target.value).format('YYYY-MM-DD'))
}

  return (
  <>
    <Modal
   centered
   open={isBookModal}
   onOk={handlePayment}
   onCancel={()=>{setIsBookModal(false)}}
   >
<div className='flex-c gap'>

        <Row gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={24}>
        <h2>{turf.name}</h2>
        <span>{turf.address}</span>
        </Col>
    </Row>
    <Row>
    <Col>
    <span className='font-p f-6'>Booking Type</span></Col>
    <Col className='ml-3'>

   <div className='d-flex gap ml-3 ' >
     <Button className={`font-p f-6 ls  ${active==='book' ?'active':''}`}
     onClick={()=>{
        setBookType('book')
        setActive('book')
     }}
     >Book a Game</Button>
    <Button
    className={`font-p f-6 ls  ${active==='host' ?'active':''}`}
    onClick={()=>{
        setBookType('host')
        setActive('host')
    }}
    >Host a Game</Button>
   </div>
    </Col>
    </Row>

    {bookType==='host' &&(
        <Row>
            <Col>
            <span className='font-p f-6 ls'>Total Players</span>
            </Col>
            <Col className='ml-3'>
            <Input className='ml-3'
            type='number'
            min={1}
            max='12'
            />
            </Col>
        </Row>
    )}

    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span className='font-p f-6'>Sports</span>
        </Col>
        <Col span={12}>
        <Select
        placeholder='Pick a Sport'
        options={turf?.AddSport?.map((sport)=>{
            return {
                label:sport.name,
                value:sport.name
            }
        }
        )}
        />
        </Col>
    </Row>
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span className='font-p f-6'>Date</span>
        </Col>
        <Col span={12}>
            <Input type='date'
            value={date}
            onChange={handleDateChange}
            />
        </Col>
    </Row>
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span className='font-p f-6'>Start Time</span></Col>
        <Col span={12}>
            <div className='border-black c-p text-center d-f-center '
            style={{
                height:40,
                borderRadius:10
            }}
            >
                <Dropdown
  trigger={['click']}
  placement="bottomLeft"
  className='c-p'
   open={open} // control open state
   onOpenChange={(flag) => setOpen(flag)}
  popupRender={() => (
    <div style={{
        display:'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    backgroundColor:'white',
    maxWidth:200
    }}>
      {availableSlots && availableSlots.map((slot, idx) => (
        <div key={idx}
        onClick={()=>{
            setSelectedTime(slot)
            setOpen(false)
        }}
        style={{
            width:50,
            height:50
        }}
        className='border bor text-center c-p'
        >
          {slot} 
        </div>
      ))}
    </div>
  )}
>
  <button
  className='font-p f-6 d-flex justify-content-between'
  style={{
    border:'none',
    backgroundColor:'white'
  }}
  >{selectedTime?selectedTime:'Pick a Time'}
  <GoClock 
  className='ml-3 font-larger b-color '
  />
  </button>
  
</Dropdown>
            </div></Col>
    </Row>
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span className='font-p f-6 ls' >Duration</span>
        
        </Col>
        <Col span={12}>
        <div className='d-flex justify-content-between'> 
           <Button
           disabled={duration <=1  }
           onClick={handleDec}
           onMouseOver={(e)=>{
            e.currentTarget.style.color='none'
          }}
           style={{
            border:'none'
          }}
           >
            <CiCircleMinus
            style={{
            fontSize:'30px',
            color:'rgb(0,189,78)'
          }}
          
            />  
           </Button>
         <input type="text"
         style={{
            outline:'none',
            border:'none',
            textAlign:'center'
         }}
         className='font-p f-6'
            value={duration}/>
         
          <Button disabled={duration===24 || selectedTime + duration > turf.close}
          onClick={handleInc}
          onMouseOver={(e)=>{
            e.currentTarget.style.color='none'
          }}
          style={{
            border:'none'
          }}
          >
            <CiCirclePlus style={{
            fontSize:'30px',
            color:'rgb(0,189,78)'
          }} />
          </Button>
        </div>
        </Col>
    </Row>
    <Row className='mt' 
    gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={12}>
        <span className='font-p f-6 ls'>Price</span>
        </Col>
        <Col span={12}>
        <span>{turf.price * duration}</span>
        </Col>
    </Row>
   <Row  gutter={{xs:8,sm:12,md:16,lg:20}}
   className='mt'>
    <Col span={24}>
     <CardElement/> 

     </Col>
     
   </Row>
   <Button onClick={handlePayment}>{turf?.price *duration}</Button>
   
</div>
    
        
   </Modal>

   </>  
  )
}

export default BookModel
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
import { getBookingTurfByDate, MakePayment } from '../../api/book';
import { bookTurf } from '../../api/book';
const BookModel = ({
    isBookModal,
    setIsBookModal,
    turf
}) => {
    const [duration,setDuration]=useState(1)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[booking,setBooking]=useState([])
    const{user}=useSelector(store=>store.users)
    const [selectedTime,setSelectedTime]=useState(Number)
    const[slotModal,setSlotModal]=useState(false)
    const[filterSlots,setFilterSlots]=useState([])
    const[date,setDate]=useState(moment().format('YYYY-MM-DD'))
    const[open,setOpen]=useState(false)
 
const generateTimeSlots = (startHour, endHour) => { 
    const slots = []
    const open=parseInt(startHour)
    const close=parseInt(endHour)
    let openHour=Math.ceil(open)
    let closeHour=Math.ceil(close)
    let now=moment()
    let today=moment().format('YYYY-MM-DD')
 
    if(date===today){
        const currenthour=now.hour()
        if(currenthour>=openHour){
            openHour=currenthour+1
        }
    }

    
    for (let hour = openHour; hour < closeHour; hour++) {
    const isPM = hour >= 12
    const displayHour = hour % 12 === 0 ? 12 : hour % 12
    slots.push(`${displayHour}:00 ${isPM ? 'PM':'AM'}`)
    }
    return slots
}

const slots=generateTimeSlots(turf.open,turf.close)
console.log(slots,'array');

const parseHour = (time) => {
  return Number(time.split(":")[0]);
};

const getAvailableSlots = (slots, booking) => {
  return slots.filter((slot) => {
    const slotHour = parseHour(slot);

    const isBooked = booking.some(
      (booking) =>
        slotHour >= booking.startTime &&
        slotHour < booking.endTime
    );

    return !isBooked;
  });
};

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

const book=async(transactionId)=>{
    try {

        dispatch(showLoading())
        const startHour=Number(selectedTime.split(':')[0])
        const endTime=startHour +duration
        const totalPrice=turf.price *duration
        const response =await bookTurf({
            date:date,
            duration,
            startTime:startHour,
            turf:turf._id,
            user:user._id,
            totalPrice,
            transactionId,
            endTime
            
        })
        if(response.success){
                message.success('Turf booked Successfully')
                navigate('/myBookings')
        }
        else{
            message.warning(response.message)
        }
    } catch (error) {
        message.error(response.message)
        console.log(error.message);
        
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
    <Form>
        <Row gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={24}>
        <h2>{turf.name}</h2>
        <span>{turf.address}</span>
        </Col>
    </Row>
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span>Sports</span>
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
        <span>Date</span>
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
        <span>Start Time</span></Col>
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
        <span>Duration</span>
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
            value={duration}

         />
         
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
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={12}>
        <span>Price</span>
        </Col>
        <Col span={12}>
        <span>{turf.price * duration}</span>
        </Col>
    </Row>
   <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
    <Col span={24}>
     <CardElement/> 

     </Col>
     
   </Row>
   <Button onClick={handlePayment}>{turf?.price *duration}</Button>
   </Form>
</div>
    
        
   </Modal>

   </>  
  )
}

export default BookModel
import {Modal,Row,Col,Select,Input,Button, Dropdown    } from 'antd'
import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import moment from 'moment'
import {showLoading,hideLoading} from '../../../redux/slice/userSlice'
import {useDispatch}from 'react-redux'
import { getBookingTurfByDate } from '../../api/book';
const BookModel = ({
    isBookModal,
    setIsBookModal,
    turf
}) => {
    const [duration,setDuration]=useState(1)
    const dispatch=useDispatch()
    const[slotModal,setSlotModal]=useState(false)
    const[filterSlots,setFilterSlots]=useState([])
    const[date,setDate]=useState(moment().format('YYYY-MM-DD'))
const [startTime, setStartTime] = useState(
    turf?.open ? moment(turf.open, "HH:mm").format('HH:mm') : '09:00'
); 

function fillSlots(open,close){
        const o=parseInt(open)
        const c=parseInt(close)
        const slots=[]
      for(let i=o;i<c;i++){
            slots.push(i)
      }
      return slots
        
}

const slots=fillSlots(turf.open,turf.close)

const getData=async()=>{
    try {
        const response=await getBookingTurfByDate(turf._id,date)
        if(response.success){
            setFilterSlots(response.data)
            console
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
        setStartTime(selectedTime)
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
                        duration,
                        date,
                        startTime,
                        
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



  return (
  <>
    <Modal
   centered
   open={isBookModal}
   onOk={handlePayment}
   >
<div className='flex-c gap'>
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
        >
            
        </Select>
        </Col>
    </Row>
    <Row  gutter={{xs:8,sm:12,md:16,lg:20}}>
        <Col span={8}>
        <span>Date</span>
        </Col>
        <Col span={12}>
            <Input type='date'/>
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
            onClick={()=>{setSlotModal(prev=>!prev)}}
            >
                <Dropdown
  trigger={['click']}
  popupRender={() => (
    <div className="slot-popup">
      <div>9:00 AM</div>
      <div>10:00 AM</div>
      <div>11:00 AM</div>
    </div>
  )}
>
    <div className="start-time-box">
    Select Start Time
  </div>
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
           disabled={duration <=1}
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
         
          <Button disabled={duration===24}
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
   
</div>
   </Modal>

   </>  
  )
}

export default BookModel
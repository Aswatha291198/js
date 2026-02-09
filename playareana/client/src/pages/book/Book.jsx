import React, { useEffect, useState } from 'react'
import {Tabs} from 'antd'
import {hideLoading,showLoading} from '../../../redux/slice/userSlice'
import {useDispatch,useSelector}from 'react-redux'
import {useNavigate, useSearchParams}from 'react-router-dom'
import { setCity,setCities,setCityModal } from '../../../redux/slice/citySlice'
import CityModal from '../../component/Modals/CityModal'
import { getAllTurf } from '../../api/turf'


const Book = () => {
  const{cities,isCityModal,selectedCity}=useSelector(store=>store.cities)
  const[venues,setVenues]=useState([])
  const[serachParams]=useSearchParams()
  const city=serachParams.get('city')
  const dispatch=useDispatch()
  

  const getData=async()=>{
    try {
      const venueResponse=await getAllTurf()
      if(venueResponse.success){
        setVenues(venueResponse.data)
      }
    } catch (error) {
      console.log(error.message);
      
    }finally{
      dispatch(hideLoading())
    }
  }
 
const tabItems=[
    {
      key:'venues',
      label:`Venues ${venues.length}`
    }
  ]

useEffect(()=>{
getData()
},[])
  return (
   <>
   <main className='flex-c'>
    <div className='m-20 h-1 d-f-center gap border bor'>
      <h2 className='font-s b-color '>Book By Venue, Cities</h2>
       <input type="text"
       style={{
        width:200,
        height:30,
        textAlign:'center'
       }}
       placeholder='Search By Venue' />
       <div className='border py-3 bor'
       style={{
        width:200,
        height:30 
       }}
       onClick={()=>dispatch(setCityModal(true))}>
        <span className='font-p f-6 ls cap'>{city}</span>
       </div>
    </div>
    <Tabs items={tabItems}/>
    {
      isCityModal && <CityModal/>
    }
   </main>
   </>
  )
}

export default Book
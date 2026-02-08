import React, { useEffect, useState } from 'react'
import {Input, message, Select, Tabs} from 'antd'
import {useDispatch}from 'react-redux'
import{showLoading,hideLoading}from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import { getAllCity } from '../../api/city'
import Venue from './Venue'
const Book = () => {
  const[venues,setVenues]=useState([])
  const dispatch=useDispatch()
  const[city,setCities]=useState([])
  const[filterVenue,setFilterVenue]=useState([])
  const[searchVenue,setSearchVenue]=useState('')
  const[selectedCity,setSelectedCity]=useState('')
const getData=async()=>{
  try {
    dispatch(showLoading())
    const venueResponse=await getAllTurf()
    const cityRes=await getAllCity()
    if(cityRes.success){
setCities(cityRes.data)
    }
    if(venueResponse.success){
      setVenues(venueResponse.data)
      setFilterVenue(venueResponse.data)
    }
    else{
      message.warning(venueResponse.message)
    }
  } catch (error) {
    console.log(error.message);
    
    
  }finally{
dispatch(hideLoading())
  }
}
useEffect(()=>{
  getData()
}
,[])
const handleChange=(value)=>{
console.log(value);
let filter=venues
setSelectedCity(value)
if(!value){
  setFilterVenue(venues)
}
else{
  const filtered=filter.filter(
    venue=>venue.city.name===value
  )
  setFilterVenue(filtered)
}

}
  const tabItems=[
    {
      key:'venues',
      label:`Venues ${filterVenue.length}`,
      children:<Venue venue={filterVenue}/>
    }
  ]
  return (
    <>
    
    
    <main className='flex-c '>
      <div className='red m-20 h-1 d-f-center gap'>
        <h2 className='font-s b-color '>Book By Venue, Cities</h2>
       <input type="text" />
       <Select
       placeholder='Select City'
       allowClear
       className='cap font-p '
       onChange={handleChange}
       options={city.map(city=>({
        label:city?.name,
        value:city?.name
       }))}
       ></Select>
      </div>
      <Tabs items={tabItems} className='py-3 ml-3 '/>
    </main>
    </>
  )
}

export default Book
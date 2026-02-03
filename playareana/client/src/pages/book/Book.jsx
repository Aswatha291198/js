import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {Card, message, Select} from 'antd'
import{useDispatch} from 'react-redux'
import {showLoading,hideLoading} from '../../../redux/slice/userSlice'
import { getAllCity } from '../../api/city';
import { getAllTurf } from '../../api/turf';

const Book = () => {
  const [search,setSearch]=useState('')
  const[cities,setCities]=useState([])
  const[turfs,setTurfs]=useState([])
  const dispatch=useDispatch()
  const getData=async()=>{
    try {
      dispatch(showLoading())
      console.log('coming to the city');
      const turfResponse=await getAllTurf()
      const cityResponse =await getAllCity()
      if(turfResponse.success){
        setTurfs(turfResponse.data)
        console.log(turfs); 
        message.success(turfResponse.message)
      }
      if(cityResponse.success){
        setCities(cityResponse.data)
        message.success(cityResponse.message)
      }
      
    } catch (error) {
      dispatch(hideLoading())
      console.log(error.message);
    }finally{
      dispatch(hideLoading())
    }
  }

  
  useEffect(()=>{
    getData()
  },[])
  return (
    <main className='flex-c '>
      <section className='w-color  d-flex b-top h-1 justify-content-between' >
     <h2 className='b-color font-p p-left py-3 px-3 mt  '>Search By City ,Venue Here </h2>
     <section >
      <input type="text" placeholder='Search-here'
     className='h-50 custom-input'
     onChange={(e)=>setSearch(e.target.value)}      />
  <FaSearch  className='font-large'style={{
    position:'relative',
    right:25 ,
    top:2,
    color:'lightgrey'
  }}/>
  
     </section>
     <section className='d-f-center '>
     <Select
  className="w-100"
  placeholder="Select city"
  onChange={(value) => console.log("Selected city:", value)}
  options={cities.map(city => ({
    value: city.name,
    label: city.name
  }))}
/>
 
     </section>
      </section>
      <section className='h-1 w-color d-flex b-top ' >
      <span>Venues({turfs.length})</span>
      </section>
      <section className='mt'> 
        <div className='d-grid' >
          {turfs && turfs.map((turf)=>(
            <Card
            key={turf._id}
            className='red py-3 px-3'
            > 
            <img src={turf.poster} alt="d" />      
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Book
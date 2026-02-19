    import React, { useEffect, useState } from 'react'
  import {Tabs} from 'antd'
  import {hideLoading,showLoading} from '../../../redux/slice/userSlice'
  import {useDispatch,useSelector}from 'react-redux'
  import {useNavigate, useSearchParams}from 'react-router-dom'
  import { setCity,setCities,setCityModal } from '../../../redux/slice/citySlice'
  import CityModal from '../../component/Modals/CityModal'
import { getAllTurf, getTurfByCity } from '../../api/turf'
import Venue from './Venue'



  const Book = () => {
    const{cities,isCityModal,selectedCity}=useSelector(store=>store.cities)
    const[venues,setVenues]=useState([])
    
    const[serachParams]=useSearchParams()
    const cityFromUrl=serachParams.get('city')
    const dispatch=useDispatch()
    const city=cityFromUrl ?? selectedCity?? null
   

    const[book,setBook]=useState(false)

  const getData=async()=>{
      try {
       let response =null
       dispatch(showLoading())
      if(city){    
          dispatch(setCity(city))
       response=await getTurfByCity(city)
            setVenues(response.data)     
        }
        else {
          response=await getAllTurf()
        }
        if(response.success){
          setVenues(response.data)
        }
      } catch (error) {
        console.log(error.message);
        
      }finally{
        dispatch(hideLoading())
      }
    }

  console.log(selectedCity,'from book')
  const tabItems=[
      {
        key:'venues',
        label:`Venues ${venues.length}`,
        children:<Venue venues={venues}/> 
      }
    ]

  useEffect(()=>{
  getData()
  },[city])
    return (
    <>
    <main className='flex-c venue-cont'>
      <div className='m-20 h-1 d-f-center gap border bor'>
        <h2 className='font-p b-color '>Book By Venue, Cities</h2>
        <input type="text"
        style={{
          width:200,
          height:30,
          textAlign:'center',
          
        }}
        
        placeholder='Search By Venue' />
        <div className='border py-3 bor'
        style={{
          width:200,
          height:30 
        }}
        onClick={()=>{
          dispatch(setCityModal(true))
          setBook(prev=>!prev)
        }}>
          <span className='font-p c-p f- ls cap '>{city}</span>
        </div>
      </div>
      <div className='b-top'><Tabs items={tabItems} className='m-20'/></div>
      {
        isCityModal &&  (<CityModal/>)
      }
    </main>
    </>
    )
  }

  export default Book
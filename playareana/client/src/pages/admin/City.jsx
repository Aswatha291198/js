import React, { useEffect, useState } from 'react'
import './admin.css'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { addCity, getAllCity } from '../../api/city'
import { message } from 'antd'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import CityForm from './CityForm'
const City = () => {
  console.log('coming to the city');
  
  const [visible, setVisible] = useState(false)
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const [cityList,setCityList]=useState([])
  const [formType,setFormType]=useState('add')

  
  const getCity=async()=>{
     console.log('getCity function called');
    try {
      dispatch(showLoading())
      const allCities=await getAllCity()
      console.log(allCities.data);
      
      if(allCities.success){
        setCityList(allCities.data)
        dispatch(hideLoading())
      }
      
    } catch (error) {
      console.log(error.message);
      message.error(error.message)
      dispatch(hideLoading())
      
    }
  }
  useEffect(()=>{
      getCity()
  },[])


  return (
    <main className='city-main'>
      <div className="city-head">
        <span className='font-style'>Cities</span>
      </div>

      <div className="add-city">
        <button
          onClick={() =>{
            setFormType('add')
            setVisible(prev => !prev)}}
          className='font-poppins cursor-pointer'
        >
          Add City
        </button>
      </div>

     
      <div className="city-list">
        {cityList.map((city)=>{
          return (
            <div
            key={city._id}
            className='city-div'
            ><span className='font-poppins'>{city.name}</span>
            <div className="icon-div">
              <CiEdit className='city-icon'
              onClick={()=>{setFormType('edit')
                setCity(city)
                setVisible(true)
              }
                
              }
              />
            <MdDeleteOutline className='city-icon'/>
            </div>
            </div>
          )
        })}
      </div>
      {
        visible &&
         (<CityForm setVisible={setVisible}
        visible={visible}
        getCity={getCity}
        city={city}
        setCity={setCity}
        formType={formType}/>)
      }
    </main>
  )
}

export default City

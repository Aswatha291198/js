import React, { useEffect, useState } from 'react'
import {DatePicker, Select} from 'antd'
import'./play.css'
import { Switch } from 'antd';
import FilterForm from './FilterForm';
const Play = () => {
  const [view ,setView]=useState('filter')
  const [modelOpen,setModelOpen]=useState(false)
  const[sport,setSport]=useState(null)
  const [date,setDate]=useState(null)
  useEffect(()=>{
const getGame=async()=>{

}
  },[sport,date])
    
  return (
    <>
   
    <div className='play-cont'> 
        
        <div className='filter-cont'> 
           
            <div className='filter'>
                <i className="fa-solid fa-filter"></i>
                <span>Filter & Sort</span>
                <i className="fa-solid fa-caret-down"></i>
            </div>
             
            <div className='sport'>
                <i className="fa-solid fa-baseball"></i>
                <span>Sport</span>
                <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className='filter'>
                <DatePicker placeholder='Date' className='date'/>
            </div>
            <div className='filter'>
                <i className="fa-solid fa-filter"></i>
                <span>Filter & Sort</span>
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>
        
          </div>
          {view==='filter' && <FilterForm/>}
   
    </>
  )
}

export default Play
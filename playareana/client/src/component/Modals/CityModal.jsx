import React from 'react'
import { Modal,Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCity,setCities,setCityModal } from '../../../redux/slice/citySlice'
import { useNavigate } from 'react-router-dom'

const CityModal = () => {
const navigate=useNavigate()
const{cities,isCityModal,selectedCity}=useSelector(store=>store.cities)
const dispatch=useDispatch()
        const handleCity=(value)=>{
localStorage.setItem('city',value) 
dispatch(setCity(value))
navigate(`/book?city=${value}`)
dispatch(setCityModal(false))
}

  return (
    <Modal 
    centered
    open={isCityModal}
    closable={false}
    footer={null}
    >
      <div className='flex-c'>
        <h2 className='font-s color-g text-center'>Select City</h2>  
      <Select 
      placeholder='Select a City'
      allowClear
      onChange={handleCity}
      options={cities.map(city=>({
        label:city.name,
        value:city.name
      }))}
      />
      </div>
    </Modal>
  )
}

export default CityModal
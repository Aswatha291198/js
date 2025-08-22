import React, { useEffect, useState } from 'react'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAllturfOwner } from '../api/turf'
import { Button, message,Card } from 'antd'
import{EditOutlined} from '@ant-design/icons'
import './turf.css'
import TurfForm from './TurfForm'


const Turfs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [turfList, setTurfList] = useState(null)
    const[formType,setFormType]=useState('add')
    const [selectedTurf, setSelectedTurf] = useState(null)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.users)

    const getData = async () => {
        try {
            dispatch(showLoading())
            const response = await getAllturfOwner(user._id)
            if (response.success) {
                const list = response.data
                message.success(response.message)
                setTurfList(list.map((item) => {
                    return {
                        ...item,
                        key: `list${item._id}`
                    }
                }))
            }
            else {
                message.error(response.message)
            }
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
            console.log(error.message);
        }
    }
    useEffect(()=>{
      if(user){
          getData()
      }
    },[user])
    return (
        <>
        <div className='turf-cont'>
        <div className='turf-display-cont'>
            <div className='turf-disp-name-cont'>
                <h1 className='h-turf'>Manage Turfs</h1>
                <p className='p-turf'>Oversee and manage your turf properties</p>
            </div>
            <div className='btn-wrapper'>
                     <Button
                     type='primary'
                     className='turf-btn'
                     onClick={()=>{
                        setIsModalOpen(true)
                        setFormType('add')
                     }}
                     >+ Add Turfs</Button>
                </div></div>
                
                {turfList && turfList.map((turf)=>{
                    return (
                         <Card
                         className='custom-card-turf'
                         variant=''
                         key={turf._id}
                         >
                            <div className='turf-img-div'>
                                <img src={turf.poster} alt="poster"className='poster-image' />
                                <span>{turf.isActive}</span>  
                            </div>
                            <div>
                                <div className='turf-info-div'>
                                    <span className='turf-name'>{turf.name}</span>
                                    <span className='location-wrap'>
                                        <i class="fa-solid fa-location-dot location-icon"></i>
                                        <span>{turf.address}</span>
                                    </span>
                                    <span className='turf-timings'>
                                        <i className="fa-regular fa-clock clock-icon"></i>
                                        <span>{turf.open} -</span>
                                    <span>{turf.close}</span>
                                    </span>
                                    <span className='turf-phone-wrap'>
                                        <i className="fa-solid fa-phone phone-icon"></i>
                                          <span>{turf.phone}</span>
                                          </span> 
                                          <span className='price-div'>
                                            <i className="fa-solid fa-money-bill"></i>
                                            <span>{turf.price} <span>Price per one Hour</span></span>
                                          </span>
                                          <div className='turf-btn-wrapper'>
                                            <Button 
                                            type='primary'
                                            className='edit-btn-turf'
                                            onClick={()=>{
                                                setIsModalOpen(true)
                                                setFormType('edit')
                                                setSelectedTurf(turf)
                                            }}>Edit</Button>
                                            <Button
                                            type='primary'
                                            className='delete-btn-turf'
                                            >Delete</Button>
                                            </div>                                 
                                </div>
                            </div>
                         </Card>   
                    )
                })}
        </div>
        {isModalOpen &&(
            <TurfForm 
            getData={getData}
            isModalOpen={isModalOpen}
            selectedTurf={selectedTurf}
            setSelectedTurf={setSelectedTurf}
            setIsModalOpen={setIsModalOpen}
            formType={formType}
            />
        )}
        
        
        </>
            
    )
}

export default Turfs
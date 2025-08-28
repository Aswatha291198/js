import React, { useEffect, useState } from 'react'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAllturfOwner } from '../api/turf'
import { Button, message,Card } from 'antd'
import{EditOutlined} from '@ant-design/icons'
import './turf.css'
import TurfForm from './TurfForm'
import DeleteModal from './DeleteModal'
import location from '../assets/location.png'
import clock from '../assets/clock.png'
import phone from '../assets/telephone.png'
import rupee from '../assets/rupee.png'


const Turfs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [turfList, setTurfList] = useState(null)
    const[isDeleteModal,setDeleteModal]=useState(false)
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
            console.log(response.data);
            
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
                                        <span className='location-img'><img src={location} alt="location" className='location-image' /></span>
                                        <span className='turf-address'>{turf.address}</span>
                                    </span>
                                    <span className='turf-timings'>
                                       <span className='location-img'><img src={clock} alt="clock"
                                       className='location-image' /></span>
                                        <span className='turf-address'>{turf.open} -</span>
                                    <span className=' turf-address'>{turf.close}</span>
                                    </span>
                                    <span className='turf-phone-wrap'>
                                       <span className='location-img'><img src={phone} alt="phone" className='location-image' /></span>
                                          <span className='turf-address'>{turf.phone}</span>
                                          </span> 
                                          <span className='price-div'>
                                            <span className='location-img'><img src={rupee} alt="rupee"className='location-image'/></span>
                                            <span className='turf-address'>{turf.price} <span className='turf-address'>Price per one Hour</span></span>
                                          </span>
                                          <div>
                                            <span></span>
                                          </div>
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
                                            onClick={()=>{
                                                setDeleteModal(true)
                                                setSelectedTurf(turf)
                                            }}
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
            {isDeleteModal && (
                <DeleteModal
                selectedTurf ={selectedTurf}
                setDeleteModal={setDeleteModal}
                isDeleteModal={isDeleteModal}
                setSelectedTurf={setSelectedTurf}
                getData={getData}
                />
            )}
        
        
        </>
            
    )
}

export default Turfs
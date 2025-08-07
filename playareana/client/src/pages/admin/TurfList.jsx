import React, { useState } from 'react'
import { message, Tabs } from 'antd'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { allTurf } from '../../api/turf'


const TurfList = () => {
    const [turf,setTurf]=useState(null)
    const dispatch=useDispatch()
    const getData=async()=>{
        try {
            dispatch(showLoading())
            const res=await allTurf()
            if(res.success){
                message.success(res.message)
                const turfs=res.data
                setTurf(turfs.map((turf)=>{
                    return {...turf,key:`turf${turf._id}`}
                }))
                dispatch(hideLoading)
            }
            
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
            
        }
    }
    const taviItems=[
        {   title:"name",
            dataIndex:"name",    
            key:"name"
        },
        {   title:"email",
            dataIndex:"email",    
            key:"email"
        },
        {   title:"phone",
            dataIndex:"phone",    
            key:"phone"
        },
        {   title:"location",
            dataIndex:"location",    
            key:"location"
        },
        {   title:"owner",
            dataIndex:"owner",    
            key:"owner",
            render:(text,data)=>{
                return data.owner && data.owner.name
            }
        },
    ]
  return (
    <div>TurfList</div>
  )
}

export default TurfList
import React, { useEffect, useState } from 'react'
import { Button, message, Table, Tabs } from 'antd'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { getAllTurf, updateTurf } from '../../api/turf'



const TurfList = () => {
    const [turf,setTurf]=useState(null)
    const dispatch=useDispatch()
    const getData=async()=>{
        try {
            dispatch(showLoading())
            const res=await getAllTurf()
            if(res.success){
                message.success(res.message)

                const turfs=res.data
                console.log(turfs);
                
                setTurf(turfs.map((turf)=>{
                    return {...turf,key:`turf${turf._id}`}
                }))
                dispatch(hideLoading())
            }
            
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
    const handleStatusChange =async(turf)=>{
        try {
            dispatch(showLoading())
            let values={
                ...turf,
                turfid:turf_.id,
                isActive:turf.isActive,
            }
            const res=await updateTurf(values)
            if(res.success){
                message.success(res.message)
                getData()
                dispatch(hideLoading())
            }
            else{
                message.error(res.message)
                dispatch(hideLoading())

            }
            
        } catch (error) {
            dispatch(hideLoading())
            console.log(error.message);
            
        }
    }
    const columns=[
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
        {
            title:"Action",
            dataIndex:"action",
            render:(text,data)=>{
                return(
                    <div>
                        {data.isActive ? (
                      <Button onClick={()=>handleStatusChange(data)}>Block</Button>      
                        ):(
                            <Button onClick={()=>handleStatusChange(data)}>Approve</Button>
                        )  }
                    </div>
                )
            }
               
        }
    ]
  return (
    <>
    <Table dataSource={turf} columns={columns}/>
    </>
    
  )
}

export default TurfList
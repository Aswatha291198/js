import React, { useEffect, useState } from 'react'
import {message, Table,Button} from 'antd'
import {useDispatch} from 'react-redux'
import{hideLoading,showLoading} from '../../../../redux/slice/userSlice'
import { getAllTurf, updateTurf } from '../../../api/turf'


const Incoming = () => {
    const dispatch=useDispatch()
const [turf,setTurf]=useState(null)
    const getData=async()=>{
        try {
            dispatch(showLoading())
            const response=await getAllTurf()
            if(response.success){
                const allturf=response.data
                message.success(response.message)
                setTurf(allturf.map((turf)=>{
                    return{
                        ...turf,
                        key:`turf${turf._id}`
                    }
                }))
                dispatch(hideLoading())
            }else{
                message.error(response.message)
            }
            dispatch(hideLoading())

        } catch (error) {
            console.log(error.message)
            dispatch(hideLoading())          
        }
    }
    const handleStatusChange = async (turf) => {
    try {
      dispatch(showLoading());
      let values = {
        ...turf,
        turfId: turf._id,
        isActive: !turf.isActive,
      };
      const response = await updateTurf (values);
      console.log(response, turf);
      if (response.success) {
        message.success(response.message);
        getData();
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      message.error(err.message);
    }

}
 useEffect(()=>{
getData()
    },[])

    const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    render: (text, data) => data?.owner && data?.owner?.name,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status, data) => (data.isActive ? "Approved" : "Pending"),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, data) => (
      <div>
        {data.isActive ? (
          <Button onClick={() => handleStatusChange(data)}>Block</Button>
        ) : (
          <Button onClick={() => handleStatusChange(data)}>Approve</Button>
        )}
      </div>
    ),
  },
];

  return (
   <>
   <h1>Incoming Turf Request</h1>
<Table dataSource={turf}columns={columns}/>   
   
   
   </>
  )
}

export default Incoming
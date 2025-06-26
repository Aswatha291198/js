import React, { useEffect, useState } from 'react'

const useProduct = () => {
    const[product,setProduct]=useState([])
    const[loading,setLoading]=useState(false)

    useEffect(()=>{
        const fetchData= async()=>{
            setLoading(true)
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json()
            setProduct(data)
            setLoading(false)
        }
fetchData()
    },[])
  return (
    {
        product,
        loading,
        setProduct,
        setLoading
    }
  )
}

export default useProduct
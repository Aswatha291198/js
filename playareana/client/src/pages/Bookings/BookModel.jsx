import React from 'react'
import { Modal,Form } from 'antd'

const BookModel = ({
    bookModel,
    setBookModel
}) => {
const handleCancel=()=>{
    setBookModel(!bookModel)
}

  return (
    <>
    <Modal
    open={bookModel}
    centered
    footer={null}
    onCancel={handleCancel}
    bodyStyle={
        {
            backgroundColor:'red'
        }
    }
    />
    </>
  )
}

export default BookModel
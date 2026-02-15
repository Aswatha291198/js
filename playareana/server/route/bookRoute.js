const{getBookingTurfByDate}=require('../controllers/bookCont')

const router=require('express').Router()


router.get('/getBookingTurfByDate',getBookingTurfByDate)

module.exports=router
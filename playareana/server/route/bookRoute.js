const{getBookingTurfByDate, makePayment}=require('../controllers/bookCont')
const{auth}=require('../middleware/auth')
const router=require('express').Router()


router.get('/getBookingTurfByDate',getBookingTurfByDate)
router.post('/makepayment',auth,makePayment)

module.exports=router
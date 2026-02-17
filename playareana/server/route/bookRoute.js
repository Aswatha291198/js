const{getBookingTurfByDate, makePayment, bookTurf, getBookingsTurfOwner}=require('../controllers/bookCont')
const auth = require('../middleware/auth')
const validateRequest = require('../middleware/validateInput')

const router=require('express').Router()


router.post('/getBookingTurfByDate',getBookingTurfByDate)
router.post('/makepayment',makePayment)
router.post('/book-turf',bookTurf)
router.get('/incoming-req',getBookingsTurfOwner)

module.exports=router
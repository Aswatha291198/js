const{getBookingTurfByDate, makePayment, bookTurf, getBookingsTurfOwner, getAllGroupGames}=require('../controllers/bookCont')
const auth = require('../middleware/auth')
const validateRequest = require('../middleware/validateInput')

const router=require('express').Router()


router.post('/getBookingTurfByDate',getBookingTurfByDate)
router.post('/makepayment',makePayment)
router.post('/book-turf',auth,bookTurf)
router.get('/get-all-group-game',getAllGroupGames)
router.get('/incoming-req',getBookingsTurfOwner)
router
module.exports=router
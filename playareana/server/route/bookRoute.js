const{bookTurf,makePayment}=require('../controllers/bookCont')

const router=require('express').Router()

router.post('/makepayment',makePayment)
router.post('bookturf',bookTurf)
module.exports=router
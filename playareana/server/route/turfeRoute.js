
const { addTurf, updateTurf, deleteTurf, getAllTurf, getTurfById, getTurfBySearch, getTurfByIdowner } = require('../controllers/turfCon')

    const router=require('express').Router()

    router.post('/add-turf',addTurf)
    router.put('/update-turf',updateTurf)
    router.delete('/delete/:id',deleteTurf)
    router.get('/all-turf',getAllTurf)
    router.get('/turf/owner/:id',getTurfByIdowner)
    router.get('/turf',getTurfBySearch)
    router.get('/turf/:id',getTurfById)

    module.exports=router
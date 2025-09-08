const { createTournament, updateTournament, tournamentById } = require('../controllers/tourCont')

const tourRouter=require('express').Router()

tourRouter.post('/create-tournament',createTournament)
tourRouter.put('/update-tournament/:id',updateTournament)
// tourRouter.get('/all-tournaments')
tourRouter.get('/:id',tournamentById)
// tourRouter.delete('/delete-tournament/:id')


module.exports=tourRouter
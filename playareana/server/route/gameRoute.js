const { addGame, getAllGame, deleteGame } = require('../controllers/gameCont')


const gameRouter=require('express').Router()

gameRouter.post('/add-game',addGame)
gameRouter.get('/allgame',getAllGame)
gameRouter.delete('/delete-game/:id',deleteGame)

module.exports=gameRouter
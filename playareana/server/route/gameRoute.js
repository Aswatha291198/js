const { addGame, getAllGame, deleteGame, UpdateGame } = require('../controllers/gameCont')


const gameRouter=require('express').Router()

gameRouter.post('/add-game',addGame)
gameRouter.get('/allgame',getAllGame)
gameRouter.delete('/delete-game/:id',deleteGame)
gameRouter.post('/update-game',UpdateGame)

module.exports=gameRouter

const game = require('../model/gameModel')
const addGame = async (req, res) => {
    console.log('addgane');

    try {
        const newGame = await game.create(req.body)
        res.status(200).send({ message: "New game added", data: newGame })
    } catch (error) {
        console.log(error.message);

        res.status(500).send("something went wrong from add game")
    }
}
const UpdateGame = async (req, res) => {
    try {
        const Game = await game.findByAndUpdate(req.body.id, req.body)
        if (!Game) {
            return res.status(404).send("game not found")
        }
        res.status(200).send({ message: "game upated", data: Game, success: true })
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}
const deleteGame = async (req, res) => {
    console.log('hitting the delete route');
    console.log(req.body)
    console.log(req.params)
    try {
        const Game = await game.findByIdAndDelete(req.params.id)
        if (!Game) {
            return res.status(404).send({ message: "game not found", success: false })
        }
        return res.status(200).send({ message: "Game deleted successfully", success: true });

    } catch (error) {
        res.status(500).send("something went wrong")
        console.log(error.message);

    }
}
const getAllGame = async (req, res) => {
    console.log('allgame');
    
    try {
        const allgame = await game.find()
        res.send({
            success: true,
            data: allgame
        })
    } catch (error) {
        res.status(500).send("something went wrong")

    }
}
module.exports = { addGame, deleteGame, getAllGame, UpdateGame }
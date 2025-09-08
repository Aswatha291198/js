const mongoose = require('mongoose')

const TournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'turf'
    },
    time: {
        type: String,
        required: true
    },

    sportType: {
        type: String,
        required: true
    },
    gameType: {
        type: String,
        required: true,
        enum: ["league", "knockout"]
    },
    organisedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    poster: {
        type: String
    },
    entryFees: {
        type: Number,
        required: true
    },
   prize: [
    {
      position: { type: String, required: true },
      amount: { type: String, required: true }
    }
  ],
  teamName:{
    type:[String]
  },
    totalTeams: {
        type: Number,
        required: true
    },
    
    rules: {
        type: [String],
        required: true
    },
    teamFormat:{
        type:String,
        required:true
    }

}, { timestamp: true })

const tournamentModal = mongoose.model('tournaments', TournamentSchema)
module.exports = tournamentModal
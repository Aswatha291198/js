const { addJob, updateJob, getRecommendedJobs } = require('../controllers/jobController')

const router=require('express').Router()

router.post('/addjob',addJob)
router.post('/update-job',updateJob)
router.get('/recommendedjobs',getRecommendedJobs)

module.exports=router
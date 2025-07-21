const { PostJob, UpdateJob, AppliedJobs, ApplyJob,DeleteJob,GetCurrentJob, AllJobs } = require("../controllers/jobController");


const JobRouter = require("express").Router();

JobRouter.post('/postjob',PostJob)
JobRouter.put('/updatejob',UpdateJob)
JobRouter.get('/appliedjob',AppliedJobs)
JobRouter.delete('/deletejob/:id',DeleteJob)
JobRouter.get('/current/:id',GetCurrentJob)
JobRouter.post('/job/:id/apply',ApplyJob)
JobRouter.get('/:id/alljobs',AllJobs)
module.exports={JobRouter}
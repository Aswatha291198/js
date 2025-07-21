const jobs = require('../Model/jobModel');

// POST /job
const PostJob = async (req, res) => {
  try {
    const job = await jobs.create(req.body);
    return res.status(201).send({
      message: "Job Created Successfully",
      data: job
    });
  } catch (error) {
    return res.status(500).send({ message: "Job Creation Failed", error: error.message });
  }
};

// PUT /job/:id
const UpdateJob = async (req, res) => {
  try {
    const updatedJob = await jobs.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedJob) {
      return res.status(404).send({ message: "Job Not Found" });
    }
    return res.status(200).send({
      message: "Job Updated Successfully",
      data: updatedJob
    });
  } catch (error) {
    return res.status(500).send({ message: "Update Failed", error: error.message });
  }
};

// GET /jobs
const AppliedJobs = async (req, res) => {
  try {
    const AllJobs= jobs.find();
    return res.status(200).send({ data: AllJobs})
  } catch (error) {
    return res.status(500).send({ message: "Failed to Fetch Jobs", error: error.message });
  }
};

// DELETE /job/:id
const DeleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({ message: "Job ID is required" });
    }
    const deleted = await jobs.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send({ message: "Job Not Found" });
    }
    return res.status(200).send({ message: "Job Deleted Successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Delete Failed", error: error.message });
  }
};

// GET /job/:id
const GetCurrentJob = async (req, res) => {
  try {
    const id = req.params.id; // Fixed: was `parama` instead of `params`
    const currentJob = await jobs.findById(id);
    if (!currentJob) {
      return res.status(404).send({ message: "No Job Found" });
    }
    res.status(200).send({ data: currentJob });
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch job", error: error.message });
  }
};
const AllJobs=(req,res)=>{
  try {
    console.log("Fetching")
    const id=req.params.id
    const appliedJobs=jobs.find(id)
    log("fetched Successfully")
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch job", error: error.message });
  }
}




// GET /apply/:id (or use POST if adding user to applied list)
const ApplyJob = async (req, res) => {
  try {
    const getJob = await jobs.findById(req.params.id); // Added await
    if (getJob) {
      return res.status(200).send({ data: getJob });
    }
    return res.status(404).send({ message: "Job Not Found" });
  } catch (error) {
    res.status(500).send({ message: "Failed to apply for job", error: error.message });
  }
};

module.exports = {
  PostJob,
  UpdateJob,
  AppliedJobs,
  DeleteJob,
  GetCurrentJob,
  ApplyJob,AllJobs
};

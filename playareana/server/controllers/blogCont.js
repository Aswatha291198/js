const blog=require('../model/blogModel')

  const addBlog = async (req, res) => {
  try {
    const { title, content, image, id } = req.body;

    const newBlog = await blog.create({
      title,
      content,
      image,
      author: id, 
    });

    res.status(200).send({
      message: "New Blog added",
      success: true,
      data: newBlog,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something went wrong from add blog");
  }
};

const Updateblog = async (req, res) => {
  try {
    const editBlog=await blog.findByIdAndUpdate(req.body.id,req.body)
    if (!editBlog) {
      return res.status(404).send({ success: false, message: "Game not found" })
    }

    res.status(200).send({
      success: true,
      message: "Game updated successfully",
      data: editBlog
    })
  } catch (error) {
    console.error(error.message)  /
    res.status(500).send({ success: false, message: "Something went wrong" })
  }
}
const DeleteBlog=async (req,res)=>{
    try {
        const deleteBlog=await blog.findByIdAndDelete(req.params.id)
        if (!deleteBlog) {
            return res.status(404).send({ message: "blog not found", success: false })
        }
        return res.status(200).send({ message: "Blog deleted successfully", success: true });
    } catch (error) {
        res.status(500).send("something went wrong")
        console.log(error.message);
    }

}
const GetAllBlogs=async(req,res)=>{
  try {
    const allBlogs=await blog.find().populate("author")
    return res.status(200).send({
      message:'Fetched all blogs',
      success:true,
      data:allBlogs
    })
  } catch (error) {
    res.status(500).send("something went wrong")
    console.log(error.message);
    
  }
}
const GetBlogById=async(req,res)=>{
  try {
    const blogById=await blog.findById(req.params.id).populate('author')
    console.log(blogById,'blogbyid')
    if(!blogById){
      return res.status(404).send({
        message:'Blog not Found',
        success:false
      })
    }
    res.send({
      success:true,
      data:blogById
    })
  } catch (error) {
    console.log(error.message);
     res.send({
            success:false,
            message:error.message
        })
    
  }
}
module.exports={addBlog,Updateblog,DeleteBlog,GetAllBlogs,GetBlogById}
router.get("/", async(req,res)=>{
  const posts = await Post.find()
  .populate("author","username");

  res.json(posts);
});

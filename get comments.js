router.get("/:postId", async(req,res)=>{
  const comments =
  await Comment.find({
    post:req.params.postId
  }).populate("user","username");

  res.json(comments);
});

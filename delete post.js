router.delete("/:id", auth, async(req,res)=>{
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message:"Post Deleted"
  });
});

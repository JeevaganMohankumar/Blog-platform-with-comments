router.put("/:id", auth, async(req,res)=>{
  const post =
  await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(post);
});

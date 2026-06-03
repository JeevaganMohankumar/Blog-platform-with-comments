router.post("/:postId", auth, async(req,res)=>{
  const comment =
  await Comment.create({
    text:req.body.text,
    user:req.user.id,
    post:req.params.postId
  });

  res.json(comment);
});

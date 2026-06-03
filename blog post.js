router.post("/", auth, async(req,res)=>{
  const post = await Post.create({
    title:req.body.title,
    content:req.body.content,
    author:req.user.id
  });

  res.json(post);
});

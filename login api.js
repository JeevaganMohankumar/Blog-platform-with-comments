router.post("/login", async(req,res)=>{
  const {email,password}=req.body;

  const user = await User.findOne({email});

  if(!user)
    return res.status(400).json({
      message:"User not found"
    });

  const valid =
  await bcrypt.compare(password,user.password);

  if(!valid)
    return res.status(400).json({
      message:"Invalid Password"
    });

  const token = jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET
  );

  res.json({token});
});

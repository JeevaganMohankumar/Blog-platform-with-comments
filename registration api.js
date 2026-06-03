router.post("/register", async(req,res)=>{
  const {username,email,password}=req.body;

  const hashedPassword =
  await bcrypt.hash(password,10);

  const user = await User.create({
    username,
    email,
    password:hashedPassword
  });

  res.json(user);
});

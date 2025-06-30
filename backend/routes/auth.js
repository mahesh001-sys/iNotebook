const express=require("express");
const User=require("../models/User");
const router=express.Router();
const {body,validationResult} = require('express-validator');
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser');

const JWT_SECRET="Varshiniisagoodgirl";


//ROUTE 1: Create a User using:POST "/api/createuser". NO Login required
router.post('/createuser',[
    body('name',"Enter a valid Name").isLength({min:3}),
    // body('name','Name must contain only letters (A-Z , a-z).').matches(/^[A-Za-z]+$/),
    body('email',"Enter a valid Email").isEmail(),
    body('password',"password must be atleast 4 characters").isLength({min:4})

],
   async (req,res)=>{
    let success=false;
    //If there are errors,return Bad request and the errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        success=false;
        return res.status(400).json({success,errors:errors.array()});
    }
    //check weather user with same email exists already
    try{

    let user=await User.findOne({email:req.body.email});
    if(user)
    { 
        success=false;
        return res.status(400).json({success,error:"Sorry a user with this email already exists"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass =await bcrypt.hash(req.body.password,salt);

    //creating a new user

     user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    })
    const data={
        user:{
            id:user.id
        }
    }
   const authtoken= jwt.sign(data,JWT_SECRET);
   success=true;
    res.json({success,authtoken});
}catch(error)
{
    console.log(error.message);
    res.status(500).send("Internal Server Error");
}
});


//ROUTE 2:Authenticate a User using:POST "/api/login". NO Login required
router.post('/login',[
    body('email',"Enter a valid Email").isEmail(),
    body('password',"Password cannot be blank").exists()

], async(req,res)=>{
    let success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try {
        let user=await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare)
        {
            success=false;
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken= jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken});
        
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");

        
    }

})

//ROUTE 3: Get loggedin User Details using :POST "/api/auth/getuser".Login required
router.post('/getuser',fetchuser,async(req,res)=>{

    try {
        userId=req.user.id;
        const user= await User.findById(userId).select("-password");
        res.send(user);

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
        
    }
})

module.exports =router;
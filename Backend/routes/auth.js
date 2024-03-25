const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');


//create a user using POST "/api/auth/". Doesn't require auth
router.post('/',[
    body('name', 'Enter valid name!').isLength({min:3}),
    body('email', 'Enter valid email!').isEmail(),
    body('password', 'Min 5 characters required!').isLength({min:5})
],(req,res)=>{
    const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({errors: result.array()});
  }
  User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  }).then(user=>res.json(user))
  .catch(err=>{console.log(err)
  res.json({error: 'Please enter unique value',message: err.message})});
})

module.exports=router
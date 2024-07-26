const router = require('express').Router();
const { User } = require('../models/UserModel');
const Joi = require('joi');
const bcrypt = require('bcrypt')

router.post("/", async(req,res)=>{
  try {
    const {error} = validate(req.body);
    if(error)
      return res.status(400).send({message:error.details[0].message});

    const user = await User.findOne({email:req.body.email});
    if(!user)
      return res.status(401).send({message:'Invalid Email or Password'});

    const validPassword = await bcrypt.compare(
      req.body.senha, user.senha
    );

    if(!validPassword)
      return res.status(401).send({message: 'Invalide Email or Password'});

    const token = user.generateAuthToken();
    res.status(200).send({data:token, message: 'Logged successfully'})

  } catch (error) {
      res.status(500).send({message:'Internal server error'})    
  }
})

const validate = (data) =>{
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    senha: Joi.string().required().label('Senha')
  })

  return schema.validate
}

module.exports = router;
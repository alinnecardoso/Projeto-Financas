const { findOne } = require("../models/ExpenseModel");
const UserSchema= require("../models/UserModel")
const { hashPassword, comparePassword } = require('./helpers/auth')

exports.addUser = async (req, res) => {
    const {nome, foto, email, senha}  = req.body;

    //validations
    if(!nome || !foto || !email || !senha){
        console.log(user);
        return res.status(400).json({message: 'All fields are required!'})
    }
    try{
        const exist = await UserSchema.findOne({email});
        if(exist){
            return res.json({
                message: 'Email is taken Already'
            })
        }

        const hashedPassword = await hashPassword(senha);

        const user = new UserSchema({
            nome,
            foto,
            email,
            senha: hashedPassword,
        })
            await user.save()
            res.status(200).json({message: 'User Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        console.log(error);
    }

}

exports.getUsers = async (req, res) =>{
    try {
        const users = await UserSchema.find().sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteUser = async (req, res) =>{
    const {id} = req.params;
    UserSchema.findByIdAndDelete(id)
        .then((user) =>{
            res.status(200).json({message: 'User Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}


exports.updateUser = async (req, res) =>{
    const {id} = req.params;
    const { body } = req; // atualizar com o corpo da solicitação
    try {
        const userAtualizado = await UserSchema.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json({ mensagem: 'User Updated' });
      } catch (err) {
        console.error(err); // logar o erro para fins de depuração
        res.status(500).json({ mensagem: 'Server Error' });
      }
}

exports.loginUser = async(req, res) => {
    try {
        const {email, senha} = req.body;

        //Checar se o usuário existe
        const user = await UserSchema.findOne(email);

        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }
        //Checar se a senha está correta
        const senhaMatch = await comparePassword(senha, user.senha)
        if(senhaMatch){
            res.json('Password Match')
        }
    } catch (error) {
        console.log(error)
    }
}


const UserSchema= require("../models/UserModel")


exports.addUser = async (req, res) => {
    const {nome, foto, email, senha}  = req.body;

    const user = new UserSchema({
        nome,
        foto,
        email,
        senha,
    })

    try {
        //validations
        if(!nome || !foto || !email || !senha){
            console.log(user);
            return res.status(400).json({message: 'All fields are required!'})
        }
        await user.save()
        res.status(200).json({message: 'User Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(user)
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

exports.checkUserExists = async (req, res) =>{
    const { email, senha } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) {
        res.status(400).send({ message: 'Erro ao verificar usuário' });
        } else if (user && user.senha === senha) {
        res.send({ exists: true });
        console.log(`email: ${email} e senha:${senha} existem!`)
        } else {
        res.send({ exists: false });
        console.log(`email: ${email} e senha:${senha} NÃO existem!`)
        }
    });
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
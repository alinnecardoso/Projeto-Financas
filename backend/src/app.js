const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

//routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

readdirSync('./routes').map((route) => app.use(require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
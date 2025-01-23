import express from 'express';
import mongoose from 'mongoose'

import * as UserController from "./controllers/userController.js";
import * as PostController from "./controllers/postController.js";

import checkAuth from "./utils/checkAuth.js";
import {registerValidation, loginValidation, postCreateValidation} from "./validation.js";

mongoose
    .connect('mongodb+srv://tkmanap:0MvmUh2KhlV7RAv3@blog.ankle.mongodb.net/?retryWrites=true&w=majority&appName=blog')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('Db error', err))

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/auth/register', registerValidation, UserController.register)
app.post('/auth/login', loginValidation, UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

//app.post('/posts', PostController.getAll)
//app.post('/posts/:id', PostController.getOne)
app.post('/posts',checkAuth, postCreateValidation, PostController.create)
//app.post('/posts', PostController.remove)
//app.post('/posts', PostController.update)


app.use(express.json())

app.listen(3001, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
})
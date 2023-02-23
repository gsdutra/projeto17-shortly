import express from "express";

import {userMe} from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.get('/users/me', userMe)

export default userRoutes
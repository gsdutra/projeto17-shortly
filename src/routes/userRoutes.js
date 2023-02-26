import express from "express";

import {userMe} from '../controllers/userController.js'

import { verifyToken } from "../middlewares/verifyToken.js";

const userRoutes = express.Router()

userRoutes.get('/users/me', verifyToken, userMe)

export default userRoutes
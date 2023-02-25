import express from "express";

import {signin, signup} from '../controllers/authController.js'

import { validateSignup } from "../middlewares/validadeSignup.js";

const authRoutes = express.Router()

authRoutes.post('/signup', validateSignup, signup)
authRoutes.post('/signin/', signin)

export default authRoutes
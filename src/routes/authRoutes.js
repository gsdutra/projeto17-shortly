import express from "express";

import {signin, signup} from '../controllers/authController.js'

import { validateSignup } from "../middlewares/validateSignup.js";
import { validateSignin } from "../middlewares/validateSignin.js";

const authRoutes = express.Router()

authRoutes.post('/signup', validateSignup, signup)
authRoutes.post('/signin', validateSignin, signin)

export default authRoutes
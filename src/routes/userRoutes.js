import express from "express";

// import {listCustomers, insertCustomer, editCustomer, showSinlgeCustomer} from '../controllers/customersController.js'

const userRoutes = express.Router()

userRoutes.get('/users/me', ()=>2)

export default userRoutes
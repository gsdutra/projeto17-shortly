import express from "express";

// import {listCustomers, insertCustomer, editCustomer, showSinlgeCustomer} from '../controllers/customersController.js'

// import {validateCustomer} from '../middlewares/validateCustomer.js'

const authRoutes = express.Router()

authRoutes.post('/signup', ()=>2)
authRoutes.post('/signin/', ()=>2)

export default authRoutes
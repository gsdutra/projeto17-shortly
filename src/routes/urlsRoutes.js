import express from "express";

// import {listCustomers, insertCustomer, editCustomer, showSinlgeCustomer} from '../controllers/customersController.js'

// import {validateCustomer} from '../middlewares/validateCustomer.js'

const urlsRoutes = express.Router()

urlsRoutes.post('/signup', ()=>2)
urlsRoutes.post('/signin/', ()=>2)

export default urlsRoutes
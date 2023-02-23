import express from "express";

// import {listCustomers, insertCustomer, editCustomer, showSinlgeCustomer} from '../controllers/customersController.js'

const rankingRoutes = express.Router()

rankingRoutes.get('/ranking', ()=>2)

export default rankingRoutes
import express from "express";

import {getUrl, getUrlOpen, deleteUrl} from '../controllers/urlsController.js'

// import {validateCustomer} from '../middlewares/validateCustomer.js'

const urlsRoutes = express.Router()

urlsRoutes.get('/urls/:id', getUrl)
urlsRoutes.get('/urls/open/:shortUrl', getUrlOpen)
urlsRoutes.delete('/urls/:id', deleteUrl)

export default urlsRoutes
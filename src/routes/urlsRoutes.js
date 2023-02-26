import express from "express";

import {postUrl, getUrl, getUrlOpen, deleteUrl} from '../controllers/urlsController.js'

import { verifyToken } from "../middlewares/verifyToken.js";
import { validateUrl } from "../middlewares/validateUrl.js";

const urlsRoutes = express.Router()

urlsRoutes.post('/urls/shorten', verifyToken, validateUrl, postUrl)
urlsRoutes.get('/urls/:id', getUrl)
urlsRoutes.get('/urls/open/:shortUrl', getUrlOpen)
urlsRoutes.delete('/urls/:id', verifyToken, deleteUrl)

export default urlsRoutes
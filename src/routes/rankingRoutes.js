import express from "express";

import {ranking} from '../controllers/rankingController.js'

const rankingRoutes = express.Router()

rankingRoutes.get('/ranking', ranking)

export default rankingRoutes
import { db } from "../database.connection.js"
import { nanoid } from "nanoid"

export async function postUrl(req, res){
	try {
		const originalUrl = req.body.url
		const shortUrl = nanoid(7)
		const store = await db.query(`INSERT INTO urls ("userId", "originalUrl", "shortUrl") VALUES
		('${res.locals.userId}','${originalUrl}','${shortUrl}')`)

		const data = await db.query(`SELECT * FROM urls WHERE "shortUrl" = '${shortUrl}'`)

		res.status(200).send({id:data.rows[0].id, shortUrl: shortUrl})
	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function getUrl(req, res){
	try {
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function getUrlOpen(req, res){
	try {
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function deleteUrl(req, res){
	try {
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

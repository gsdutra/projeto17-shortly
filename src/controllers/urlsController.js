import { db } from "../database.connection.js"
import { nanoid } from "nanoid"

export async function postUrl(req, res){
	try {
		const originalUrl = req.body.url
		const shortUrl = nanoid(7)
		const store = await db.query(`INSERT INTO urls ("userId", "originalUrl", "shortUrl") VALUES
		('${res.locals.userId}','${originalUrl}','${shortUrl}')`)

		const data = await db.query(`SELECT * FROM urls WHERE "shortUrl" = '${shortUrl}'`)

		res.status(201).send({id:data.rows[0].id, shortUrl: shortUrl})
	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function getUrl(req, res){
	try {
		const urlId = req.params.id
		const data = await db.query(`SELECT * FROM urls WHERE id=$1`, [urlId])
		if (data.rows.length === 0) return res.sendStatus(404)
		res.status(200).send({
			id: data.rows[0].id,
			shortUrl: data.rows[0].shortUrl,
			url: data.rows[0].originalUrl
		})

	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function getUrlOpen(req, res){
	try {
		const urlId = req.params.shortUrl
		const data = await db.query(`SELECT * FROM urls WHERE "shortUrl"=$1`, [urlId])
		if (data.rows.length === 0) return res.sendStatus(404)

		const visitCount = Number(data.rows[0].visitCount) + 1

		await db.query(`UPDATE urls SET "visitCount"=${visitCount} WHERE "shortUrl"='${urlId}'`)

		res.redirect(data.rows[0].originalUrl)

	} catch (error) {
		res.status(500).send(error.message)
	}
}
export async function deleteUrl(req, res){
	try {
		const userId = res.locals.userId
		const urlId = req.params.id

		const urlData = await db.query(`SELECT * FROM urls WHERE id='${urlId}'`)

		if (urlData.rows.length === 0) return res.sendStatus(404)

		if (urlData.rows[0].userId !== userId) return res.sendStatus(401)

		await db.query(`DELETE FROM urls WHERE id='${urlId}'`)

		res.sendStatus(204)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

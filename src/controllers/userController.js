import { db } from "../database.connection.js"

export async function userMe(req, res){
	try {
		const userId = res.locals.userId

		const userData = await db.query(`SELECT * FROM users WHERE "id"=$1`, [userId])

		const name = userData.rows[0].name

		const visitCount = await db.query(`SELECT SUM("visitCount") from urls WHERE "userId" = '${userId}'`)

		const shortenedUrls = await db.query(`SELECT id, "shortUrl", "originalUrl" AS url, "visitCount" FROM
		urls WHERE "userId" = '${userId}'`)

		res.status(200).send({
			id: userId,
			name: name,
			visitCount: visitCount.rows[0].sum,
			shortenedUrls: shortenedUrls.rows
		})
	} catch (error) {
		res.status(500).send(error.message)
	}
}

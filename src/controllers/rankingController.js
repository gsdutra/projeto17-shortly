import { db } from "../database.connection.js"

export async function ranking(req, res){
	try {
		const ranking = await db.query(`
			SELECT
				users.id,
				users.name,
				COUNT(urls."userId") AS "linksCount",
				SUM(urls."visitCount") AS "visitCount"
			FROM urls
			JOIN users ON
				users.id = urls."userId"
			GROUP BY users.id
			ORDER BY "visitCount" DESC
			LIMIT 10
	;`)
		res.status(200).send(ranking.rows)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

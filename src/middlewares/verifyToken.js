import {db} from '../database.connection.js'

export async function verifyToken(req, res, next){
	const token = req.headers.authorization?.replace("Bearer ", "");
	if (!token) {
		return res.sendStatus(401);
	}

	const verification = await db.query(`SELECT * from sessions WHERE token = '${token}'`)

	if (verification.rows.length === 0) return res.sendStatus(401)

	res.locals.userId = verification.rows[0].userId
	next()
}
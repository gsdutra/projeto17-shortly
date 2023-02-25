import {db} from '../database.connection.js'

export async function signup(req, res){
	try {
		const testQuery = await db.query(`SELECT * FROM users`)
		res.status(200).send(testQuery.rows)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

export async function signin(req, res){
	try {
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
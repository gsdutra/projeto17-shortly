import {db} from '../database.connection.js'
import bcrypt from 'bcrypt'

export async function signup(req, res){
	try {
		const emailAlreadyRegistered = await db.query(`SELECT * FROM users WHERE email='${req.body.email}'`)

		if (emailAlreadyRegistered.rows.length > 0) return res.sendStatus(409)

		const encryptedPassword = bcrypt.hashSync(req.body.password, 10)

		const query = await db.query(`INSERT INTO users
		(name, email, password) VALUES
		('${req.body.name}','${req.body.email}','${encryptedPassword}')
		;`)
		res.sendStatus(201)
		
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
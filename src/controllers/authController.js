import {db} from '../database.connection.js'
import bcrypt from 'bcrypt'
import {v4 as uuid} from 'uuid'

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
		const user = await db.query(`SELECT * FROM USERS WHERE email='${req.body.email}'`)

		if (user.rows.length === 0)return res.sendStatus(401)

		let token

		if (bcrypt.compareSync(req.body.password, user.rows[0].password)){
			token = uuid()
			await db.query(`INSERT INTO sessions ("userId", "token") VALUES
			('${user.rows[0].id}','${token}')`)
		}else{
			return res.sendStatus(401)
		}

		res.status(200).send({token: token})
	} catch (error) {
		res.status(500).send(error.message)
	}
}
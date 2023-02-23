export async function signup(req, res){
	try {
		res.sendStatus(200)
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
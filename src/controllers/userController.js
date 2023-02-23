export async function userMe(req, res){
	try {
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

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

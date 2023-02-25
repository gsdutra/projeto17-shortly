import { urlSchema } from "../schema/urlSchema.js";

export async function validateUrl(req, res, next){
	try {
		const validation = urlSchema.validate(req.body, {abortEarly: true})

		if (validation.error){
			return res.status(422).send(validation.error.details)
		}

		next()

	} catch (error) {
		res.status(500).send(error.message)
	}
}
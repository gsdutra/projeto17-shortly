import { signupSchema } from "../schema/signupSchema.js";

export async function validateSignup(req, res, next){
	try {
		const validation = signupSchema.validate(req.body, {abortEarly: true})

		if (validation.error){
			return res.status(422).send(validation.error.details)
		}

		if (req.body.password !== req.body.confirmPassword){
			res.status(422).send("Passwords don't match!")
		}

		next()

	} catch (error) {
		res.status(500).send(error.message)
	}
}
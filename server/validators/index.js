import { validationResult } from "express-validator";

export const runValidation = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log('errors:',errors.array()[0].msg)
		return res.status(422).json({ error: errors.array()[0].msg });
	}

	next()
};

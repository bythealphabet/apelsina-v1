import { check } from "express-validator";

export const userCreateValidator = [
	check("email")
		.isEmail()
		.withMessage("Most be a valid Email adress"),
	check("password")
		.isLength({min: 6})
		.withMessage("Password must be at least 6 characters long")
];

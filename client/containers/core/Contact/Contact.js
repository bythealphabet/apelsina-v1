import React, { Fragment } from "react";
import { Input } from "../../../components/Forms/Forms";

const Contact = props => {
	return (
		<Fragment>
			<div className="background-contact background-img-full"></div>
			<h1 className={`heading `}>Contact</h1>
			<section className="section section-contact">
				<form action="" className="form">
					<Input label="Email" />
					<label htmlFor="" className="label">
						Comment
					</label>
					<textarea
						className="input"
						name=""
						id=""
						cols="30"
						rows="10"
					></textarea>
				</form>
			</section>
		</Fragment>
	);
};

export default Contact;

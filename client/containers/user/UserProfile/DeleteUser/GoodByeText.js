import React from "react";

const GoodByeText = props => {
	return (
		<div className="section has-background-gray">
		<div className="content is-large">
			<p className="has-text-white">Good Bye</p>
			<p className="has-text-primary is-1">{props.name.toUpperCase()}</p>
			<p className="has-text-white">We Will Miss You</p>
		</div>
		</div>
		
	);
};

export default GoodByeText;

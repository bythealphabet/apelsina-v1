import React from "react";
import {Button} from "../../../../components/Buttons/Buttons";

const MakeSure = props => {
	return (
		<div className="section">
			<div className="section">
				<div className="content is-large">
					<p className="title has-text-info has-text-centered ">Do you Really Want To <br/> Leave Us ?</p>
				</div>
			</div>

			<div className="center">
				<div className="buttons">
					<Button text="Cancel" color="info" click={props.cancel} />
					<Button
						text="Yes"
						color="danger"
						outlined
						click={props.delete}
					/>
				</div>
			</div>
		</div>
	);
};

export default MakeSure;

import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

const Modal = () => (
	<Popup trigger={<button className="button">Details</button>} modal>
		<div className="modal-container">Popup content here !!</div>
		{(close) => (
			<div>
				{" "}
				Content here{"heh "}
				<a className="close" onClick={close}>
					{" "}
					&times;{" "}
				</a>{" "}
			</div>
		)}{" "}
	</Popup>
);

export default Modal;

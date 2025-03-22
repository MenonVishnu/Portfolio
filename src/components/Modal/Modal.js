import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const Modal = (props) => (
	<Popup
		trigger={<button className="button">Details</button>}
		modal
		{...{ overlayStyle }}>
		{(close) => (
			<div className="modal-container">
				Popup content here !!
				<button className="close-button" onClick={() => close()}>
					X
				</button>
				<div class="modal-title">Project Title</div>
				<div class="architecture">
					<img src="architecture.jpg" alt="Architecture" />
				</div>
				<div class="tech-stack">{props.data.tech}</div>
				<div class="modal-description">{props.data.description}</div>
				<button onClick={() => close()}>Close</button>
			</div>
		)}
	</Popup>
);

export default Modal;

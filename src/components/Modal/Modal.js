import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const Modal = (props) => (
  <Popup
    trigger={<button className="button">Details</button>}
    modal
    {...{ overlayStyle }}
  >
    {(close) => (
      <div className="modal-container">
        <div className="modal-inside-container">
          <div className="x-button" onClick={() => close()}>
            x
          </div>
          <div class="modal-title">{props.data.title}</div>
        </div>
        <div className="content-container">
          <div className="left">
            <img
              class="architecture"
              src={props.data.architecture}
              alt="Architecture"
            />
          </div>
          <div className="center"></div>
          <div className="right">
            <div class="tech-stack">{props.data.tech}</div>
            <div class="modal-description">{props.data.description}</div>
          </div>
        </div>
        <button onClick={() => close()}>Close</button>
      </div>
    )}
  </Popup>
);

export default Modal;

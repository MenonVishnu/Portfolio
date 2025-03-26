import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const Modal = (props) => (
  <Popup
    trigger={<button className="button">Details</button>}
    modal
    contentStyle={{ overflowY: "auto", maxHeight: "90vh" }}
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
            <div class="tech-stack">
              {props.data.tech.map((tech) => (
                <div className="tech">{tech}</div>
              ))}
            </div>
            <div className="other-description">
              <div class="modal-description">{props.data.description}</div>
              <div class="modal-description">github link</div>
              <div class="modal-description">full description</div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede
              justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
              justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
              ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
              rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
              blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
              odio et ante tincidunt tempus. Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
              eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
              nibh. Donec sodales sagittis magna. Sed consequat, leo eget
              bibendum sodales, augue velit cursus nunc,
            </div>
          </div>
        </div>
        {/* <button onClick={() => close()}>Close</button> */}
      </div>
    )}
  </Popup>
);

export default Modal;

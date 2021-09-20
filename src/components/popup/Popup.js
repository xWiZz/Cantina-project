import React, { useState } from "react";
import "../popup/popup.css";
import Delete from "./DeleteBtn";

function Popup(props) {
  const [popup, setPopup] = useState(false);
  const data = props.popupId;
  const togglePopup = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add("activePopup");
  } else {
    document.body.classList.remove("activePopup");
  }

  return (
    <div className="" key={data.id}>
      <button onClick={togglePopup} className="btnPopup" open>
        Supprimer
      </button>

      {popup && (
        <div className="popup" key={data.id}>
          <div onClick={togglePopup} className="popupOverlay"></div>
          <div className="popupContent">
            <h2>Confirmation de la suppression</h2>
            <p>Êtes-vous sur de vouloir supprimer {data.titre} ?</p>
            <button className="closePopup" onClick={togglePopup}>
              Annuler
            </button>
            <Delete deleteId={data.id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

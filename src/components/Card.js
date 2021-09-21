import React from "react";
import { Link } from "react-router-dom";
import Popup from "./popup/Popup";

function Card(props) {
  const recette = props.recette;

  return (
    <div className="CardContent">
      <Link to={"recette/" + recette.id}>
        <div className="cardDesign" key={recette.id}>
          <h2>{recette.titre}</h2>
          <div className="cardImage">
            <img src={recette.photo} alt="" />
          </div>
          <p>Niveau : {recette.niveau}</p>
          <p>Nombre de personne : {recette.personnes}</p>
          <p>Description : {recette.description}</p>
          <p>Temps de préparation : {recette.tempsPreparation} minutes</p>
        </div>
      </Link>
      <div className="buttonCardEdit">
        <Link to={"/edit/" + recette.id}>
          <button>Modifier</button>
        </Link>
        <Popup popupId={recette} />
      </div>
    </div>
  );
}

export default Card;

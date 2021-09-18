import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="CardContent">
      <Link to={"recette/" + props.recette.id}>
        <div className="cardDesign" key={props.recette.id}>
          <h2>{props.recette.titre}</h2>
          <div className="cardImage">
            <img src={props.recette.photo} alt="" />
          </div>
          <p>Niveau : {props.recette.niveau}</p>
          <p>Nombre de personne : {props.recette.personnes}</p>
          <p>Description : {props.recette.description}</p>
          <p>Temps de préparation : {props.recette.tempsPreparation}</p>
        </div>
      </Link>
      <Link to={"/edit/" + props.recette.id}>
        <button>test</button>
      </Link>
    </div>
  );
}

export default Card;

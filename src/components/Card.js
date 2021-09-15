import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    


  return (
    <Link to={"recette/"+props.test.id}>
      <div className="AppContent">
            <div key={props.test.id}>
              <h2>{props.test.titre}</h2>
              <img src={props.test.photo} alt="" />
              <p>Niveau : {props.test.niveau}</p>
              <p>Nombre de personne : {props.test.personnes}</p>
              <p>Description : {props.test.description}</p>
              <p>Temps de préparation : {props.test.tempsPreparation}</p>
            </div>
            
      </div>
    </Link>
  );
}

export default Card;

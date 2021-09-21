import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Popup from "../components/popup/Popup";

function Recette(props) {
  const params = useParams();
  const id = params.id;

  const [recette, setRecette] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/api/recipe/" + id)
      .then((res) => res.json())
      .then((data) => {
        setRecette(data);
      });
  }, [id]);

  return (
    <div>
      <div className="buttonCardEdit">
        <Link to={"/edit/" + id}>
          <button>Modifier</button>
        </Link>
        <Popup popupId={recette} />
      </div>
      {recette && (
        <div className="recetteResume">
          <h1>{recette.titre}</h1>
          <p>{recette.description}</p>
          <img src={recette.photo} alt={recette.titre} />
          <div className="">
            <p>Temps de préparation : {recette.tempsPreparation} minutes</p>
            <p>Niveau de difficulté : {recette.niveau}</p>
            <p>Nombre de personnes : {recette.personnes}</p>
          </div>
          <div className="">
            <h3>ingredients :</h3>
            <ul>
              {recette.ingredients &&
                recette.ingredients.map((e, i) => (
                  <li key={i}>
                    <p>
                      {e[0]} {e[1]}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="">
            <textarea value={recette.etapes}></textarea>
          </div>
        </div>
      )}
      {recette && <p>{recette.errorMessage}</p>}
    </div>
  );
}

export default Recette;

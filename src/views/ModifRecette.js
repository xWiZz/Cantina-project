import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ModifRecette(props) {
  const param = useParams();
  const id = param.id;

  const [recette, setRecette] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/recipe/" + id)
      .then((res) => res.json())
      .then((data) => {
        setRecette(data);
      });
  }, [id]);

  return (
    <div className="editRecetteForm">
      <h1>Modifier {recette.titre}</h1>
      {recette && (
        <form className="editForm">
          <div className="itemsForm">
            <label htmlFor="titre">Titre de la recette</label>
            <input
              type="text"
              id="titre"
              name="titre"
              defaultValue={recette.titre}
            />
          </div>

          <div className="itemsForm">
            <label htmlFor="description">Description de la recette</label>
            <textarea
              name="description"
              value={recette.description}
              id="description"
            ></textarea>
          </div>

          <div className="itemsForm">
            <label htmlFor="recipe-niveau">Niveau de compétence</label>
            <select name="niveau" id="niveau" defaultValue={recette.niveau}>
              <option value=""></option>
              <option value="padawan">padawan</option>
              <option value="jedi">jedi</option>
              <option value="maitre">maitre</option>
            </select>
          </div>

          <div className="itemsForm">
            <label htmlFor="personnes">Nombre de personne</label>
            <input type="number" name="personnes" value={recette.personnes} />
          </div>

          <div className="itemsForm">
            <label htmlFor="tempsPreparation">Temps de préparation</label>
            <input
              type="number"
              name="tempsPreparation"
              value={recette.tempsPreparation}
            />
          </div>

          <div className="itemsForm">
            <label htmlFor="elements">Liste d'ingrédients :</label>
            <input
              type="number"
              name="elements"
              id="elements"
              value={recette.ingredients}
            />
            <select name="unit" id="unit">
              <option value=""></option>
              <option value="mg">mg</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="cl">cl</option>
            </select>
            <input
              type="text"
              name="name-elements"
              id="name-elements"
              value={recette.ingredients}
            />
            <button>Appliquer</button>
          </div>

          <div className="itemsForm">
            <label htmlFor="steps">Liste d'étapes</label>
            <textarea name="steps" id="steps" value={recette.etapes}></textarea>
            <button type="button">Appliquer</button>
          </div>
          <button>Modifier</button>
        </form>
      )}
    </div>
  );
}

export default ModifRecette;

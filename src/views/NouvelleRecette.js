import React, { useState } from "react";

function NouvelleRecette() {
  const [state, setState] = useState({
    titre: "",
    description: "",
    niveau: "",
    personnes: 0,
    tempsPreparation: 0,
    ingredients: [],
    etapes: [],
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [quantite, setQuantite] = useState("");
  const handleQuantite = (e) => {
    const value = e.target.value;
    setQuantite(value);
  };
  const [name, setName] = useState("");
  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const [unites, setUnites] = useState("");
  const handleUnites = (e) => {
    const value = e.target.value;
    setUnites(value);
  };
  const addElement = (e) => {
    e.preventDefault();
    const isUnites = unites !== "" ? unites : "";
    setState((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, [quantite + isUnites, name]],
    }));
  };

  const [steps, setSteps] = useState([]);
  const handleSteps = (e) => {
    const value = e.target.value;
    setSteps(value);
  };
  const addStep = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      etapes: [...prevState.etapes, steps],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      titre: state.titre,
      description: state.description,
      niveau: state.niveau,
      personnes: parseInt(state.personnes),
      tempsPreparation: parseInt(state.tempsPreparation),
      ingredients: state.ingredients,
      etapes: state.etapes,
      photo: "",
    };

    const json = JSON.stringify(dataToSend);
    fetch("http://localhost:9000/api/recipes", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: json,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="editRecetteForm">
      <h1>Ajouter une nouvelle recette</h1>

          <form className="editForm" onSubmit={handleSubmit}>
            <div className="itemsForm">
              <label htmlFor="titre">Titre de la recette</label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={state.titre}
                onChange={handleChange}
              />
            </div>

            <div className="itemsForm">
              <label htmlFor="recette-description">
                Description de la recette
              </label>
              <textarea
                name="description"
                value={state.description}
                onChange={handleChange}
                id="recette-description"
              ></textarea>
            </div>

            <div className="itemsForm">
              <label htmlFor="recipe-niveau">Niveau de compétence</label>
              <select
                name="niveau"
                id="recipte-niveau"
                value={state.niveau}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="padawan">padawan</option>
                <option value="jedi">jedi</option>
                <option value="maitre">maitre</option>
              </select>
            </div>

            <div className="itemsForm">
              <label htmlFor="recette-personnes">Nombre de personne</label>
              <input
                type="number"
                name="personnes"
                id="recette-personnes"
                onChange={handleChange}
                value={state.personnes}
              />
            </div>
            <div className="itemsForm">
              <label htmlFor="recette-tpsPrepa">Temps de préparation</label>
              <input
                type="number"
                name="tempsPreparation"
                id="recette-tpsPrepa"
                onChange={handleChange}
                value={state.tempsPreparation}
              />
            </div>
            <div className="listToAdd">
              <div className="itemsForm">
                <label htmlFor="recette-elements">Liste d'ingrédients :</label>
                <input
                  type="number"
                  name="qteIngredient"
                  id="recette-elements"
                  onChange={handleQuantite}
                  value={quantite}
                />
                <select
                  name="unitIngredient"
                  id=""
                  onChange={handleUnites}
                  value={unites}
                >
                  <option value=""></option>
                  <option value="mg">mg</option>
                  <option value="g">g</option>
                  <option value="ml">ml</option>
                  <option value="cl">cl</option>
                </select>
                <input
                  type="text"
                  name="nomIngredient"
                  id="recette-tpsPrepa"
                  onChange={handleName}
                  value={name}
                />
                <button onClick={addElement}>Appliquer</button>
              </div>
              <div className="itemsForm">
                <label htmlFor="recette-etapes">Liste d'étapes :</label>
                <textarea
                  name="etapes"
                  id="recette-etapes"
                  onChange={handleSteps}
                  value={steps}
                ></textarea>
                <button type="button" onClick={addStep}>
                  Appliquer
                </button>
              </div>
            </div>

            <button>Ajouter</button>
          </form>
        </div>
  );
}

export default NouvelleRecette;

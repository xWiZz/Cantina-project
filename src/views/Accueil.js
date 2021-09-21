import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Accueil() {
  const [recettes, setRecettes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/api/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        setRecettes(recipes);
      });
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="AppContent">
      <div className="searchBar">
        <h1>Bienvenue sur Cantina</h1>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher une recette"
          onChange={handleSearchTerm}
        />
        <div className="searchFilterInput">
          <select>
            <option>Difficulté</option>
            <option>Padawan</option>
            <option>Jedi</option>
            <option>Maitre</option>
          </select>
          <select>
            <option>Nombre de personnes</option>
            <option>1 à 2</option>
            <option>2 à 4</option>
            <option>4 à 6</option>
            <option>6 à 8</option>
            <option>8 à 10</option>
          </select>
          <select>
            <option>Temps de préparation</option>
            <option>Moins de 15 minutes</option>
            <option>Moins de 30 minutes</option>
            <option>Moins de 45 minutes</option>
            <option>Moins de 1 heure</option>
            <option>Plus de 1 heure</option>
          </select>
        </div>
      </div>

      <div className="filter"></div>

      <div className="searchResults">
        {recettes &&
          recettes
            .filter((val) => {
              return val.titre
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase());
            })
            .map((val) => {
              return (
                <div className="searchResult" key={val.id}>
                  <Card key={val.id} recette={val} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Accueil;

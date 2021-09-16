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

  console.log(recettes);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="AppContent">
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher une recette"
          onChange={handleSearchTerm}
        />
      </div>
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
                  <Card key={val.id} test={val} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Accueil;

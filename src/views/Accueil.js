import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Accueil() {
  const [recettes, setRecettes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/api/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        setRecettes(recipes);
      });
  }, []);

  return (
    <div className="AppContent">
      <h1>Liste des recettes</h1>

      {recettes &&
        recettes.map(item => (
          
            <Card
              key={item.id}
              test={item}
            />


            
  
        ))}
    </div>
  );
}

export default Accueil;

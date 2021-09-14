import './App.css';
import { useState, useEffect } from 'react'; 

function App() {

  const [recettes, setRecettes] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/recipes')
    .then(res => res.json())
    .then(recipes => {
      setRecettes(recipes);
    });
  }, []);

  return (
    <div className="App">
      <h1>Liste des recettes</h1>

      {recettes && recettes.map(recette =>
      <div key={recette.id}>
        <h2>{recette.titre}</h2>
        <img src={recette.photo} alt="" />
        <p>Niveau : {recette.niveau}</p>
        <p>Nombre de personne : {recette.personnes}</p>
        <p>Description : {recette.description}</p>
        <p>Temps de préparation : {recette.tempsPreparation}</p>
      </div>
      )}
    </div>
  );
}

export default App;

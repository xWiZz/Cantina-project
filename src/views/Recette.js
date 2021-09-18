import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Recette(){

    const params = useParams();
    const id = params.id;

    const [recette, setRecette] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9000/api/recipe/"+id)
          .then(res => res.json())
          .then(data => {
            setRecette(data);
          });
      }, [id]);

  return(
      <div>
      {recette && (
        <div className="">
            <h1>{recette.titre}</h1>
            <p>{recette.description}</p>
            <img src={recette.photo} alt={recette.titre} />
            <div className="">
                <p>{recette.tempsPreparation}</p>
                <p>{recette.niveau}</p>
                <p>{recette.personnes}</p>
            </div>
            <div className="">
              <p>{recette.ingredients}</p>
            </div>
            <div className="">
              <p>{recette.etapes}</p>
            </div>
        </div>
      )}
      {recette && (
          <p>{recette.errorMessage}</p>
      )}
    </div>
  )
      }

export default Recette;
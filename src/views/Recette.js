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
        <h1>{recette.titre}</h1>
      )}
      {recette && (
          <p>{recette.errorMessage}</p>
      )}
    </div>
  )
      }

export default Recette;
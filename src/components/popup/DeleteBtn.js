import React from "react";
import {Link} from "react-router-dom";

function DeleteBtn(props) {
  const id = props.deleteId;

  const deleteRecipe = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/api/recipe/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Link to="/">
        <button onClick={deleteRecipe}>Supprimer</button>
      </Link>
    </div>
  );
}

export default DeleteBtn;

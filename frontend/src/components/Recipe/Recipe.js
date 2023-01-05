import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Recipe.css";

const Recipe = (props) => {
  const history = useNavigate();
  const { _id, name, image } = props.recipe;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/recipes/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Button LinkComponent={Link} to={`/view/${_id}`} sx={{ mt: "auto" }}>
        View
      </Button>
      <Button LinkComponent={Link} to={`/edit/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Recipe;

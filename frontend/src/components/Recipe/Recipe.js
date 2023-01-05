import { Button } from "@mui/material";
import React from "react";
import "./Recipe.css";

const Recipe = (props) => {
  const { _id, name, image } = props.recipe;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Button sx={{ mt: "auto" }}>View</Button>
      <Button sx={{ mt: "auto" }}>Update</Button>
      <Button color="error" sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Recipe;

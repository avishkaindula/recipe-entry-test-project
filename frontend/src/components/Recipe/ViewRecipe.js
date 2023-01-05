import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./View.css";

const ViewRecipe = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/recipes/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.recipe));
    };
    fetchHandler();
  }, [id]);

  return (
    <div>
      {inputs && (
        <div className="card">
          <img src={inputs.image} alt={inputs.name} />
          <h3>{inputs.name}</h3>
          <p>{inputs.description}</p>
          <p>{inputs.ingredients}</p>
        </div>
      )}
    </div>
  );
};

export default ViewRecipe;

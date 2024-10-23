import React from "react";
import propTypes from "prop-types";
export default function CardDetalhe({ data }) {
  const { name, icon, text, image, kwh } = data;

  return (
    <>
    
        {<p>{icon}</p> ? <p className="icon">{icon}</p> : ""}

        <p className="text">{text}</p>

        <div className="user-card">
          <div className="image">
            {<img src={image} alt="" /> ? <img src={image} alt="" /> : ""}
          </div>
          <div className="detalis">
            <span className="nome">{name}</span>

            <span className="categoria">{kwh}</span>
          </div>
        </div>
     
    </>
  );
}
CardDetalhe.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

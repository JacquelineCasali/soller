import React from "react";

export default function Personalized() {
  return (
    <section className="singup">
           <div className="rectangle">
        <img
          className="app"
          src={"/image/app.png"}
          alt=""
          style={{ objectFit: "cover" , height:"900px"}}
        />
      </div>
     
      <div className="lefts" style={{padding:"80px 0px 0px 5px",justifyContent: "center"}}>
        <div className="top">
          <h6>Services</h6>
          <h1>Personalized services</h1>
          <p className="paragrafo">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="row">
          <div className="contenbox">
            <p className="icon"></p>
            <h6>Et mauris</h6>
            <p className="paragrafo">
            Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>

          <div className="contenbox">
            <p className="icon"></p>
            <h6>Eget sit</h6>
            <p className="paragrafo">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
            </p>
          </div>
        </div>

        <div className="row">
          <div className="contenbox">
            <p className="icon"></p>
            <h6>Imperdiet pellentesque</h6>
            <p className="paragrafo">
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
            </p>
          </div>

          <div className="contenbox">
            <p className="icon"></p>
            <h6>Non libero</h6>
            <p className="paragrafo">
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

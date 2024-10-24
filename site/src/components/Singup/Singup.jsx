import React from "react";
import "./Singup.css";

export default function Singup({ test}) {
  

  return (
    <section className="singup">
      <div className="rectangle">
        {<img className="rectangle15" src={test[0].imageapp} alt="" /> ? (
          <img
            className="rectangle15"
            src={test[0].imageapp}
            alt=""
            style={{ objectFit: "cover" }}
          />
        ) : (
          ""
        )}
      </div>

      <div className="lefts">
        <div className="top">
          <h6>{test[0].titlePrincipal}</h6>
          <h1>{test[0].titleSecundario}</h1>
          <p className="paragrafo">{test[0].paragrafo}</p>
        </div>
     
          <div className="row">
            {test?.map((item) => (
              <div className="contenbox" key={item.id}>
                <p className="icon"></p>

                <h6>{item.name}</h6>
                <p className="paragrafo">{item.text}</p>
              </div>
            ))}
          </div>
       
        {/* <div className="contenbox">
            <p className="icon"></p>
            <h6>Ullamcorper arcu</h6>
            <p className="paragrafo">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="contenbox">
            <p className="icon"></p>
            <h6>Et pellentesque</h6>
            <p className="paragrafo">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>

          <div className="contenbox">
            <p className="icon"></p>
            <h6>Amet egestas</h6>
            <p className="paragrafo">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </div> */}
      </div>
      <div className="rectangle">
        {<img
          className="rectangle15"
          src={test[0].image}
          alt=""
          style={{ objectFit: "cover" }}
        /> ? (
          <img
            className="rectangle15"
            src={test[0].image}
            alt=""
            style={{ objectFit: "cover" }}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

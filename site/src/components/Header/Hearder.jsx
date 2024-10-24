import React from "react";

import { Link } from "react-router-dom";
import "./Hearder.css";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";
import { RiHeadphoneLine } from "react-icons/ri";

export default function Navbar() {
  // menu



  return (
    <section  className="header">
    <header >
    
        
     
      <div className="container">
        <div className="left">
          <h1 className="h1">Soller</h1>
          <ul className="nav-menu">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Solutions</Link>
            </li>

            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Configure</Link>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <div className="fone">
            <RiHeadphoneLine
              size={24}
              style={{ color: "#0369A1", fontWeight: "bold", marginTop: "5px" }}
            />

<p className="buttonText">555 818 282</p>
          </div>
          <Button text="Request a Quote" theme={styles.roxo} />
        </div>
      </div>
    </header>
    </section>
  );
}

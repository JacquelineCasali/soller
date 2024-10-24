import React from "react";
import "./Container.css";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";
export default function Container() {
  return (
    
    <div className="divcontainer">
      
      {/* <div className="sectionText">ola</div>   */}
      <div className="sectionText">
       
        <div className="top">
          <h6>Get the Sun to power your home</h6>
          <h1>All the power that you need for your house is now available</h1>
             </div>
      <div className="screen">
      <img src={"/image/Macbook.png"} alt="" /> 
      </div>
  
       </div>
         
       
     

  
      <div className="eclipse">
      <Button text="Request a Quote" theme={styles.amarelo} styles={{margin:"140px"}} />
    <p className="textRight">Egestas fringilla aliquam leo</p>
      
      </div>
    
   
      
      
     
       
        {/* <div className="right">
        <Button text="Request a Quote" theme={styles.amarelo} />
        </div> */}

    
     
  
     
    </div>
  );
}

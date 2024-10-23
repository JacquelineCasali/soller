import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button className={`${styles.btn} ${props.theme === styles.amarelo ?  styles.amarelo : styles.roxo }`}>
     
{props.text}
          <TiArrowRight
        size={34}
        
      />
          </button>
  )
}


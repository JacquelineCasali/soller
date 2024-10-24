import React, { useEffect, useState } from 'react'
import depoimento from "../../services/depoimento.json"

import Loading from "../Loading/Loading";
import Carousel from '../Carousel/Carousel';
import LerCard from './LerCard';
export default function Card() {
    const [test] = useState(depoimento);
  
    const [Ler, setLer] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        setLoading(false);
      }, []);
   
    const handleLer = (id) => {
        setLer(id);
        setOpen(true);
      };

      const handleSair = () => {
        setOpen(false);
    
      };
    return (
    <>
     {open?
      (loading && <Loading />) || 
      <LerCard
      test={test.find((data) => data.id === Ler)}
        onSair={handleSair}
      
      />:
       (loading && <Loading />) || 
      <Carousel test={test}
   
      onLer={handleLer}
    />


  //   (loading && <Loading />) || 
  //   <Carousel test={test}
  //   onLer={handleLer}
  // />
     }
     
     
     
    </>
  )
}

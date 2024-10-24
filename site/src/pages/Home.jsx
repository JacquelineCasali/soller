import React, { useState } from 'react'


import Footer from "../components/Footer/Footer"
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Hearder from "../components/Header/Hearder"
import Singup from '../components/Singup/Singup'
import Personalized from '../components/Personalized/Personalized'
import system from "../services/system.json"
import service from "../services/service.json"

export default function Home() {
  const [systems] = useState(system);
   const [servicea] = useState(service);

  return (
    <>
    {/* <Hearder/> */}
 
 
{/* <Personalized/> */}
<Singup
test={servicea}

/>

<Singup
test={systems}

/>



<Card/>

<Container/>
     <Footer/>
    </>
  )
}

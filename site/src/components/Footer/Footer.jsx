import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
// import {image} from "../../../public/image/Logo-grey.png"
export default function Footer() {
  return (
   <footer >
    <section className='footer'>

   
    <img src={"/image/logoGrey.png"
      
     } alt="" style={{objectFit:"cover"}} />
    

<p className='companyName'>
@ 2023 Soller, Inc. All rights reserved.
</p>
  
   
      
 <div className='verticalMenu'>
  <Link to={"/"} className='footerLink'>Terms</Link>
 
  <Link  to={"/"} className='footerLink'>
Privacy
</Link>
<Link to={"/"} className='footerLink'>
Support
</Link>
  </div>     


 

      </section>
   </footer>
  )
}

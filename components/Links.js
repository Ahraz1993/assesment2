import React from 'react'
import {Link} from "react-router-dom";

function links() {
  return (
    <div>
      <ul className='Admin'>
        <li><Link to ="/Aboutme"> About me</Link></li>
        <li><Link to ="/Skills"> Skills</Link></li>
        <li><Link to ="/Experience"> Experience</Link></li>
        <li><Link to ="/Contactme"> Contact me</Link></li>
        <li><Link to ="/Recommendations"> Recommendations</Link></li>
      </ul>
    </div>
  )
}

export default links

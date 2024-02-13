import React from "react";
import { Link } from 'react-router-dom'



const Error=()=>
{
   return(
    <div>
        <h2>404</h2>
        <p>Page not found เหมือน chat ที่คุยกับคนที่จีบเลย</p>
        <Link to='/home'>back home</Link>
    </div>
   )
}

export default Error;
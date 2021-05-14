import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound () {
    return(
         <div
         style={{
             height:"70vh",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
         }}>
           
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
    )
}
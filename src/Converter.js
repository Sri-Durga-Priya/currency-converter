import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Converter() {
    const [rupees,setRupees]=useState("")
     const [dollars,setDollars]=useState("")
     const toDollars=(rupees)=>{
             setDollars((rupees/83).toFixed(2))
             setRupees(rupees)      
     }
     const toRupees=(dollars)=>{
             setRupees((dollars*83).toFixed(2))
             setDollars(dollars)
     }
    return(
        <div>
            <h2>{rupees} in Indian Rupees is {dollars}  American Dollars</h2>
            <input class="input-group-text"
            type="number"
            placeholder="Rupees"
            value={rupees}
            onChange={(e)=>{toDollars(e.target.value)}}/>
          <h5>Rupees</h5>
         <br/>    
            <input class="input-group-text"
            type="number"
            placeholder="Dollars"
            value={dollars}
            onChange={(e)=>{toRupees(e.target.value)}}/>
            <h5>Dollars</h5>

            
        </div>
    )
}
export default Converter
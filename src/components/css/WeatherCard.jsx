import React from "react";
const weathercard=({location})=>{
    return (
        <div className="location">
            
            <div>
                <div>
                   <h2>{location.temp}</h2>
                </div>
                <div className="authcom">
                 <p>Author: {location.feels_like}</p>
                 <p>Min: {location.temp_min}</p>
                 <p>Max: {location.temp_max}</p>
                </div>
                
                
            </div>
        </div>
    )
}
export default weathercard;
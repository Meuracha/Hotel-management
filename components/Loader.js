import React, { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


function Loader() {
  let [loading, setLoading] = useState(true);
  
  return (
    <div style={{marginTop:'150px',display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      
      <div className="sweet-loading text-center">
        <b>
       <h1>Loading...</h1>
       </b>
      </div>
    </div>
  );
}

export default Loader;

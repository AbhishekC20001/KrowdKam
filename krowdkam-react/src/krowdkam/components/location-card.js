import React from "react";
import "../styles/userhome.css";

const LocationDetail = ({image}) =>{
    return (
        <div class="card my-4 mx-4 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Imagica</h5>
                <p class="card-text">Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd.</p>
                <a href="loc.html" class="btn btn-primary">Details</a>
            </div>
        </div>
    );
}

export default LocationDetail;
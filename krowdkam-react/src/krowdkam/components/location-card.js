import React from "react";
import "../styles/userhome.css";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

const LocationDetail = ({image, data}) =>{
    return (
        <div class="card my-4 mx-4 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
            <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text">{data.description}</p>
                <Link to={`/user/${data.id}`}>
                    <button class="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    );
}

export default LocationDetail;
import React, {useEffect, useState} from "react";
import Imagica from "../images/Img_map.jpg";
import { useParams } from "react-router-dom";
import "../styles/userlocation.css";
import "../styles/graph.css";
import axios from "axios";
import Graph from "../components/graph-div";

const UserLocation = () =>{
    let {id} = useParams();

    useEffect(()=>{
        console.log("Heyy",localStorage.getItem('krowdkam-access'));
        const token = localStorage.getItem('krowdkam-access');
        axios.get(`/guser/api/zones/${id}`,{ headers: {"Authorization" : `Bearer ${token}`}})
        .then(res=>{
            console.log("Response is: ",res);
        })
    },[id])
    
    return (

        <>
            <img class="map" src={Imagica} alt="Imagica map"/>
            <div id="rides">
                <div class="row">
                    <div class="col zone">
                    VIVA EUROPA
                    </div>
                    <div class="col">
                    INDIA
                    </div>
                    <div class="col">
                    AMERICANA
                    </div>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Imagica Stores
                </span>
                <span class="col">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; I for India
                </span>
                <span class="col">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Gold Rush Express
                </span>

                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Bump it Boats
                </span>
                <span class="col">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Mr. India - The Ride
                </span>
                <span class="col">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; D2 Dare Drop
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Pop Jets
                </span>
                <span class="col">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Wrath of the Gods
                </span>
                <span class="col">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Red Bonnet American Dinner
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Arrmada
                </span>
                <span class="col">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Salimgarh
                </span>
                <span class="col">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Scream Machine </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Roberto's Food Coaster
                </span>
                <span class="col">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; The Imagica Capital
                </span>
                <span class="col">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Nitro
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Lagoon
                </span>
                <div class="col colt">
                    ASIANA
                </div>
                <div class="col colt">
                    JAMBO AFRICA
                </div>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Tubby Take's off
                </span>
                <span class="col colt">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Cinema 360-Prince of the Dark Waters
                </span>
                <span class="col colt">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Zeze Bar + Grill
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Zooballoo
                </span>
                <span class="col colty">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Deep Space
                </span>
                <span class="col colt">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Zeze Bar + Grill
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Bandits of Robin Hood
                </span>
                <span class="col colty">
                    <a class="btn myclass sb" rel="popover" data-bs-placement="top" data-bs-content="Not Crowded" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Motion Box Theatre
                </span>
                <span class="col colt">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Rajasaurus River Adventure
                </span>
                </div>
                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Loch Ness Expplorers
                </span>
                <span class="col"></span>
                <span class="col colt">
                    <a class="btn myclass tb" rel="popover" data-bs-placement="top" data-bs-content="Regular crowd" title="Crowd Status" data-html="true" data-trigger="click"></a> &nbsp; Mambo Chai Chama - Crazy Tea Cups
                </span>
                </div>

                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Splash Ahoy!
                </span>
                <span class="col"></span>
                <span class="col"></span>
                </div>

                <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Save the Pirate
                </span>
                <span class="col"></span>
                <span class="col"></span>
                </div>

                </div>
            {/* <div className="graph-div">
                <div className="graph-div-bar">

                </div>
                <div className="graph-div-pie">

                </div>
            </div> */}
            <Graph/>
        </>
 
    )

}

export default UserLocation;
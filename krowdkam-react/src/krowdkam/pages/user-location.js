import React, {useEffect, useState} from "react";
import Imagica from "../images/Img_map.jpg";
import { useParams } from "react-router-dom";
import "../styles/userlocation.css";
import "../styles/graph.css";
import axios from "axios";
import Graph from "../components/graph-div";
import ZoneName from "../components/zone-name";

const UserLocation = () =>{
    let {id} = useParams();
    // const [zones, setZones] = useState([ 
    //     {
    //         "id": 1,
    //         "name": "Westside",
    //         "description": "Trent Limited is the retail hand of Tata group. Started in 1998, Trent operates Westside, one of the many growing retail chains in India based in Mumbai, Maharashtra, and Landmark, a bookstore chain with brick and mortar stores in various locations of India.",
    //         "location": "On your left, after entering the mall",
    //         "status": 1,
    //         "created_at": "2021-07-10T19:51:28.400663Z",
    //         "updated_at": "2021-07-10T19:51:28.400663Z",
    //         "logo": "/westside.png",
    //         "organization": 1
    //     }
    // ]);
    // const [liveAnalysis, setLiveAnalysis] = useState( {
    //     "1": [
    //         {
    //             "id": 1,
    //             "recording": null,
    //             "position": "Inside Trial Room according to Manager Chopra's instructions",
    //             "area": "1.000000",
    //             "status": 1,
    //             "created_at": "2021-07-10T19:52:25.310756Z",
    //             "updated_at": "2021-07-10T19:52:25.310756Z",
    //             "zone": 1,
    //             "organization": 1
    //         },
    //         {
    //             "id": 2,
    //             "recording": null,
    //             "position": "Inside Washroom according to Manager Chopra's instructions",
    //             "area": "1.000000",
    //             "status": 1,
    //             "created_at": "2021-07-10T19:52:53.716876Z",
    //             "updated_at": "2021-07-10T19:52:53.716876Z",
    //             "zone": 1,
    //             "organization": 1
    //         }
    //     ]
    // });
    // const [zonewisecams, setZonewisecams] = useState({
    //     "1": {
    //         "1": [
    //             43.0,
    //             "Overcrowded"
    //         ],
    //         "2": [
    //             420.0,
    //             "Overcrowded"
    //         ]
    //     }
    // });
    const [zones, setZones] = useState([])
    const [liveAnalysis, setLiveAnalysis] = useState({});
    const [zonewisecams, setZonewisecams] = useState({});
    const [showGraph,setShowGraph] = useState(false);
    const [graphDetails,setGraphDetails] = useState(null)
    const [locationInfo,setLocationInfo] = useState({});


    useEffect(()=>{
        console.log("Heyy",localStorage.getItem('krowdkam-access'));
        const token = localStorage.getItem('krowdkam-access');
        axios.get(`/guser/api/zones/${id}/`,{ headers: {"Authorization" : `Bearer ${token}`}})
        .then(res=>{
            console.log("Response is: ",res);
            // setZones(res.data.data.zones);
            // setLiveAnalysis(res.data.data.liveAnalysis);
            // setZonewisecams(res.data.data.zonewisecams);
            setLocationInfo(res.data.data);

        })
    },[id])
    
    const graphHandler = (zoneId,camId) =>{
        console.log("Id: ",zoneId,camId);
        // setShowGraph(true);
        axios.get(`/client/report/?oid=${id}&&zid=${zoneId}&&cid=${camId}`).then((res)=>{
            console.log("Graph Response is: ",res.data);
            setGraphDetails(null);
            setGraphDetails(res.data);
        })
    }


    let list = [];

    // if(zones && liveAnalysis && zonewisecams)
    console.log("Test: ",locationInfo);
    if(locationInfo.zones){
        locationInfo.zones.map((zone)=>{
                console.log("Zones: ",zone,locationInfo.livanalysis,locationInfo.livanalysis[zone.id])
                // Object.keys(locationInfo.livanalysis[zone.id]).map(function(key) {
                //     // return <option value={key}>{tifs[key]}</option>
                //     console.log(locationInfo.livanalysis[zone.id][key]);
                    // list.push(<ZoneName name={zone.name} zoneId = {zone.id} cam={1} camId={cam.id} status={locationInfo.zonewisecams[zone.id][cam.id]} graphHandler={graphHandler}/>)

                    locationInfo.zonewisecams[zone.id].map((cam,index)=>{
                        console.log("Status: ",locationInfo.livanalysis[zone.id][cam.id])
                        list.push(<ZoneName name={zone.name} zoneId = {zone.id} cam={index+1} camId={cam.id} status={locationInfo.livanalysis[zone.id][cam.id]} graphHandler={graphHandler}/>)
                    })
                // });
                // 
            })
    }


    return (

        <>
            <img class="map" src={Imagica} alt="Imagica map"/>
            <div id="rides">
                {/* <div class="row">
                    <div class="col zone">
                    VIVA EUROPA
                    </div>
                    <div class="col">
                    INDIA
                    </div>
                    <div class="col">
                    AMERICANA
                    </div>
                </div> */}
                {/* <div class="row"> */}
                <div className="main-grid-userlocation">
                {list}
                
                {/* <ZoneName/>
                <ZoneName/>
                <ZoneName/>
                <ZoneName/>
                <ZoneName/> */}
                </div>
                {/* </div> */}
                {/* <div class="row">
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
                </div> */}
                {/* <div class="row">
                    <span class="col">
                    <a class="btn myclass fb" rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Lagoon
                </span>
                {/* <div class="col colt">
                    ASIANA
                </div>
                <div class="col colt">
                    JAMBO AFRICA
                </div> */}
                {/* </div> */}
                

                </div>
            {/* <div className="graph-div">
                <div className="graph-div-bar">

                </div>
                <div className="graph-div-pie">

                </div>
            </div> */}
            
            {graphDetails?(
                <>
                <Graph graphDetails={graphDetails}/>
                </>
            ):(
                <>
                </>
            )}
        </>
 
    )

}

export default UserLocation;
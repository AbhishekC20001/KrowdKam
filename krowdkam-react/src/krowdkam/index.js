import React ,{useEffect,useState} from "react";
import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UserLogin from "./pages/user-login";
import ClientLogin from "./pages/client-login";
import Navbar from "./components/Navbar";
import UserHome from "./pages/user-home";
import UserLocation from "./pages/user-location";
import ClientHome from "./pages/client-home";
import ClientZoneReg from "./pages/client-zone-register";
import ClientCam from "./pages/client-cam";




const Krowdkam = ()=>{

    // const [locations, setLocations] = useState([]);

    // useEffect(()=>{

    //     axios.get('/guser/api/location_carousel')
    //     .then(res=>{
    //         console.log("Locations: ",res);
    //         setLocations(res.data);
    //     })


    // },[]);
    const [organization,setOrganization] = useState({
        address: "Khopoli, Navi Mumbai",
        created_at: "2021-07-11T08:05:06.297414Z",
        description: "Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd.",
        id: 1,
        lat: "21.000000",
        logo: "/imagica.jpg",
        long: "21.000000",
        map: "/Img_map_1.jpg",
        name: "Imagica",
        password: "orgi@123",
        password2: "orgi@123",
        status: 1,
        updated_at: "2021-07-11T08:05:06.297414Z",
    })

    return (
        <>
        <Router>
            <Switch>
                <Route path="/user-login/">
                    <Navbar type={"user"}/>
                    <UserLogin/>
                </Route>
                {/* <Route  path="/client-login/">
                    <Navbar type={"client"}/>
                    <ClientLogin/>
                </Route> */}
                <Route exact path="/client/">
                    <Navbar type={"client"}/>
                    <ClientHome organization = {organization}/>
                </Route>
                <Route exact path="/client/zone-register">
                    <Navbar type={"client"}/>
                    <ClientZoneReg organization = {organization}/>
                </Route>
                <Route exact path="/client/cam">
                    <Navbar type={"client"}/>
                    <ClientCam organization = {organization}/>
                </Route>
                <Route exact path="/user">
                    <Navbar type={"user"}/>
                    <UserHome organization = {organization}/>
                </Route>
                <Route exact path="/user/:id">
                    <Navbar type={"user"}/>
                    <UserLocation organization = {organization}/>
                </Route>
            </Switch>
        </Router>
        </>
    );
}

export default Krowdkam;
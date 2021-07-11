import React ,{useState, useEffect} from "react";
import Imagica from "../images/imagica.jpg";
import Bhushan from "../images/Bhushan.jpg";
import "../styles/userhome.css";
import LocationDetail from "../components/location-card";
import Slider from "react-slick";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const UserHome = () =>{

    var settingsSlider = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    //   const [locations,setLocations] = useState(
    //       {
    //           "Mumbai":[{
    //               id:"1",
    //               name:"Imagica",
    //               description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //           },
    //           {
    //             id:"2",
    //             name:"Imagica",
    //             description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //         },
    //         {
    //             id:"3",
    //             name:"Imagica",
    //             description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //         },
    //         {
    //             id:"4",
    //             name:"Imagica",
    //             description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //         }],
    //           "Thane":[
    //             {
    //                 id:"1",
    //                 name:"Imagica",
    //                 description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //             },
    //             {
    //               id:"2",
    //               name:"Imagica",
    //               description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //           },
    //           {
    //               id:"3",
    //               name:"Imagica",
    //               description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //           },
    //           {
    //               id:"4",
    //               name:"Imagica",
    //               description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //           }],
    //           "Navi Mumbai":[{
    //             id:"1",
    //             name:"Imagica",
    //             description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //         },
    //         {
    //           id:"2",
    //           name:"Imagica",
    //           description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //       },
    //       {
    //           id:"3",
    //           name:"Imagica",
    //           description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //       },
    //       {
    //           id:"4",
    //           name:"Imagica",
    //           description:"Imagicaa is a 130-acre theme park in Khopoli, India. It is owned by Imagicaaworld Entertainment Ltd."
    //       }]
    //       }
    //   )
    const [locations,setLocations] = useState([]);

    useEffect(()=>{
        console.log("Yes entered in user");
        console.log("Heyy",localStorage.getItem('krowdkam-access'));
        const token = localStorage.getItem('krowdkam-access');
        axios.get("/guser/api/location_carousel/",{ headers: {"Authorization" : `Bearer ${token}`}})
        .then(res=>{
            console.log("Yes",res);
            setLocations(res.data.data);
        })
    },[])

      const list = [];
      for (const [key, value] of Object.entries(locations)) {
        console.log("Keys: ",key,value)
        let options = value.map((item)=>{
            return (
                
                <LocationDetail image={item.logo} data = {item}/>
            );
        })

        list.push(
            <div style={{width:"100%",paddingBottom:"5%"}}>
                {/* Hi,{key} */}
                <Slider {...settingsSlider} style={{width:"100%",overlay:"hidden"}}>
                {options}
                </Slider>
            </div>
        )
        console.log("The list is: ",list);
    }

    return (
        <>
        <span id="cont">
            {/* <div class="row" style={{width:"90%",marginRight:"-10%"}}>  */}
            {/* <div style={{width:"100%"}}>
                <Slider {...settingsSlider} style={{width:"100%",overlay:"hidden"}}>

                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                </Slider>
            </div>
            {/* </div> */}
            {/* <div >
                <LocationDetail image={Imagica}/>
            </div>
            <div >
                <LocationDetail image={Imagica}/>
                <LocationDetail image={Imagica}/>
            </div>  */}
            {list}

        </span>
        </>
    );
}

export default UserHome; 
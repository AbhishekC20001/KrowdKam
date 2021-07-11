import axios from "axios";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../styles/client-cam.css";

const ClientCam = ({organization}) =>{
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          console.log("Image is: ",imageSrc)
        //   let file = new File(imageSrc, "Organization")
        let blob = new Blob([imageSrc], {
            type: "image/png"
        });
            console.log("File is: ",blob)
        let formData = new FormData();
       formData.append("file",blob);
        console.log("FormData is: ",formData)
        axios.post('/client/file_upload/',formData)
        .then(res=>{
            console.log("Res is: ",res);
            let body = {
                oid:1,
                zid:1,
                iid:1
            }
            axios.get("/client/crowd_count/?oid=1&&zid=1&&iid=1&&position=Home")
            .then(res=>{
                console.log("Total count detected: ",res);
            })
        })

        },
        [webcamRef]
      );

    useEffect(()=>{
        const timer = setInterval(() => {
            // console.log('This will run after 1 second!')
            capture();
          }, 5000);
          return () => clearInterval(timer);
    },[])

    const [zoneId,setZoneId] = useState(1);
    const [camId,setCamId] = useState(1);

    // useEffect(()=>{

    // },[])


    return (
        <div className="main-div">
            <div className="cam-div">
                <Webcam
                audio={false}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={500}
                videoConstraints={videoConstraints}/>
                {/* <button onClick={capture}>Capture photo</button> */}
            </div>
        </div>
    );

}

export default ClientCam;
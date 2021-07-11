import React, {useEffect, useState} from "react";
// import usePortal from 'react-cool-portal';
import ReactTooltip from 'react-tooltip';

const ZoneName = ({name, cam, status, graphHandler, zoneId, camId}) =>{
    let color = {
        "Overcrowded":"maroon",
        "Isolated":"green",
        "Less Crowd":"yellow",
        "Regular Crowd":"orange",
        "Crowded":"red",
    }
    // const { Portal, isShow, show, hide, toggle } = usePortal({
    //     containerId: 'my-portal-root', // Use your own portal container. If no set, we'll create it for you.
    //     defaultShow: false, // Default is true.
    //     clickOutsideToHide: true, // Default is true.
    //     escToHide: true, // Default is true.
    //     onShow: e => {
    //       // Triggered on show portal.
    //       // The event object will be: MouseEvent, KeyboardEvent, Your custom event.
    //     },
    //     onHide: e => {
    //       // Triggered on show portal.
    //       // The event object will be: MouseEvent, KeyboardEvent, Your custom event.
    //     }
    //   })


    return (
        <>
        <div className="icon-div">
            {/* <span class="">
                <a class="btn myclass fb" style={{backgroundColor: "yellow"}} rel="popover" data-bs-placement="top" data-bs-content="Crowded" title="Crowd Status" data-html="true" data-trigger="hover"></a> &nbsp; Imagica Stores
            </span> */}
            {/* <p data-tip data-for='happyFace'  type='error'>tooltip</p> */}
            <span>
                <a class="btn myclass fb" data-tip data-for={`${name}-${cam}`} style={{backgroundColor: color[status[1]]}} onClick = {()=>{
                    console.log("Hey: ",status[0],status[1],name+'-'+cam);
                    graphHandler(zoneId,camId);
                }}></a><span >{name}-{cam}</span>
            </span>
            <ReactTooltip id={`${name}-${cam}`}>
                <span>{status[0]}, {status[1]}</span>
            </ReactTooltip>
        </div>
        
        </>
    );

}

export default ZoneName;
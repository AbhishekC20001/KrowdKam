import React, {useEffect, useState} from "react";
import "../styles/graph.css";
import Chart from "react-apexcharts";

const Graph = ({graphDetails}) =>{

    console.log("The details are: ",graphDetails);
    const [optionsBar,setOptionsBar] = useState({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: Object.keys(graphDetails)
        }
      })

      const [seriesBar,setSeriesBar] = useState([
        {
          name: "series-1",
          data: Object.values(graphDetails)
        }
      ])


      const [seriesPie,setSeriesPie] = useState([44, 55, 13, 43, 22])



    return (
        <div className="graph-div">
            <div className="graph-div-bar">
                <Chart
                    options={optionsBar}
                    series={seriesBar}
                    type="bar"
                    // width="500"
                    height="100%"
                />
            </div>
            {/* <div className="graph-div-pie">
                <Chart
                    options={optionsPie}
                    series={seriesPie}
                    type="pie"
                    // width="500"
                    // height="100%"
                />
            </div> */}
        </div>
    );
}

export default Graph;
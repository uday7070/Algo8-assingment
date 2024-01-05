import React from "react";

import image from "../image/new graph.png";

export default function HealthReport() {
  return (
    <div className="health-container">
      <div>
        <div className="health-item">
          <div className="health-title">Health</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>%
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
        <div className="health-item">
          <div className="health-title">Time to Failure</div>
          <span style={{ fontWeight: "bold" }}>44 </span>weeks
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
      </div>
      <div>
        <div className="health-item">
          <div className="health-title">Efficiency</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>%
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
        <div className="health-item">
          <div className="health-title">Power Consumption</div>
          <span style={{ fontWeight: "bold" }}>45 </span>MW
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
      </div>
      <div>
        <div className="health-item">
          <div className="health-title">Steam Consumption</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>T/hr
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
        <div className="health-item">
          <div className="health-title">Interstage Cooler Temprature</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>oC
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
      </div>
      <div>
        <div className="health-item">
          <div className="health-title">Wet Gas Flow</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>T/hr
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
        <div className="health-item">
          <div className="health-title">Suction Pressure</div>
          <span style={{ fontWeight: "bold" }}>98.34 </span>Kg/cm2
          <img
            src={image}
            alt=""
            style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

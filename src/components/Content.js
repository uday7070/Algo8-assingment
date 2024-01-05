import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import HealthReport from "./HealthReport";
import AnomalyScoreGraph from "./AnomalyScoreGraph";
import image from "../image/new graph.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import OpenWithIcon from "@mui/icons-material/OpenWith";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-item1">
        <div className="content-item">
          <div>
            <select name="cars" id="content">
              <option value="audi">Related Documents</option>
            </select>
          </div>
          <div>
            <button className="content-btn">Details</button>
          </div>
          <div className="content-setting">
            <SettingsIcon
              style={{
                background: " rgb(159, 158, 158)",
                color: "white",
                padding: "3px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            />
          </div>
        </div>
        <div className="content-text">Under Development</div>
        <div className="content-footer">
          <div className="content-footer-item1">
            <AcUnitIcon style={{ fontSize: "16px" }} />
            <span className="item1-span"> Legends</span>
          </div>
          <div className="content-footer-item2">
            <div className="footer-span">
              <span className="content-span">-</span>
              <span>100%</span>
              <span className="content-span">+</span>
            </div>

            <div className="footer-expand">
              <OpenWithIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="content-item2">
        <HealthReport />
        <div className="content-item3">
          <div>
            <div className="content-graph1">
              <p>Efficiency Anamoly Score</p>
              <AnomalyScoreGraph />
            </div>
            <div>
              <div className="content-graph1">
                <p>Health Anamoly Score</p>
                <AnomalyScoreGraph />
              </div>
            </div>
          </div>
          <div></div>

          <div className="content-item4">
            <div className="trip"> Trip gas</div>
            <div className="content-subitems">
              <div className="health-title">Turbine Shaft Axial Displ</div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">Compressor Shaft Axial Displ</div>
              <span style={{ fontWeight: "bold" }}>45 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">Turbine Shaft Vibration-NDE</div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">Turbine Shaft Vibration-DE</div>
              <span style={{ fontWeight: "bold" }}>45 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">Compressor Shaft Vibration-DE</div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">Compressor Shaft Vibration-NDE</div>
              <span style={{ fontWeight: "bold" }}>45 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Thrust Bearing Temprature.:AS
              </div>
              <span style={{ fontWeight: "bold" }}>45 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Thrust Bearing Temprature.:NAS
              </div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>um
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Journal Bearing Temprature.:NDE
              </div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Journal Bearing Temprature.:DE
              </div>
              <span style={{ fontWeight: "bold" }}>45 </span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Compressor Thrust Bearing Temprature.:AS
              </div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Compressor Thrust Bearing Temprature.:NAS
              </div>
              <span style={{ fontWeight: "bold" }}>45 </span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Journal Bearing Temprature.:NDE
              </div>
              <span style={{ fontWeight: "bold" }}>98.34 </span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
            <div className="content-subitems">
              <div className="health-title">
                Turbine Journal Bearing Temprature.:DE
              </div>
              <span style={{ fontWeight: "bold" }}>45</span>oC
              <img
                src={image}
                alt=""
                style={{ height: "30px", width: "40px", marginLeft: "2rem" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

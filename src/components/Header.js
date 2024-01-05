import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApiIcon from "@mui/icons-material/Api";
import NotificationsIcon from "@mui/icons-material/Notifications";

function App() {
  return (
    <div className="container">
      <div className="item">
        <span style={{ color: "skyblue" }}>Digital Twin</span> | INDMAX
      </div>
      <div className="item2">
        <div style={{ marginLeft: "18px" }}>Last updated on 18/05/2023</div>
        <div className="text" style={{ marginLeft: "18px" }}>
          <span
            style={{
              background: "rgb(159, 158, 158)",
              color: "white",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "3px",
              fontSize: "large",
              marginRight: "5px",
            }}
          >
            -
          </span>
          <span style={{ fontSize: "small" }}>A</span>
          <span style={{ fontSize: "large" }}>A</span>
          <span
            style={{
              background: "rgb(159, 158, 158)",
              color: "white",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "3px",
              fontSize: "large",
              marginLeft: "5px",
            }}
          >
            +
          </span>
        </div>
        <div style={{ marginLeft: "18px", color: "#0d6efd" }}>
          <ApiIcon />
        </div>
        <div style={{ marginLeft: "18px" }}>
          <NotificationsIcon />
        </div>
        <div style={{ marginLeft: "18px" }}>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default App;

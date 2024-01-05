import React from "react";

const Title = () => {
  return (
    <div className="title-container">
      <div className="title-item1">
        <span style={{ fontSize: "1.6rem" }}>Wet Gas Compressor</span>
        <span className="title-text">As on 18/05/2023</span>
      </div>
      <div className="title-item2">
        <select name="Shift" id="shift1" className="title-subitem">
          <option value="volvo"> All</option>
          <option value="saab">Day</option>
          <option value="opel">Evening</option>
          <option value="audi">Night</option>
        </select>
        <select name="Shift" id="shift2" className="title-subitem">
          <option value="Hourly"> Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
};

export default Title;

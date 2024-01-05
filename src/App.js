import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import AnamolyScoreGraph from "./components/AnomalyScoreGraph";
import HealthReport from "./components/HealthReport";
import Header from "./components/Header";
import "./App.css";
import Title from "./components/Title";
import Content from "./components/Content";
function App() {
  return (
    <div className="main-container">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Title />
        <Content />
      </div>
    </div>
  );
}

export default App;

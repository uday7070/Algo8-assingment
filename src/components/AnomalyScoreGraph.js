import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "0", AnomalyScore: 1.5 },
  { name: "09:00", AnomalyScore: 2 },
  { name: "10:00", AnomalyScore: 3 },
  { name: "11:00", AnomalyScore: 1 },
  { name: "12:00", AnomalyScore: 0 },
  { name: "13:00", AnomalyScore: 0 },
  { name: "14:00", AnomalyScore: 6 },
  { name: "15:00", AnomalyScore: 6.5 },
  { name: "16:00", AnomalyScore: 7 },
];

export default function AnomalyScoreGraph() {
  return (
    <LineChart width={530} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />

      <Line
        type="monotone"
        dataKey="AnomalyScore"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

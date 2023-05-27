import "./barchart.scss";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";

const data = [
    { name: "Standard Twin City View", Percentage: 3.3 },
    { name: "Standard Double City View", Percentage: 3.5 },
    { name: "Superior Garden View", Percentage: 4 },
    { name: "Deluxe Garden View", Percentage: 4 },
    { name: "Deluxe City View", Percentage: 4.7 },
]  

const Barchart = ({aspect, title}) => {
    return(
        <div className="Barchart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Percentage" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
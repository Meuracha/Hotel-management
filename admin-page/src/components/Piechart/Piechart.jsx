//import "./Piechart.scss";
//import React ,{useState, useEffect} from "react";
//import Chart from "react-apexcharts";
import{
    Pie,
}from "recharts"
const data01 = [
    {
        Roomtype : "Standard Twin City View",
        value : 200
    },
    {
        Roomtype: "Standard Double City View",
        value : 250
    },
    {
        Roomtype: "Superior Garden View",
        value: 350
    },
    {
        Roomtype: "Deluxe Garden View",
        value: 450
    },
    {
        Roomtype: "Deluxe City View",
        value: 450
    }
]
const Piechart = (title) => {
    return(
        <div className="Piechart">
            <div className="title">{title}</div>
            <Piechart
            width = {110}
            height = {100}>
            <Pie data = {data01} datakey = "value" namekey = "Roomtype" cx="50%" cy="50%" outerRadius={50} fill = "#8884d8" lable/>
            </Piechart>
        </div>
    );
};

export default Piechart;
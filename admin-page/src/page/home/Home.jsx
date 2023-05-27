import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
//import Table from "../../components/table/Table";
import BarChart from "../../components/barchart/Barchart";
import PieChart from "../../components/Piechart/Piechart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="view" />
          <Widget type="booking" />
          <Widget type="active users" />
        </div>
        <div className="charts"> 
          <Featured /> 
          <Chart title="Total income range" aspect={2 / 1} />
        </div>
        <div className="barchart">
          <BarChart title="Room type rating" aspect={2 / 1} />
        </div>
        <div>
          <PieChart title="Most popular room type" aspect={2 / 1} />
        </div>
        {/*<div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* Uncomment the next line to add the Table component */}
          {/* <Table /> 
        </div>*/}
      </div>
    </div>
  );
};

export default Home;

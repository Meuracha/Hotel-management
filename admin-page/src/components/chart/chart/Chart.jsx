import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  // Change Current,previous connect to database
  { name: "January", 
    Currentmonth: 1200,
    Prevoiusmonth: 1000,
    amt: 1000
  },
  //{ name: "February", Total: 2100 },
  //{ name: "March", Total: 800 },
  { name: "April", 
    Currentmonth: 1600,
    Previousmonth: 1500,
    amt: 1500 
  },
  //{ name: "May", Total: 900 },
  //{ name: "June", Total: 1700 },
  { name: "july", 
    Currentmonth: 3000,
    Previousmonth: 1700,
    amt: 2300 
  },
  //{ name: "August", Total: 500},
  //{ name : "September", Total: 1000},
  { name: "October", 
    Currentmonth: 2500,
    Previousmonth: 1000,
  },
  //{ name: "November", Total: 1500},
  { name: "December", 
    Currentmonth: 4000,
    Previousmonth: 2500,
    amt: 3250},
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
         width={730}
         height={250}
         data={data}
         margin={{top:10, right:30, left:0, bottom:0}}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Currentmonth" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="Previousmonth" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        {/*<AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>*/}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

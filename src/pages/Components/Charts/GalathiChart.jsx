import { useEffect, useState } from 'react';
import "./glatharichart.css"
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';



const COLORS = ['#454545', '#e2e3c8', '#cdd0ae', '#9c9e7f','#656755'];

const GalathiChart = (props) => {
    const [data,setData]= useState(props.data)

    console.log("🚀 ~ file: GalathiChart.jsx:17 ~ GalathiChart ~ props.data:", data)
  return (
    <div className="chart-container">
      <ResponsiveContainer  width="100%" height="100%" aspect={1.5}>
        <PieChart  style={{float: 'left'}}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
           
            
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
          <Tooltip  
            isAnimationActive={false}
            cursor={{fill: 'transparent', border: 'none',backgroundColor: 'none',}}
            contentStyle={{
              backgroundColor: 'none',
              boxShadow: 'none',
              border: '0px',
              borderRadius: '10px',
              padding: '10px',
              color: '#fff'
            }}
            labelStyle={{ color: '#fff' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GalathiChart;

import { useState,useEffect } from 'react'; 
import axios from 'axios';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button, } from '@mui/material';
import BarChart from 'react-bar-chart';
import Link from '@mui/material/Link';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'
export default function Charts(props) {
  Chart.register(...registerables)
  const location = useLocation();
  const [searchparams] = useSearchParams()
    const [chartData, setChartData] = useState({
      month:[],
      value:[]
    });
    const [dayper, setDayper] = useState({
      month:[],
      value:[]
    });
    const [gelathi,setGelathi] = useState({
      month:[],
      value:[]
    });
    const [green,setGreen] = useState({
      month:[],
      value:[]
    });
    const [vyapar,setVyapar] = useState({
      month:[],
      value:[]
    });
    useEffect(() => {
        chart();
      }, [location?.state?.filterData]);
      const chart = async => {
          var data = JSON.stringify({
           
            "role_id": 1,
            
            "emp_id": 144,
            ...location?.state?.filterData
            
          });
          
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getDashBoardChart.php',
            headers: { 
              'Content-Type': 'application/json'
            },
             data
          };
          
          axios(config)
          .then(function (response) {
            const targetData =response.data?. targetData_xaxis?.map((itm,index)=>{
                return response.data?.target_data[index]?.actual
            })
            const targetvalue =response.data?. targetData_xaxis?.map((itm,index)=>{
              return itm?.month_name
          })
            const dayper_data = response.data?. dayper_xaxis?.map((itm,index)=>{
              return response.data?.dayper_data[index]?.perc
          })
          const dayper_month = response.data?. dayper_xaxis?.map((itm,index)=>{
            return response.data?.dayper_data[index]?.perc
        })
      const enroll_data =response.data?. enroll_xaxis?.map((itm,index)=>{
        return response.data?.enroll_data[index]?.count
    })
      const enroll_month = response.data?. enroll_xaxis?.map((itm,index)=>{
        return itm?.month_name
    })
    const green_data =response.data?. green_xaxis?.map((itm,index)=>{
      return response.data?.green_data[index]?.count
  })
    const green_month = response.data?. green_xaxis?.map((itm,index)=>{
      return itm?.month_name
  })
            setChartData({month:targetvalue,value:targetData})
            setDayper({month:dayper_month,value:dayper_data})
            setGelathi({month:enroll_month,value:enroll_data})
            setGreen({month:green_month,value:green_data})
          })
          .catch(function (error) {
            // console.log(error);
          });
          
    }
    if(chartData?.length===0&&dayper?.length===0&&gelathi?.length===0){
      return(
      <h1>No data found</h1>
      )
    }
    const dataBar = {
       labels: chartData?.month,
      datasets: [
        {
          label: "Actual ",
          backgroundColor: "#EC932F",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: chartData?.value
        }
      ]
    };
    const dayperbar = {
      labels: dayper?.month,
     datasets: [
       {
         label: "2nd Day Turnout (%)",
         backgroundColor: "#EC932F",
         borderColor: "rgba(255,99,132,1)",
         borderWidth: 1,
        
         hoverBackgroundColor: "rgba(255,99,132,0.4)",
         hoverBorderColor: "rgba(255,99,132,1)",
         data: dayper?.value
       }
     ]
   };
   const gelathiBar = {
    labels: gelathi?.month,
   datasets: [
     {
       label: "Enrolled Gelathis",
       backgroundColor: "#EC932F",
       borderColor: "rgba(255,99,132,1)",
       borderWidth: 1,
      
       hoverBackgroundColor: "rgba(255,99,132,0.4)",
       hoverBorderColor: "rgba(255,99,132,1)",
       data: gelathi?.value
     }
   ]
 };
   
    const options = {
      plugins: {
        datalabels: {
          display: true,
          color: "black",
          align: "end",
          anchor: "end",
          font: { size: "18",color:"red" }
        }
      },
      legend: {
        display: true
      }
    };
    
  return (
      <div > 
  <Bar data={dataBar} options={options} width={100} height={50} />
  <Stack mt={5}>
  <Bar data={dayperbar} options={options} width={100} height={50} />
  </Stack>
  <Stack mt={5}>
  <Bar data={gelathiBar} options={options} width={100} height={50} />
  </Stack>
  </div>
    
  );
}
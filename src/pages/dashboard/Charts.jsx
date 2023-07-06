import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button,IconButton } from '@mui/material';

import { useLocation, useSearchParams } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import { useNavigate } from 'react-router-dom';
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js'

export default function Charts(props) {
  Chart.register(...registerables)
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  const location = useLocation();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams()
  const [chartData, setChartData] = useState({
    month: [],
    value: []
  });
  const [dayper, setDayper] = useState({
    month: [],
    value: []
  });
  const [gelathi, setGelathi] = useState({
    month: [],
    value: []
  });
  const [green, setGreen] = useState({
    month: [],
    value: []
  });
  const [vyapar, setVyapar] = useState({
    month: [],
    value: []
  });

  useEffect(() => {
    chart();
  }, [location?.state?.filterData]);
  const chart = async => {
    var role = JSON.parse(sessionStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(sessionStorage.getItem('userDetails'))?.id
    var data = JSON.stringify({

      "role_id": role,

      "emp_id": userid,
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
     
        const targetData = response.data?.targetData_xaxis?.map((itm, index) => {
          return response.data?.target_data[index]?.actual
        })
        const targetvalue = response.data?.targetData_xaxis?.map((itm, index) => {
          return itm?.month_name
        })

        const dayper_data = response.data?.dayper_xaxis?.map((itm, index) => {
          return response.data?.dayper_data[index]?.perc
        })
        const dayper_month = response.data?.dayper_xaxis?.map((itm, index) => {
          return response.data?.dayper_data[index]?.perc
        })
        
        const enroll_data = response.data?.enroll_xaxis?.map((itm, index) => {
          return response.data?.enroll_data[index]?.count
        })
        const enroll_month = response.data?.enroll_xaxis?.map((itm, index) => {
          return itm?.month_name
        })
        setChartData({ month: targetvalue, value: targetData })
        setDayper({ month: dayper_month, value: dayper_data })
        setGelathi({ month: enroll_month, value: enroll_data })
      })
      .catch(function (error) {
        // console.log(error);
      });

  }

  if (chartData?.length === 0 && dayper?.length === 0) {
    return (
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
        font: { size: "18", color: "red" }
      }
    },
    legend: {
      display: true
    }
  };
  return (
    
    <div >
            <Typography variant="h5"> 
                        <IconButton sx={{height:40,width:40}}   
                        onClick={() => navigate('/dashboard/app')}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>Charts</Typography>
     
      <br />
  
      <br />

      <Bar data={dataBar}  options={options} width={100} height={50} />
      <br /><br />
    
      <Bar data={dayperbar}  options={options} width={100} height={50} />
      <br /><br />
    
      <Bar data={gelathiBar}  options={options} width={100} height={50} />

    </div >


  );
}
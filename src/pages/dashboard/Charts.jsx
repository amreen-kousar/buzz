import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Stack, Divider, Card, CardContent, Button,IconButton } from '@mui/material';
import BarChart from 'react-bar-chart';
import Link from '@mui/material/Link';
import { useLocation, useSearchParams } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import { useNavigate } from 'react-router-dom';
// import "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import {CategoryScale} from 'chart.js'; 
// import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import { Chart, registerables } from 'chart.js'
import defaultImage from '../../assets/images/default.png'

export default function Charts(props) {
  // Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,Bar);
  Chart.register(...registerables)
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  console.log("🚀 ~ file: Charts.jsx:20 ~ Charts ~ props:", props)
  const location = useLocation();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams()
  console.log(searchparams.get("state"), "<---location", location?.state?.filterData)
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
    console.log(userDetails)
    chart();
  }, [location?.state?.filterData]);
  const chart = async => {
    var role = JSON.parse(localStorage.getItem('userDetails'))?.role
    var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
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
        // setChartData(response.data)
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
        //   const enroll_data = response.data?. enroll_xaxis?.map((itm,index)=>{
        //     return response.data?.enroll_data[index]?.perc
        // })
        const enroll_data = response.data?.enroll_xaxis?.map((itm, index) => {
          return response.data?.enroll_data[index]?.count
        })
        const enroll_month = response.data?.enroll_xaxis?.map((itm, index) => {
          return itm?.month_name
        })
        setChartData({ month: targetvalue, value: targetData })
        setDayper({ month: dayper_month, value: dayper_data })
        setGelathi({ month: enroll_month, value: enroll_data })
        console.log(response.data, '<----jhbhjbhjbjh', enroll_data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  console.log(chartData, "<----wertyujhgfd")
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

  console.log(dataBar, '<----------dataBardataBar')
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     typography: 'body1',
    //     '& > :not(style) + :not(style)': {
    //       ml: 2,
    //     },
    //   }}>
    <div >
      {/* {chartData.length!==0?
      <BarChart 
      //ylabel='Quantity'
        width={1200}
        height={600}
        margin={{top: 40, right: 40, bottom: 30, left: 80}}
        data={chartData}
       // onBarClick={this.handleBarClick}/>
       />
       :
       <h1>no data foundd</h1>
      }{dayper.length!==0&&
         <BarChart 
        width={1200}
        height={600}
        margin={{top: 40, right: 40, bottom: 30, left: 80}}
        data={dayper}
       />
      } */}
      
                        <Typography variant="h5"> 
                        <IconButton sx={{height:40,width:40}}   
                        onClick={() => navigate('/dashboard/app')}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>Charts</Typography>
     
      <br />
      {/* 
      <div style={{ background: '#ff7424', color: "white", padding: '1rem' }}>
        Welcome {userDetails?.first_name} {userDetails?.last_name} <br />
        ( {userDetails?.role_name} )
      </div> */}

      <br />

      <Bar data={dataBar}  options={options} width={100} height={50} />
      <br /><br />
      {/* <Stack mt={5}> */}
      <Bar data={dayperbar}  options={options} width={100} height={50} />
      <br /><br />
      {/* </Stack> */}
      {/* <Stack mt={5}> */}
      <Bar data={gelathiBar}  options={options} width={100} height={50} />
      {/* </Stack> */}
    </div >


  );
}
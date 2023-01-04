import { useState,useEffect } from 'react'; 
import axios from 'axios';
import BarChart from 'react-bar-chart';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function Charts() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        chart();
      }, []);
    const chart = async => {
        var data = JSON.stringify({
            "partner_id": "",
            "from_date": "",
            "to_date": "",
            "role_id": 1,
            "funder_id": 3,
            "location_id": "",
            "emp_id": 144
          });
          
          var config = {
            method: 'post',
            url: 'http://3.7.7.138/appTest/getDashBoardChart.php',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
           // setChartData(response.data)
            const targetData =response.data?. targetData_xaxis?.map((itm,index)=>{
                return{
                    value:response.data?.target_data[index]?.actual,
                    text:itm?.month_name
                }
            })
            setChartData(targetData)
            console.log(response.data,'<----jhbhjbhjbjh',targetData);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
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
      <div style={{width: '70%'}}> 
      <BarChart 
      //ylabel='Quantity'
        width={1200}
        height={600}
        margin={{top: 40, right: 40, bottom: 30, left: 80}}
        data={chartData}
       // onBarClick={this.handleBarClick}/>
       />
  </div>

    
  );
}
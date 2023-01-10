import { useState,useEffect } from 'react'; 
import axios from 'axios';
import BarChart from 'react-bar-chart';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useLocation, useSearchParams } from 'react-router-dom';


export default function Charts(props) {
  console.log(props,"<----propss")
  const location = useLocation();
  const [searchparams] = useSearchParams()
  console.log(searchparams.get("state"),"<---location",location?.state?.filterData)
    const [chartData, setChartData] = useState([]);
    const [dayper, setDayper] = useState([]);

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
            const dayper_data = response.data?. dayper_xaxis?.map((itm,index)=>{
              return{
                  value:response.data?.dayper_data[index]?.perc,
                  text:itm?.month_name
              }
          })
            setChartData(targetData)
            setDayper(dayper_data)
            console.log(response.data,'<----jhbhjbhjbjh',dayper_data,targetData);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    console.log(chartData,"<----wertyujhgfd")
    if(chartData?.length ===0&&dayper?.length===0){
      return(
      <h1>no data found</h1>
      )
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
      {chartData.length!==0?
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
      }
  </div>

    
  );
}
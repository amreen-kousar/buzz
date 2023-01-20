import {React,useEffect,useState} from "react";
import { Paper } from "@mui/material";
import axios from 'axios';
import {
Chart,
PieSeries,
Title
} from '@devexpress/dx-react-chart-material-ui';

// const [summaryData, setSummaryData] = useState([]);

  



const Graphchart = () => {

    const [summaryData, setSummaryData] = useState([]);
  
    useEffect(() => {
      apiHit();
    }, []);
  
    const apiHit = async (id,i,g) => {
      const data = {
        end_date:g==="date"?i: '',
        role_id: 6,
        taluk_id: g==="country"?i:"",
        district_id:g==="country"?id:"",
        trainerId: g?"": i===5?id?.id:'',
        emp_id: 558,
        start_date:g==="date"?id: '',
        somId:g?"": i===12?id?.id:'',
        gflId:g?"": i===13?id?.id:'',
        funder_id:g?"": i===2?id?.id:'',
        partner_id:g?"": i===1?id?.id:'',
        project_id:g?"": i===3?id?.id:'',
        opsManager:g?"": i===4?id?.id:'',
      };
      const datas = {
        end_date: i,
        role_id: 6,
        taluk_id: "",
        district_id:"",
        trainerId: '',
        emp_id: 558,
        start_date: id,
        somId: '',
        gflId: '',
        funder_id:"",
        partner_id:"",
        project_id: '',
        opsManager: '',
      };
      console.log(data, '<------bbbbbbb');
      const config = {
        method: 'post',
        // url: "https://cors-anywhere.herokuapp.com/{http://3.7.7.138/appTest/Scripts/getDashboardData.php}",
        url: 'https://bdms.buzzwomen.org/appTest/Scripts/getDashboardData.php',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      data,
      };
  
      axios(config)
        .then((response) => {
          setSummaryData(response.data);
          console.log(response.data, '<-------njnnjhnjhjh');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const chartdata = [
        // { argument:'Total Circles', value:summaryData?.data[0]?.circles},
        { argument:'Circle Meetings', value:summaryData?.data[0]?.circle_meet},
        { argument:'Village Visits', value:summaryData?.data[0]?.villagevisit },
        { argument:'Beehive Visits', value:summaryData?.data[0]?.beehive },
        { argument:'Enrolled Gelathis', value:summaryData?.data[0]?.enroll},
        { argument:'Total Circles', value:20,bgcolor:"#ed6c02"},
        ];
return (
	<Paper style={{width:'200px',height:"100px",float:'right',marginRight:'650px'}}>
	<Chart
	data={chartdata}
	>
	<PieSeries valueField="value"
		argumentField="argument"
		innerRadius={0.6} />
	
	</Chart>
</Paper>
);
}

export default Graphchart;

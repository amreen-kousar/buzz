import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormControl ,InputLabel,TextField} from '@mui/material';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, } from '@mui/material/Select';
export default function Customfilter(props) {
  console.log(props, "<---dadsad")
  const [country, setCountry] = useState([])
  const [fund, setFund] = useState()
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [states, setStates] = useState([])
  const [district, setDistrict] = useState([])
  const [taluk, setTaluk] = useState([])
  const [teamData, setTeamData] = useState([])
  const [listData, setListData] = useState();
  const [gelathiData, setGelathiData] = useState();
  var [data, setData] = useState({
    country: 1,
    state: '',
    startDate:"",
    endDate:"",
    type:"custom"
  })
  useEffect(() => {
    location()
    getFunder()
    teamList()
    trainerList()
    gelathiList()
  }, []
  )

  console.log(data,"reponssssssss")
  const location = async => {
    var data = JSON.stringify({
      "country_id": "1",
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStates(response?.data?.list)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getState = async (id) => {
    var data = JSON.stringify({
      "country_id": "1",
      "state_id": id

    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setDistrict(response.data.list)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getDistrict = async (district) => {
    var data = JSON.stringify({
      "country_id": "1",
      "state_id": data?.state,
      "district_id": district.id,
      "district_name":district.name

    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getLocation.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setTaluk(response.data.list)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getTalaq = async (id) => {
    console.log(id, data, "<---somethimnfff")
  }

  const getFunder = () => {
    const data = JSON.stringify({
        "role_id": 1,
        "filter_type": 2,
        "pageNum": 1,
        "emp_id": 206
    });

    const config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };

    axios(config)
        .then((response) => {
            setFund(response?.data?.data)
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

const teamList = async => {
  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/getOperationsManagerList.php',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(response.data, "teamlist opers")
      setTeamData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

}

const trainerList = async => {
  var data = JSON.stringify({
    "role_id": 5,
    "project_id": 292,
    "operation_manager_id": 122,
    "pageNum": 1
  });

  var config = {
    method: 'post',
    url: 'http://3.7.7.138/appTest/getPeopleList.php',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(response,"hyyyyyyyy")
      setListData(response.data)
      console.log(response.data,listData, '<----------setListDatasetListData');
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const gelathiList = () => {
    var data = JSON.stringify({
        "role_id": 6,
        "project_id": 292,
        "operation_manager_id": 35,
        "pageNum": 1
    });

    var config = {
        method: 'post',
        url: 'http://3.7.7.138/appTest/getPeopleList.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            setGelathiData(response.data)
            console.log(response.data, '<----------setListDatasetListData');
        })
        .catch(function (error) {
            console.log(error);
        });

}



  return (
    <div>
      <Card>

        <CardContent>
<Typography style={{textAlign:'center'}}>View Projects By</Typography>
          <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            Country
            <Select fullWidth variant='standard' color="common"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="0"
              label="Age"
            >
              <MenuItem value="0">India</MenuItem>
            </Select> </Typography><br></br>

          <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.state == "" && "Select "}State
            <Select fullWidth variant='standard' color="common"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={data.state}
              label="Age"
              onChange={(e => {
                setData({ ...data, state: e?.target?.value }),
                  getState(e?.target?.value)
              })}
            >
              {states?.map(itm => {
                return (
                  <MenuItem value={itm?.id}>{itm?.name}</MenuItem>
                )
              })
              }
            </Select> </Typography><br></br>
          <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.district_id == "" && "Select "}
            District
            <Select fullWidth variant='standard' color="common"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={data.district_id}
              label="Age"
              onChange={(e => {
                setData({ ...data, district: e?.target?.value }),
                  getDistrict(e?.target?.value)
              })}
            >
              {district?.map(itm => {
                return (
                  <MenuItem value={itm}>{itm?.name}</MenuItem>
                )
              })
              }
            </Select></Typography><br></br>
          <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.talaq_id == "" && "Select "}Taluk
            <Select fullWidth variant='standard' color="common"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={data.talaq_id}
              label="Age"
              onChange={(e => {
                setData({ ...data, talaq: e?.target?.value })
                // getTaluk(e?.target?.value)
              })}
            >
              {taluk?.map(itm => {
                return (
                  <MenuItem value={itm}>{itm?.name}</MenuItem>
                )
              })
              }
            </Select></Typography><br/>

        <Typography style={{textAlign:'center'}}>Date Range</Typography><br/>
   
             <TextField type="date"
                   // defaultValue={dayjs(data?.start_date)}
                   defaultValue={dayjs( moment(data?.startDate)?.format('YYYY-MM-DD'))}
                    style={{ width: '20vw' }}
                    value={data.startDate}
                  
                    onChange={(e) => {
                      setData({ ...data, startDate: e?.target?.value })
                    }} />

                  <TextField type="date"
                defaultValue={data?.endDate?dayjs( moment(data?.endDate)?.format('YYYY-MM-DD')):dayjs( moment(data?.endDate)?.format('YYYY-MM-DD'))}
                    style={{ width: '20vw', marginLeft: "2rem" }}
                    value={data.endDate}
                  
                    // defaultValue={data.endDate}
                    onChange={(e) => {
                      setData({ ...data, endDate: e?.target?.value })
                    }} />
        </CardContent>
        <CardContent>
        <FormControl fullWidth>

        <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.funder_id == "" && "Select "}Funder
<Select fullWidth variant='standard' color="common"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    defaultValue={data.funder_id}
    required
    label="Select Funder"
    onChange={(e => {
        setData({ ...data, funder: e?.target?.value })
       
    })}
>
    {fund?.map(itm => {
        return (
            <MenuItem value={itm}>{itm?.name}</MenuItem>
        )
    })
    }
</Select>
</Typography>
</FormControl>
<Stack mt={3}>
                <FormControl fullWidth>
               
        <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.opsManager == "" && "Select "}Operation Manager
<Select fullWidth variant='standard' color="common"
        

                    // labelId="demo-simple-select-label"
                    //id="demo-simple-select"
                    defaultValue={data.opsManager}
                
                    value={data.opsManager}
                    label="Select Operation Manager"
                    onChange={(e => {
                      setData({ ...data, opsManager: e?.target?.value });
                      localStorage.setItem("opsManager", e?.target?.value)
                    })}
                  >
                    <MenuItem value="" default disabled>Choose Operation Manager</MenuItem>
                    {teamData?.list?.map(itm => {
                      return (
                        <MenuItem value={itm}>{itm?.first_name}</MenuItem>
                      )
                    })
                    }
                  </Select></Typography>
                </FormControl ></Stack >

                <Stack mt={3}>
                <FormControl fullWidth>
                 
        <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.trainerId == "" && "Select "}Trainers
<Select fullWidth variant='standard' color="common"
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={data.trainerId}
                
                    value={data.trainerId}
                    label="Select Operation Manager"
                    onChange={(e => {
                      setData({ ...data, trainer: e?.target?.value });
                      localStorage.setItem("trainerdata", e?.target?.value)
                    })}
                  >
                    <MenuItem value="" default disabled>Choose Trainer</MenuItem>
                    {listData?.list?.map(itm => {
                      return (
                        <MenuItem value={itm}>{itm?.first_name}</MenuItem>
                      )
                    })
                    }
                  </Select></Typography>
                </FormControl ></Stack >

                <Stack mt={3}>
                <FormControl fullWidth>
                 
        <Typography style={{ flexDirection: 'row', color: '#ed6c02' }} variant="subtitle1" gutterBottom>
            {data.funder_id == "" && "Select "}Gelathi Facilitator
<Select fullWidth variant='standard' color="common"

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={data.gelathiId}
                
                    value={data.gelathiId}
                    label="Select Gelathi Facilitator"
                    onChange={(e => {
                      setData({ ...data, gelathi: e?.target?.value });
                      localStorage.setItem("gelathidata", e?.target?.value)
                    })}
                  >
                    <MenuItem value="" default disabled>Choose Gelathi Faciliatator</MenuItem>
                    {gelathiData?.list?.map(itm => {
                      return (
                        <MenuItem value={itm}>{itm?.first_name}</MenuItem>
                      )
                    })
                    }
                  </Select></Typography>
                </FormControl ></Stack >
             
        </CardContent>
        <Button style={{ float: "right", color: 'white', marginRight: '160px', marginBottom: '10px', backgroundColor: '#ed6c02', }}
          onClick={() => props?.onDatasubmit(data)}>Submit</Button>
      </Card>
    </div>
  );
}
import axios from 'axios';

export default async function Filtersapirequest(props) {
    console.log('filtersrequest',props?.selectDATA)
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var response = []
    console.log(props,"propertiesssssss")
    // console.log(idvalue,"hyyyyyyyyyyy",roleid);
    const data = JSON.stringify({
        "role_id": role,
        "pageNum": 1,
        "emp_id": idvalue,
        "filter":props.selectDATA, 
        "end_date":"",
        "search":"",
        "project_id":263, 
        "gelathi_id":"", 
        "start_date":"", 
    });
    const config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getGFSessions.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };

   
    response = await axios(config)
        .then((response) => {
            return response?.data?.data
        })
        .catch((error) => {
            return null
        });
      console.log(response?.data,"responseeeeeeee")
    return await response;
}


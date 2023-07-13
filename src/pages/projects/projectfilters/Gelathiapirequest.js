import axios from 'axios';
import { baseURL } from 'src/utils/api';
export default async function Filtersapirequest(props) {
    var role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
    var response = []
    const data = JSON.stringify({
        "role_id": role,
        "pageNum": 1,
        "emp_id": idvalue,
        "filter":props.selectDATA, 
        "end_date":"",
        "search":"",
        "project_id":props?.data1?.project_id, 
        "gelathi_id":"", 
        "start_date":"", 
    });
    const config = {
        method: 'post',
        url: baseURL + 'getGFsessions',
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
    return await response;
}

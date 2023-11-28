import axios from 'axios';
import { baseURL, oldbaseURL } from 'src/utils/api';
import { useAuth } from 'src/AuthContext';
const Projectapi = (props) => {
    var role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
    var response = []
    const data = JSON.stringify({
        "role_id": role,
        "user_id": idvalue,
        "filter_id": JSON.stringify(props.selectDATA),
        "type": ""
    });
   
    const config = {
        method: 'post',
        url: baseURL+'getAllPeople',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`${props?.apikey}`
        },
        data
    };
  
    response = axios(config)

        .then((response) => {
            return response?.data?.list
        })
        .catch((error) => {
            return null
        });
        
    return response;
}

export default Projectapi;


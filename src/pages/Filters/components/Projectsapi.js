import axios from 'axios';
import { baseURL } from 'src/utils/api';
export default async function Projectapi(props) {
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
            'Content-Type': 'application/json'
        },
        data
    };
  
    response = await axios(config)

        .then((response) => {
            return response?.data?.list
        })
        .catch((error) => {
            return null
        });
        
    return await response;
}


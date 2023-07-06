import axios from 'axios';

export default async function Projectapi(props) {
    var role = JSON.parse(sessionStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(sessionStorage?.getItem('userDetails'))?.id;
    var response = []
    const data = JSON.stringify({
        "role_id": role,
        "pageNum": 1,
        "user_id": idvalue,
        "filter_id": props.selectDATA,
        "type": ""
    });
   
    const config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getAllPeople.php',
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


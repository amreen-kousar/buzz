import axios from 'axios';

export default async function Projectapi(props) {

    console.log("ptojrcyyyyy")
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var response = []
    
    // console.log(idvalue,"hyyyyyyyyyyy",roleid);
    const data = JSON.stringify({
        "role_id": role,
        // "filter_type": props.selectDATA,
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
            console.log(response,"responsefilters")
            return response?.data?.list
        })
        .catch((error) => {
            return null
        });
        
    return await response;
}


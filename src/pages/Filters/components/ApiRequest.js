import axios from 'axios';

export default async function ApiRequest(props) {
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var response = []
    console.log(props,"propertiesssssss")
    // console.log(idvalue,"hyyyyyyyyyyy",roleid);
    const data = JSON.stringify({
        "role_id": role,
        "filter_type": props.selectDATA,
        "pageNum": 1,
        "emp_id": idvalue
    });
    const config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getPeopleFilters.php',
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


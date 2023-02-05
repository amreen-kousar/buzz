import axios from 'axios'
export default async function ApiRequest(props) {
    var response = []
    const data = JSON.stringify({
        "role_id": 1,
        "filter_type": props.selectDATA,
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
    response = await axios(config)
        .then((response) => {
            return response?.data?.data
        })
        .catch((error) => {
            return null
        });

    return await response;
}


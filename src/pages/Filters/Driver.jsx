import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function Driver({ selectDATA, getData }) {

    const [fund, setFund] = useState();

    useEffect(() => {
        if (selectDATA) { funder() }
    }, [selectDATA])

    const funder = async () => {
        ApiRequest({ selectDATA: selectDATA }).then(res => setFund(res))
    }

    return (
        <ListTabledata data={fund} />
    )
}
import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
export default function BuzzTeam({ selectDATA, getData }) {
    const [buzzTeam, setBuzzTeam] = useState();
    useEffect(() => {
        if (selectDATA) { buzzTeamCall() }
    }, [selectDATA])
    const buzzTeamCall = async () => {
        ApiRequest({ selectDATA: selectDATA }).then(res => setBuzzTeam(res))
    }
    return (
        <ListTabledata data={buzzTeam} />
    )
}
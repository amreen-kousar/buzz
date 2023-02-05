import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function Participant({ selectDATA, getData }) {

  const [fund, setFund] = useState();

  useEffect(() => {
    participantData()
  }, [])

  const participantData = async () => {
    ApiRequest({ selectDATA: 10 }).then(res => setFund(res))
  }

  return (
    <ListTabledata data={fund} getData={getData} selectDATA={10} type="Participant" />
  )
}
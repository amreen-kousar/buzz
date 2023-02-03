import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function Funders({ selectDATA, getData }) {

  const [fund, setFund] = useState();

  useEffect(() => {
    funder()
  }, [])

  const funder = async () => {
    ApiRequest({ selectDATA: 2 }).then(res => setFund(res))
  }

  return (
    <ListTabledata data={fund} getData={getData} selectDATA={2} type="Funder" />
  )
}
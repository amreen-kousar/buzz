import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function SrOperationManager({ selectDATA, getData }) {

  const [fund, setFund] = useState();

  useEffect(() => {
    funder() 
  }, [])

  const funder = async () => {
    ApiRequest({ selectDATA: 12 }).then(res => setFund(res))
  }

  return (
    <ListTabledata data={fund} getData={getData} selectDATA={12} type="Sr . OperationManager"  />
  )
}
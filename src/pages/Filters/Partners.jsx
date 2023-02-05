import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
export default function Partners({ selectDATA, getData }) {

  const [partner, setPartner] = useState();

  useEffect(() => {
    partnerCall()
  }, [])

  const partnerCall = async () => {
    ApiRequest({ selectDATA: 1 }).then(res => setPartner(res))
  }
  return (
    <ListTabledata data={partner} getData={getData} selectDATA={1} type="Partner" />
  );
}
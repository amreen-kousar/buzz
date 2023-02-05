import { useState, useEffect } from 'react';
import ListTabledata from './components/ListTabledata';
import ApiRequest from './components/ApiRequest';

export default function GelathisLead({ selectDATA, getData }) {

  const [glead, setGlead] = useState();

  useEffect(() => {
    lead()
  }, [])

  const lead = async () => {
    ApiRequest({ selectDATA: 13 }).then(res => setGlead(res))
  }

  return (
    <ListTabledata data={glead} getData={getData} selectDATA={13} type="Gelathi Facilitator Lead" />
  );
}

import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function Trainers({ selectDATA, getData }) {
  const [train, setTrain] = useState();
  useEffect(() => {
    trainer()
  }, []
  )
  const trainer = async () => {
    ApiRequest({ selectDATA: 5 }).then(res => setTrain(res))

  }
  return (
    <ListTabledata data={train} getData={getData} selectDATA={5} type="Trainers" />
  );
}
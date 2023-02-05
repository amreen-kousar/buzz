import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function OperationManager({ selectDATA, getData }) {
  const [omdata, setOmData] = useState();

  useEffect(() => {
    OperationManage()
  }, [])

  const OperationManage = async () => {
    ApiRequest({ selectDATA: 4 }).then(res => setOmData(res))

  }
  return (
    <ListTabledata data={omdata} getData={getData} selectDATA={4} type="Operation Manager" />
  );
}
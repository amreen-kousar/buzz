import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';


export default function OperationManager({ selectDATA, getData }) {
  const [omdata, setOmData] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)

  useEffect(() => {
    OperationManage()
  }, [])

  const getSearchFilter = (e) => {
    setSearchInFilter(e)
  }

  const returnSearchFilter = () => {
    return searchInFilter
  }


  const OperationManage = async () => {
    ApiRequest({ selectDATA: 4 }).then(res => setOmData(res))

  }
  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={omdata} getData={getData} selectDATA={4} type="Operation Manager" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}
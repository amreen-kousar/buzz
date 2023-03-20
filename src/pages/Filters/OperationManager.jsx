import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';
import Projectapi from './components/Projectsapi';

export default function OperationManager({ selectDATA, getData,type }) {
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
    if(type=="Projects")
    {
      Projectapi({ selectDATA:4 }).then(res =>setOmData(res))
    }
    else{
      ApiRequest({ selectDATA: 4 }).then(res => setOmData(res))

    }
   
  }
  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={omdata} getData={getData} selectDATA={4} type="Operation Manager" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}
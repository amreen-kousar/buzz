import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';
import Projectapi from './components/Projectsapi';
export default function OperationManager({ selectDATA, getData,type,date,endDate,dateValue,endDateValue}) {
  const [omdata, setOmData] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)
  useEffect(() => {
    OperationManage()
  }, [])
  const getSearchFilter = (e) => {
    setSearchInFilter(e)
    console.log(e,"propee")
  }
  const returnSearchFilter = () => {
    console.log(searchInFilter,"propertiess")
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
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e),console.log(getSearchFilter(e),"elfehf") }} />
      <ListTabledata data={omdata} getData={getData} date={date} endDate={endDate} dateValue={dateValue} endDateValue={endDateValue} selectDATA={4} type="Operation Manager" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}
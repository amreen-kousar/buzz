import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';
import Projectapi from './components/Projectsapi';

export default function Funders({ selectDATA, getData,type ,date,endDate,dateValue,endDateValue}) {

  const [fund, setFund] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)


  useEffect(() => {
    funder()
  }, [])

  const getSearchFilter = (e) => {
    setSearchInFilter(e)
  }

  const returnSearchFilter = () => {
    return searchInFilter
  }

  const funder = async () => {
    console.log(type,"typeeeeeeeeeeeee")

    if(type=="Projects")
    {
      console.log("ptooo")
      Projectapi({ selectDATA:8 }).then(res =>setFund(res))
    }
    else{
      ApiRequest({ selectDATA: 2 }).then(res => setFund(res))
    }
    
    console.log(fund,"funderssssss");
  }

  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={fund} getData={getData} date={date} endDate={endDate} dateValue={dateValue} endDateValue={endDateValue} selectDATA={2} type="Funder" returnSearchFilter={returnSearchFilter} />
    </div>
  )
}
import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';
export default function Partners({ selectDATA, getData, date,endDate,dateValue,endDateValue}) {
  const [partner, setPartner] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)
  useEffect(() => {
    partnerCall()
  }, [])
  const getSearchFilter = (e) => {
    setSearchInFilter(e)
  }
  const returnSearchFilter = () => {
    return searchInFilter
  }
  const partnerCall = async () => {
    ApiRequest({ selectDATA: 1 }).then(res => setPartner(res))
  }
  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={partner} getData={getData} date={date} endDate={endDate} dateValue={dateValue} endDateValue={endDateValue} selectDATA={1} type="Partner" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}
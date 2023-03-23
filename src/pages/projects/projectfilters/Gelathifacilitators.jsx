import { useState, useEffect } from 'react';
import Listdata from './Listdata';
import Filtersapirequest from './Gelathiapirequest';
export default function GelathiFacilitators({ selectDATA, getData,type }) {

  const [glead, setGlead] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)


  useEffect(() => {
    lead()
  }, [])

  const lead = async () => { 
  
    Filtersapirequest({ selectDATA: 6 }).then(res => setGlead(res))
  
}
  const getSearchFilter = (e) => {
    setSearchInFilter(e)
  }

  const returnSearchFilter = () => {
    return searchInFilter
  }

  return (
    <div>
      {/* <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} /> */}
      <Listdata data={glead} getData={getData} selectDATA={6} type="Gelathi Facilitator" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}

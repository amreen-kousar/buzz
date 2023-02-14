import { useState, useEffect } from 'react';
import ListTabledata from './components/ListTabledata';
import ApiRequest from './components/ApiRequest';
import SearchCommon from './components/SearchCommon';

export default function Gelathis({ selectDATA, getData }) {

  const [glead, setGlead] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)


  useEffect(() => {
    lead()
  }, [])

  const lead = async () => {
    ApiRequest({ selectDATA: 6 }).then(res => setGlead(res))
  }
  const getSearchFilter = (e) => {
    setSearchInFilter(e)
  }

  const returnSearchFilter = () => {
    return searchInFilter
  }

  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={glead} getData={getData} selectDATA={13} type="Gelathi Facilitator" returnSearchFilter={returnSearchFilter} />
    </div>
  );
}

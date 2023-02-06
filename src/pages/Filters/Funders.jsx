import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';


export default function Funders({ selectDATA, getData }) {

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
    ApiRequest({ selectDATA: 2 }).then(res => setFund(res))
  }

  return (
    <div>
      <SearchCommon getSearchFilter={(e) => { getSearchFilter(e) }} />
      <ListTabledata data={fund} getData={getData} selectDATA={2} type="Funder" returnSearchFilter={returnSearchFilter} />
    </div>
  )
}
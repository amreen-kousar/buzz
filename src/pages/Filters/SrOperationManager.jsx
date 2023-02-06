import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';

export default function SrOperationManager({ selectDATA, getData }) {

  const [fund, setFund] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)


  useEffect(() => {
    funder()
  }, [])

  const funder = async () => {
    ApiRequest({ selectDATA: 12 }).then(res => setFund(res))
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

      <ListTabledata data={fund} getData={getData} selectDATA={12} type="Sr . OperationManager"
        returnSearchFilter={returnSearchFilter} />
    </div>)
}
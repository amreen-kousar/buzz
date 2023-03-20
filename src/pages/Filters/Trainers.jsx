import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';
import SearchCommon from './components/SearchCommon';
import Projectapi from './components/Projectsapi';
export default function Trainers({ selectDATA, getData,type}) {
  const [train, setTrain] = useState();
  const [searchInFilter, setSearchInFilter] = useState(null)

  useEffect(() => {
    trainer()
  }, []
  )
  const trainer = async () => {
    if(type=="Projects")
    {
      Projectapi({ selectDATA:5 }).then(res =>setTrain(res))
    }
    else{
    ApiRequest({ selectDATA: 5 }).then(res => setTrain(res))
    }
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

      <ListTabledata data={train} getData={getData} selectDATA={5} type="Trainers" returnSearchFilter={returnSearchFilter} />
    </div>);
}
import { useState, useEffect } from 'react';
import ApiRequest from './components/ApiRequest';
import ListTabledata from './components/ListTabledata';

export default function Projects({ selectDATA, getData }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    project()
  }, []
  )
  const project = async () => {
    ApiRequest({ selectDATA: 3 }).then(res => setProjects(res))
  }
  return (
    <ListTabledata data={projects} getData={getData} selectDATA={3} type="Projects" />
  );
}
import React from 'react';
import SearchResults from "../containers/SearchResults";
import { useParams } from "react-router-dom";

const News = () => {
  let { id } = useParams();

  return (

  <section>
    <h3>{ id }</h3>
      <div>
        <SearchResults />
      </div>
    </section>
  )
}



export default News;
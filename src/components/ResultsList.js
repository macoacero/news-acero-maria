import React, { useEffect } from 'react';
import moment from 'moment';
import DefaultImg from '../images/news.png';
import { useParams } from "react-router-dom";
import Loading from '../images/loading.gif'


const ResultsList = ({ articlesByCategory, articlesByWord, onLoad, hasError, isLoading }) => {

  let { id } = useParams();

  useEffect(() => {
  
    if(id === "home"){
      id = 0
    } else if (id === "deportes"){
      id = 1
    } else if (id === "diseno"){
      id = 2
    } else if (id === "espectaculos"){
      id = 3
    } else if (id === "internacionales"){
      id = 4
    } else if (id === "politica"){
      id = 5
    } else if (id === "tecnologia"){
      id = 6
    }
    onLoad(id);
  }, [id]);

  if (hasError) {
    return (
      <div className="container">
        <h6>Lo sentimos. No hay resultados que mostrar</h6>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container preloader">
        <img className="preloader" src={Loading}/>
      </div>
    )
  }

  const articles = articlesByWord.length > 0 ?  articlesByWord : articlesByCategory > 0 ? articlesByCategory : articlesByCategory;

  return (
    <div className="container-fluid">
       <div className="d-flex flex-wrap">
        {articles.map((news, i) =>
          <div className="col-sm-4" key={i}>
            <div className="card">
              <img src={news.img_url ? news.img_url : DefaultImg}/>
              <div className="text-box">
                <span className="portal">{news.source_name}</span>
                <div className="title">
                  <a href={news.html_url} target="blank">{news.title}</a>
                </div>
                {news.url !== '' ? <a target="blank" className="but-more" href={news.url}>Ver más</a> : null}
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default ResultsList;


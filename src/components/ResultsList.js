import React, { useEffect } from 'react';
import moment from 'moment';
import DefaultImg from '../images/news.png';
import { useParams } from "react-router-dom";


const ResultsList = ({ articles, onLoad, hasError, isLoading }) => {

  let { id } = useParams();

  useEffect(() => {
  
    if(id === "Home"){
      id = 0
    } else if (id === "Deportes"){
      id = 1
    } else if (id === "Diseño"){
      id = 2
    } else if (id === "Espectáculos"){
      id = 3
    } else if (id === "Internacionales"){
      id = 4
    } else if (id === "Política"){
      id = 5
    } else if (id === "Tecnología"){
      id = 6
    }

    onLoad(id);
    console.log(id)

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
      <div className="container">
        <h6>Cargando…</h6>
      </div>
    )
  }

  console.log('articles List',articles)

  return (
    <div className="container-fluid">
       <div className="d-flex flex-wrap">
        {articles && articles.map((news, i) =>
          <div className="col-sm-4" key={i}>
            <div className="card">
              <img src={news.img_url ? news.img_url : DefaultImg}/>
              <div className="text-box">
                <span className="portal">{news.source_name}</span>
                <span className="badge badge-pill">{moment(news.date).format('L')}</span>
                <div className="title">
                  <a href={news.html_url} target="blank">{news.title}</a>
                </div>
                {news.url !== '' ? <a target="blank" href={news.url}>Ver más</a> : null}
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default ResultsList;


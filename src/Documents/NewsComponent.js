import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const NewsComponent = (props) => {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(1);

  // document.title = `V News - ${capitalizeFirstLetter(props.category)}`;

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // An async function can have await method i.e. the function can wait for the promises to resolve
  // cdm function will run after the render


  const updateNews = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&from=2023-08-08&apiKey=${props.apiKey}&page=${page}&pageSize=6`;

    let data = await fetch(url);

    let parsedData = await data.json();

    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setpage(page + 1);

  }

  useEffect(() => {

    updateNews();

  }, []);

  const fetchMoreData = async () => {

    setpage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&from=2023-08-08&apiKey=${props.apiKey}&page=${page}&pageSize=6`;

    setloading(true)

    let data = await fetch(url);

    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  }


  return (
    <>
      <div className="mx-auto">
        <h3 className="a mx-auto d-flex justify-content-center" style={{ marginTop: "6rem" }}>Get Updated With The Latest News</h3>
        <span><h4 className="my-5 d-flex justify-content-center" >Top {props.title} HeadLines</h4></span>
        {loading && <Spinner/>}



        {/* Infinite Scroll Component */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4 className="text-center"><Spinner/></h4>}
        >

          <div className="row mx-5 my-3 px-5 d-flex justify-content-between">

            {articles.map((element) => {
              return <div className="col md-5 d-flex justify-content-center" key={element.url}>

                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 77) : ""} imgsrc={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
              </div>
            })}

          </div>

        </InfiniteScroll>

      </div>
    </>
  )

}

export default NewsComponent

NewsComponent.propTypes = {
  
  title: PropTypes.string
}

NewsComponent.defaultProps = {

  category: "general"
}
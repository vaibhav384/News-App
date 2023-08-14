import React from 'react'

const NewsItem = (props) => {

    let {title, imgsrc, description, newsurl, author, date} = props;
    
    return ( 
        <div>
          <div className="card my-3" style={{height: "33rem", width: "18rem"}}>
            <img src={imgsrc} style={{height: "13rem" }} className="card-img-top" alt="..."/>
            <div className="card-body">
              {/* or props.title, props.description krke bhi likh sakte h */}
              <h5 className="card-title">{title}... <span className="badge badge-dark text-center" style={{height: "1.5rem", width: "3rem", color:"white", backgroundColor: "green"}}>New</span></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
              <a target="_blank" rel="noreferrer" href={newsurl} className="btn btn-primary">Know More About This</a>
            </div>
          </div>
        </div>
    )
}

export default NewsItem

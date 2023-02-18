import React from 'react'
import './card.css'

const card =(props)=> {
  return (
    <div id='card'>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="details">
        <h3>{props.title}</h3>
        <div className="underline"></div>
        <div className="par"><p>{props.par}</p></div>
        <h6 style={{color:"white",paddingTop:"20px",marginBottom:"0px"}}>Stack</h6>
        <div className="btn">
          <button>{props.s1}</button>
          <button>{props.s2}</button>
          <button>{props.s3}</button>
        </div>
        <div className="link">
          <a href="https://moviesanin.netlify.app"><i class="fa-brands fa-github"></i></a>
          <a href="https://fuhadsanin.github.io/collegesitecec/"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default card
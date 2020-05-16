import React from 'react'
import Card from './Card'


/**
* @author
* @function LeftSide
**/

const LeftSide = (props) => {
  return(
    <div className="box col-lg-9 col-sm-9">
            <nav className="navbar navbar-expend-lg bg">
                <button className="btn">Reviews</button>
                <button className="btn">event</button>
                <button className="btn">Ask a Review</button>
                <select className="btn"  >
                <option>
                    More
                </option>
                <option>
                    More
                </option>
                <option>
                    More
                </option>
                </select>
            </nav>
            
            <div className="row">
                <Card id='1'/>
                <Card id='2'/>
                <Card id='3'/>
                <Card id='1'/>
                <Card id='3'/>
                <Card id='1'/>
                <Card id='2'/>
                <Card id='3'/>
            </div>
    </div>
   )

 }

export default LeftSide
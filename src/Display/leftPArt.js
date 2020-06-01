import React, { Component } from 'react'
import Card from './Card'
import Detail from './../Detail.json'


/**
* @author
* @function LeftSide
**/

          /** to change the Companies change the data of Detail.json */

class LeftSide extends Component {
    
  render(){
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
               
                {
                     Detail.Companies.map(card => <Card key={card.id} id={card.id}></Card>)
                }


            </div>
    </div>
   )

 }
}
export default LeftSide
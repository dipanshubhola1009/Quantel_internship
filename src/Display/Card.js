import React from 'react';
import './card.css'
import Detail from './../Detail.json';

/**
* @author
* @function Card
**/

const Card = (props) => {
  const  id = props.id;
  const Data = Detail.Companies.find(data=>data.id==id);
  return(
    <React.Fragment>
        <div className="col-lg-3 col-sm-6">
            <div className='myCard'>
              <img src={require('./../picture/'+Data.Picture)} className="Cpic" width="100%" height="180px"></img>
              <div className="Detail">
                 <div className="CName">
                     {Data.Name}
                 </div>
                 <div className="CProfile">
                     {Data.Position}
                 </div>
                 <div className="CRating">
                    <b>Rating:</b> {Data.Rating}/5
                 </div>

              </div>
            </div>
        </div>
    </React.Fragment>
   )

 }

export default Card
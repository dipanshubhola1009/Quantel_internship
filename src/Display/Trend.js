import React from 'react';
import './Trend.css'
import Detail from './../Detail.json';

/**
* @author
* @function Trend
**/

const Trend = (props) => {
  const  id = props.id;
  const Data = Detail.Trending.find(data=>data.id==id);
  return(
    <React.Fragment>
        <div className='myTrend'>
              
            <div className="row">
                
                <div className="col-4">
                <img src={require('./../picture/'+Data.Picture)} className="pic"  width="100%" height="95%"></img>
                </div>
                    
                    
                <div className='col-8'>
                
                    <div className="Name">
                        {Data.Name}
                    </div>
                    <div className="row">
                <p>
                    {Data.Description}
                </p>
            </div>
                </div>  

            </div>
            
            
        </div>
    </React.Fragment>
   )

 }

export default Trend
import React, { Component } from 'react'
import './Rightside.css'
import Detail from './../Detail.json'
import Trend from './Trend'
/**
* @author
* @function Rightside
**/

          /** to change the Trendings change the data of Detail.json */

class Rightside extends Component {

  render(){
  return(
    <div className=" box col-lg-3 col-sm-3">
                <nav className="navbar navbar-expend-lg bg">
                    <input className="BoxSearch" value="Search" ></input> 
                    <img className="rounded-circle" src={require('./../picture/filter.jpg')} width="40px" height="40px"></img>
                </nav>

                <form className='Form'>
                  
                    <label>Select Company</label>
                    <select className="BoxSearch1">
                      <option>
                        Wipro
                      </option> 
                      <option>
                        Oracle
                      </option>
                      <option>
                        Amazon
                      </option>   
                    </select>
          <br></br>
          <br></br>
                    <label>Select Position</label>
                    <select className="BoxSearch1">
                      <option>
                        Web Developer
                      </option> 
                      <option>
                        Front-End Developer
                      </option>
                      <option>
                        Data-Analyst
                      </option>   
                    </select>
            
                </form>
           <br>
           </br>
           <br>
           </br>
          <nav className="navbar navbar-expend-lg bg">
            <span >Trending  
            <img className="rounded-circle" src={require('./../picture/trending.jpg')} width="40px" height="40px"></img>
             </span>
          </nav>   

          {
            Detail.Trending.map(card => <Trend id={card.id}></Trend>)
          }
    </div>
   )

 }
}
export default Rightside
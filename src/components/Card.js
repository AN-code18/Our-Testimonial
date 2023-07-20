import React from "react";
import {FaQuoteLeft , FaQuoteRight }  from 'react-icons/fa';
import '../styles/Card.css'

const Card = (props) => {
  let review = props.reviews;
  return (
    <div className="container">
      <div>
        <img src={review.image} alt="img"/>
        

        <div style={{textAlign:"center" , marginTop:"28px"}}>
          <p className="name-para">{review.name}</p>
        </div>
        <div style={{textAlign:"center" , marginTop:"16px"}}>
          <p className="job">{review.job}</p>
        </div>

        <div className="icon"><FaQuoteLeft /></div>
        <div className="text-div">{review.text}</div>
        <div className="icon"><FaQuoteRight /></div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../styles/Testimonial.css";

const Testimonial = (props) => {
    let reviews = props.reviews;

    const [index , setIndex] = useState(0);

    function leftShiftHandler () {
      if(index -1 < 0){
        setIndex(reviews.length -1);
      }
      else{
        setIndex(index-1);
      }
    }
    function rightShiftHandler() {
        if(index + 1 > reviews.length){
            setIndex(0);
          }
          else{
            setIndex(index + 1);
          }
    }

    function supriseHandler (){
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

  
  return (
    <div className="card">
      <Card reviews={reviews[index]} />
      <div className="button-shift">
        <button onClick={leftShiftHandler} className="btn">
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className="btn">
          <FiChevronRight />
        </button>
      </div>

      <div style={{marginTop:"24px"}}>
        <button onClick={supriseHandler} className="suprise-btn">Suprise Me</button>
      </div>
    </div>
  );
};

export default Testimonial;

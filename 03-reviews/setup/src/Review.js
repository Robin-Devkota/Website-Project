import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
//not rendering hole list rendering only one person from arry when icon is clicked

const Review = () => {
  //use state initial value zero mean data ma bhako first person profile showing
  
  const [index, setIndex] = useState(0);
  //people has index as array bc to see new person in each index change
  const {name, job, image, text} = people[index];
  //fuction to handel if array is less or more than 4 AS  we have max 4 person  
  //more than 4 or going below four causes error
  const checkNumber=(number)=>{
    if (number > people.length-1) {
      return 0;
    } if (number < 0) {
      return people.length - 1;
    }
     return number;
  };
  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      return checkNumber(newIndex) ;
    });
  };
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber=Math.floor(Math.random() * people.length);
   if(randomNumber===index){
     randomNumber=index+1
   }
   setIndex(checkNumber(randomNumber));
  } 
  return <article className='review'>
    
<div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
        </span>
    </div>
  <h4 className="author">{name}</h4>
  <p className="job">{job}</p>
  <p className="info">{text}</p>
  <div className="button-container">
    <button className="prev-btn" onClick={prevPerson}>
      <FaChevronLeft />
    </button>
    <button className="next-btn"  onClick={nextPerson}>
      <FaChevronRight />
    </button>
  </div>
    <button className="random-btn"
    onClick={randomPerson}>Suprise Me</button>
  </article>;
};

export default Review;

import React from 'react';
//destructuring people props and maping it to display list
const List = ({people}) => {
  return (
    <>
     {/* maping with help of arrow function after arrow contain return part*/}
     {people.map((person)=>{
       const {id,name,age,image} = person;//destructuring props received
       return(
         <article  className="person">
         <img src={image} alt={ name} />
         <div>
           <h4>{name}</h4>
           <p>{age} Years</p>
         </div>
         </article>
       )

     })}
    </>
  );
};

export default List;

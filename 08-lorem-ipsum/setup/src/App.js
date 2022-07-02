import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handelSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);//convert string to number
    if(count<=0){
     amount= 1
    }
    if (count>8){
      amount=8
    }
    setText(data.slice(0,amount));
  
  }

  return (
 <section className="section-center">
   <h3>tired of boring lorem ipsum?</h3>
   <form className="lorem-form" onSubmit={handelSubmit}>
    <label htmlFor="amount">
      Paragraph:
    </label>
    <input type="number" name="amount" id="amount" 
    value={count}
    onChange={(e)=>setCount(e.target.value)}/>
    <button type='submit' className='btn'>generate</button>
   </form>
 <article className="lorem-text">
  {text.map((item,index)=>{
    return <p key={index}>{item}</p>
  })}
 </article>
 </section>
    )
}

export default App;

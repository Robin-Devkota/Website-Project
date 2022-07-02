import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  console.log(data)
  return <main>
    
    <div className="container">
    <h3 className="container">Question and Answers About Login</h3>
  <section className='info'>
    {questions.map(question=>{
    return<SingleQuestion key={question.id} {...question}/>
      })}

  </section>
  </div>
  </main>;
}

export default App;

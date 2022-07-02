import React, { useState } from 'react';
import data from './data';
import List from './List';
//we store all data in a state and pass state  to list as a props
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3> {people.length} {people.length >1 ? "Birthdays":"Birthday"}  Today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear All  </button>

      

      </section>
    </main>
  );
}

export default App;

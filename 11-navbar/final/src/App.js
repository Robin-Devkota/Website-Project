import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './About';
function App() {
  return (
    <>
<Router>
<Navbar/>
<Routes>
<Route path="/About" element={<h1><About /></h1>} target="_blank" />
</Routes>
</Router>


      
      
    </>
  );
}

export default App;

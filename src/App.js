import React from 'react'
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Error from './pages/Error'
import SingleCockTail from './pages/SingleCockTail'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCockTail />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

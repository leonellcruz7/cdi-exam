import { useState } from 'react';
import './App.css';
import ImageCon from './Components/ImageConA';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageView from './Components/ImageA';
import ImageA from './Components/ImageA'
import ImageB from './Components/ImageB'
import ImageC from './Components/ImageC'
import ImageD from './Components/ImageD'
import ImageE from './Components/ImageE'
import ImageF from './Components/ImageF'
import ImageG from './Components/ImageG'
import ImageH from './Components/ImageH'
import ImageI from './Components/ImageI'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageCon />} />
          <Route path='/a' element={<ImageA />} />
          <Route path='/b' element={<ImageB />} />
          <Route path='/c' element={<ImageC />} />
          <Route path='/d' element={<ImageD />} />
          <Route path='/e' element={<ImageE />} />
          <Route path='/f' element={<ImageF />} />
          <Route path='/g' element={<ImageG />} />
          <Route path='/h' element={<ImageH />} />
          <Route path='/i' element={<ImageI />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

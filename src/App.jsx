import { useState } from 'react';
import './App.css';
import ImageCon from './Components/ImageCon';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageView from './Components/ImageView';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageCon />} />
          <Route path='/view' element={<ImageView />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

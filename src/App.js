import './App.css';
import React from 'react';
import TopBar from './TopBar';
import ProductPreview from './ProductPreview';
import ProductInfo from './ProductInfo';

function App() {

  return (
    <div className="App">
      <TopBar/>

      <div className='mainContainer'>
        <ProductPreview/>
        <ProductInfo/>

      </div>

    </div>
  );
}

export default App;

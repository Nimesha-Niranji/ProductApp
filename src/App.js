import './App.css';
import React from 'react';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='TopBar'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='Amazon Logo'/>
        </nav>
      </header>

      <div className='mainContainer'>
        <div className='productPreview'>
          <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
          <div className='featureData'>
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
        </div>
        <div className='productData'>
          <h1 className='productTitle'>{ProductData.title}</h1>
          <p className='productDes'>{ProductData.description}</p>
          <h3 className='sectionHeading'>Select Color</h3>
          <div>
            <img className={['productImg', 'selectedProductImg'].join(' ')} src='https://imgur.com/PTgQlim.png' alt='Red Colored Watch'/>
            <img className='productImg' src='https://imgur.com/Mplj1YR.png' alt='Blue Colored Watch'/>
            <img className='productImg' src='https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch'/>
            <img className='productImg' src='https://imgur.com/iOeUBV7.png' alt='Black Colored Watch'/>
          </div>
          <h3 className='sectionHeading'>Features</h3>
          <div>
            <button className={['featureItem','selectedFeatureItem'].join(' ')}>Time</button>
            <button className='featureItem'>Heart rate</button>
          </div>
          <button className='primaryBtn'>Buy Now</button>
        </div>
      </div>

    </div>
  );
}

export default App;

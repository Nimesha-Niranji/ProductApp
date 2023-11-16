import './App.css';
import React, {Component} from 'react';
import TopBar from './TopBar/TopBar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductData from './Utils/ProductData';

class App extends Component {

  state = {
    productData : ProductData,
    currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection : true,
  }
  render (){
    return (
      <div className="App">
        <TopBar/>
  
        <div className='mainContainer'>
            <ProductPreview currentPreviewImage ={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/>
          

          <div className='ProductData'>
            <ProductInfo data={this.state.productData}/>
          </div>
          
          
  
        </div>
  
      </div>
    );
    }
}

export default App;

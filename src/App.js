import './App.css';
import React, {Component} from 'react';
import TopBar from './TopBar/TopBar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductData from './Utils/ProductData';

class App extends Component {

  state = {
    productData : ProductData,
    //currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePos:0,
    //showHeartBeatSection : false,
    currentSelectedFeature : 0
  }

  onColorOptionClick = (pos) => {
    //const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClich = (pos) => {
    {/*console.log(pos)
    let updatedState = false;
    if(pos === 1){
      updatedState = true;
    }
  this.setState({showHeartBeatSection : updatedState});*/}
    this.setState({currentSelectedFeature: pos});
  }

  render (){
    return (
      <div className="App">
        <TopBar/>
  
        <div className='mainContainer'>
            <ProductPreview currentPreviewImage ={
              this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
              currentSelectedFeature={this.state.currentSelectedFeature}
              currentPreviewImagePos = {this.state.currentPreviewImagePos}
              />
          

          <div className='ProductData'>
            <ProductInfo data={this.state.productData} 
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos = {this.state.currentPreviewImagePos}
            onFeatureItemClich = {this.onFeatureItemClich}
            currentSelectedFeature = {this.state.currentSelectedFeature} />
          </div>
          
          
  
        </div>
  
      </div>
    );
    }
}

export default App;

import React from 'react';
import classes from './ProductInfo.module.css';

const ProductInfo = (props) => {
  const colorOptions = props.data.colorOptions.map((item,pos) =>{
    const classArr = [classes.productImg]
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.selectedProductImg);
    }
    return(
      <img key ={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
    );
  })

  const featureList = props.data.featureList.map((item,pos) =>{
    const classArr = [classes.featureItem]

    if(pos === 1 && props.currentSelectedFeature){
      classArr.push(classes.selectedFeatureItem);
    }else if(pos === 0 && !props.currentSelectedFeature){
      classArr.push(classes.selectedFeatureItem);
    }
    // if(pos === 1 && props.currentSelectedFeature){
    //   classArr.push(classes.selectedFeatureItem);
    // }  
    return(
      <button onClick={() => props.onFeatureItemClich(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
    );
  })

  return (
    <div>
          <h1 className={classes.productTitle}>{props.data.title}</h1>
          <p className={classes.productDes}>{props.data.description}</p>
          <h3 className={classes.sectionHeading}>Select Color</h3>

          <div>
            {colorOptions}

            {/*
            <img className={[classes.productImg, classes.selectedProductImg].join(' ')} src='https://imgur.com/PTgQlim.png' alt='Red Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/Mplj1YR.png' alt='Blue Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/iOeUBV7.png' alt='Black Colored Watch'/>
            */}

          </div>

          <h3 className={classes.sectionHeading}>Features</h3>

          <div>
            {featureList}
          </div>

          <button className={classes.primaryBtn}>Buy Now</button>
        </div>
  )
}

export default ProductInfo

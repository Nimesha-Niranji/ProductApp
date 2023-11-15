import React from 'react';
import classes from './ProductInfo.module.css';
import ProductData from './ProductData';

const ProductInfo = () => {
  return (
    <div className={classes.productData}>
          <h1 className={classes.productTitle}>{ProductData.title}</h1>
          <p className={classes.productDes}>{ProductData.description}</p>
          <h3 className={classes.sectionHeading}>Select Color</h3>

          <div>
            <img className={[classes.productImg, classes.selectedProductImg].join(' ')} src='https://imgur.com/PTgQlim.png' alt='Red Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/Mplj1YR.png' alt='Blue Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch'/>
            <img className={classes.productImg} src='https://imgur.com/iOeUBV7.png' alt='Black Colored Watch'/>
          </div>

          <h3 className={classes.sectionHeading}>Features</h3>

          <div>
            <button className={[classes.featureItem,classes.selectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.featureItem}>Heart rate</button>
          </div>

          <button className={classes.primaryBtn}>Buy Now</button>
        </div>
  )
}

export default ProductInfo

import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinite = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return (
    <div className={classes.productPreview}>
          <img src={props.currentPreviewImage} alt='Product Preview'/>

          {
            props.heartBeatSection ?
            (<div className={classes.heartBeatSection}>
            <i className="fa-solid fa-heart-pulse"></i>
            <p>78</p>
            </div>):
          (<div className={classes.timeSection}>
            <p>{`${currentHour}:${currentMinite}`}</p>
          </div>)

          }
          
          

          

        </div>
  )
}

export default ProductPreview

import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating, trackImage }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showImage, setShowImage] = useState(false);

  const priceTracker = () => {
    setShowImage(true);
  };

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }, 
    });
  };

  const closeTracker = () => {
    setShowImage(false);
  };

  return (
    <div className={`product ${showImage ? 'product--hidden' : ''}`}>
      {!showImage && (
        <>
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div> 
          <img src={image} alt="" />

          <div className="product__buttons">
            <button onClick={addToBasket}>Add to Basket</button>
            <button onClick={priceTracker}>Track Price</button>
          </div>
        </>
      )}

      {showImage && (
        <div className="product__tracker">
          <img
            // src={trackImage}
            src = "https://www.thetechbasket.com/wp-content/uploads/ccc-price-history-graph.jpg"
            style={{ width: '400px', height: '300px' }}
            alt="Tracked Price"
            onClick={closeTracker}  
          />
        </div>
      )}
    </div>
  );
}

 export default Product;


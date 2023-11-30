import React from 'react'
import "./Product.css"
import { useStateValue } from '../providers/StateProvider'


export const Product = ({id,title,product_image,price,rating}) => {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type : "Add_To_Basket",
      iteme : {
        id: id,
        title: title,
        image: product_image,
        price: price,
        rating: rating
      }
    })
  };


  return (
    <div className='product'>
      <div className='prodcut__info'>
        <p>{title}</p>
        <p className='prodcut__price'>
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className='prodcut__rating'>
          {
            Array(rating).fill().map((_, i) => (
              <p> ⭐ </p>
            ))
          }
        </div>
      </div>
      <img className = "product_image" src={product_image} alt='Product_Image'/>
      <button className = "product_addtoCart" onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product;

import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const goToProductDetail=()=>{
      navigate(`/product/${item.id}`);
  }

  return (
    <div onClick={goToProductDetail}>
      <img src={item.img} className='item-card' />
      <div>{item.title}</div>
      <div>\{item.price}</div>
      <div>{item.size}</div>
      <div>{item.new == true ? "신제품":""}</div>
      <div>{item.choice == true ? "true":"false"}</div>
      
    </div>
  );
};

export default ProductCard

import React from 'react';
import { Helmet } from 'react-helmet';
import "../ProductDetails/ProductDetails.css"
import { useState } from 'react';
// ...



const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Logic xử lý thêm sản phẩm vào giỏ hàng
    // ...
    console.log('Added to cart:', quantity);
  };
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='img-container'>
          <img src="https://i.pinimg.com/originals/fd/30/48/fd3048a75fce253abfcddcbecc82e8e7.jpg" alt="Hình ảnh sản phẩm" className='image' />
        </div>
        <div className='info-container'>
          <h1 className='title'>GIÀY NIKE</h1>
          <p className='desc'>Nike là thương hiệu hàng đầu trong lĩnh vực giày dép, luôn nắm bắt xu hướng thời đại và thiết kế tinh tế. Chất lượng giày Nike chính hãng rất cao, đem lại sự thoải mái và độ bền tuyệt vời. Với giá cả hợp lý, Nike mang đến trải nghiệm tốt nhất cho khách hàng. </p>
          <p className='price'>Giá: $99</p>
          <div className='filter-container'>
            <div className='filter'>
              <span className='filter-title'>Size</span>
              <select className='filter-size'>
                <option className='filter-size-option'>35</option>
                <option className='filter-size-option'>36</option>
                <option className='filter-size-option'>37</option>
                <option className='filter-size-option'>38</option>
                <option className='filter-size-option'>39</option>
                <option className='filter-size-option'>40</option>
                <option className='filter-size-option'>41</option>
                <option className='filter-size-option'>42</option>
              </select>
            </div>
          </div>
          <div className='add-container'>
              <div className='amount-container'>
                <div className='amount'  onClick={handleDecrease}>-</div>
                 <span>{quantity}</span>
                <div className='amount' onClick={handleIncrease}>+</div>
              </div>
            <button className='button' onClick={handleAddToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Helmet>
        <meta property="og:title" content="GIÀY NIKE" />
        <meta property="og:image" content="https://i.pinimg.com/originals/fd/30/48/fd3048a75fce253abfcddcbecc82e8e7.jpg" />
        <meta property="og:description" content="Nike là thương hiệu hàng đầu trong lĩnh vực giày dép, luôn nắm bắt xu hướng thời đại và thiết kế tinh tế. Chất lượng giày Nike chính hãng rất cao, đem lại sự thoải mái và độ bền tuyệt vời. Với giá cả hợp lý, Nike mang đến trải nghiệm tốt nhất cho khách hàng." />
      </Helmet>
    </div>
  );
};

export default ProductDetails;

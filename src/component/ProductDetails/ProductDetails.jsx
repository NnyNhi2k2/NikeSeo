import React from 'react';
import { Helmet } from 'react-helmet';
import "../ProductDetails/ProductDetails.css"





const ProductDetails = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='img-container'>
          <img src="https://i.pinimg.com/originals/fd/30/48/fd3048a75fce253abfcddcbecc82e8e7.jpg" alt="Hình ảnh sản phẩm" className='image' />
        </div>
        <div className='info-container'>
          <h1 className='title'>Tên sản phẩm</h1>
          <p className='desc'>Mô tả sản phẩm</p>
          <p className='price'>Giá: $99</p>
          <div className='filter-container'>
            <div className='filter'>
              <span className='filter-title'>Color</span>
              <div className='filter-color' color='black'></div>
              <div className='filter-color' color='darkblue'></div>
              <div className='filter-color' color='white'></div>
            </div>
            <div className='filter'>
              <span className='filter-title'>Size</span>
              <select className='filter-size'>
                <option className='filter-size-option'>35</option>
                <option className='filter-size-option'>36</option>
                <option className='filter-size-option'>37</option>
                <option className='filter-size-option'>38</option>
                <option className='filter-size-option'>39</option>
              </select>
            </div>
          </div>
          <div className='add-container'>
            <div className='amount-container'>
              <div className='amount'>-</div>
              <span>1</span>
              <div className='amount'>+</div>
            </div>
            <button className='button'>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Helmet>
        {/* Thẻ meta Open Graph */}
        <meta property="og:title" content="Tên sản phẩm" />
        <meta property="og:image" content="path/to/https://i.pinimg.com/originals/fd/30/48/fd3048a75fce253abfcddcbecc82e8e7.jpgproduct-image.jpg" />
        <meta property="og:image" content="URL_hình_ảnh" />
        {/* ... */}
        {/* Nội dung chi tiết sản phẩm */}
        <meta property="og:description" content="Mô tả sản phẩm" />
      </Helmet>
    </div>
  );
};

export default ProductDetails;

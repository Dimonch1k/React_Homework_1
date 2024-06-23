import React from "react";
import ProductItem from "./Product-Item";

import toiletPaper from '../../images/toilet-paper.jpeg';
import sunglasses from '../../images/sunglasses.png';
import adapter from '../../images/adapter.jpg';
import washingPowder from '../../images/washing-powder.jpeg';

const ProductsList = () => {
  return (
    <div className="product-list">

      <ProductItem
        image={toiletPaper}
        info="Toilet paper Deluxe"
        price="200₴"
        expire={true}
      />
      <ProductItem
        image={sunglasses}
        info="Sunglasses Oakley"
        price="1200₴"
        expire={false}
      />
      <ProductItem
        image={adapter}
        info="Adapter Samsung Usb-A to Type-C"
        price="560₴"
        expire={true}
      />
      <ProductItem
        image={washingPowder}
        info="Washing powder Persil"
        price="850₴"
        expire={false}
      />
    </div>
  );
};

export default ProductsList;

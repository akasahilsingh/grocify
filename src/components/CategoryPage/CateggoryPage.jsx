import React from "react";
import Banner from "../Banner/Banner";
import ProductList from '../ProductList/ProductList'
import Cards from "../Cards/Cards";

const CateggoryPage = ({title, bgImage}) => {

    const renderProduct = ProductList.map(product => {
        return <Cards image={product.image} name={product.name} price={product.price} />
    })
  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>
      <div className="grid md:grid-cols-4 gap-9 py-20 grid-cols-1 max-w-[1400px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CateggoryPage;

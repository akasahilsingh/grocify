import React from "react";
import CateggoryPage from "../CategoryPage/CateggoryPage";
import BgAll from "../../assets/all-banner.jpg";

const AllProducts = () => {
  return (
    <div>
      <CateggoryPage title="All Products" bgImage={BgAll} categories={['All']}/>
    </div>
  );
};

export default AllProducts;

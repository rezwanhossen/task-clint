import React from "react";

const ProCard = ({ item }) => {
  const { brand, category_name, price, product_img, product_name } = item;

  return (
    <div className=" p-3 border-2 rounded-md shadow-md  hover:scale-[1.05] transition-all">
      <img className=" h-[250px] w-full" src={product_img} alt="" />
      <h1>{product_name}</h1>
      <h2>{brand}</h2>
      <h3 className=" text-indigo-600">Price : {price} $</h3>
    </div>
  );
};

export default ProCard;

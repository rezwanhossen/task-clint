// import React, { useEffect, useState } from "react";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const axioscommon = useAxiosCommon();
  const { data: product = [], isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axioscommon.get("/product");
      return data;
    },
  });
  console.log(product);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {product.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Product;

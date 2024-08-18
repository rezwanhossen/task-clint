// import React, { useEffect, useState } from "react";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import ProCard from "./ProCard";
import { useEffect, useState } from "react";

const Product = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const axioscommon = useAxiosCommon();
  const [searchText, setSearchText] = useState("");
  const [filterone, setFilterone] = useState("");
  const [filtertwo, setFiltertwo] = useState("");
  const [sort, setSort] = useState("");

  const { data: product = [], isLoading } = useQuery({
    queryKey: [
      "product",
      currentPage,
      filtertwo,
      itemsPerPage,
      filterone,
      sort,
      search,
    ],
    queryFn: async () => {
      const { data } = await axioscommon.get(
        `/product?page=${currentPage}&size=${itemsPerPage}&filterone=${filterone}&sort=${sort}&search=${search}&filtertwo=${filtertwo}`
      );
      return data;
    },
  });

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axioscommon.get(
        `/product-count?filterone=${filterone}&search=${search}&filtertwo=${filtertwo}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filterone, search, filtertwo]);

  if (isLoading) return <p>Loading...</p>;
  // console.log(count);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  //  handle pagination button
  const handlePaginationButton = (value) => {
    // console.log(value);
    setCurrentPage(value);
  };
  const handleReset = () => {
    setFilterone("");
    setFiltertwo("");
    setSort("");
    setSearch("");
    setSearchText("");
  };
  const handelSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <div className=" mt-5">
      <section className=" md:flex gap-3 p-3 bg-slate-300 rounded-md">
        <div>
          <form onSubmit={handelSearch} className=" flex gap-2">
            <div>
              <input
                className=" p-2 border-2 rounded-md"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                id=""
              />
            </div>
            <div>
              <input
                className="p-2 border-2 rounded-md bg-green-500"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
        <div>
          <select
            className="select select-bordered w-full md:w-36 "
            onChange={(e) => {
              setFilterone(e.target.value);
              setCurrentPage(1);
            }}
            name="category_name"
            value={filterone}
            // onChange={(e) => setCategoryFilter(e.target.value)} //}{handleCategoryFilter}
          >
            <option value="">All Categories</option>
            <option value="t-shirt">t-shirt</option>
            <option value="pant">pant</option>
            <option value="shirt">shirt</option>
          </select>
        </div>
        <div>
          <select
            className="select select-bordered  w-full md:w-36 "
            onChange={(e) => {
              setFiltertwo(e.target.value);
              setCurrentPage(1);
            }}
            name="brand"
            value={filtertwo}
            // onChange={(e) => setCategoryFilter(e.target.value)} //}{handleCategoryFilter}
          >
            <option value="">Brand</option>
            <option value="Levi's">Levi's</option>
            <option value="Brax">Brax</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
          </select>
        </div>
        <div>
          <select
            className="select select-bordered  w-full md:w-36 "
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            name="category_name"
            value={filterone}
            // onChange={(e) => setCategoryFilter(e.target.value)} //}{handleCategoryFilter}
          >
            <option value="">Price sorting</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
        <div>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </section>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {product.map((item) => (
          <ProCard key={item._id} item={item}></ProCard>
        ))}
      </div>
      {/* pagination section */}
      <section className=" flex justify-center mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className=" px-4 py-2 text-gray-700 bg-slate-200 disabled:text-gray-500 capitalize  rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          Previous
        </button>
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden px-4 py-2 mx-1 ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className=" px-4 py-2 text-gray-700 bg-slate-200 transition-colors duration-300 transform  rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default Product;

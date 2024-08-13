import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setLoading(true);
    const categoryUrl = selectedCategory
      ? `/products/category/${selectedCategory}`
      : "/products";
    axios
      .get(`${API_URL}${categoryUrl}`, {
        params: {
          limit: 4 * limit,
        },
      })
      .then((res) => {
        setProducts(res.data.products || []);
        setTotalProducts(res.data.total || 0); // Store the total number of products
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [limit, selectedCategory]);
  
  // Fetch categories
  useEffect(() => {
    axios
      .get(`${API_URL}/products/category-list`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const categoryUrl = selectedCategory
      ? `/products/category/${selectedCategory}`
      : "/products";
    axios
      .get(`${API_URL}${categoryUrl}`, {
        params: {
          limit: 4 * limit,
        },
      })
      .then((res) => {
        setProducts(res.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [limit, selectedCategory]);

  const handleClick = () => setLimit((prev) => prev + 1);

  const loadingSkeleton = Array(4)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="product__wrapper overflow-hidden group w-[350px] mt-7 relative duration-300 p-4 gap-1 flex flex-col rounded-[30px] animate-pulse bg-gray-200"
      >
        <div className="w-full h-[300px] bg-gray-300" />
        <p className="h-4 bg-gray-300 w-1/3 mt-4" />
        <h3 className="h-6 bg-gray-300 w-2/3 mt-2" />
        <p className="h-4 bg-gray-300 w-full mt-2" />
        <p className="h-8 bg-gray-300 w-1/2 mt-5 mb-10" />
        <div className="flex justify-between">
          <div className="w-1/4 h-6 bg-gray-300" />
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
      </div>
    ));

  const productItem = products.map((product) => (
    <div
      key={product.id}
      className="product__wrapper overflow-hidden group w-[350px] mt-7 relative duration-300 p-4 gap-1 hover:cursor-pointer flex flex-col rounded-[30px] hover:scale-[1.005] hover:shadow-xl"
    >
      <img
        src={product.images?.[0]}
        className="w-full h-[300px] object-contain hover:scale-[1.03]"
        alt={product.title}
      />
      <p className="text-[red] font-bold">{product.discountPercentage}%</p>
      <h3 className="text-xl">{product.title}</h3>
      <p className="line-clamp-1">{product.description}</p>
      {product.dimensions && (
        <p>
          {product.dimensions.width}x{product.dimensions.height} cm
        </p>
      )}
      <p className="text-black text-3xl mb-10 mt-5 font-bold">
        {product.price} $
      </p>
    </div>
  ));

  const categoryOptions = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  return (
    <div id="Product" className="mt-16 container mx-auto px-14">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
        className="mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        {categoryOptions}
      </select>
      <div className="flex flex-wrap justify-between">
        {loading ? loadingSkeleton : productItem}
      </div>
      {
        products.length < totalProducts && (
          <button
            className="border-none block mx-auto mt-10 rounded-[20px] py-3 px-6 bg-blue-700 text-white hover:bg-blue-900 active:bg-blue-950"
            onClick={handleClick}
          >
            See more
          </button>
        )
      }
    </div>
  );
};

export default Product;

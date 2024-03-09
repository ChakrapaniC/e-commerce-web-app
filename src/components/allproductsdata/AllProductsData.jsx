import { useState } from "react";
import "./AllProductsData.css";
import { useSelector, useDispatch } from "react-redux";
import {
  singleProduct,
  toggleModal,
  selectFilteredProducts,
} from "../../features/ProductSlice";
import Card from "./Card";

const AllProductsData = () => {
  const products = useSelector(selectFilteredProducts);
  console.log(products);

  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = () => {
    switch (sortBy) {
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "rating-high":
        return [...products].sort((a, b) => b.rating - a.rating);
      case "rating-low":
        return [...products].sort((a, b) => a.rating - b.rating);
      default:
        return products;
    }
  };

  const SingleProductDetail = (id) => {
    dispatch(singleProduct(id));
    dispatch(toggleModal());
  };

  return (
    <>
      <div className="head">
        <h2 style={{ marginTop: "20px", fontSize: "40px" }}>Products:</h2>
        <div className="dropdown">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortBy} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
            <option value="rating-high">Rating: High to Low</option>
            <option value="rating-low">Rating: Low to High</option>
          </select>
        </div>
      </div>
      <div className="products-container">
        {sortedProducts().length > 0 &&
          sortedProducts().map((item) => (
            <Card
              key={item.id}
              item={item}
              SingleProductDetail={SingleProductDetail}
            />
          ))}
      </div>
    </>
  );
};

export default AllProductsData;

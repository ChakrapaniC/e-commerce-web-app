import "./categories.css";
import mobile from "../../assets/smartphone.png";
import decore from "../../assets/decore.png";
import frag from "../../assets/frag.png";
import laptop from "../../assets/laptop.png";
import grocery from "../../assets/grocery.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../features/ProductSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };
  const handleAllCategoriesClick = () => {
    dispatch(selectCategory(null));
  };
  const categories = [
    {
      id: 1,
      name: "smartphones",
      image: mobile,
    },
    {
      id: 2,
      name: "laptops",
      image: laptop,
    },
    {
      id: 3,
      name: "fragrances",
      image: frag,
    },
    {
      id: 4,
      name: "groceries",
      image: grocery,
    },
    {
      id: 5,
      name: "home-decoration",
      image: decore,
    },
  ];
  return (
    <>
      <div className="fade-in">
        <h2 style={{ fontSize: "40px" }}>Categories:</h2>
        <div className="categories-container">
          <div className="categories-card" onClick={handleAllCategoriesClick}>
            <h4>All Categories</h4>
          </div>
          {categories.map((item) => (
            <div
              key={item.id}
              className={`categories-card${
                selectedCategory === item.name ? " selected" : ""
              }`}
              onClick={() => handleCategoryClick(item.name)}
            >
              <img src={item.image} alt="..." />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;

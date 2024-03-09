import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { toggleModal } from "../../features/ProductSlice";
import "./Modal.css";

const Modal = () => {
  const modal = useSelector((state) => state.products.modal);
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const dispatch = useDispatch();
  console.log(selectedProduct);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const renderStars = (rating) => {
    const stars = [];
    const value = Math.floor(rating);
    console.log(value);
    for (let i = 0; i < value; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Full star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <>
      <div>
        {modal && (
          <div
            className={`modal ${modal ? "slide-in" : "slide-out"}`}
            key={selectedProduct.id}
          >
            <div
              onClick={() => dispatch(toggleModal())}
              className="overlay"
            ></div>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProduct.images[1]}></img>
              </div>
              <div className="product-rating">
                {renderStars(selectedProduct.rating)}
              </div>
              <h2 style={{ textAlign: "center" }}>{selectedProduct.title}</h2>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {selectedProduct.price} &#36;
              </p>
              <p style={{ textAlign: "center" }}>
                {selectedProduct.description}
              </p>

              <button
                className="close-modal"
                onClick={() => dispatch(toggleModal())}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;

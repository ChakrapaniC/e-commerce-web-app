const Card = ({ item, SingleProductDetail }) => {
  return (
    <div className="product-card" key={item.id}>
      <div className="product-image">
        <img src={item.images[2]} alt="Product Name" />
      </div>
      <div className="product-info">
        <h3 className="product-name" style={{ textAlign: "center" }}>
          {item.title}
        </h3>
        <div className="product-details">
          <div className="product-price" style={{ textAlign: "center" }}>
            {item.price} &#36;
          </div>
          <button
            className="add-to-cart"
            onClick={() => {
              SingleProductDetail(item.id);
            }}
          >
            Detailed Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

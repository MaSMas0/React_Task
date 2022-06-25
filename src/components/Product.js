
const Product = (props) => {
  const { name, price, count, picture, discount } = props.product;
  
  return (
    <>
<div class="container">

{/* <h1>Shopping Cart</h1>

<div class="cart">

  <div class="products"> */}

    <div className="product">

      <img src={picture} alt="product"/>

      <div className="product-info">

        <h3 className="product-name">{name}</h3>

        <h4 className="product-price">Price : ${price} </h4>

        <h4 className="product-offer">Discount: {discount} %</h4>

        <p className="product-quantity">Qty:
        <div
        onClick={() => props.handleIncrement(name)}
        className="btn btn-primary"
      >
        +
      </div>
       <input value={count} name=""/> 
       <div
        onClick={() => props.handleDecrement(name)}
        className="btn btn-primary"
      >
        -
      </div>
        </p>

        <div
        onClick={() => props.handleRemove(name)}
        className="btn btn-danger fa fa-trash product-remove"
      >

      </div>

      </div>

    </div>

</div>
</>
  );
};

export default Product;

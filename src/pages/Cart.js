import React from "react";
// import { useState } from "react";
import Product from "../components/Product";

const Cart = ({ products, handleIncrement, handleDecrement, handleRemove, handleReset }) => {
  // State

  // //   Handlers
  // const handleIncrement = (productName) => {
  //   // clone
  //   let newProducts = [...products];
  //   // update
  //   let index = newProducts.findIndex((item) => item.name === productName);
  //   newProducts[index].count = newProducts[index].count + 1;
  //   // setState
  //   setProducts(newProducts);
  // };

  // const handleDecrement = (productName) => {
  //   // clone
  //   const newProducts = [...products];
  //   // update
  //   const index = newProducts.findIndex((p) => p.name === productName);
  //   if (newProducts[index].count > 0)
  //     newProducts[index].count = newProducts[index].count - 1;
  //   // setState
  //   setProducts(newProducts);
  // };

  // const handleReset = () => {
  //   // clone
  //   let newProducts = [...products];
  //   // update
  //   newProducts = newProducts.map((p) => {
  //     return { ...p, count: 0 };
  //   });
  //   // setState
  //   setProducts(newProducts);
  // };
  // const handleRemove = (productName) => {
  //   // clone
  //   let newProducts = [...products];
  //   console.log(newProducts);
  //   // update
    
  //   let index= newProducts.findIndex((e)=>  e.name === productName)
  //   console.log(newProducts[index]);
  //   let newModifiedProducts = newProducts.splice(index,1)

  //    // setState
  //   setProducts(newProducts);
  // };

  // Render
  return (
    <>
      {products.length === 0 && <h1>Cart is empty</h1>}
      {products.map((p) => (
        <Product
          key={p.name}
          product={p}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemove={handleRemove}
        />
      ))}
      {products.length !== 0 && (
      <div onClick={() => handleReset()} className="btn btn-secondary ms-2" id="reset_btn">
        Reset
      </div>
      )}
    </>
  );
};

export default Cart;

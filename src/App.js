import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Cart from "./pages/Cart";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import Menu from "./pages/Menu";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,  
      name: "Cyan Shoes",
      price: 50,
      count: 0,
      picture: "cyan_shoes.jpeg",
      discount: "50",
      isInCart: false,
      category: 1,
    },
    {
      id: 2,
      name: "Red Shoes",
      price: 40,
      count: 0,
      picture: "red_shoes.jpeg",
      discount: "50",
      isInCart: false,
      category: 1,
    },
    {
      id: 3,
      name: "White Shoes",
      price: 30,
      count: 0,
      picture: "white_shoes.jpeg",
      discount: "50",
      isInCart: false,
      category: 1,
    },
    {
      id: 4,
      name: "Blue T-shirt",
      price: 25,
      count: 0,
      picture: "Blue_Tshirt.jpeg",
      discount: "50",
      isInCart: false,
      category: 2,
    },
    {
      id: 5,
      name: "Orange T-shirt",
      price: 20,
      count: 0,
      picture: "orange_tshirt.webp",
      discount: "50",
      isInCart: false,
      category: 2,
    },
    {
      id: 6,
      name: "Crimson T-shirt",
      price: 15,
      count: 0,
      picture: "crimson_tshirt.jpeg",
      discount: "50",
      isInCart: false,
      category: 2,
    },
    {
      id: 7,
      name: "Black Jeans",
      price: 15,
      count: 0,
      picture: "black_jeans.jpeg",
      discount: "50",
      isInCart: false,
      category: 3,
    },
    {
      id: 8,
      name: "Brown jeans",
      price: 10,
      count: 0,
      picture: "brown_jeans.jpeg",
      discount: "50",
      isInCart: false,
      category: 3,
    },
    {
      id: 9,
      name: "Green Jeans",
      price: 7,
      count: 0,
      picture: "green_jeans.jpeg",
      discount: "50",
      isInCart: false,
      category: 3,
    },
  ]);

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Shoes" },
    { id: 2, name: "T-Shirts" },
    { id: 3, name: "Jeans" },
  ];
  


  useEffect(() => {
      const prods = ()=>[...products.map(a => ({...a}))];
        console.log(prods());
      setProd(prods())
    //Runs only on the first render
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 
const [oldProd, setProd] = useState([])
    console.log(oldProd);
  
  
  
    //   Handlers
  const handleIncrement = (productName) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((item) => item.name === productName);
    newProducts[index].count = newProducts[index].count + 1;
    // setState
    setProducts(newProducts);
  };

  const handleDecrement = (productName) => {
    // clone
    const newProducts = [...products];
    // update
    const index = newProducts.findIndex((p) => p.name === productName);
    if (newProducts[index].count > 0)
      newProducts[index].count = newProducts[index].count - 1;
    // setState
    setProducts(newProducts);
  };

  const handleReset = () => {
    // clone
    let newProducts = [...products];
    // update
    newProducts = newProducts.map((p) => {
      return { ...p, count: 0 };
    });
    // setState
    setProducts(newProducts);
  };
  const handleRemove = (productName) => {
    // clone
    let newProducts = [...products];
    console.log(newProducts);
    // update
    
    let index= newProducts.findIndex((e)=>  e.name === productName)
    console.log(newProducts[index]);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    // let newModifiedProducts = newProducts.splice(index,1)

     // setState
    setProducts(newProducts);
  };


  const hadleAddToCart = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    newProducts[index].count = 1;
    // setState
    setProducts(newProducts);
  };





  const handleAscSort = (a) => {
    // clone
    let newProducts =[...products];
        // update
        newProducts.sort(a)
        console.log(newProducts);
        // setState
        // handleChangePage(1)
        // handleChangeCategory(2)
        setProducts(newProducts)

}
  const handleDscSort = (a) => {
    // clone
    let newProducts =[...products];
        // update
        newProducts.sort(a)
        newProducts.reverse()
        console.log(newProducts);
        // setState
        // handleChangePage(1)
        // handleChangeCategory(2)
        setProducts(newProducts)

}
  const handleSearch = (name) => {
    //clone
    let newProducts =[...products];
    // console.log(products);
    console.log(newProducts);
        // update
       const newP=newProducts.filter((e)=> e.name===name)
        console.log(newP);
        console.log(products);
        setProducts(products => newP)
    }
    const handleClearSearch = ()=>{
        let newProducts=[...oldProd];
        console.log(products);
        console.log(newProducts);
        setProducts(newProducts)
    }
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products.filter((p) => p.isInCart)}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleReset={handleReset}
                  handleRemove={handleRemove}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  products={products}
                  hadleAddToCart={hadleAddToCart}
                  categories={categories}
                  handleAscSort={handleAscSort}
                  handleDscSort={handleDscSort}
                  handleSearch={handleSearch}
                  handleClearSearch={handleClearSearch}
                />
              }
            />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route path="/product/:name/:id/:picture" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

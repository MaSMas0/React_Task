import { useState, useRef } from "react";
import ToggleCartIcon from "../components/ToggleCartIcon";
import { useNavigate } from "react-router-dom";




const Menu = ({ products, categories, hadleAddToCart,handleAscSort,handleDscSort,handleSearch,handleClearSearch }) => {
  //   --------- Filter ---------
  const [currentCategory, setCurrentCategory] = useState(1);

  // Get the filterd item
  var filteredItems =
    currentCategory === 0
      ? products
      : products.filter((p) => p.category === currentCategory);

  //   --------- Pagination ---------
  const itemsCountPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  //   Get the start index in the page
  const startIndexInPage = (currentPage - 1) * itemsCountPerPage;

  //   Get the items in the page
   var paginatdItems = filteredItems.slice(
    startIndexInPage,
    startIndexInPage + itemsCountPerPage
  );

  //   Get no of pages
  const noOfPages = Math.ceil(filteredItems.length / itemsCountPerPage);

  //   Get array of pages numbers
  let pagesArray = [];
  for (let i = 1; i <= noOfPages; i++) {
    pagesArray.push(i);
  }

  //   Change Page handler
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  //   change the current cutegory handler
  const handleChangeCategory = (categryId) => {
    setCurrentCategory(categryId);
    setCurrentPage(1);
  };
    // handle going to product Page
  const navigate = useNavigate();
  const handleGoToProduct = (productName) => {
 // clone
 console.log(productName.target.innerText);
 const newProducts = [...products];
 // update
 const prod = newProducts.filter((p) => p.name === productName.target.innerText);
        const p = prod[0]
        console.log(p);
    navigate(`/product/${p.name}/${p.id}/${p.picture}`, { replace: true });
  };

  function compareName( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  function comparePrice( a, b ) {
    if ( a.price < b.price ){
      return -1;
    }
    if ( a.price > b.price ){
      return 1;
    }
    return 0;
  }

  const selectElement = useRef()
  const selectName = useRef()
  const selectPrice = useRef()
  const Search = useRef()
  
  const checkValue = ()=> {
    if (+selectElement.current.value===1){
        if (selectName.current.attributes.type.ownerElement.checked) {
            handleAscSort(compareName)
    }else if (selectPrice.current.attributes.type.ownerElement.checked){
        handleAscSort(comparePrice)
    }
}
    if (+selectElement.current.value===2){
        if (selectName.current.attributes.type.ownerElement.checked) {
            handleDscSort(compareName)
    }else if (selectPrice.current.attributes.type.ownerElement.checked){
        handleDscSort(comparePrice)
    }
}
    }

    // const handleSearch = (name) => {
    //     // clone
    //     let newProducts =[...filteredItems];
    //     // console.log(products);
    //     // console.log(newProducts);
    //         // update
    //        const newP=newProducts.filter((e)=> e.name===name)
    //         console.log(newP);
    //         // console.log(products);
    //         // setPaginatedItems(newP);
            
    //         }

  return (
    <>
    <div className="mb-4">
    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." ref={Search}/>
    <datalist id="datalistOptions">
        {products.map((e)=>{
            return <option key={e.id} value={e.name}></option> 
        })}


    </datalist>

    <div className="btn btn-primary" onClick={()=>handleSearch(Search.current.value)}> Search</div>
    <div className="btn btn-primary ms-3" onClick={handleClearSearch}> Clear</div>

    </div>

    <label style={{display:"inline-block", marginRight:"10px"}}>Sort By</label>
    < input style={{display:"inline-block", marginRight:"10px"}} type="radio" ref={selectName} onClick={checkValue} name="sorting"/> Name 
    < input style={{display:"inline-block", marginLeft:"10px"}} type="radio" ref={selectPrice} onClick={checkValue} name="sorting" /> Price
<select className="form-select mb-4" ref={selectElement} onChange={checkValue} >
  <option value="1"  >Ascending</option>
  <option value="2"  >Descending</option>
</select>
    <div className="row mt-3">
      <div className="col-3">
        <ul className="list-group">
          {categories.map((cat) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeCategory(cat.id)}
              key={cat.id}
              className={
                cat.id === currentCategory
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatdItems.map((p) => (
              <tr key={p.id}>
                <td onClick={handleGoToProduct} style={{ cursor: "pointer" }}>{p.name}</td>
                <td>{p.price} $</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => hadleAddToCart(p.id)}
                >
                  <ToggleCartIcon isInCart={p.isInCart} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        {pagesArray.length !== 1 && (
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              {pagesArray.map((page) => (
                <li
                  key={page}
                  style={{ cursor: "pointer" }}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                  aria-current="page"
                  onClick={() => handleChangePage(page)}
                >
                  <span className="page-link">{page}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
    </>
  );
};

export default Menu;

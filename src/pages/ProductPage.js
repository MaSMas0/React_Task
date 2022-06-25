import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const ProductPage = () => {
  const { id, name, picture } = useParams();
  const location = useLocation();

  const qs = queryString.parse(location.search);

  console.log(qs);
  return (
    <>
    <center>
    <h2>
      Product No: {id}
    </h2>
    <h2>
    Name: {name} 
    </h2>
    <br />
    <div>
    <img src={`/${picture}`} width = "300px" height="300px" alt="" /> 
    </div>
    </center>
    </>
  );
};

export default ProductPage;

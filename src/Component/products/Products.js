import Cards from "../cards/Cards";
import { useState } from "react";
import './product.css'
import { BestOfSummerProductLists } from "../productsList/ProductsList";

function Products({getCartItem}) {
  const [cartItems, setCartItems] = useState(1);
  const updateCartItems = () => {
    setCartItems((prevItem) => prevItem + 1);
    getCartItem(cartItems);
  };
  return (
    <div className="wrapper">
      <h2>Best  of Summer</h2>
      <div className="cardCon">
      {BestOfSummerProductLists.map(product => {
        return (
          <Cards
          handelUpdateCart={updateCartItems}
          key={product.productId}
            products={{
              productid: product.productId,
              productimage: product.productImage,
              productname: product.productName,
              productprice: product.productPrice,
              productDelivaryStatus: product.dlelevaryStatus
            }}
            
          />
        
        );
      })}

      </div>


      <h2>Get your favourite products from  the best  sellers </h2>
    </div>
  );
}

export default Products;

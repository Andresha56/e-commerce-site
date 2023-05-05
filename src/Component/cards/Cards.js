
import "./cards.css";

function Cards({products,handelUpdateCart}) {
 
const handelClickCart=()=>{
  handelUpdateCart()
}

  return (
    
            <div className="cards" >
              <div className="img_con">
                <img src={products.productimage} alt="productImage" />
              </div>
              <div className="card_content">
                <p>{products.productname}</p>
                <p>{products.productprice}</p>
                <p>{products.productDelivaryStatus}</p>
                <button onClick={handelClickCart}>Add to cart</button>
              </div>
            </div>

  );
}

export default Cards;

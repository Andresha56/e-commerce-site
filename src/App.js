
import './App.css';
import Nav from './Component/Navbar/Nav';

import { useState } from 'react';
import CarouselSlider from './Component/carousel/Carousel';
import Products from './Component/products/Products';
function App() {
  const [updateCartItem, setUpdateCartItems] = useState(0)
  const cartItem = (item) => { setUpdateCartItems(item) }
  return (
    <>
      <Nav updatedCart={updateCartItem} />
      <CarouselSlider />
    
      <Products  getCartItem={cartItem} />
      
    </>
  );
}

export default App;

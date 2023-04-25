import "./nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderItems from "./HeaderItems";
import { useEffect, useState } from "react";
function Nav() {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [clickedAccessLocation, setClickedAccessLocation] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [cartNumber,setCartNumber]=useState(0)
  if (isLoading) {
    return <div className="loding">Loading ...</div>;
  }


  // if (clickedAccessLocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (response) => {
  //       setUserLocation({
  //         lat: response.coords.latitude,
  //         lng: response.coords.longitude,
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
  // useEffect(
  //   () => {
  //     async function fetchData() {
  //       let url = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${userLocation.lat}&lon=${userLocation.lon}&exclude=current&appid=c8e6dbac22a80fb604d5393ddc0ba513`);
  //       const response = await url.json();
  //       console.log(response)
  //     } fetchData();
  //   })




  return (
    <header className="nav--bar">
      <div className="wrapper d-flex">
        <div className="logo">
          <a href="./">Sopify</a>
        </div>
        <ul className="nav--select-address">
          {isAuthenticated ? (
            <li>
              <GrLocation size={27} color="#ffffff" />
              <a href="./" onClick={() => setClickedAccessLocation(true)}>
                <span>hello</span> {user.name}
                <br></br>Select your address
              </a>
            </li>
          ) : (
            <li>
              <GrLocation size={27} color="#ffffff" />
              <a href="./">
                <span>hello</span>
                <br></br>Select your address
              </a>
            </li>
          )}
        </ul>
        <div className="nav-search">
          <input type="search" placeholder="search in sopify" name="nav-search" />
        </div>
        <div className="nav--add-to-cart nav-auth-add-cart">
        <div className="CartNumber-flex-col">
        <div className="cart-num">{cartNumber}</div>
        <AiOutlineShoppingCart size={30} color="#ffffff" />
        </div>
          <p>Cart</p>

          <div className="nav-authentication">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button onClick={loginWithRedirect}>log In</button>
            )}
          </div>
        </div>
      </div>
      <div className="header--items">
            <HeaderItems/>
      </div>
    </header>
  );
}

export default Nav;

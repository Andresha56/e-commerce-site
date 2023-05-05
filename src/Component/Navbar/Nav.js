import "./nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderItems from "./HeaderItems";
import { useState } from "react";

function Nav({updatedCart}) {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const [clickedAccessLocation, setClickedAccessLocation] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
 


  const  AccessLocation =()=> {
    console.log("inside the function")
    navigator.geolocation.getCurrentPosition(
      (response) => {
      
         setUserLocation({
          lat : response.coords.latitude,
          lon : response.coords.longitude
        });
  
          if(userLocation === null){
            console.log( "Nhi Mila" )
          }else{
            console.log( "Milgaya" )
            console.log( userLocation )
          }
      },

      () => {
        alert("opps!! some error occured try again after some time");
      }
    );
  } 
 

  if (isLoading) {
    return <div className="loding">Loading ...</div>;
  }

  return (
    <>
      <header className="nav--bar">
        <div className="wrapper d-flex">
          <div className="logo">
            <a href="./">Soopify</a>
          </div>
          <ul className="nav--select-address">
            {isAuthenticated ? (
              <li>
                <button onClick={AccessLocation}>
                  <GoLocation size={25} color="#ffffff" />
                  <span>hello {user.name}</span>
                  <br></br>Select your address 
                </button>
              </li>
            ) : (
              <li>
                <button>
                  <GoLocation size={25} color="#ffffff" />
                  <span>hello</span> 
                  <br></br>Select your address 
                </button>
              </li>
            )}
          </ul>
          <div className="nav-search">
            <input
              type="search"
              placeholder="search in soopify"
              name="nav-search"
            />
          </div>
          <div className="nav--add-to-cart nav-auth-add-cart">
            <div className="CartNumber-flex-col">
              <div className="cart-num">{updatedCart}</div>
              <AiOutlineShoppingCart size={30} color="#ffffff" />
            </div>
            <p>Cart</p>

            <div className="nav-authentication">
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
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
          <HeaderItems />
        </div>
      </header>
    </>
  );
}

export default Nav;

import './nav.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrLocation} from 'react-icons/gr';
function Nav(){
  return (
    <div className='nav--bar'>
      <div className="wrapper">
        <div className="logo">
          <a href="./">Sopify</a>
        </div>
        <ul className="nav--select-address">
          <li>
            <GrLocation/>
            <a href="./">Hello<br></br>Select your address</a>
          </li>
        </ul>

        <div className="nav-search">
          <input type="search" name="nav-search"/>
        </div>
        <div className="nav--add-to-cart">
        <AiOutlineShoppingCart/>
        </div>
      </div>

    </div>
  )
}

export default Nav

import './Header.sass'
import logo from '@/assets/img/icons/logo.svg'
import search from '@/assets/img/icons/search-normal.svg'
import user from '@/assets/img/icons/user.svg'
import bag from '@/assets/img/icons/bag.svg'
import profileCircles from '@/assets/img/icons/profile-circle.svg'
import orders from '@/assets/img/icons/bag-2.svg'
import heart from '@/assets/img/icons/heart.svg'
import payments from '@/assets/img/icons/dollar-circle.svg'
import logout from '@/assets/img/icons/logout.svg'
import {Link, NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";
import {useState} from "react";

const Header = () => {
  const [menu, setMenu] = useState<string>('')
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="content">
            <Link to='/'>
              <ReactSVG src={logo} />
            </Link>
            <nav>
              <NavLink className="body-lg" to='/'>
                Home
                <span className="border"></span>
              </NavLink>
              <NavLink
                onMouseEnter={() => setMenu('products')}
                onMouseLeave={() => setMenu('')}
                className="body-lg"
                to='/products'
              >
                Products
                <span className="border"></span>
              </NavLink>
              <NavLink className="body-lg" to='/blog'>
                Blog
                <span className="border"></span>
              </NavLink>
              <NavLink className="body-lg" to='/faq'>
                FAQ
                <span className="border"></span>
              </NavLink>
              <NavLink className="body-lg" to='/contacts'>
                Contact Us
                <span className="border"></span>
              </NavLink>
            </nav>
            <div className="modal-btns">
              <button
                onClick={() => setMenu(old => old === 'search' ? '' : 'search')}
              >
                <ReactSVG src={search} />
              </button>
              <button
                onClick={() => setMenu(old => old === 'bag' ? '' : 'bag')}
              >
                <ReactSVG src={bag} />
              </button>
              <button
                onClick={() => setMenu(old => old === 'user' ? '' : 'user')}
              >
                <ReactSVG src={user} />
              </button>
            </div>
          </div>
        </div>
        <div className="border"></div>
      </header>
      <div className={`menu ${menu ? menu : ''}`}>
        <div className="container">
          <div className="content user">
            <button>
              <ReactSVG src={profileCircles} />
              <span className="userName body-lg">Jimmy Smith</span>
              <span className="body-sm">Jimmy.smith1996@gmail.com</span>
            </button>
            <button>
              <ReactSVG src={orders} />
              <span className="body-lg">Orders</span>
            </button>
            <button>
              <ReactSVG src={heart} />
              <span className="body-lg">Wish List</span>
            </button>
            <button>
              <ReactSVG src={payments} />
              <span className="body-lg">Payments</span>
            </button>
            <button>
              <ReactSVG src={logout} />
              <span className="body-lg">Log out</span>
            </button>
          </div>
          <div className="content bag">
            <p className="body-lg">3 items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

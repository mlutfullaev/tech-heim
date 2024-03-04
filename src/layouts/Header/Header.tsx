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
import shoppingCard from '@/assets/img/icons/shopping-card.svg'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import BagItems from '@/components/BagItem/BagItems.tsx'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store.ts'
import Button from '@/ui/Button/Button.tsx'
import Menu from '@/layouts/Menu/Menu.tsx'
import {useOutsideClick} from '@/hooks/useOutsideClick.ts'
import {useEffect, useState} from 'react'

const Header = () => {
  const [menu, setMenu] = useState<string>('')
  const bagItems = useSelector((state: RootState) => state.bag.items)
  const location = useLocation()

  useEffect(() => {
    if (menu) setMenu('')
  }, [location]);

  const bagTotal = () =>
    bagItems.reduce((acc, cur) => {
      if (cur.discount) {
        return acc + cur.discount * cur.quantity
      } else {
        return acc + cur.price * cur.quantity
      }
    }, 0)

    const handleOutsideClick = (): void => {
       if (menu) setMenu('')
    };

    useOutsideClick("header-menu-content", handleOutsideClick);

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
                className={`body-lg${menu === 'products' ? ' active' : ''}`}
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
                disabled={!bagItems.length}
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
      <div className={`header-menu ${menu ? menu : ''}`}>
        <div className="container">
          <div className="header-menu-content user">
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
          {
            bagItems.length ?
              <div className="header-menu-content bag">
                <p className="body-lg">{bagItems.length} items</p>
                <BagItems />
                <div className="bag-bottom">
                  <h6><span className="body-sm">Grand total </span><br/>$ {bagTotal()}</h6>
                  <Button>
                    Proceed to Cart
                    <ReactSVG src={shoppingCard} />
                  </Button>
                </div>
              </div>
              : ''
          }
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;

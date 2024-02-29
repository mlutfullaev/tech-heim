import cls from './Header.module.sass'
import logo from '@/assets/img/icons/logo.svg'
import search from '@/assets/img/icons/search-normal.svg'
import user from '@/assets/img/icons/user.svg'
import bag from '@/assets/img/icons/bag.svg'
import {Link} from "react-router-dom";
import {ReactSVG} from "react-svg";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.headerContent}>
          <Link to='/'>
            <ReactSVG src={logo} />
          </Link>
          <nav>
            <Link className="body-lg" to='/'>Home</Link>
            <Link className="body-lg" to='/products'>Products</Link>
            <Link className="body-lg" to='/blog'>Blog</Link>
            <Link className="body-lg" to='/faq'>FAQ</Link>
            <Link className="body-lg" to='/contacts'>Contact Us</Link>
          </nav>
          <div className={cls.modalBtns}>
            <button><ReactSVG src={search} /></button>
            <button><ReactSVG src={bag} /></button>
            <button><ReactSVG src={user} /></button>
          </div>
        </div>
      </div>
      <div className={cls.border}></div>
    </header>
  );
};

export default Header;

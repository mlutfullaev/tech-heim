import './Menu.sass'
import {ReactSVG} from "react-svg";
import mobile from '@/assets/img/icons/mobile.svg'
import accessories from '@/assets/img/icons/accessories.svg'
import networking from '@/assets/img/icons/networking.svg'
import gaming from '@/assets/img/icons/gaming.svg'
import cameras from '@/assets/img/icons/cameras.svg'
import audio from '@/assets/img/icons/audio.svg'
import wearables from '@/assets/img/icons/wearables.svg'
import laptops from '@/assets/img/icons/laptops.svg'
import {Link} from "react-router-dom";

const menuItems = [
  {
    svg: mobile,
    name: "Mobile Phones",
    value: "/products/mobile"
  },
  {
    svg: laptops,
    name: "Laptops & Computers",
    value: "/products/laptops"
  },
  {
    svg: mobile,
    name: "Tablets & E-reader",
    value: "/products/tablets"
  },
  {
    svg: wearables,
    name: "Wearables",
    value: "/products/wearables"
  },
  {
    svg: audio,
    name: "Audio",
    value: "/products/audio"
  },
  {
    svg: cameras,
    name: "Cameras",
    value: "/products/cameras"
  },
  {
    svg: gaming,
    name: "Gaming",
    value: "/products/gaming"
  },
  {
    svg: networking,
    name: "Networking",
    value: "/products/networking"
  },
  {
    svg: accessories,
    name: "Accessories",
    value: "/products/accessories"
  },
]

const Menu = () => {

  return (
    <div id="menu" className="header-menu-content">
        {
          menuItems.map(item =>
            <Link
              key={item.value}
              to={item.value}
              className="body-lg"
            >
              <ReactSVG src={item.svg} />
              {item.name}
            </Link>
          )
        }
    </div>
  );
};

export default Menu;

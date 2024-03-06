import Button from "@/ui/Button/Button.tsx";
import {ButtonColor} from "@/assets/js/types.ts";
import './Main.sass'
import SimpleCard from "@/components/SimpleCard/SimpleCard.tsx";
import SaleProducts from "@/pages/Main/SaleProducts.tsx";

const categories = [
  {
    title: 'Accessories',
    img: 'src/assets/img/categories/accessories.png',
    link: '/products',
  },
  {
    title: 'Camera',
    img: 'src/assets/img/categories/camera.png',
    link: '/products',
  },
  {
    title: 'Laptop',
    img: 'src/assets/img/categories/laptop.png',
    link: '/products',
  },
  {
    title: 'Smart Phone',
    img: 'src/assets/img/categories/phone.png',
    link: '/products',
  },
  {
    title: 'Gaming',
    img: 'src/assets/img/categories/gaming.png',
    link: '/products',
  },
  {
    title: 'Smart Watch',
    img: 'src/assets/img/categories/watches.png',
    link: '/products',
  },
]

const Main = () => {
  return (
    <div className="page-main">
      <div className="container">
        <main>
          <h1 className="display-1">Tech Heim</h1>
          <h3>"Join the <span>digital revolution</span>"</h3>
          <Button
            buttonColor={ButtonColor.ORANGE}>
            Explore More
          </Button>
        </main>
        <div className="categories">
          {
            categories.map(category =>
              <SimpleCard
                key={category.title}
                img={category.img}
                text={category.title}
                link={category.link}
              />
            )
          }
        </div>
        <SaleProducts />
      </div>
    </div>
  );
};

export default Main;

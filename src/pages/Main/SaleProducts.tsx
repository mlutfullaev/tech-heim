import cls from './SaleProducts.module.sass'

const SaleProducts = () => {
  return (
    <div className={`br-8 ${cls.content}`}>
      <h4>Products On Sale</h4>
      <p className="body-xl">Shop Now!</p>
    </div>
  );
};

export default SaleProducts;

import './BagItems.sass'
import {ReactSVG} from "react-svg";
import truck from "@/assets/img/icons/truck.svg";
import verify from "@/assets/img/icons/verify.svg";
import inStock from "@/assets/img/icons/inStock.svg";
import trash from "@/assets/img/icons/trash.svg";
import minus from "@/assets/img/icons/minus.svg";
import plus from "@/assets/img/icons/plus.svg";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import {decrement, deleteItem, increment} from "@/store/bagSlice.ts";

const BagItems = () => {
  const {items} = useSelector((state: RootState) => state.bag)
  const dispatch = useDispatch()

  return (
    <div id="bag">
      {
        items.map((item, i) =>
          <div className="item br-8 shadow-1" key={item.title}>
            <img src={item.imgUrl} alt="product"/>
            <div className="item-content">
              <h6>{item.title}</h6>
              <div className="properties">
                <p className="caption-sm">
                  <span className="color" style={{backgroundColor: item.color.toLowerCase()}}></span>
                  {item.color}
                </p>
                {
                  item.freeDelivery ?
                    <p className="caption-sm">
                      <ReactSVG src={truck} />
                      Free Delivery
                    </p> : ''
                }
                {
                  item.guaranteed ?
                    <p className="caption-sm">
                      <ReactSVG src={verify} />
                      Guaranteed
                    </p> : ''
                }
                {
                  item.inStock ?
                    <p className="caption-sm">
                      <ReactSVG src={inStock} />
                      In Stock
                    </p> : ''
                }
              </div>
              <div className="item-bottom">
                <div className="price">
                  {
                    item.discount ?
                      <>
                        <span>${item.price}</span>
                        <p>${item.discount}</p>
                      </> :
                      <p>${item.price}</p>
                  }
                </div>
                <div className="buttons">
                  <button onClick={() => dispatch(deleteItem(i))}><ReactSVG src={trash} /></button>
                  <div className="quantity">
                    <button onClick={() => dispatch(decrement(i))}><ReactSVG src={minus} /></button>
                    <p className="body-sm">{item.quantity}</p>
                    <button onClick={() => dispatch(increment(i))}><ReactSVG src={plus} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default BagItems;

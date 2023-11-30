import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Boxitem = ({ itemlist, Setbox }) => {
  
  
  return (
    <div className="boxitem">
      <div className="box">
        <div className="boxflex">
          <div className="boximg">
            <img src={itemlist.img} alt="" />
          </div>
          <div className="boxheading">
            <h1>
              {itemlist.title.toLowerCase()} ({itemlist.color[0]},{itemlist.size[0]})
            </h1>
            <h2>được thêm vào giỏ hàng của bạn</h2>
            <div className="boxpriceflex">
              <h1>{itemlist.price}.000đ</h1>
            </div>
            <div className="boxbtnflex">
              <Link to={`/cart`} style={{ textDecoration: "none" }}>
                <div className="boxbtncart">
                  <FaShoppingBasket />
                  <button>xem giỏ hàng</button>
                </div>
              </Link>
              <div className="boxshop" onClick={() => Setbox(false)}>
                <button>tiếp tục mua hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boxbox" onClick={() => Setbox(false)}></div>
    </div>
  );
};

export default Boxitem;

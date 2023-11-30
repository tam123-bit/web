import React, { useContext, useState, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { useSelector, useDispatch } from "react-redux";
import { Delete ,Remove} from "../Redux/cartSlice";
import { MdDelete } from "react-icons/md";
import Loading from "../Component/Loading";
import { Link } from "react-router-dom";
const Cartbox = ({ setcartopen }) => {
  const { API, Categories, phonelist, loading, setloading } =
    useContext(Apicontext);
  const cartbox = useSelector((state) => state.cart.product);
  const itembox = cartbox.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  const dispatch = useDispatch();
  const handeldelete = (item) => {
    dispatch(
      Delete({
        id: item.id,
      })
    );
  };

  return (
    <>
      {cartbox.length > 0 ? (
        <div className="cartbox" onClick={() => setcartopen(false)}>
          <div className="cartboxwrap">
            {cartbox.map((item) => (
              <div key={item.id} className="cartboxitem">
                <div className="cartboximg">
                  <img src={item.img} alt="" />
                </div>
                <div className="cartboxflex">
                  <h1>
                    {item.title.toLowerCase()}({item.color}-{item.size})
                  </h1>
                  <h2>
                    {item.quantity} x {item.price},000đ
                  </h2>
                </div>
                <div className="cartboxicon" onClick={() => handeldelete(item)}>
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>
          <div className="cartboxflexheading">
            <h1>thành tiền:</h1>
            <h2>{itembox},000đ</h2>
          </div>
          <Link to={`/cart`} style={{ textDecoration: "none" }}>
            <div className="cartboxlorem">
              <h1>thông tin giỏ hàng</h1>
            </div>
          </Link>
          <div className="cartboxloremall" onClick={()=>dispatch(Remove())}>
              <h1>xóa tất cả</h1>
            </div>
          <div className="boxbox" onClick={() => setcartopen(false)}></div>
        </div>
      ) : (
        <div className="cartboxheading" onClick={() => setcartopen(false)}>
          <h1>ko có sản phẩm nào trong giỏ hàng</h1>
        </div>
      )}
    </>
  );
};

export default Cartbox;

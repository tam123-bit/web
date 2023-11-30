import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagegit from "./Pagegit";
import Boxitem from "../Page/Boxitem";
import { useSelector, useDispatch } from "react-redux";
import { Addtocart } from "../Redux/cartSlice";
const Gridview = ({
  data,
  product,
  setloading,
  curren,
  page,
  setcurren,
  setdata,
  productitem,
  itemobj,
  giatri,
}) => {
  useEffect(() => {
    setdata(data);
  }, [giatri]);
  const dispatch = useDispatch();
  const [box, Setbox] = useState(false);
  const [idopen, setidopen] = useState(null);
  const [listitem,setlistitem] = useState(null)
  const [quantity, setquantity] = useState(1);
  const handelbox = (item) => {
    setlistitem(item)
    Setbox(true)
    console.log(item)
    dispatch(Addtocart({
      id: item.id,
      quantity: quantity,
      img: item.img,
      title: item.title,
      price: item.price,
      size: item.size[0],
      color: item.color[0],
    }))
  };

  return (
    <>
      <div className="grid">
        <div className="gridviewwrap">
          {data.map((item) => (
            <div key={item.id}>
              <div className="gridviewitem">
                <Link to={`/product/${item.title}`}>
                  <div className="sandalimg">
                    <img src={item?.img} alt="" />
                  </div>
                </Link>
                <div className="gridviewitemheading">
                  <div className="gridviewtitle">
                    <h1>{item.title.toUpperCase()}</h1>
                  </div>
                  <div className="gridviewiflex">
                    <h1>{item.price}.000đ</h1>
                    <h2>{item.price}.000đ</h2>
                  </div>
                  <div className="gridviewcolor">
                    <h1>màu sắc :</h1>
                    {item.color.map((item, index) => {
                      return <h2 key={index}>{item}</h2>;
                    })}
                  </div>
                  <div className="gridviewsize">
                    <h1>size :</h1>
                    {item.size.map((item, index) => {
                      return <h2 key={index}>{item}</h2>;
                    })}
                  </div>
                  <div
                    className="griviewbtn"
                    onClick={() => handelbox(item)}
                  >
                    <button>mua hàng</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {productitem.length == 8 ? null : (
          <Pagegit
            data={data}
            setdata={setdata}
            curren={curren}
            page={page}
            product={product}
            productitem={productitem}
            setloading={setloading}
            setcurren={setcurren}
          />
        )}
        {box ? <Boxitem itemlist={listitem} Setbox={Setbox} /> : null}
      </div>
    </>
  );
};

export default Gridview;

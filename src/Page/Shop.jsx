import React, { useContext, useState, useEffect, useCallback } from "react";
import { Apicontext, Apidata } from "../Contextapi/Apidata";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { size } from "../Data/Data";
import { color } from "../Data/Data";
import { price } from "../Data/Data";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import { BiSolidDownArrow, BiAlignLeft, BiAlignRight } from "react-icons/bi";
const Shop = () => {
  const { API, Categories, phonelist, loading, setloading, option } =
    useContext(Apicontext);

  const [shop, setshop] = useState(API);
  const [opencolor, setopencolor] = useState(false);
  const [brand, setbrand] = useState(false);
  const handelcolorgrid = () => {
    setopencolor(true);
    if (opencolor == true) {
      setopencolor(false);
    }
  };
  const handelbrand = () => {
    setbrand(true);
    if(brand == true){
      setbrand(false)
    }
  };
  const [coloritem, setcoloritem] = useState([]);
  const handelbtn = (cl) => {
    if (coloritem.includes(cl)) {
      setcoloritem((prev) => prev.filter((vl) => vl !== cl));
    } else {
      setcoloritem((prev) => [...prev, cl]);
    }
  };
  const [category, setcategory] = useState([]);
  const handelcategory = (cl) => {
    if (category.includes(cl)) {
      setcategory((prev) => prev.filter((vl) => vl !== cl));
    } else {
      setcategory((prev) => [...prev, cl]);
    }
  };
  const update = useCallback(() => {
    let temp = API;
    if (coloritem.length > 0) {
      temp = temp.filter((item) =>
        item.color.find((el) => coloritem.includes(el))
      );
    }

    if (category.length > 0) {
      temp = temp.filter((item) => category.includes(item.category));
    }

    setshop(temp);
  }, [coloritem, setshop, category]);

  useEffect(() => {
    update();
  }, [update]);
  return (
    <div className="shoppage">
      <div className="shoppageitem">
        <div className="cartlistheading">
          <h1>trang chủ /</h1>
          <h2>cửa hàng</h2>
        </div>
      </div>
      <div className="shopbanner">
        <img src="https://file.hstatic.net/1000230642/collection/web_banner___phien_ban_40_nam_dcc89c653e48402e9d9b5d22b29612b9_master.png" />
      </div>
      <div className="shopwraplist">
        <div className="shopwrap">
          {Categories.map((item) => (
            <Link to={`/${item.slug}`} style={{ textDecoration: "none" }}>
              <div className="shopitem">
                <img src={item.img} alt="" />
                <h1>{item.title}</h1>
              </div>
            </Link>
          ))}
          <div className="clflex">
            {coloritem.map((item) => (
              <div className="clitem">
                <h1>{item}</h1>
                <button
                  onClick={() =>
                    setcoloritem(coloritem.filter((el) => el !== item))
                  }
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="clflex">
            {category.map((item) => (
              <div className="clitem">
                <h1>{item}</h1>
                <button
                  onClick={() =>
                    setcategory(category.filter((el) => el !== item))
                  }
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="shoplistflex">
          <div className="shoplistleft">
            <div className="shoplistdata" onClick={handelcolorgrid}>
              <h1>màu sắc</h1>
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="shoplistdata">
              <h1>kích thước</h1>
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="shoplistdata" onClick={handelbrand}>
              <h1>thương hiệu</h1>
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="shoplistdata">
              <h1>giá</h1>
              <i class="fa-solid fa-check"></i>
            </div>
            {opencolor ? (
              <div
                className="listopencolorwrap"
                onClick={() => setopencolor(false)}
              >
                {color.map((item) => (
                  <div className="listopencolor">
                    <input
                      type="checkbox"
                      id=""
                      checked={coloritem.includes(item.slug)}
                      value={item.slug}
                      onChange={(e) => handelbtn(e.target.value)}
                    />
                    <button style={{ background: item.color }}></button>
                  </div>
                ))}
              </div>
            ) : null}

            {brand ? (
              <div
                className="listopencolorwrap"
                onClick={() => setbrand(false)}
              >
                {Categories.map((item) => (
                  <div className="listopencolor">
                    <input
                      type="checkbox"
                      checked={category.includes(item.title)}
                      value={item.title}
                      onChange={(e) => handelcategory(e.target.value)}
                      id=""
                    />
                    <h1>{item.title}</h1>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="shoplistrigth">
            <div className="shoplistdata">
              <h1>sắp xếp theo</h1>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div className="sandelpos">
          <div className="sandalgrid">
            {shop.map((item) => (
              <div className="sandalitem">
                <Link
                  to={`/product/${item.title}`}
                  style={{ textDecoration: "none" }}
                  key={item.id}
                >
                  <div className="sandalpadding">
                    <div className="sandalimg">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="sandaltitle">
                      <h1>{item.title.toLowerCase()}</h1>
                    </div>
                    <div className="sandalprice">
                      <h1>{item.price}.000đ</h1>
                      <h2>{item.price}.000đ</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React, { useContext, useState, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { Link, useParams } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { BsGrid, BsGrid1X2 } from "react-icons/bs";
import { BiSolidDownArrow, BiAlignLeft, BiAlignRight } from "react-icons/bi";
import Grid from "../Grid/Grid";
import Gridview from "../Grid/Gridview";
import { useSearchParams } from "react-router-dom";
import Pagegit from "../Grid/Pagegit";
import Loading from "../Component/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Productfilter = () => {
  const { API, Categories, option, loading, setloading } =
    useContext(Apicontext);
  const { slug } = useParams();
  const product = API.filter((item) => item?.slug === slug);
  const itemobj = product.find((item) => item?.slug === slug);
  const phukien = API.filter((item) => item.category === "phụ kiện");
  const [curren, setcurren] = useState(1);
  const [page, setpage] = useState(9);
  const lastpage = curren * page;
  const firtpage = lastpage - page;
  const productitem = product.slice(firtpage, lastpage);
  const [data, setdata] = useState(productitem);
  const [grid, setgrid] = useState(false);
  const [open, setopen] = useState(false);
  const [opencolor, setopencolor] = useState(false);
  const [sortby, setsortby] = useSearchParams();
  const [giatri, setgiatri] = useState(null);
  const handelselect = () => {
    setopen(true);
    if (open == true) {
      setopen(false);
    }
  };
  const handelcolor = () => {
    setopencolor(true);
    if (opencolor == true) {
      setopencolor(false);
    }
  };
  useEffect(() => {
    setdata(productitem);
  }, [slug]);

  const handellist = (giatri) => {
    if (giatri === "từ a-z") {
      setdata(productitem);
      sortby.set("sortby", giatri);
      setsortby(sortby);
    } else if (giatri === "từ z-a") {
      const itemrever = productitem.reverse();
      setdata(itemrever);
      sortby.set("sortby", giatri);
      setsortby(sortby);
    } else if (giatri === "tăng dần") {
      const hight = productitem.sort((a, b) => a.price - b.price);
      setdata(hight);
      sortby.set("sortby", giatri);
      setsortby(sortby);
    } else if (giatri === "giảm dần") {
      const low = productitem.sort((a, b) => b.price - a.price);
      setdata(low);
      sortby.set("sortby", giatri);
      setsortby(sortby);
    } else if (giatri === "theo tên") {
      const name = productitem.sort((a, b) => a.title.localeCompare(b.title));
      setdata(name);
      sortby.set("sortby", giatri);
      setsortby(sortby);
    }
    setgiatri(giatri);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="cartlist">
          <div className="cartlistheading">
            <h1>trang chủ /</h1>
            <h2>{itemobj?.category?.toLowerCase()}</h2>
          </div>
          <div className="cartlistleft">
            <div className="cartleftdata">
              <div className="cartleftflex">
                <div className="cartleftflexbar" >
                <i class="fa-solid fa-bars"></i>
                </div>
                <div className="cartleftheadingapi">
                  <h1>danh mục sản phẩm</h1>
                </div>
              </div>
              <div>
                {Categories.map((item) => (
                  <Link
                    to={`/${item.slug}`}
                    key={item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="listli">
                      <li
                        style={{ color: slug === item.slug ? "#e67e22" : "" }}
                      >
                        {item.title}
                      </li>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="carttop">
                <h1>top sản phẩm</h1>
              </div>
              <div className="cartkinh">
                {phukien.map((item) => (
                  <Link
                    to={`/product/${item.title}`}
                    key={item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="cartkinhitem">
                      <div className="cartkinhimg">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="cartkinhprice">
                        <h1>{item.title.toLowerCase()}</h1>
                        <h2>{item.price}.000đ</h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="cartlistrigth">
            <div className="cartselect">
              <div className="cartselectheading">
                <h1>{itemobj?.category.toUpperCase()}</h1>
                <h2>({product.length} sản phẩm)</h2>
              </div>
              <div className="cartselectflex">
                <div className="cartselectone" onClick={handelselect}>
                  <h1>sắp xếp</h1>
                </div>
                <div className="cartselecticon" onClick={handelselect}>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>

              <div className="cartselectgrid">
                <div
                  className="cartselectgridleft"
                  onClick={() => setgrid(false)}
                >
                  <i class="fa-solid fa-list" style={{color:grid ? 'white' : '#e67e22'}}></i>
                </div>
                <div
                  className="cartselectgridrigth"
                  onClick={() => setgrid(true)}
                >
                  <i class="fa-solid fa-list-ol" style={{color:grid ? '#e67e22' : 'white'}}></i>
                </div>
              </div>
              {open ? (
                <div className="cartoption">
                  {option.map((item) => (
                    <div
                      className="cartoptionlist"
                      onClick={() => setopen(false)}
                      key={item.id}
                    >
                      <li onClick={() => handellist(item.value)}>
                        {item.title}
                      </li>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {grid ? (
              <Gridview
                data={data}
                setdata={setdata}
                curren={curren}
                page={page}
                product={product.length}
                productitem={productitem}
                setloading={setloading}
                setcurren={setcurren}
                itemobj={itemobj}
                giatri={giatri}
              />
            ) : (
              <Grid
                data={data}
                itemobj={itemobj}
                setdata={setdata}
                curren={curren}
                page={page}
                product={product.length}
                productitem={productitem}
                setloading={setloading}
                setcurren={setcurren}
                slug={slug}
                giatri={giatri}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Productfilter;

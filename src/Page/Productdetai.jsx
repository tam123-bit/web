import React, { useContext, useState, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { useParams } from "react-router-dom";
import user from "../Asset/LOGO/user.jpg";
import { Link } from "react-router-dom";
import Loading from "../Component/Loading";
import { useSelector, useDispatch } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Addtocart } from "../Redux/cartSlice";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Productdetai = () => {
  const { API, Categories, phonelist, loading, setloading } =
    useContext(Apicontext);
  const navdetai = useNavigate();
  const { title } = useParams();
  const productdetai = API.find((item) => item.title === title);
  const [color, setcolor] = useState(productdetai?.color[0]);
  const [img, setimg] = useState(productdetai?.images[0]);
  const [size, setsize] = useState(productdetai?.size[0]);
  const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();

  const handeladdtocart = (data) => {
    dispatch(
      Addtocart({
        id: productdetai.id,
        quantity: quantity,
        img: img,
        title: productdetai.title,
        price: productdetai.price,
        size: size,
        color: color,
      })
    );
    setloading(true);
  };
  const handelsetsize = (size) => {
    setsize(size);
  };

  const handelimg = (img) => {
    setimg(img);
    if (productdetai.images[0] === img) {
      setcolor(productdetai.color[0]);
    } else if (productdetai.images[1] === img) {
      setcolor(productdetai.color[1]);
    } else if (productdetai.images[2] === img) {
      setcolor(productdetai.color[2]);
    }else if (productdetai.images[3] === img) {
      setcolor(productdetai.color[3]);
    }
  };

  useEffect(() => {
    setimg(productdetai?.images[0]);
  }, [title]);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 200);
  }, [loading]);
  const detai = API.filter((item) => item?.slug === productdetai?.slug);
  const detaiid = detai.filter((item) => item.title !== productdetai.title);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="detai">
          <div className="detaiheading">
            <h1>trang chủ /</h1>
            <h2>{productdetai?.category.toUpperCase()} /</h2>
            <h3>{productdetai?.title}</h3>
          </div>
          <div className="detaiwrap">
            <div className="detaiimg">
              <img src={img} alt="" />
            </div>
            <div className="detaiitem">
              <div className="detaititle">
                <h1>
                  {productdetai?.title.toLowerCase()}({color},{size})
                </h1>
              </div>
              <div className="detaima">
                <h1>mã sản phẩm:</h1>
                <h2>{productdetai?.ma}</h2>
              </div>
              <div className="detaiprice">
                <h1>{productdetai?.price}.000đ</h1>
                <h2>{productdetai?.price}.000đ</h2>
              </div>
              <div className="detaicolor">
                <h1>màu sắc : </h1>
                <h2>{color}</h2>
              </div>

              <div className="detailistimg">
                {productdetai?.images.map((item, index) => (
                  <div
                    className="detaiimglist"
                    key={index}
                    style={{
                      border: img === item ? "2px solid #3498db" : "",
                    }}
                  >
                    <img
                      src={item}
                      alt="logo"
                      onClick={() => handelimg(item)}
                    />
                  </div>
                ))}
              </div>

              <div className="detaisize">
                <h1>kích thước:</h1>
                <h2>{size}</h2>
              </div>
              <div className="detaiwrapbtn">
                {productdetai?.size.map((item) => (
                  <div className="detaibtn" onClick={() => handelsetsize(item)}>
                    <button
                      style={{
                        background: size === item ? "#3498db" : "white",
                        color: size === item ? "white" : "",
                      }}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
              <div className="detaiquantity">
                <div className="detaiquantityheading">
                  <h1>số lượng:</h1>
                </div>
                <div className="detaiquantityflex">
                  <span
                    onClick={() =>
                      quantity !== 1 ? setquantity(quantity - 1) : quantity
                    }
                  >
                    -
                  </span>
                  <h1>{quantity}</h1>
                  <span onClick={() => setquantity(quantity + 1)}>+</span>
                </div>
              </div>
              <div className="detaitotal">
                <div className="detaibtnone">
                  <button onClick={() => handeladdtocart(productdetai)}>
                    thêm vào giỏ hàng<br></br>{" "}
                    <span>(nhận hàng thanh toán tại nhà)</span>
                  </button>
                </div>
                <Link to={`/cart`} style={{ textDecoration: "none" }}>
                  <div
                    className="detaitwo"
                    onClick={() => handeladdtocart(productdetai)}
                  >
                    <button>mua hàng</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="detaiuser">
            <div className="detaiuserheading">
              <img src={user} alt="" />
              <h1>hỗ trợ</h1>
            </div>
            <div className="detaiuserwrap">
              {phonelist.map((item) => (
                <div key={item.id} className="detaiuseritem">
                  <img src={item.img} alt="logo" />
                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="detaiidwrap">
            {detaiid.slice(0, 7).map((item) => (
              <Link
                to={`/product/${item.title}`}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <div className="detaiiditem">
                  <div className="detaiidimg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="detaiidtitle">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="detaiidflex">
                    <h1>{item.price}.000đ</h1>
                    <h2>{item.price}.000đ</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="detaiidcolor">
            <div className="detaiidcolorheading">
              <h1>đặc điểm nổi bật</h1>
              <h2>{productdetai?.lorem}</h2>
              <h2>
                màu {color} ,size {size}
              </h2>
              <h2>Giao hàng toàn quốc 30,000vnđ</h2>
              <hr />
            </div>
            <div className="productdetai">
              <h1>thông tin chi tiết</h1>
              {productdetai?.images.map((item, index) => (
                <div key={index} className="productdetaiidlistimg">
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productdetai;

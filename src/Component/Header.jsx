import React, { useContext, useState, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import Headerscss from "../Sass/Headerscss.scss";
import logo from "../Asset/LOGO/logo.png";
import cart from "../Asset/LOGO/cart.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cartbox from "../Page/Cartbox";
import Search from "../Page/Search";
import { useLocation } from "react-router-dom";
const Header = () => {
  const local = useLocation();
  const slug = local.pathname;
  const cartlength = useSelector((state) => state.cart.product);
  const amout = cartlength.reduce((total, item) => (total += item.quantity), 0);
  const [cartopen, setcartopen] = useState(false);
  const handelcartopen = () => {
    setcartopen(true);
    if (cartopen == true) {
      setcartopen(false);
    }
  };
  const navigate = useNavigate();
  const handelnav = () => {
    navigate("/");
  };
  const handelshop = () => {
    navigate("/shop");
  };
  const handelblog = () => {
    navigate("/lien-he");
  };
  const { Categories, loading, setloading } = useContext(Apicontext);
  const [search, setsearch] = useState("");
  const handelsearch = () => {
    if (search.length > 0) {
      navigate(`/search?query=${search}`);
    } else {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <header>
      {search === "" ? null : <Search setsearch={setsearch} search={search} />}
      {cartopen ? <Cartbox setcartopen={setcartopen} /> : null}
      <nav>
        <div className="navlogo">
          <img src={logo} alt="" />
        </div>
        <div className="navform">
          <div className="navforminput">
            <input
              type="text"
              name=""
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              id=""
              placeholder="từ khóa tìm kiếm"
            />
          </div>
          <div className="navfromicon" onClick={handelsearch}>
            <AiOutlineSearch />
          </div>
        </div>
        <div className="navcart" onClick={handelcartopen}>
          <div className="navcartimg">
            <img src={cart} alt="" />
          </div>
          <div className="navcartheading">
            <h1>{amout}</h1>
          </div>
        </div>
      </nav>
      <div className="navbarlist">
        <div className="navbarlisthome" onClick={handelnav}>
          <h1>trang chủ</h1>
        </div>
        <div className="navbarlisthome" onClick={handelshop}>
          <h1>cửa hàng</h1>
        </div>

        <div className="navbarlistwrap">
          {Categories.map((item) => (
            <Link
              key={item.id}
              to={`/${item.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="navbarlistitem">
                <h1>{item.title.toUpperCase()}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="navbarlistblog" onClick={handelblog}>
          <h1>liên hệ</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

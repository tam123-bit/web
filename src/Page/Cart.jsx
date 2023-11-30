import React, { useContext, useState, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneDelete, AiFillCheckCircle } from "react-icons/ai";
import { Countsum, Distcountsum, Delete } from "../Redux/cartSlice";
import { option } from "../Data/Data";
const Cart = () => {
  const { provinces } = useContext(Apicontext);
  const [name, setname] = useState("");
  const [namenot, setnamenot] = useState("");
  const [phone, setphone] = useState("");
  const [phonenot, setphonenot] = useState("");
  const [email, setemail] = useState("");
  const [emailnot, setemailnot] = useState("");
  const [tinhthanhnot, settinhthanhnot] = useState("");
  const [quanhuyennot, setquanhuyennot] = useState("");
  const [phuongxanot, setphuongxanot] = useState("");
  const [tinhthanh, settinhthanh] = useState("");
  const [quanhuyen, setquanhuyen] = useState("");
  const [phuongxa, setphuongxa] = useState("");
  const [diachi,setdiachi] = useState('')
  const [diachinot,setdiachinot] = useState('')
  const [ghichu,setghichu] = useState('')
  const [ghichunot,setghichunot] = useState('')
  const [openai, setopenai] = useState(false);
  const dispatch = useDispatch();
  const [number, setnumber] = useState(null);
  const cart = useSelector((state) => state.cart.product);
  const itembox = cart.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  const handelsubmit = () => {
    if (name.length == 0) {
      setnamenot("họ và tên không được để trống");
    } else if (name.length !== 0) {
      setnamenot("");
    }

    if (phone.length == 0) {
      setphonenot("số điện thoại không được để trống");
    } else if (phone.length !== 0) {
      setphonenot("");
    }

    if (email.length == 0) {
      setemailnot("email không được để trống");
    } else if (email.includes("@gmail.com")) {
      setemailnot("");
    } else {
      setemailnot("trường này phải chứa @gmail.com");
    }

    if(tinhthanh.length == 0){
      settinhthanhnot('tỉnh thành không được để trống')
    }else if(tinhthanh.length !== 0){
      settinhthanhnot('')
    }
    if(quanhuyen.length == 0){
      setquanhuyennot('quận huyện không được để trống')
    }else if(quanhuyen.length !== 0){
      setquanhuyennot('')
    }
    if(phuongxa.length == 0){
      setphuongxanot('phường xã không được để trống')
    }else if(phuongxa.length !== 0){
      setphuongxanot('')
    }

    if(diachi.length == 0){
      setdiachinot('địa chỉ không được để trống')
    }else if(diachi.length !== 0){
      setdiachinot('')
    }
    if(ghichu.length == 0){
      setghichunot('ghi chú không được để trống')
    }else if(ghichu.length !== 0){
      setghichunot('')
    }
  };
  const [cartopen, setcartopen] = useState(false);
  const handelbtn = () => {
    setcartopen(true);
  };
  return (
    <div className="cart">
      <div className="cartheadingdetai">
        <h1>thông tin đơn hàng</h1>
        <h2>trang chủ / thông tin đơn hàng</h2>
      </div>
      <div className="carticonflex">
        <div className="cartuser">
          <BiUserCircle style={{ fontSize: "40px" }} />
          <h1>thông tin đơn hàng</h1>
        </div>
        <div className="cartuser">
          <BsFillCartPlusFill style={{ fontSize: "40px" }} />
          <h1>hình thức thanh toán</h1>
        </div>
        <div className="cartuser">
          <AiOutlineCheckCircle style={{ fontSize: "40px" }} />
          <h2>hoàn thành</h2>
        </div>
      </div>
      <div className="cartflex">
        <div className="cartleft">
          <div className="cartleftheadingapi">
            <h1>thông tin đơn hàng</h1>
          </div>
          {cart.length == 0 ? (
            <div className="cartno">không có sản phẩm</div>
          ) : (
            <div>
              <div className="cartflexwrap">
                {cart.map((item) => (
                  <div className="cartflexitem">
                    <div className="cartfleximg">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="cartflextitle">
                      <h1>
                        {item.title}({item.color},{item.size})
                      </h1>
                      <h2>{item.price},000đ</h2>
                    </div>
                    <div>
                      <div
                        className="cartflexicon"
                        onClick={() =>
                          dispatch(
                            Delete({
                              id: item.id,
                            })
                          )
                        }
                      >
                        <AiOutlineClose />
                      </div>
                      <div className="cartflexinput">
                        <span onClick={() => dispatch(Distcountsum(item.id))}>
                          -
                        </span>
                        <h1>{item.quantity}</h1>
                        <span onClick={() => dispatch(Countsum(item.id))}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cartsumflex">
                <h1>sử dụng voucher:</h1>
                <h2>-</h2>
              </div>
              <div className="cartsuminput">
                <div className="cartsumdelete">
                  <AiTwotoneDelete />
                </div>
                <div className="cartsuminputone">
                  <input type="text" name="" id="" />
                </div>
                <div className="cartsumcheckicon">
                  <AiFillCheckCircle />
                </div>
              </div>
              <div className="cartlistflex">
                <div className="cartlistflexone">
                  <h1>tổng cộng:</h1>
                  <h2>{itembox},000đ</h2>
                </div>
                <div className="cartlistflexone">
                  <h1>thành tiền:</h1>
                  <h2>{itembox},000đ</h2>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cartrigth">
          <div className={`cartrigthheading`}>
            <h1
              onClick={() => setopenai(false)}
              style={{ color: openai ? "" : "red" }}
            >
              địa chỉ giao hàng
            </h1>
            <h2
              onClick={() => setopenai(true)}
              style={{ color: openai ? "red" : "" }}
            >
              đăng nhập
            </h2>
          </div>
          {openai ? (
            <div>
              <h1>login</h1>
            </div>
          ) : (
            <div>
              <div className="cartrigthflexinput">
                <div className="headinginput">
                  <input
                    type="text"
                    name=""
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    id=""
                    placeholder="họ và tên"
                  />
                  <p>{namenot}</p>
                </div>
                <div className="headinginput">
                  <input
                    type="text"
                    name=""
                    id=""
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    placeholder="số điện thoại"
                  />
                  <p>{phonenot}</p>
                </div>
                <div className="headinginput">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    name=""
                    id=""
                    placeholder="email"
                  />
                  <p>{emailnot}</p>
                </div>
              </div>
              <div className="cartrigthselect">
                <div className="headinginput">
                  <input type="text" name="" id="" value={tinhthanh} onChange={(e)=>settinhthanh(e.target.value)} placeholder="--tỉnh thành--" />
                  <p>{tinhthanhnot}</p>
                </div>
                <div className="headinginput">
                  <input type="text" name="" value={quanhuyen} onChange={(e)=>setquanhuyen(e.target.value)} id="" placeholder="--quận huyện--" />
                  <p>{quanhuyennot}</p>
                </div>
                <div className="headinginput">
                  <input type="text" name="" value={phuongxa} onChange={(e)=>setphuongxa(e.target.value)} id="" placeholder="--phường xã--" />
                  <p>{phuongxanot}</p>
                </div>
              </div>
              <div className="cartadddress">
                <input type="text" name="" value={diachi} onChange={(e)=>setdiachi(e.target.value)} id="" placeholder="địa chỉ" />
                <p>{diachinot}</p>
              </div>
              <div className="carttext">
                <div className="carttextheading">
                  <h1>yêu cầu của khách hàng</h1>
                  <h2>(ghi chú size,màu sắc,số lượng)</h2>
                </div>
                <div className="carttexttera">
                  <textarea
                    name=""
                    id=""
                    value={ghichu}
                    onChange={(e)=>setghichu(e.target.value)}
                    cols="30"
                    rows="10"
                    placeholder="ghi chú"
                  ></textarea>
                  <p>{ghichunot}</p>
                </div>
              </div>
              <div className="carttotal">
                <button type="submit" onClick={handelsubmit}>
                  tiếp tục thanh toán
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

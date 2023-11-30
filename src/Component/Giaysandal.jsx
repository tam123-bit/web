import React, { useContext } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { BiHappyAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Giaysandal = () => {
  const { API, Categories } = useContext(Apicontext);
  const sandal = Categories.filter((item) => item.title === "giày sandal");
  const sandalheading = sandal.map((item) => item.title);
  const sandalfilter = API.filter((item)=>item.slug === 'giay-sandal')
  return (
    <section className="sandal">
      <div className="sandalheading">
        <div className="sandalicon">
          <BiHappyAlt />
        </div>
        <h1>{sandalheading[0].toUpperCase()}</h1>
      </div>
      <div className="sandalhr">
        <hr />
      </div>
      <div className="sandalwrap">
        {sandalfilter.slice(0,8).map((item) => (
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
    </section>
  );
};

export default Giaysandal;

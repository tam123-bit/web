import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagegit from "./Pagegit";

const Grid = ({
  data,
  product,
  slug,
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
  return (
    <div className="grid">
      <div className="sandalgrid">
        {data.map((item) => (
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
   
    </div>
  );
};

export default Grid;

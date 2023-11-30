import React, { useContext, useEffect } from "react";
import { Apicontext } from "../Contextapi/Apidata";
import { Link } from "react-router-dom";
const Search = ({ setsearch, search }) => {
  const { API, Categories } = useContext(Apicontext);
  useEffect(() => {
    document.addEventListener("click", () => {
      setsearch("");
    });
  }, [search]);

  return (
    <div className="search">
      <div className="searchwrap">
        {API.filter((item) => item.title.toLowerCase().includes(search)).map(
          (item) => (
            <Link
              key={item.id}
              to={`/product/${item.title}`}
              style={{ textDecoration: "none" }}
            >
              <div className="searchitem">
                <div className="searchimg">
                  <img src={item.img} alt="" />
                </div>
                <div className="searchheading">
                  <h1>{item.title.toLowerCase()}</h1>
                  <div className="searchprice">
                    <h1>{item.price}.000đ</h1>
                    <h2>{item.price}.000đ</h2>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Search;

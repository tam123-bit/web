import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const Pagegit = ({
  product,
  setloading,
  curren,
  page,
  setcurren,
  setdata,
  productitem,
  data,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(product / page); i++) {
    pages.push(i);
  }
  const [sort, setsort] = useSearchParams("");
  const handelbtn = (btn) => {
    setcurren(btn);
    sort.set("page", btn);
    setsort(sort);
    setTimeout(() => {
      setloading(true);
    }, 100);
  };
  useEffect(() => {
    setdata(productitem);
  }, [curren]);
  const handelprev = () => {
    setcurren(curren - 1);
    if (curren == 1) {
      setcurren((curren = 1));
    } else {
      sort.set("page", curren - 1);
      setsort(sort);
    }
    setTimeout(() => {
      setloading(true);
    }, 100);
  };
  const handelnext = () => {
    setcurren(curren + 1);
    if (curren == 2) {
      setcurren((curren = 2));
    } else {
      sort.set("page", curren + 1);
      setsort(sort);
    }
    setTimeout(() => {
      setloading(true);
    }, 100);
  };
  return (
    <div className="pagewrap">
      <div className="pageprev" onClick={handelprev}>
        <GrFormPrevious />
      </div>
      <div className="pageflex">
        {pages.map((item, index) => (
          <div className="pagebtn" key={index} onClick={() => handelbtn(item)}>
            <button
              style={{
                background: curren === item ? "#00a8ff" : "#bdc3c7",
                color: curren === item ? "white" : "black",
              }}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="pagenext" onClick={handelnext}  >
        <GrFormNext />
      </div>
    </div>
  );
};

export default Pagegit;

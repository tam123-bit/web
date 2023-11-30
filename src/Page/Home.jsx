import React from "react";
import Homescss from "../Sass/Homescss.scss";
import Banner from "../Component/Banner";
import Giaysandal from "../Component/Giaysandal";
import Giaynam from "../Component/Giaynam";
import Giaychieucao from "../Component/Giaychieucao";
import Aokhoac from "../Component/Aokhoac";
import Phukien from "../Component/Phukien";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Banner />
        <div className="home">
          <Giaysandal />
          <Giaynam />
          <Giaychieucao />
          <Aokhoac />
          <Phukien />
        </div>
      </div>
    </>
  );
};

export default Home;

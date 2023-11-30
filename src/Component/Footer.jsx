import React from "react";
import Footerscss from "../Sass/Footerscss.scss";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerheading">
          <h1>HỘ KINH DOANH KIM HUỆ</h1>
          <p>
            giấy chứng nhận đăng ký hộ kinh doanh số 01F8020901 do Uỷ ban nhân
            dân quận Thanh Xuân cấp ngày 01/02/2021 Số 57 Hạ Đình, phường Thanh
            Xuân Trung, quận Thanh Xuân, Hà Nội, Việt Nam
          </p>
          <h2>Tổng Đài Online: 0961745466</h2>
        </div>
        <div className="footerheading">
          <h1>VỀ CHÚNG TÔI</h1>
          <h2>chính sách bảo mật của evara</h2>
          <h2>chính sách quy định chung</h2>
          <h2>chính sách đặt hàng-thanh toán</h2>
          <h2>chính sách vận chuyển</h2>
          <h2>chính sách đổi trả</h2>
        </div>
        <div className="footerheading">
          <h1>ĐĂNG KÝ NHẬN THÔNG BÁO</h1>
          <h2>
            Đăng ký nhận thông tin khuyến mãi và cập nhật sản phẩm mới nhất từ
            EVARA
          </h2>
          <div className="footerflex">
            <input type="text" name="" id="" placeholder="email" />
            <div className="footericon">
              <BiLogoGmail />
            </div>
          </div>
          <h2>Email liên hệ: cskhevara@gmail.com</h2>
          <h2>EVARA Shop thời trang nam cao cấp.</h2>
          <h2>Hotline: 0981.461.444</h2>
        </div>
      </div>
      <div className="footerbanner">
        <p>Shop thời thời trang cao cấp EVARA đã khẳng định được sự chuyên nghiệp của mình trong công việc. Thời trang tại EVARA được cập nhật mới liên tục, mỗi mẫu đều có số lượng hàng đầy đủ để cung ứng cho khách hàng. Đội ngũ nhân viên của EVARA trẻ trung, năng động và phong cách bán hàng chuyên nghiệp nhiệt tình...EVARA cam kết bán hàng đúng giá niêm yết, chất lượng đảm bảo, hỗ trợ khách hàng thử hàng trước khi thanh toán. Shop online EVARA luôn đem lại sự hài lòng đến với khách hàng!</p>
      </div>
    </footer>
  );
};

export default Footer;

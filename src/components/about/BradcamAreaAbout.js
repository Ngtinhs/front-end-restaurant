import React  from 'react';

export default function BradcamAreaAbout() {
  return (
    <div className="main_about_wrap">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h3>Giới thiệu</h3>
            <p>
              Nhà hàng Tính Tú Thông Hưng là mô hình phục vụ các món ăn gọi riêng lẻ theo nhu
              cầu. Mỗi món tương ứng với giá tiền khác nhau.BBQ mô hình
              gọi món, với thực đơn đa dạng hơn 200 món ăn cùng các set bộ và
              combo dành cho 2-4 người với mức giá hợp lý. Món sườn King là món
              ăn đặc trưng và rất nổi tiếng mà bất cứ thực khách nào đến King
              BBQ cũng không thể bỏ qua.  Nhà hàng Tính Tú Thông Hưng là điểm đến cho các khách
              hàng có nhu cầu tiếp khách, tụ tập bạn bè, gia đình, liên hoan
              sinh nhật.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="about_thumb">
                  <img src="img/about/about_1.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="about_thumb">
                  <img src="img/about/about_2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

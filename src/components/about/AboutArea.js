import React from 'react';

export default function AboutArea() {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_info_wrap">
              <h3>Nhà hàng Tính Tú Thông Hưng</h3>
              <span className="long_dash"></span>
              <p>
                Nhà hàng Tính Tú Thông Hưng, nơi hội tụ nền ẩm thực tinh hoa các nước Châu Á. Nhà hàng sở hữu thực đơn phong phú về hương vị, đa dạng về màu sắc khiến thực khách “phải lòng” bởi độ thơm ngon, hảo hạng cũng như chất lượng tuyệt vời của các món ăn được chế biến dày công, tỉ mỉ. 
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_img">
              <div className="img_1">
                <img src="img/about/big.png" alt="" width = '460px' height = '440px' />
              </div>
              <div className="small_img">
                <img src="img/about/small.png" alt="" width = '321px' height = '324px'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

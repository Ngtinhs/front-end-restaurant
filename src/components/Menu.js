import React from 'react';

import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <div>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid p-0">
            <div className="header_bottom_border">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo_test.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  ">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/" className="active">
                            Trang chủ
                          </Link>
                        </li>
                        <li>
                          <Link to="/menu">Thực đơn</Link>
                        </li>

                        <li>
                          <Link to="/about">Giới thiệu</Link>
                        </li>
                        <li>
                          <Link to="/booking">Đặt bàn</Link>
                        </li>
                        {/* <li>
                            <Link to="/blog">Tin tức</Link>
                          </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

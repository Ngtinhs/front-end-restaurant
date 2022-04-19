import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios
      .post('/check_feedback', data)
      .then(res => {
        let response = JSON.stringify(res.data);
        console.log('feedback');
        console.log(response);
        if (response === '-1') {
          alert(
            `Quý khách đã phản hồi với số điện thoại:  ${data.phone}, vui lòng kiểm tra lại!  `
          );
        }
        if (response === '1') {
          alert('Đã ghi nhận phản hồi của bạn!');

          axios
            .post('/feedback', data)
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
        alert('Lỗi phản hồi huhu!');
      });
  };
  const style_validate = {
    color: 'red'
  };
  return (
    <div>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Phản Hồi</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        ref={register({
                          required: true,
                          maxLength: 20,
                          minLength: 5
                        })}
                        placeholder="Nhập tên của bạn"
                      />
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'required' &&
                          'Vui lòng nhập tên của bạn!'}{' '}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="phone"
                        ref={register({
                          required: true,
                          maxLength: 11,
                          minLength: 10
                        })}
                        placeholder="Số điện thoại của bạn"
                        type="number"
                      />
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'required' &&
                          'Vui lòng nhập số điện thoại của bạn!'}
                      </div>
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'maxLength' &&
                          'Số điện thoại không hợp lệ!'}
                      </div>
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'minLength' &&
                          'Số điện thoại không hợp lệ!'}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        id="message"
                        name="content"
                        cols="30"
                        rows="9"
                        ref={register({ required: true })}
                        placeholder="Nội dung muốn phản hồi"
                      />

                      <div style={style_validate}>
                        {errors.content &&
                          errors.content.type === 'required' &&
                          'Vui lòng nhập nội dung muốn phản hồi!'}{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>HUFLIT</h3>
                  <p>TP Hồ Chí Minh</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+8412345678</h3>
                  <p>
                    Nhà hàng mở mọi ngày từ thứ 2 đến chủ nhật, từ 18.00-1.00
                  </p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>Ngtinhs@gmail.com</h3>
                  <p>Hãy gửi chúng tôi bất cứ lúc nào!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

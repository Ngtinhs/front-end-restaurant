import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
export default function ReservationArea() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios
      .post('/check_booking', data)
      .then(res => {
        let response = JSON.stringify(res.data);
        console.log('response');
        console.log(response);
        if (response === '-2') {
          alert(
            `Số điện thoại ${data.phone} đã có người sử dụng, vui lòng nhập số điện thoại khác!`
          );
        }
        if (response === '0') {
          alert(
            `Xin lỗi ngày ${data.date}, vào thời điểm lúc ${data.time}h, bàn số ${data.number_table} đã có người đặt, quý khách vui lòng chọn vào khung giờ khác! `
          );
        }
        if (response === '-1') {
          alert(
            `Vào ngày ${data.date}, lúc ${data.time}h , quý khách đã đặt bàn rồi, vui lòng kiểm tra lại!`
          );
        }
        if (response === '1') {
          alert('Đặt  bàn thành công!');
          axios
            .post('/booking', data)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const style_validate = {
    color: 'red'
  };
  return (
    <div className="Reservation_area">
      <div className="container p-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-75">
              <h3>Đặt Bàn</h3>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          {/* Đặt chỗ ngồi */}
          <div className="col-lg-6">
            <div className="book_Form">
              <h3>Đặt chỗ ngồi</h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        name="name"
                        ref={register({
                          required: true,
                          maxLength: 20,
                          minLength: 10
                        })}
                        placeholder="Tên"
                      />
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'required' &&
                          'Vui lòng nhập vào ô này!'}{' '}
                      </div>
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'maxLength' &&
                          'Vui lòng kiểm tra lại tên!'}
                      </div>
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'minLength' &&
                          'Vui lòng kiểm tra lại tên!'}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        name="phone"
                        ref={register({
                          required: true,
                          maxLength: 11,
                          minLength: 10
                        })}
                        placeholder="Số điện thoại "
                        type="number"
                      />
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'required' &&
                          'Vui lòng nhập vào ô này!'}
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
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div
                        // role="wrapper"
                        className="gj-datepicker gj-datepicker-md gj-unselectable"
                      >
                        <input
                          name="date"
                          type="date"
                          ref={register({ required: true })}
                        />
                        <div
                          style={{
                            color: 'red',
                            marginTop: 18,
                            marginBottom: 15
                          }}
                        >
                          {errors.date &&
                            errors.date.type === 'required' &&
                            'Vui lòng lựa chọn ngày ăn!'}
                        </div>
                 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div className="input_field">
                        <select name="time" ref={register({ required: true })}>
                          <option value="" disabled  hidden>
                            Thời gian sẽ đến?
                          </option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                          <option value="23:00">23:00</option>
                        </select>
                        <div style={{ color: 'red' }}>
                          {errors.time &&
                            errors.time.type === 'required' &&
                            'Vui lòng lựa chọn giờ!'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <select
                        name="number_table"
                        ref={register({ required: true })}
                      >
                        <option value="" disabled  hidden>
                          Bàn số ?
                        </option>
                        <option value="1"> 1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8"> 8 </option>
                      </select>
                      <div style={style_validate}>
                        {errors.number_table &&
                          errors.number_table.type === 'required' &&
                          'Vui lòng lựa chọn số bàn sẽ ăn!'}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <select name="people" ref={register({ required: true })}>
                        <option value="" disabled  hidden>
                          Bạn đi với bao nhiêu người?
                        </option>
                        <option value="5 "> {`< 5`} </option>
                        <option value="5 ">5 </option>
                        <option value="10 ">10 </option>
                        <option value="> 15 ">  15 </option>
                      </select>
                      <div style={style_validate}>
                        {errors.people &&
                          errors.people.type === 'required' &&
                          'Vui lòng lựa chọn số lượng người!'}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <button className="sumbit_btn" type="submit">
                      Đặt bàn
                    </button>
                  </div>

                  <div className="col-xl-12">
                    <div className="col-lg-12">
                      <div className="single_add d-flex">
                        <div className="icon">
                          <img src="img/svg_icon/address.svg" alt="" />
                        </div>
                        <div className="ifno">
                          <h4>Địa chỉ</h4>
                          <p>
                            99 Âu Cơ, Thị Trấn EaSup, Đắk Lắk 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single_add d-flex">
                        <div className="icon">
                          <img src="img/svg_icon/head.svg" alt="" />
                        </div>
                        <div className="ifno">
                          <h4>Liên hệ</h4>
                          <p>0123456789</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single_add d-flex"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

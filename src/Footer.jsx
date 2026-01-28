import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <section className='footer position-relative'>
      {/* اراجعهم تانى */}
      <div className='bg1 position-absolute'></div>
      <div className='bg2 position-absolute'></div>
      <div className="container-fluid container-lg ">
        <div className="row g-5 footer-header">
          <div className="col-md-3 ">
            <div className="d-flex align-items-center gap-3">
              <div className="footer-logo d-flex align-items-center justify-content-center">
                ع
              </div>
              <h3>عدسة</h3>
            </div>
            <p>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
            <div className="d-flex align-items-center gap-3">
                <div className="footer-icons d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div className="footer-icons d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className="footer-icons d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="footer-icons d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                
            </div>
          </div>

          <div className="col-md-3 d-flex flex-column">
            <h3 className='d-flex align-items-center gap-2'>
              <span className='line-before'></span>استكشف
            </h3>
            <NavLink className='a d-flex align-items-center ' to={""}>
              <i class="fa-solid fa-angle-left opacity-0" ></i>
              الرئيسية</NavLink>
            <NavLink className='a d-flex align-items-center 'to={"article"}>
              <i class="fa-solid fa-angle-left opacity-0" ></i>
              المدونة</NavLink>
            <NavLink className='a d-flex align-items-center 'to={"about"}>
              <i class="fa-solid fa-angle-left opacity-0" ></i>
              من نحن</NavLink>
          </div>
          
          <div className="col-md-3 d-flex flex-column">
            
            <h3 className='d-flex align-items-center gap-2'>
              <span className='line-before'></span>
              التصنيفات
            </h3>
            
            <NavLink className='a d-flex align-items-center'to={""}>
              <i class="fa-solid fa-angle-left opacity-0"></i>
              إضاءة 
            </NavLink>
            <NavLink className='a d-flex align-items-center'to={""}>
              <i class="fa-solid fa-angle-left opacity-0 "></i>
              بورتريه
            </NavLink>
            <NavLink className='a d-flex align-items-center ' to={""}>
              <i class="fa-solid fa-angle-left opacity-0"></i>
              مناظر طبيعية</NavLink>
            <NavLink className='a d-flex align-items-center 'to={""}>
              <i class="fa-solid fa-angle-left opacity-0"></i>
              تقنيات</NavLink>
          </div>
          
          <div className="col-md-3">
            <h3 className='d-flex align-items-center gap-2'>
              <span className='line-before'></span>ابقى على اطلاع
            </h3>
            <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <input type="email" name="" id=""placeholder='أدخل بريدك الإلكتروني' />
            <button className='d-flex align-items-center justify-content-center'>اشترك</button>
          </div>
          
        </div>
        <div className="row copyRight">
          <div className="col-md-6 text-lg-end text-center">
            <p>© 2026 عدسة. صنع بكل <i class="fa-solid fa-heart"></i> جميع الحقوق محفوظة.</p>
          </div>
          <div className="col-md-6 text-lg-start text-center">
            <div className='d-flex gap-3 justify-content-lg-end justify-content-center'>
              <p>سياسة الخصوصية</p>
              <p>شروط الخدمة</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

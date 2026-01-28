import React from 'react'
import  Featured  from "./Featured";
import { NavLink } from 'react-router-dom';
export default function () {
    return (
        <>

        <section className='position-relative home-section'>
            <div className="home">
                <div className="container-lg m-auto">
                    <div className="home-content m-auto text-center">
                        <div className="featured-header d-flex align-items-center gap-2 mx-auto">
                            <div className='circl1'></div>
                            <div className='circl2'></div>
                            <span className=''>مرحباً بك في عدسة</span>
                        </div>
                    
                        <div className='home-shadow1 position-absolute'></div>
                        <div className='home-shadow2 position-absolute'></div>
                        <div className='home-shadow3 position-absolute'></div>
                        <h1>اكتشف <span>فن</span>
                            <br />
                            التصوير الفوتوغرافي</h1>
                        <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
                        <div className="position-relative d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-center">
                            <NavLink className=" text-decoration-none explore d-flex justify-content-center align-items-center" to={"blog"}>
                                    استكشف المقالات
                                    <i class="fa-solid fa-arrow-left-long"></i>
                            </NavLink>
                            <a className="more d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-circle-info"></i>
                                    اعرف المزيد
                            </a>                            
                        </div>
                        
                        <div className="mt-4 position-relative d-flex justify-content-center gap-4 flex-wrap">
                            <div className="homeCards">
                                <div className="homeIcon"><i className="fa-solid fa-pen-nib"></i></div>
                                <h3>6</h3>
                                <p>كاتب</p>
                            </div>
                            <div className="homeCards">
                                <div className="homeIcon"><i className="fa-solid fa-folder-open"></i></div>
                                <h3>4</h3>
                                <p>تصنيفات</p>
                            </div>
                            <div className="homeCards">
                                <div className="homeIcon"><i className="fa-solid fa-users"></i></div>
                                <h3>+10ألف</h3>
                                <p>قارئ</p>
                            </div>
                            <div className="homeCards">
                                <div className="homeIcon"><i className="fa-solid fa-newspaper"></i></div>
                                <h3>50+</h3>
                                <p>مقالة</p>
                            </div>
                        </div>

                        </div>
                </div>
            </div>
        </section>
        <Featured/>
        </>
    )
}

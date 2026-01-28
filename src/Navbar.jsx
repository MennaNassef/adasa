import React from 'react'
import logo from './assets/logo-GdqARQRt.png'
import { Link,NavLink } from 'react-router-dom'
// import { routes } from '../routes/routes.js'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <div className="d-flex align-items-center gap-3">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='logoName'>عدسة</h3>
                        <p className='logodesc'>عالم التصوير الفوتوغرافي</p>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto d-flex justify-content-center align-items-center px-4 gap-3">

                        <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to={""}>الرئيسية</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"blog"}>المدونة</NavLink>
                        </li>  
                        
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"article"}>من نحن</NavLink>
                        </li>
                    </ul>

                <form className="d-flex align-items-center gap-4" role="search">
                    <div className='searchIcon d-flex align-items-center justtify-content-center'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <NavLink className="start text-decoration-none" to={'blog'}>ابدأ القراءة</NavLink>
                </form>
                
                </div>
            </div>
        </nav>
    )
}

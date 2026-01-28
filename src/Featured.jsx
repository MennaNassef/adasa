import React from 'react'
import data from './posts.json'
import { NavLink } from 'react-router-dom';
import Article from './Article';
export default function Star() {

const posts =data.posts
  return (
    <>
    <section className='featured'>
        <div className="container-fluid container-lg ">
            <div className="featured-header d-flex align-items-center gap-2">
                <div className='circl1'></div>
                <div className='circl2'></div>
                <div>مميز</div>
            </div>
            <h2>مقالات مختارة</h2>
            <div className="featured-content d-flex justify-content-between align-items-center">
                <p>محتوى منتقى لبدء رحلة تعلمك</p>
                <NavLink className="text-decoration-none text-white allBtn d-flex align-items-center" to={"blog"}>
                    
                    <span>عرض الكل</span>
                    <i className="fa-solid fa-angle-left"></i>
                </NavLink>
            </div>
        {posts.filter(post=>post.featured==true).map(post => {
            return (
            <NavLink className=" text-decoration-none featured-card row mb-4 g-0 h-100" to={`/Article/${post.slug}`}>
                <div className="col-md-6 right-side position-relative">
                    <img src={post.image} alt="" />
                    <div className="position-absolute star d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-star"></i>
                        <span>
                            مميز
                        </span>
                    </div>
                </div>
                <div className="col-md-6 left-side d-flex flex-column">
                    <div className="cardHeader d-flex align-items-center gap-3">
                        <div className="featured-category">
                            {post.category}
                        </div>
                        <div className="readTime d-flex align-items-center">
                            <i className="fa-regular fa-clock"></i>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                    <h2>{post.title}</h2>
                    <p className='excerpt'>{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <div className="person position-relative">
                                <div className="personImg">
                                <img src={post.author.avatar} alt="" />
                                </div>
                                <div className='point position-absolute'></div>
                            </div>
                            <div className="personInfo">
                                <h4>{post.author.name}</h4>
                                <p>{new Date(post.date).toLocaleDateString("ar-EG", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",})}
                                </p>
                            </div>
                        </div>
                        <div className="readArtical d-flex justify-content-center align-items-center">
                            <span>اقرأ المقال</span>
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </div>
                    </div>
                    
                </div>
                
            </NavLink>
            )
        })}
        </div>
    </section>
    </>
  )
}

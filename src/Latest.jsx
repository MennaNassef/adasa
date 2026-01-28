import React, { useState } from 'react'
import data from './posts.json'
import Article from './Article'

export default function Latest() {
    const posts =data.posts
//     const [selectIndex,setIndex]=useState([])
//     {selectIndex !== null && (
//   <Article post={posts[selectIndex]} />
// )}

  return (
    <section className='featured'>
        <div className="container-fluid container-lg ">
            <div className="featured-header d-flex align-items-center gap-2">
                <div className='circl1'></div>
                <div className='circl2'></div>
                <div>الأحدث</div>
            </div>
            <h2>أحدث المقالات</h2>
            <div className="featured-content d-flex justify-content-between align-items-center">
                <p>محتوى جديد طازج من المطبعة</p>
                <div className="allArtical d-flex align-items-center">
                    <span>عرض جميع المقالات</span>
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>
            </div>
        
            <div className="row g-4">
            {posts.filter(post=>post.featured==false).slice(0,3).map((post,index) => {
            return (
            // <div className="col-md-4 latest" onClick={()=>setIndex(index)}>
            <div className="col-md-4 latest">

                    <div className='h-100 d-flex flex-column featured-card'>
                        <div className="top-side position-relative mb-2">
                            <img src={post.image} alt="" />
                            <div className="category position-absolute d-flex justify-content-center align-items-center">
                                <span>
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div className="btn-side d-flex flex-column p-4 flex-grow-1">
                            <div className="cardHeader d-flex align-items-center gap-3 mb-2">
                                <div className="readTime d-flex align-items-center">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>{post.readTime}</span>
                                </div>
                                <div className='readTime d-flex align-items-center gap-2'>
                                    <div className="dot"></div>
                                    {new Date(post.date).toLocaleDateString("ar-EG", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",})}
                                        </div>
                            </div>
                            <h3>{post.title}</h3>
                            <p className='excerpt'>{post.excerpt}</p>
                            <div className="artical d-flex justify-content-between align-items-center mt-auto">
                                <div className="d-flex justify-content-center gap-3">
                                    <div className="articalImg">
                                    <img src={post.author.avatar} alt="" />
                                    </div>
                                    <div className="articalInfo">
                                        <h4>{post.author.name}</h4>
                                        <p>{post.author.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="goToArtical d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
            )
        })}
        </div>
        </div>
    </section>
  )
}

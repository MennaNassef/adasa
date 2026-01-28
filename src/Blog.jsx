import React, { useState } from 'react'
import data from './posts.json'
import { NavLink } from 'react-router-dom';
import Article from './Article';

export default function Blog() {
    const posts =data.posts
    const [currentPage,setCurrentPage]=useState(1)
    console.log(currentPage);
    const [displayedPosts, setDisplayedPosts] = useState(posts); 
    const firstIndex=(currentPage-1) *6
    const lastIndex=firstIndex +6
    const totalPages = Math.ceil(posts.length / 6);
    console.log(firstIndex);
const currentItems = displayedPosts.slice(firstIndex,lastIndex)

    var pages=[]
    for(let i = 1; i <= Math.ceil(displayedPosts.length / 6); i++) {
        pages.push(
        <div className='pages-numbers d-flex align-items-center justify-content-center ' onClick={()=>{setCurrentPage(i), console.log(i);
        }}>
        {i}
    </div>);
    }
  return (
    <>
        <section className='position-relative blog-section'>
            <div className="home">
                <div className="container-lg m-auto">
                    <div className="home-content m-auto text-center">
                        <div className="featured-header d-flex align-items-center gap-2 mx-auto">
                            <div className='circl1'></div>
                            <div className=''>
                                <i class="fa-solid fa-newspaper"></i>
                            </div>
                            <span className=''> مدونتنا </span>
                        </div>
                    
                        <div className='home-shadow1 position-absolute'></div>
                        <div className='home-shadow2 position-absolute'></div>
                        <div className='home-shadow3 position-absolute'></div>
                        <h1>اكتشف <span>مقالاتنا</span> </h1>
                        <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                    </div>

                </div>
            </div>
            
    </section>
    <section className='home-section'>
        <div className="container-lg ">
            <div className="row mb-4">
                <div className="col-md-4">

                </div>
                <div className="col-md-8">
                    <div className='d-flex gap-3 pt-3 justify-content-end'>
                        <div className='pages-category d-flex align-items-center justify-content-center'>
                            جميع المقالات
                        </div>
                        {[...new Set(posts.map(p => p.category))].map(category => (
                        <NavLink className=" text-decoration-none pages-category d-flex align-items-center justify-content-center"
                            onClick={() => {
                            setDisplayedPosts(posts.filter(post => post.category === category));
                            setCurrentPage(1); 
                            }}
                        to={category}>
                            {category}
                        </NavLink>
                        ))}

                </div>
                </div>
                
            </div>
                <div className="row g-4">
                {currentItems.map((post,index) => {
                return (
                <NavLink className=" text-decoration-none col-md-4 latest" to={`/Article/${post.slug}`}>
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
                </NavLink>
                )
            })}
        </div>
                <div className='d-flex gap-3 pt-3 justify-content-center'>
                    
                    {
                        pages
                    }
                </div>
                
            </div>
    </section>
    </>
)
}
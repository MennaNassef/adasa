import React from 'react'
import data from './posts.json'
export default function Suggested() {
        const posts =data.posts
    
  return (
    <section className='featured suggested'>
        <div className="container-fluid container-lg ">
            {/* <div className="d-flex"> */}
                <div className="featured-content d-flex justify-content-between align-items-center">
                    <div className="suggested-header d-flex align-items-center gap-3">
                        <div className='suggested-icon d-flex align-items-center justify-content-center'>
                            <i className="fa-solid fa-images fa-2x"></i>
                        </div>
                        <div>
                            <h2>مقالات قد تعجبك</h2>
                            <p>استكشف المزيد من المحتوى المميز</p>
                        </div>
                    </div>

                    <div className="all-sugessted d-flex align-items-center">
                        <span>عرض الكل</span>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </div>
                </div>

                
        
            <div className="row g-4">
            {posts.filter(post=>post.featured==false).slice(0,3).map((post,index) => {
            return (
            // <div className="col-md-4 latest" onClick={()=>setIndex(index)}>
            <div className="col-md-4 latest">

                    <div className='h-100 d-flex flex-column featured-card'>
                        <div className="top-side position-relative">
                            <img src={post.image} alt="" />
                            <div className="category position-absolute d-flex justify-content-center align-items-center">
                                {/* <div className='shadow'></div> */}
                                <span>
                                    {post.category}
                                </span>
                                
                            </div>
                        </div>
                        <div className="btn-side d-flex flex-column p-4 pt-2 flex-grow-1">
                            
                            <h3>{post.title}</h3>
                            <p className='excerpt'>{post.excerpt}</p>
                            <div className="artical d-flex justify-content-between align-items-center mt-auto">
                                <div className="d-flex justify-content-center gap-3">
                                    <div className="articalImg">
                                    <img src={post.author.avatar} alt="" />
                                    </div>
                                    <div className="articalInfo">
                                        <h4>{post.author.name}</h4>
                                    </div>
                                </div>
                                <div className="readTime d-flex align-items-center">
                                    <span>{post.readTime}</span>
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

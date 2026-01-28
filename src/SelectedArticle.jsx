import React from 'react'
import data from './posts.json'
export default function SelectedArticle() {
  const post = data.posts[3]
  return (
    // <section className='featured'>
//        <div className="container-fluid container-lg ">
//       </div>
//     </section>
    <div className="articleHome position-relative">
      <img src={post.image} alt="" className=' position-absolute' />
      <div className="homeShadow1 position-absolute"></div>
      <div className="homeShadow2 position-absolute"></div>
      <div className="articleNav position-absolute">
        <div className='d-flex align-items-center'>
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-angle-left"></i>
          <a>المدونة</a>
          <i class="fa-solid fa-angle-left"></i>
          <a>{post.category}</a>
        </div>
      </div>


      <div className="position-absolute acticle-home-content">
        <div className='m-auto'>
          <div className='d-flex align-items-center '>
            <div className='d-flex align-items-center gap-3'>
              <p className='suggested'><span className='category'>{post.category}</span></p>
              <div className='time-and-date d-flex align-items-center gap-2'>
                <i class="fa-solid fa-calendar"></i>
                {new Date(post.date).toLocaleDateString("ar-EG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className='time-and-date d-flex align-items-center gap-2'>
                <i class="fa-solid fa-clock"></i>
                {post.readTime}
              </div>
            </div>
          </div>
          <h2>
            {post.title}
          </h2>
          <div className="content-wrier d-flex align-items-center gap-3">
            <div className="articalImg">
              <img src={post.author.avatar} alt="" />
            </div>
            <div className="articalInfo">
              <p className='authorName'>{post.author.name}</p>
              <p className='authorRole'>{post.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

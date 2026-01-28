import React from "react";
import data from "./posts.json";
import { NavLink } from "react-router-dom";
export default function Article({id}) {
  const post = data.posts[id];
  const content = post.content;

  let parts = content.split("## ");

  let intro = parts[0].trim();
  let rest = parts.slice(1);

  const sections = rest.map((section) => {
    const lines = section.split("\n");
    const title = lines[0].trim();
    const body = lines.slice(1).join("\n").trim();
    return { title, body };
  });

  return (
    <section className="article px-0 p-0">

    
        <div className="articleHome position-relative">
            <img src={post.image} alt=""/>
            <div className="homeShadow1 position-absolute"></div>
            <div className="homeShadow2 position-absolute"></div>
        
    <div className="container-fluid container-lg position-relative">        
            <div className="articleNav position-absolute">
                <div className="d-flex align-items-center">
                <NavLink to={'/home'}> 
                <i class="cleck fa-solid fa-house"></i>
                </NavLink>
                <i class="fa-solid fa-angle-left"></i>
                <NavLink className="cleck" to={'/blog'}>المدونة</NavLink>
                <i class="fa-solid fa-angle-left"></i>
                <a className="open">{post.category}</a>
                </div>
            </div>

            <div className="arcticle-home-content position-absolute">
                {/* <div className="mx-auto position-relative"> */}
                <div className="d-flex align-items-center position-relative">
                    <div className="d-flex align-items-center gap-3">
                    <p className="suggested">
                        <span className="category">{post.category}</span>
                    </p>
                    <div className="time-and-date d-flex align-items-center gap-2">
                        <i class="fa-solid fa-calendar"></i>
                        {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        })}
                    </div>
                    <div className="time-and-date d-flex align-items-center gap-2">
                        <i class="fa-solid fa-clock"></i>
                        {post.readTime}
                    </div>
                    </div>
                </div>
                <h2 className="position-relative">{post.title}</h2>
                <div className="content-wrier d-flex align-items-center gap-3">
                    <div className="articalImg position-relative">
                    <img src={post.author.avatar} alt="" />
                    </div>
                    <div className="articalInfo position-relative">
                    <p className="authorName">{post.author.name}</p>
                    <p className="authorRole">{post.author.role}</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
    </div>
</div>
        <div className="container-fluid container-lg position-relative pb-4">
            <div className="row">
            <div className="col-md-9">
                <p className="article-excerpt">{post.excerpt}</p>
                <p>{intro}</p>
                {sections.map((section, index) => (
                <div className="title">
                    <div
                    key={index}
                    className="titles-header d-flex align-items-center gap-3"
                    >
                    <div className="camera d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-camera fa-xl"></i>
                    </div>
                    <h2> {section.title}</h2>
                    </div>
                    <p>{section.body}</p>
                </div>
                ))}
                <div className="tages">
                <div className="tag-header d-flex align-items-center gap-3">
                    <div className="tag-icon d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-tags"></i>
                    </div>
                    <h3>الوسوم</h3>
                </div>
                <div className="d-flex gap-3">
                    {post.tags.map((tag) => (
                    <div className="tag d-flex align-items-center justify-content-center">
                        <span>#{tag}</span>
                    </div>
                    ))}
                </div>
                </div>

                <div className="share row g-3 p-3 d-flex justify-content-between">
                <div className="share-header col-md-6 d-flex align-items-center gap-3">
                    <div className="tag-icon d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <h3>شارك المقال</h3>
                </div>
                <div className="d-flex gap-3 col-md-6 justify-content-lg-end">
                    <div className="share-icon x d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-x-twitter"></i>
                    </div>
                    <div className="share-icon linkedin d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="share-icon whatsapp d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="share-icon link d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-link"></i>
                    </div>
                </div>
                </div>

                <div className="author row g-2 p-2">
                <div className="col-md-2 col-sm-12 d-flex justify-content-lg-start justify-content-center">
                    <div className="author-image">
                    <img src={post.author.avatar} alt="" />
                    </div>
                </div>
                <div className="writer col-md-10 text-center text-lg-end">
                    <h4>كاتب المقال</h4>
                    <h3>{post.author.name}</h3>
                    <p>{post.author.role}</p>
                    <p className="writer-info">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                    </p>
                </div>
                </div>
            </div>

            <div className="col-md-3 mb-5">
                <div className="position-sticky" style={{ top: "100px" }}>
                <div className="articleContent">
                    <div className="articleHeader d-flex align-items-center pb-3 gap-3">
                    <div className="article-header-icon d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-list"></i>
                    </div>
                    <h3>محتويات المقال</h3>
                    </div>
                    {sections.map((section, index) => (
                    <div
                        key={index}
                        className="numbers d-flex align-items-center gap-3"
                    >
                        <div className="d-flex justify-content-center align-items-center">
                        <span>{index + 1}</span>
                        </div>
                        <span> {section.title}</span>
                    </div>
                    ))}
                </div>

                <div className="read-date d-flex gap-3 justify-content-center text-center">
                    <div className="read-time">
                    <i class="fa-regular fa-clock"></i>
                    <p>{post.readTime}</p>
                    <span>وقت القراءة</span>
                    </div>
                    <div className="publich-date">
                    <i class="fa-regular fa-calendar"></i>
                    <p>
                        {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        })}
                    </p>
                    <span>تاريخ النشر</span>
                    </div>
                </div>

                <div className="massage gap-3">
                    <div className="d-flex flex-column align-items-center">
                    <div className="massage-icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <h3>لا تفوّت جديدنا</h3>
                    <p>اشترك للحصول على أحدث المقالات</p>
                    <button className="more">تصفح المزيد</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

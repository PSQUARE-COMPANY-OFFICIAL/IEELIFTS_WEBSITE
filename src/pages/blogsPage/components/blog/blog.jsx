import React, { useEffect, useState } from "react";
import "./styles/blog.css";
import moment from "moment";
import { useGetBlogByIdQuery} from "../../../../redux/rtkQuery/rtkQuery";
import { Link, useLocation } from "react-router-dom";
import RelatedTidings from "../../../../commonComponents/relatedTidings/relatedTidings";

const Blog = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const id = location.state.id;
  const [blogData, setBlogData] = useState([]);
  const { isLoading, data, error } = useGetBlogByIdQuery(id);
  console.log('data on blogpage :',data)
  const [date, setDate] = useState("");
  const [category,setCategory]=useState("")
  // const [relatedBlogs,setRelatedBlogs]=useState([])
  useEffect(() => {
    if (data?.data && !isLoading && !error) {
      setBlogData(data.data[0]);
      const formattedDate = moment(data.data[0].createdAt).format("MMMM Do, YYYY");
      setDate(formattedDate);
      setCategory(blogData.blogCategory)
    }
  }, [data, isLoading, error,category]);



  const getTextWithLinks = (text, links) => {
    if (!text || !links) return text;
    const parts = [];
    let currentIndex = 0;

    links.forEach((link) => {
      const linkIndex = text.indexOf(link.label, currentIndex);
      if (linkIndex !== -1) {
        if (linkIndex > currentIndex) {
          parts.push(text.substring(currentIndex, linkIndex));
        }
        parts.push(
          <Link to={link.url} key={link.url}  target="_blank" rel="noopener noreferrer">
            {link.label}
          </Link>
        );
        currentIndex = linkIndex + link.label.length;
      }
    });

    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex));
    }
    
    return parts;
  };

  if(!id) <h1>Coming soon ...</h1>

  return (
    <div className="blog_container">
      <div className="blog_sub_container">
        <h1 className="blog_title">{blogData?.blogTitle}</h1>
        <img src="https://ieelifts.com/wp-content/uploads/2024/05/Lifts01-2048x1366.webp" alt="" />
        <h5>{date}</h5>
        <p>{getTextWithLinks(blogData?.blogTitleFollowupText, blogData?.blogLinks || [])}</p>
      </div>

      <div className="blog_content">
        <div className="blog_subtitle_content">
          {blogData?.blogSubTitles?.map((item, index) => (
            <div key={index+1}>
              <div className="blog_subtitle_followup_text">
                <h1>{item.subTitle}</h1>
                <h3>{item.subTitleFollowupText}</h3>
              </div>
              <div className="subtitle_child_content">
                {item?.subTitleChildren?.map((subtcitem, idx) => (
                  <div key={idx+1}>
                    <h2>{subtcitem.title}</h2>
                    {subtcitem.content?.map((contentItem, i) => (
                      <h3 key={i+1}>{getTextWithLinks(contentItem.contentText, contentItem.contentLinks || [])}</h3>
                    ))}
                    <ul>
                      {subtcitem.bulletPoints?.map((bullet, i) => (
                        <li key={i+1}>{bullet.bulletPointsText}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="blog_conclusion">
        <h1>Conclusion</h1>
        <p>{getTextWithLinks(blogData?.blogConclusion?.conclusionText, blogData?.blogConclusion?.blogConclusionLinks || [])}</p>
      </div>

      <div className="blogs_tidings_section">
          <RelatedTidings category={category} id={id}/>
      </div>
    </div>
  );
};

export default Blog;

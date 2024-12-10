// import React, { useEffect, useState } from "react";
// import "./styles/blog.css";
// import moment from "moment";
// import { useGetBlogByIdNewQuery, useGetBlogByIdQuery } from "../../../../redux/rtkQuery/rtkQuery";
// import { useLocation } from "react-router-dom";

// const BlogDetail = () => {
//   const location = useLocation();
//   const pathSegments = location.pathname.split("/");
//   const id = pathSegments[pathSegments.length - 1];
//   const [blogData, setBlogData] = useState(null);
//   const [date, setDate] = useState("");
//   const { isLoading, data, error } = useGetBlogByIdNewQuery("6756d6d5620f13e61902e9f7");

//   useEffect(() => {
//     if (data?.data && !isLoading && !error) {
//       const blog = data.data[0];
//       setBlogData(blog);
//       // const formattedDate = moment(blog.createdAt).format("MMMM Do, YYYY");
//       // setDate(formattedDate);
//     }
//   }, [data, isLoading, error]);

//   return (
//     <div className="blog_container">
//       {blogData && (
//         <>
//           <div className="blog_sub_container">
//             <h1 className="blog_title">{blogData.blogTitle}</h1>
//             <img
//               src="https://ieelifts.com/wp-content/uploads/2024/05/Lifts01-2048x1366.webp"
//               alt="Blog Cover"
//             />
//             <h5>{date}</h5>
//           </div>

//           <div className="blog_content">
//             <div
//               className="blog_content_html"
//               dangerouslySetInnerHTML={{ __html: blogData.blogContent }}
//             />
//           </div>
//         </>
//       )}
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error fetching blog data!</p>}
//     </div>
//   );
// };

// export default BlogDetail;

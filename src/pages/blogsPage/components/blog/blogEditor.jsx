// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "./styles/blog.css";
// import { useAddBlogMutation } from "../../../../redux/rtkQuery/rtkQuery";

// const BlogEditor = () => {
//   const [blogTitle, setBlogTitle] = useState("");
//   const [blogContent, setBlogContent] = useState("");
//   const [blogCategory, setBlogCategory] = useState("");
//   const [createBlog] = useAddBlogMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await createBlog({
//         blogTitle,
//         blogContent, // HTML content
//         blogCategory,
//       });
//       if (response.data?.success) {
//         alert("Blog created successfully!");
//       }
//     } catch (error) {
//       console.error("Error creating blog:", error);
//     }
//   };

//   return (
//     <div className="blog_editor_container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Blog Title"
//           value={blogTitle}
//           onChange={(e) => setBlogTitle(e.target.value)}
//           className="blog_title_input"
//         />
//         <select
//           value={blogCategory}
//           onChange={(e) => setBlogCategory(e.target.value)}
//           className="blog_category_dropdown"
//         >
//           <option value="">Select Category</option>
//           <option value="Technology">Technology</option>
//           <option value="Health">Health</option>
//           <option value="Finance">Finance</option>
//         </select>
//         <ReactQuill
//           value={blogContent}
//           onChange={setBlogContent}
//           modules={{
//             toolbar: [
//               [{ header: [1, 2, 3, 4, 5, 6, false] }],
//               ["bold", "italic", "underline", "strike"],
//               [{ list: "ordered" }, { list: "bullet" }],
//               ["link", "image"],
//               ["clean"],
//             ],
//           }}
//           formats={[
//             "header",
//             "bold",
//             "italic",
//             "underline",
//             "strike",
//             "list",
//             "bullet",
//             "link",
//             "image",
//           ]}
//           className="blog_editor"
//         />
//         <button type="submit" className="submit_button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BlogEditor;

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import { useEffect } from "react";

async function page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;
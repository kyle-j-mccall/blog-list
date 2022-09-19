import React from 'react';
import { useBlogs } from '../../../hooks/useBlogs';
import BlogCard from '../../BlogCard/BlogCard';

export default function Main() {
  const { blogs } = useBlogs();
  return (
    <main>
      {blogs.map((blog) => {
        return <BlogCard key={blog.id} {...blog} />;
      })}
    </main>
  );
}

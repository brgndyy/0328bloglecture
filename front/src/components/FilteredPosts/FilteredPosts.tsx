"use client";

import { postsType } from "../../../types/postsType";
import PostList from "../FeaturedPosts/PostList";
import classes from "./FilteredPosts.module.css";

type postType = {
  posts: postsType[];
};

export default function FilteredPosts({ posts }: postType) {
  const filteredPosts = posts.filter((item) => item.category === "backend");

  return (
    <>
      <PostList posts={filteredPosts} />
      <div className={classes.select_category_container}>
        <span>
          <h2>Category</h2>
        </span>
        <option selected>All Posts</option>
        <option>My story</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Javascript</option>
      </div>
    </>
  );
}
"use client";

import { postsType } from "../../../types/postsType";
import PostList from "../Posts/PostList";
import classes from "./FilteredPosts.module.css";
import CategorySelect from "../CategorySelect/CategorySelect";
import { useState, useEffect } from "react";

const categories = [
  "All Posts",
  "My Story",
  "Frontend",
  "Backend",
  "Javascript",
];

type postType = {
  posts: postsType[];
};

export default function FilteredPosts({ posts }: postType) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selected, setSelected] = useState("all posts");

  const categorySelectHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const targetInnerText = target.innerText;

    if (targetInnerText.includes(" ")) {
      const splitWord = targetInnerText.split(" ");
      const FirstLower = splitWord[0].charAt(0).toLowerCase();
      const FirstSome = splitWord[0].slice(1);
      const SecondLower = splitWord[1].charAt(0).toLowerCase();
      const SecondSome = splitWord[1].slice(1);

      const category = FirstLower + FirstSome + " " + SecondLower + SecondSome;

      setSelected(category);
    } else {
      const firstLower = targetInnerText.charAt(0).toLowerCase();

      const category = firstLower + targetInnerText.slice(1);

      setSelected(category);
    }
  };

  useEffect(() => {
    if (selected === "all posts") {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter((item) => item.category === selected);
      setFilteredPosts(filteredPosts);
    }
  }, [selected, posts]);

  return (
    <>
      <div className={classes.posts_page_container}>
        <PostList posts={filteredPosts} />
        <div className={classes.select_category_container}>
          <span className={classes.category}>
            <h2>Category</h2>
          </span>
          {categories.map((item) => {
            return (
              <CategorySelect
                key={item}
                category={item}
                selected={selected}
                categorySelectHandler={categorySelectHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

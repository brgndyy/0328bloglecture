"use client";

import classes from "./ShowCarousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { postsType } from "../../../types/Type";
import PostItem from "../Posts/PostItem";

type CarouselPostType = {
  carouselPosts: postsType[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ShowCarousel({ carouselPosts }: CarouselPostType) {
  return (
    <>
      <h1 className={classes.logo}>You May Like</h1>
      <div className={classes.carousel_container}>
        {/* Carousel 컴포넌트 자체가 li태그를 포함하고 있다 */}
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          draggable={false}
          arrows={false}
        >
          {carouselPosts.map((post) => {
            return (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                path={post.path}
                featured={post.featured}
                imgUrl={post.imgUrl}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

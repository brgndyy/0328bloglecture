import classes from "./FeaturedPostList.module.css";
import FeaturedPostItem from "./FeaturedPostItem";

type postsType = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

type FeaturedPostListProps = {
  featuredPosts: postsType[];
};

export default function FeaturedPostList({
  featuredPosts,
}: FeaturedPostListProps) {
  return (
    <>
      <div className={classes.featuredList_container}>
        <ul>
          {featuredPosts.map((post) => {
            return (
              <FeaturedPostItem
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                path={post.path}
                featured={post.featured}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

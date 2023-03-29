import classes from "./PostList.module.css";
import PostItem from "./PostItem";
import { postsType } from "../../../types/postsType";

type PostListProps = {
  posts: postsType[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      <div className={classes.postList_container}>
        <div className={classes.featuredList_container}>
          {posts.map((post) => {
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
        </div>
      </div>
    </>
  );
}

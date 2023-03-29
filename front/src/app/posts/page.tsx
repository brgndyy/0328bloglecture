import { getAllPostData } from "../api/getData/getData";
import PostList from "@/components/FeaturedPosts/PostList";
import PostsPageCard from "@/components/Card/PostsPageCard";

export default async function Page() {
  const allData = await getAllPostData();

  return (
    <>
      <PostsPageCard>
        <PostList posts={allData} />
      </PostsPageCard>
    </>
  );
}

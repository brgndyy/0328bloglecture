import { getAllPostData } from "../api/getData/getData";
import PostList from "@/components/FeaturedPosts/PostList";
import PostsPageCard from "@/components/Card/PostsPageCard";
import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

export default async function Page() {
  const allData = await getAllPostData();

  return (
    <>
      <PostsPageCard>
        <FilteredPosts posts={allData} />
      </PostsPageCard>
    </>
  );
}

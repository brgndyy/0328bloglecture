import Profile from "@/components/Profile/Profile";
import { getFeaturedPostData } from "./api/getData/getData";
import FeaturedPostList from "@/components/FeaturedPosts/FeaturedPostList";

export default async function Home() {
  const featuredPosts = await getFeaturedPostData();

  return (
    <>
      <>
        <Profile />
        <FeaturedPostList featuredPosts={featuredPosts} />
      </>
    </>
  );
}

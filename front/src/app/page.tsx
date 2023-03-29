import Profile from "@/components/Profile/Profile";
import { getFeaturedPostData } from "./api/getData/getData";
import { getCarouselData } from "./api/getData/getData";
import PostList from "@/components/FeaturedPosts/PostList";
import ShowCarousel from "@/components/Carousel/ShowCarousel";

export default async function Home() {
  const featuredPosts = await getFeaturedPostData();
  const carouselPosts = await getCarouselData();

  return (
    <>
      <Profile />
      <h1>Featured Posts</h1>
      <PostList posts={featuredPosts} />
      <ShowCarousel carouselPosts={carouselPosts} />
    </>
  );
}

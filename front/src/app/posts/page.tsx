import { getAllPostData } from "../api/getData/getData";


import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

export default async function Page() {
  const allData = await getAllPostData();

  return (
    <>
        <FilteredPosts posts={allData} />
    </>
  );
}

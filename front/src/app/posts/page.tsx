import { getAllPostData } from "../api/getData/getData";

import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "블로그 게시글들",
};

export default async function Page() {
  const allData = await getAllPostData();

  return (
    <>
      <FilteredPosts posts={allData} />
    </>
  );
}

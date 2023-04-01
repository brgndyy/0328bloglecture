import PostDetailPage from "@/components/Posts/PostDetailPage";
import { getPostData } from "@/app/api/getData/getData";
import { Metadata } from "next";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const pageParams = id;
  const postData = await getPostData(pageParams);

  const { description, title } = postData.postData;

  return { description, title };
}

export default async function page({ params: { id } }: Params) {
  const pageParams = id;
  const postData = await getPostData(pageParams);

  return (
    <>
      <PostDetailPage
        postData={postData.postData}
        slideData={postData.slideData}
      />
    </>
  );
}

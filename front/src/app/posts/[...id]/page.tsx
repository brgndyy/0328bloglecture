import PostDetailPage from "@/components/Posts/PostDetailPage";
import { getPostData } from "@/app/api/getData/getData";

type Params = {
  id: string;
};

export default async function page({ params }: { params: Params }) {
  const pageParams = params.id;
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

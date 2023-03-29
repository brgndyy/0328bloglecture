import { getAllPostData } from "../api/getData/getData";

export default async function Page() {
  const allData = await getAllPostData();

  return (
    <>
      <h1>Posts 페이지입니다.</h1>
    </>
  );
}

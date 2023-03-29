import Profile from "@/components/Profile/Profile";
import { getPostData } from "./api/getData/getData";

export default async function Home() {
  const postData = await getPostData();

  console.log(postData);

  return (
    <>
      <>
        <Profile />
      </>
    </>
  );
}

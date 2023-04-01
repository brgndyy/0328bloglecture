import Profile from "@/components/Profile/Profile";
import ProfileSummary from "@/components/Profile/ProfileSummary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 페이지",
  description: "BRGNDY 커리어",
};

export default function Page() {
  return (
    <>
      <Profile />
      <ProfileSummary />
    </>
  );
}

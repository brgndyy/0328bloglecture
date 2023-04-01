import ContactInfo from "@/components/Contact/ContactInfo";
import ContactEmailForm from "@/components/Contact/ContactEmailForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact 페이지",
  description: "BRGNDY Contact",
};

export default function Page() {
  return (
    <>
      <>
        <ContactInfo />
        <ContactEmailForm />
      </>
    </>
  );
}

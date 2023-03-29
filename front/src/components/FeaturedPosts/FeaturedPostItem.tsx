import classes from "./FeaturedPostItem.module.css";

type postType = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export default function FeaturedPostItem({
  title,
  description,
  date,
  category,
  path,
  featured,
}: postType) {
  return <div>FeaturedPostItem</div>;
}

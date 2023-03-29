import classes from "./PostsPageCard.module.css";

type children = {
  children: React.ReactNode;
};

export default function PostsPageCard({ children }: children) {
  return <div className={classes.posts_page_card}>{children}</div>;
}

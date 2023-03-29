import classes from "./CategorySelect.module.css";

type categoryType = {
  category: string;
  selected: string;
  categorySelectHandler: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

export default function CategorySelect({
  category,
  selected,
  categorySelectHandler,
}: categoryType) {

  return (
    <>
      <span
        className={
          selected === category.toLowerCase()
            ? `${classes.selected}`
            : `${classes.not_selected}`
        }
        onClick={categorySelectHandler}
      >
        {category}
      </span>
    </>
  );
}

import classes from "./NextOrPrevPost.module.css";
import { postsType } from "../../../types/Type";
import OnlyPrevOrNext from "./OnlyPrevOrNext";
import NextAndPrevSlide from "./NextAndPrevSlide";

type slideDataType = {
  slideData: postsType[];
};

export default function NextOrPrevPost({ slideData }: slideDataType) {
  const mappedData = slideData.map(
    ({ id, title, imgUrl, description, path }) => ({
      id,
      title,
      imgUrl,
      description,
      path,
    })
  );

  return (
    <div className={classes.slideData_container}>
      {slideData.length === 1 ? (
        <>
          <OnlyPrevOrNext slideData={mappedData[0]} />
        </>
      ) : (
        <>
          <NextAndPrevSlide slideData={mappedData} />
        </>
      )}
    </div>
  );
}

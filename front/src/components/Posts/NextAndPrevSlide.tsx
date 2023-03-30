import classes from "./NextAndPrevSlide.module.css";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type slideDataType = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  path: string;
};

type NextAndPrevSlideProps = {
  slideData: slideDataType[];
};

export default function NextAndPrevSlide({ slideData }: NextAndPrevSlideProps) {
  return (
    <>
      <div className={classes.prev_and_next_container}>
        <div className={classes.prev_container}>
          <div className={classes.img_prev_container}>
            <Image
              className={classes.prevImg}
              src={slideData[0].imgUrl}
              width={100}
              height={300}
              alt={slideData[0].title}
            />
          </div>
          <div className={classes.prev_post_info_container}>
            <Link href={`/posts/${slideData[0].path}`}>
              <div className={classes.prev_info}>
                <div className={classes.prev_arrow}>
                  <AiOutlineArrowLeft />
                </div>
                <div className={classes.info}>
                  <h1>{slideData[0].title}</h1>
                  <h2>{slideData[0].description}</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.next_container}>
          <div className={classes.img_next_container}>
            <Image
              className={classes.nextImg}
              src={slideData[1].imgUrl}
              width={100}
              height={300}
              alt={slideData[1].title}
            />
          </div>
          <div className={classes.next_post_info_container}>
            <Link href={`/posts/${slideData[1].path}`}>
              <div className={classes.next_info}>
                <div className={classes.next_arrow}>
                  <AiOutlineArrowRight />
                </div>
                <div className={classes.info}>
                  <h1>{slideData[1].title}</h1>
                  <h2>{slideData[1].description}</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

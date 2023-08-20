import React, { useState, useRef } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  const sliderData = [slide1, slide2, slide3];
  let count = 0;

  const slideRef = useRef();

  console.log(".");

  const handleOnNextClick = () => {
    const productsLength = sliderData.length;
    count = (idx + productsLength + 1) % productsLength;
    setIdx(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = sliderData.length;
    count = (idx + productsLength - 1) % productsLength;
    setIdx(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center"
    >
      <BsArrowLeftSquareFill
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
        onClick={handleOnPrevClick}
      />

      <BsArrowRightSquareFill
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
        onClick={handleOnNextClick}
      />

      <img className="w-full rounded-md" src={sliderData[idx]} alt="/" />
    </div>
  );
}

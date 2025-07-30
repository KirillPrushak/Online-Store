import Image from "next/image";
import React from "react";
import slideTwo from "../../../public/images/graphics/slide-2.jpeg";

function SlideTwo() {
  return (
    <div
      className="mb-10 md:mb-15 xl:mb-20 h-20 md:h-40 xl:h-50 w-full
    relative"
    >
      <Image src={slideTwo} alt="Слайд" fill className="object-cover" />
    </div>
  );
}

export default SlideTwo;

"use client";
import { useState } from "react";
import Testimonial from "./Testimonial";

const AllTestmonial = () => {
  const [isLoadedData, setIsLoadedData] = useState([1, 2, 3]);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {isLoadedData.map((item) => (
          <Testimonial key={item} />
        ))}
      </div>
    </div>
  );
};

export default AllTestmonial;

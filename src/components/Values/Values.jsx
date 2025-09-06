import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValue = value.slice(0, 2).map((item) => {
    return (
      <div
        className="flex md:flex-row-reverse items-center gap-7"
        key={item.id}
      >
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValue = value.slice(2).map((item) => {
    return (
      <div className="flex items-center gap-7" key={item.id}>
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex md:flex-row  mt-15 md:gap-3 gap-15 flex-col">
          {/* Left Values */}
          <div className="md:min-h-100px gap-15 flex flex-col justify-between">
            {" "}
            {leftValue}
          </div>
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>
          {/* Right Values */}
          <div className="md:min-h-100px flex gap-15 flex-col justify-between">
            {rightValue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Ensuring safe and hygienic practices is essential for protecting health and maintaining trust in every bite.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Pure, natural, and chemical-free products crafted to bring you closer to nature.",
    icon: <FaSeedling />,
  },
];

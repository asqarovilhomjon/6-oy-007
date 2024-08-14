import React from "react";
import img from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="mt-28 text-center">
        <div className="container  mx-auto">
          <div className="flex items-center justify-center gap-20	">
            <div className="flex flex-col gap-8 items-start">
              <h2 className="text-5xl font-bold w-4/6">
                Мебель на любой вкус!
              </h2>
              <ul className="flex flex-col list-disc mx-[10px 10px]	text-lg font-normal">
                <li className="hover:text-yellow-500 cursor-pointer">
                  Худи, чашки для горячего чая и термосы{" "}
                </li>
                <li className="hover:text-yellow-500 cursor-pointer	">
                  Eлочные игрушки, брелочки
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                  Начало списка вещей, которые можно{" "}
                </li>
              </ul>
              <button className="transition: duration-200 hover:bg-yellow-700 hover:scale-[1.03] active:scale-[.99] py-2.5 px-20	bg-amber-500 rounded-3xl text-white	">
                Перейти в каталог
              </button>
              <p className="hover:text-yellow-700 cursor-pointer items-center text-center w-3/6 text-amber-500">
                Внести список артикулов
              </p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

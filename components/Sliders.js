import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

export default function Sliders({ settings, data, isRow }) {
  const router = useRouter();
  return (
    <Slider className="w-full rounded-lg overflow-hidden" {...settings}>
      {data.map((item, index) => (
        <div key={index} className="w-full gap-4 md:w-[170px] px-4 pb-8 ">
          <div
            className={
              isRow
                ? "shadow-xl flex md:flex-row flex-col items-center rounded-b-2xl"
                : "shadow-xl flex flex-col items-center rounded-b-2xl justify-center gap-y-8 truncate"
            }
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              className={
                isRow
                  ? "w-[625px] h-[300px] object-cover shadow-xl rounded-t-lg md:rounded-l-lg "
                  : "w-[400px] h-[300px] object-cover shadow-xl rounded-t-lg "
              }
            />
            <div className="w-full md:w-1/2 flex py-8 gap-y-4 md:gap-y-20 flex-col rounded-b-2xl">
              <p className="text-center mx-auto text-lg ">{item.title}</p>
              {!isRow ? (
                <p className=" text-center text-[#999] text-sm ">
                  {item.description}
                </p>
              ) : (
                <button
                  className="text-[#5ab963]"
                  onClick={() => router.push("/about")}
                >{`${item.button.toUpperCase()}`}</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

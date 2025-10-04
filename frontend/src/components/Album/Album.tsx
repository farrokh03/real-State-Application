// import React from "react";
const Album = (props) => {
  return (
    <>
      <div
        className={`justify-center gap-5 items-center flex-col hover:*:opacity-100 transition-all ${props.width} ${props.height} shadow-md shadow-neutral-400 bg-neutral-800 flex relative`}
      >
        <img
          className="w-1/2 h-full opacity-70 absolute left-0  object-cover transition-all"
          src={props.img1}
          alt=""
        />
        <img
          className="w-1/2 h-full opacity-70 absolute right-0  object-cover transition-all"
          src={props.img2}
          alt=""
        />
        <p className="bg-neutral-700 px-10 py-1 opacity-80 text-yellow-300 text-xl z-10">
          go check {`${props.category}`} Now!
        </p>
        <button className=" bg-amber-300 z-10 px-4 hover:text-yellow-300 hover:bg-black transition-all">
          check
        </button>
      </div>
    </>
  );
};
export default Album;

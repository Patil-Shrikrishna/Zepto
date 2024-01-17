import React from "react";
import { IoIosClose } from "react-icons/io";

const ChipSelectedItem = ({
  title,
  color,
  id,
  onClickRemove = () => {},
  focus,
}) => {
  if (!title) return null;

  return (
    <div
      className={`flex bg-gray-200 rounded-full m-2 h-fit ${
        focus ? "outline" : ""
      }`}
    >
      <div
        className={`${color} h-8 w-8 rounded-full bg-gray-300 text-center font-bold text-lg flex justify-center items-center`}
      >
        {title[0]}
      </div>
      <p className="flex justify-center items-center px-2 font-bold text-lg text-center">
        {title}
      </p>
      <button className="flex justify-center items-center text-center px-3 font-semibold text-lg">
        <IoIosClose size={32} onClick={() => onClickRemove(id)} />
      </button>
    </div>
  );
};

export default ChipSelectedItem;

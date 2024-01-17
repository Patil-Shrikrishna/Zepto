import React from "react";

const ChipDropdown = ({ items = [], onClickItem, highlight }) => {
  if (items?.length <= 0) return null;
  const renderTitle = (title) => {
    if (!highlight) return <span>{title}</span>;
    const splits = title?.split(highlight);
    const result = splits?.reduce((acc, curr, index) => {
      if (index === splits.length - 1) return [...acc, <span>{curr}</span>];
      return [...acc, <span>{curr}</span>, <b>{highlight}</b>];
    }, []);
    return result;
  };
  return (
    <div className="flex flex-col w-full">
      {items?.map((item) => (
        <div
          key={item?.id}
          className="flex items-center"
          onClick={() => onClickItem(item)}
        >
          <div
            className={`${item?.color} min-w-8 h-8 w-8 m-2 rounded-full bg-gray-300 text-center font-bold text-lg flex justify-center items-center`}
          >
            {item.title[0]}
          </div>
          <p className="min-w-fit">{renderTitle(item?.title)}</p>
          <p className="mx-2 text-sm text-gray-500">{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ChipDropdown;

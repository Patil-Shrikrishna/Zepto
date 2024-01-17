import React, { useState } from "react";
import ChipSelectedItem from "./ChipSelectedItem";
import ChipDropdown from "./ChipDropdown";

const Chip = ({ items = [], searchKey = "name" }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [focusLastItem, setFocusLastItem] = useState(null);
  const handleSearchInput = (e) => {
    const value = e?.target?.value?.toLowerCase();
    let filtered = items.filter((item) => {
      const toMatchWith = item[searchKey]?.toLowerCase();
      return toMatchWith?.indexOf(value) >= 0;
    });
    if (selectedItems?.length > 0) {
      filtered = filtered?.filter(
        ({ id }) => !selectedItems?.map(({ id }) => id).includes(id)
      );
    }
    setFilteredItems(filtered);
    setSearchValue(e?.target?.value);
  };
  const onSelectItem = (item) => {
    setSelectedItems((prev) => [
      ...prev.filter(({ id: pid }) => pid !== item.id),
      item,
    ]);
    setSearchValue("");
    setFilteredItems([]);
  };
  console.log("selectedItems", selectedItems);
  const handleKeyDownEvent = (e) => {
    if (e?.keyCode === 8) {
      // backpress
      if (focusLastItem === null) {
        setFocusLastItem(true);
        return;
      }
      if (focusLastItem) {
        setFocusLastItem(false);
        setSelectedItems((prev) => [...prev.slice(0, prev.length - 1)]);
        setFilteredItems([]);
      } else {
        setFocusLastItem(true);
        setTimeout(() => setFocusLastItem(null), 3000);
      }
    }
  };
  const handleRemoveSelectedItem = (id) => {
    setSelectedItems((prev) => prev.filter(({ id: i }) => i !== id));
    setFilteredItems([]);
  };
  const handleInputFocus = () => {
    const selectedIds = selectedItems?.map(({ id }) => id);
    const filtered = items?.filter(({ id }) => !selectedIds?.includes(id));
    setFilteredItems(filtered);
  };
  const handleInputBlur = () => {
    setTimeout(() => setFilteredItems([]), 200);
  };
  return (
    <div className="flex flex-wrap w-2/3 border-b-2 border-blue-700">
      {selectedItems.map((item, index) => (
        <ChipSelectedItem
          {...item}
          color={item.color}
          title={item.title}
          onClickRemove={handleRemoveSelectedItem}
          focus={index === selectedItems?.length - 1 && focusLastItem}
        />
      ))}

      <div className="flex items-center justify-center relative">
        <input
          type="text"
          placeholder="Add new user..."
          className="outline-none focus:outline-none"
          value={searchValue}
          onChange={handleSearchInput}
          onKeyDown={handleKeyDownEvent}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        {filteredItems?.length > 0 && (
          <div className="absolute bottom-0 left-0 translate-y-full">
            <ChipDropdown
              items={filteredItems?.map((item) => ({
                ...item,
                title: item?.name,
              }))}
              onClickItem={onSelectItem}
              highlight={searchValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chip;

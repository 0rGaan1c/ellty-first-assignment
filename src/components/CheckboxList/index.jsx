import { useState } from "react";
import Button from "../Button";
import CheckboxItem from "../CheckboxItem";
import "./style.css";

const initialPages = [
  { id: "page1", label: "Page 1", checked: false },
  { id: "page2", label: "Page 2", checked: false },
  { id: "page3", label: "Page 3", checked: false },
  { id: "page4", label: "Page 4", checked: false }
];

const CheckboxList = () => {
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const [pages, setPages] = useState(initialPages);

  const handleAllPagesChange = () => {
    const newCheckedState = !allPagesChecked;
    setAllPagesChecked(newCheckedState);
    setPages(pages.map((page) => ({ ...page, checked: newCheckedState })));
  };

  const handlePageChange = (id) => {
    setPages((prevPages) => {
      const updatedPages = prevPages.map((page) =>
        page.id === id ? { ...page, checked: !page.checked } : page
      );
      setAllPagesChecked(updatedPages.every((page) => page.checked));
      return updatedPages;
    });
  };

  const handleButtonClick = () => {
    console.log(
      "Selected pages:",
      pages.filter((page) => page.checked)
    );
  };

  return (
    <div className="checkbox-list">
      <div className="checkbox-list__header">
        <CheckboxItem
          id="all"
          label="All pages"
          checked={allPagesChecked}
          onChange={handleAllPagesChange}
        />
      </div>

      <div className="checkbox-list__pages">
        {pages.map((page) => (
          <CheckboxItem
            key={page.id}
            id={page.id}
            label={page.label}
            checked={page.checked}
            onChange={() => handlePageChange(page.id)}
          />
        ))}
      </div>

      <div className="checkbox-list__footer">
        <Button onClick={handleButtonClick}>Done</Button>
      </div>
    </div>
  );
};

export default CheckboxList;

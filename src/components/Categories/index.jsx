import { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["All", "Meet", "Veggie", "Grill", "Spicy", "Closed"];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

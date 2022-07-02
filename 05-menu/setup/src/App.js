import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
//getting all the categories from the data.js which will dynamically be shown if any new catgory is added to data.js
//geting only single/first category value from repeting one (new Set grab only unique values)
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
//filter out whose category mathes the selected category
  //if category alll is selected seting original item list

  const filterItems = (category) => {
  if(category === "all") {
    setMenuItems(items);
    return;
  }
    const newItems= items.filter((item)=>item.category
    === category)
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

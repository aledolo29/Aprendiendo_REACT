/* eslint-disable */

import frameworksList from "./items";
import ListView from "./ListView";
import { useState } from "react";
import { SearchContext } from "../context/SearchContext";
// Componentes de presentación y componentes de contenedores

function List() {
  const [items, setItems] = useState(frameworksList);

  function filterItems(search) {
    if (search === "") {
      setItems(frameworksList);
      return;
    } else {
      const FilteredItems = frameworksList.filter((item) => {
        return item.toLowerCase().includes(search.toLowerCase());
      });
      setItems(FilteredItems);
      return;
    }
  }

  return (
    <SearchContext.Provider value={{ filterItems: filterItems }}>
      <ListView elements={items} filterItems={filterItems} />;
    </SearchContext.Provider>
  );
}
export default List;

/* eslint-disable react/prop-types */

import frameworksList from "./items";
import ListView from "./ListView";
import { useState } from "react";
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

  return <ListView elements={items} filterItems={filterItems} />;
}
export default List;

/* eslint-disable */
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchInput({ filterItems }) {
  const info = useContext(SearchContext);
  console.log(info);
  return (
    <input
      onChange={(ev) => filterItems(ev.target.value)}
      type="text"
      name="buscar"
      id="buscar"
    />
  );
}

export default SearchInput;

/* eslint-disable */
import SearchInput from "../form/SearchInput";
function ListView({ elements, filterItems }) {
  return (
    <div>
      <SearchInput filterItems={filterItems} />
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListView;

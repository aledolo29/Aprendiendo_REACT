/* eslint-disable react/prop-types */

function ListView({ elements, filterItems }) {
  return (
    <div>
      <input
        onChange={(ev) => filterItems(ev.target.value)}
        type="text"
        name="buscar"
        id="buscar"
      />
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListView;

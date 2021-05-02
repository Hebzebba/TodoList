import React, { useContext } from "react";
import { ItemContext } from "./itemsContext";

const Items = ({ item, complete, done, index }) => {
  const [items, setItems] = useContext(ItemContext);

  const handleChange = (e) => {
    items[index]["complete"] = !complete;
    setItems((prev) => [...prev]);
  };

  return (
    <div className="card m-1">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={handleChange}
          checked={complete}
        />
        <label
          className={`form-check-label ${done}`}
          htmlFor="flexCheckDefault"
        >
          {item}
        </label>
      </div>
      <div className="col-auto ml-auto">
        <button
          className="btn btn-sm btn-danger mb-3"
          onClick={() => {
            items.splice(index, 1);
            setItems((prev) => [...prev]);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Items;

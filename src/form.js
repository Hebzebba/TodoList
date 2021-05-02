import React, { useContext, useState } from "react";
import { ItemContext } from "./itemsContext";

const Form = (prop) => {
  const [items, setItems] = useContext(ItemContext);
  const [data, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, { item: data, complete: false }]);
    setDate("");
  };

  return (
    <form className="row g-3 m-2" onSubmit={handleSubmit}>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Add todo"
          value={data}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-warning mb-3">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;

import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./form";
import Header from "./header";
import { ItemContext } from "./itemsContext";
import Items from "./items";
import "./App.css";

function App() {
  const [items, setItems] = useContext(ItemContext);

  return (
    <div className="card" style={{ width: "30rem", margin: "10px auto" }}>
      <Header />
      <Form />
      <hr />
      <div className="row">
        {items.map((item, key) => {
          let done = item.complete ? "complete" : "";
          return (
            <div className="col-12" key={key}>
              <Items
                item={item.item}
                complete={item.complete}
                done={done}
                index={key}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

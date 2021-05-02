import { useContext } from "react";
import { ItemContext } from "./itemsContext";

const Header = () => {
  const [items, setItems] = useContext(ItemContext);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand mr-auto" href="#">
        TodoList
      </a>
      <button type="button" className="btn btn-danger">
        Task ToDo <span className="badge bg-secondary">{items.length}</span>
      </button>
    </nav>
  );
};

export default Header;

import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { VscTrash } from "react-icons/vsc";
import { FiEdit2 } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";

function App() {
  const [newTodo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  function addTodo(e) {
    e.preventDefault(); //prevents page from refreshing

    if (!newTodo) return;

    const item = {
      id: Math.floor(Math.random() * 10000), //not foolproof to making a unique id
      value: newTodo,
    };

    setItems((oldList) => [...oldList, item]);
    setTodo("");
  }

  function deleteTodo(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editTodo(id) {
    console.log(items);
  }

  function toggled() {
    if (toggle === false) {
      setToggle(true);
    } else setToggle(false);
  }

  function searchTodo() {}

  return (
    <div className="todo-app">
      <h1>Todo app</h1>
      <form
        className="todo-form"
        onSubmit={addTodo}
        autoComplete={toggle === false ? "off" : "on"}
      >
        <input
          autoFocus
          type="text"
          name="text"
          value={newTodo}
          className="todo-input"
          onChange={(e) => setTodo(e.target.value)} //enables typing
        />
        <button className="todo-button" type="submit">
          Add
        </button>
        <button className="toggle-button" onClick={toggled}>
          History
        </button>
        <button className="search-button" onClick={searchTodo}>
          <HiSearch />
        </button>

        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="edit-button"
                  onClick={() => editTodo(item.id)}
                >
                  <FiEdit2 />
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(item.id)}
                >
                  <VscTrash />
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}
export default App;

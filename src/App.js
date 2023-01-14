import { useState } from "react";
import "./App.css";
import { VscTrash } from "react-icons/vsc";
import { FiEdit2 } from "react-icons/fi";
import { HiSearch, HiOutlinePlusCircle } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { TodoEG } from "./Example";

function App() {
  const [newTodo, setNewTodo] = useState(""); //stores inputm, can clear input
  const [items, setItems] = useState([]); //stores every input
  const [toggleA, setToggleA] = useState(false); //toggle autocomplete
  const [toggleS, setToggleS] = useState(false); //toggle search
  const [toggleE, setToggleE] = useState(false); //toggle edit
  const [search, setSearch] = useState("no results"); //stores search input
  const [id, setId] = useState("");
  const [value, setValue] = useState("");

  const inputChange = (e) => {
    setNewTodo(e.target.value);
    setSearch(e.target.value);
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //prevents page from refreshing

    if (!newTodo) return;
    if (toggleE) {
      let tempItems = items.map((item) => {
        return item.id === id ? { ...item, id, value } : item; //update object/array
      });
      setItems(tempItems);
      setToggleE(false);
    } else {
      const singleItem = {
        id: Math.floor(Math.random() * 10000), //not foolproof to making a unique id
        value: newTodo,
      };
      setItems((oldList) => [...oldList, singleItem]);
    }

    setNewTodo("");
    setId("");
  };

  const deleteTodo = (selected) => {
    const newArray = items.filter((item) => item.id !== selected);
    setItems(newArray);
  };

  const editTodo = (selected) => {
    if (toggleE === false) {
      setNewTodo(selected.value); //set input

      const selectedArray = items.find((item) => item.id === selected.id);
      let { id, value } = selectedArray;
      setId(id);
      setValue(value);
      setToggleE(true);
    } else {
      setNewTodo(selected.value); //set input

      const selectedArray = items.find((item) => item.id === selected.id);
      let { id, value } = selectedArray;
      setId(id);
      setValue(value);
    }
  };

  const toggledAuto = () => {
    if (toggleA === false) {
      setToggleA(true);
    } else setToggleA(false);
  };

  const searchTodo = (e) => {
    setToggleS(!toggleS);
    setNewTodo("");
    setToggleE(false);
  };

  const cancel = () => {
    setId("");
    setValue("");
    setToggleE(false);
    setNewTodo("");
  };

  return (
    <div className="todo-app">
      <h1>Todo app</h1>
      <form
        className="todo-form"
        onSubmit={onSubmit}
        autoComplete={toggleA === false ? "off" : "on"}
      >
        <input
          autoFocus
          type="text"
          name="text"
          value={newTodo}
          className="todo-input"
          onChange={(e) => inputChange(e)} //enables typing
        />
        {!toggleS ? (
          <>
            <button
              className={toggleE === false ? "add-button" : "addEdit-button"}
              type="submit"
            >
              {toggleE === false ? (
                <>
                  Add <HiOutlinePlusCircle />
                </>
              ) : (
                <>
                  Edit <TiTick />
                </>
              )}
            </button>
            {toggleE === false ? (
              ""
            ) : (
              <button className="cancel-button" type="button" onClick={cancel}>
                Cancel
              </button>
            )}
          </>
        ) : (
          <></>
        )}

        <button className="toggle-button" type="button" onClick={toggledAuto}>
          Autocomplete
        </button>
        <button className="search-button" type="button" onClick={searchTodo}>
          <HiSearch />
        </button>

        <ul>
          {!toggleS
            ? items.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="edit-button"
                      type="button"
                      onClick={() => editTodo(item)}
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => deleteTodo(item.id)}
                    >
                      <VscTrash />
                    </button>
                  </li>
                );
              })
            : items
                .filter((item) => item.value.toLowerCase().includes(search))
                .map((item) => <li key={item.id}>{item.value}</li>)}
        </ul>
      </form>
    </div>
  );
}
export default App;

import React, { useState } from "react";

function TodoForm(props) {
  const [state, setState] = useState("");
  const { addTodo } = props;

  function handleSubmit(e) {
    e.preventDefault();
    // props.onSubmit({
    //   text: input,
    // });
    addTodo(state);
    setState("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={state}
        className="todo-input"
        onChange={(e) => setState(e.target.value)}
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

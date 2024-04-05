import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, completed }
 * - update(): fn to call to update a todo
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority, completed = false, update }) {
  const style = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  function toggleCompleted() {
    update({
      id,
      title,
      description,
      priority,
      completed: !completed
    });
  }

  return (
    <div className="Todo" key={id}>
      <div onClick={toggleCompleted}><b style={style}>{title}</b> <small>(priority: {priority})</small></div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;

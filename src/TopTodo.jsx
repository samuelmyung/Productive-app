import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  const incomplete = todos.filter(t => !t.completed);
  // lowest-priority # is the highest priority
  let top = incomplete.reduce(
      (acc, cur) => Number(cur.priority) < Number(acc.priority) ? cur : acc, incomplete[0]);

  if (top) {
    return <Todo
    id = {top.id}
    title = {top.title}
    description = {top.description}
    priority = {top.priority} />
  } else {
    null;
  }

}

export default TopTodo;
'use strict';

/** Adds new todo to local storage todos. */
function saveTodoToLocal(todo) {
  const todos = (localStorage.getItem('todos') === null) ?
    [] :
    JSON.parse(localStorage.getItem('todos'));

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

/** Gets todos from local storage. */
function getTodosFromLocal() {
  return (localStorage.getItem('todos') === null) ? [] : JSON.parse(localStorage.getItem('todos'));
}

function removeTodoFromLocal(id) {
  const todos = (localStorage.getItem('todos') === null) ?
    [] :
    JSON.parse(localStorage.getItem('todos'));

    const updateTodos = todos.filter(todo => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(updateTodos));
}

export { saveTodoToLocal, getTodosFromLocal, removeTodoFromLocal };
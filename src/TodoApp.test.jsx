import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import TodoApp from "./TodoApp";

function addTodo(container, title = 'test title', description = 'test description', priority = 1) {
    const titleInput = container.querySelector('[name=title]');
    const descriptionInput = container.querySelector('[name=description]');
    const priorityInput = container.querySelector('[name=priority]');

    fireEvent.change(titleInput, { target: { value: title }});
    fireEvent.change(descriptionInput, { target: { value: description }});
    fireEvent.change(priorityInput, { target: { value: priority }});

    const button = container.querySelector('.NewTodoForm-addBtn');
    fireEvent.click(button);
}

it('matches snapshot with initial todos', function () {
    const { container } = render(<TodoApp initialTodos={[]} />);
  expect(container).toMatchSnapshot();
});

describe('adding todos', function () {
    it('can add a new todo', function() {
        const { container, queryByText } = render(<TodoApp initialTodos={[]} />);

        expect(queryByText('You have no todos.')).toBeInTheDocument()

        addTodo(container);

        const todo = container.querySelector('.Todo');
        expect(todo).toBeInTheDocument();
        expect(todo).toHaveTextContent('test title');
        expect(todo).toHaveTextContent('test description');
        expect(todo).toHaveTextContent('priority: 1');

    });

    it("matches snapshot after adding box", function () {
        const { container } = render(<TodoApp initialTodos={[]} />);
        addTodo(container);
        expect(container).toMatchSnapshot();
      })
})

describe('removing todos', function () {
    it('can remove a todo', function() {
        const { container } = render(<TodoApp initialTodos={[]} />);
        addTodo(container);

        const removeBtn = container.querySelector('.EditableTodo-delBtn');

        fireEvent.click(removeBtn);
        expect(removeBtn).not.toBeInTheDocument();
    });

    it('matches snapshot after removing todo', function () {
        const { container } = render(<TodoApp initialTodos={[]} />);
        addTodo(container);
        fireEvent.click(container.querySelector('.EditableTodo-delBtn'));
        expect(container).toMatchSnapshot();
    });
});
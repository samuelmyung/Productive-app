import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import TodoForm from "./TodoForm";

it("renders without crashing", function () {
    render(<TodoForm />);
});

it("matches initial form snapshot", function () {
    const { asFragment } = render(<TodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches data-entered snapshot", function () {
    const { container } = render(<TodoForm />);

    const titleInput = container.querySelector('[name=title]');
    const descriptionInput = container.querySelector('[name=description]');
    const priorityInput = container.querySelector('[name=priority]');

    fireEvent.change(titleInput, { target: { value: 'test title' }});
    fireEvent.change(descriptionInput, { target: { value: 'test description' }});
    fireEvent.change(priorityInput, { target: { value: 1 }});

    expect(container).toMatchSnapshot();
});

it("submitting form ", function () {
    const mockCreateTodo = vi.fn();
    const { container } = render(<TodoForm handleSave={mockCreateTodo} />);

    const titleInput = container.querySelector('[name=title]');
    const descriptionInput = container.querySelector('[name=description]');
    const priorityInput = container.querySelector('[name=priority]');

    fireEvent.input(titleInput, { target: { value: 'test title' }});
    fireEvent.input(descriptionInput, { target: { value: 'test description' }});
    fireEvent.input(priorityInput, { target: { value: 1 }});

    expect(mockCreateTodo).toHaveBeenCalledTimes(0);

    fireEvent.click(container.querySelector('.NewTodoForm-addBtn'));
    expect(mockCreateTodo).toHaveBeenCalledTimes(1);

    expect(container.querySelectorAll("input[value='']")).toHaveLength(1);
    expect(container.querySelectorAll("textarea")[0].value).toEqual('');

    const options = container.querySelectorAll('option');
    // expect(options[0].selected).toBeTruthy();
    // expect(container.querySelectorAll("select")[0].value).toEqual('1');
});
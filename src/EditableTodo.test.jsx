import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TODO = {
    id: 1,
    title: 'test title',
    description: 'test description',
    priority: 1
}

it('renders without crashing', function () {
    render(<EditableTodo todo={TODO} />);
});

it('matches snapshot with initial todos', function () {
    const {container} = render(
    <EditableTodo todo={TODO} />
    );
    expect(container).toMatchSnapshot();
});
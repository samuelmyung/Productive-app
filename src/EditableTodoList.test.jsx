import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { INITIAL_TODOS } from "./App";

it('renders without crashing', function () {
    render(<EditableTodoList todos={INITIAL_TODOS} />);
});

it('matches snapshot with initial todos', function () {
    const {container} = render(<EditableTodoList todos={INITIAL_TODOS} />);
    expect(container).toMatchSnapshot();
});
import { it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it('renders without crashing', function () {
    render(
        <Todo
            id={1}
            title={'test title'}
            description={'test description'}
            priority={1}
        />
    );
});

it('matches snapshot with initial todos', function () {
    const {container} = render(
    <Todo
        id={1}
        title={'test title'}
        description={'test description'}
        priority={1}
    />
    );
    expect(container).toMatchSnapshot();
});
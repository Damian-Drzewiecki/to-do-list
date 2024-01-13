/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskInput from "./TaskInput";

describe("TaskInput", () => {
  it("should render correctly", () => {
    expect(() => render(<TaskInput addNewTask={() => {}} />)).not.toThrow();
  });

  it("should display placeholder while empty", () => {
    const { getByPlaceholderText } = render(
      <TaskInput addNewTask={() => {}} />,
    );
    expect(getByPlaceholderText("Type your task...")).toBeVisible();
  });

  it("should not display submit button if input is empty", () => {
    const { getByText, getByPlaceholderText } = render(<TaskInput addNewTask={() => {}} />);

    expect(getByPlaceholderText("Type your task...")).toBeVisible();

    const addTaskButton = getByText('+');
    expect(addTaskButton).toBeDisabled();
  });

  it("should display submit button if input have text", () => {
    const { getByText, getByPlaceholderText } = render(<TaskInput addNewTask={() => {}} />);

    const input = getByPlaceholderText("Type your task...");
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    const addTaskButton = getByText('+');
    expect(addTaskButton).not.toBeDisabled();
  });

  it("should submit text after clicking submit button", () => {
    const mockAddNewTask = jest.fn();
    const { getByText, getByPlaceholderText } = render(<TaskInput addNewTask={mockAddNewTask} />);

    const input = getByPlaceholderText("Type your task...");
    userEvent.type(input, 'hi world');
    expect(input).toHaveValue('hi world');

    const addTaskButton = getByText('+');
    expect(addTaskButton).not.toBeDisabled();

    userEvent.click(addTaskButton);
    expect(getByPlaceholderText("Type your task...")).toBeVisible();
    expect(mockAddNewTask).toHaveBeenCalledTimes(1);
  });

  it("should submit text after clicking enter key", () => {
    const mockAddNewTask = jest.fn();
    const { getByText, getByPlaceholderText } = render(<TaskInput addNewTask={mockAddNewTask} />);

    const input = getByPlaceholderText("Type your task...");
    userEvent.type(input, 'hi world');
    expect(input).toHaveValue('hi world');

    const addTaskButton = getByText('+');
    expect(addTaskButton).not.toBeDisabled();

    userEvent.keyboard('[Enter]');
    expect(getByPlaceholderText("Type your task...")).toBeVisible();

    expect(mockAddNewTask).toHaveBeenCalledTimes(1);
  });
});

/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskList from "./TaskList";

describe("TaskList", () => {
  it("should render correctly", () => {
    expect(() => render(<TaskList taskList={[]} removeTask={() => {}} checkTask={() => {}} />)).not.toThrow();
  });

  it("should be empty task list", () => {
    const { getByText } = render(<TaskList />);
    const noTasksText = getByText('No tasks yet');
    expect(noTasksText).toBeVisible();
  });

  it("should show one task", () => {
    const taskListMock = [{ id: 0, text: "hello world", isChecked: false }];
    const { getByText } = render(<TaskList taskList={taskListMock} />);
    const task = getByText("hello world");
    expect(task).toBeVisible();
  });

  it("should show many tasks", () => {
    const taskListMock = [
      { id: 0, text: "hello world", isChecked: false },
      { id: 1, text: "hello world", isChecked: false },
    ];

    const { getAllByText } = render(<TaskList taskList={taskListMock} />);
    const tasks = getAllByText("hello world");
    expect(tasks).toHaveLength(2);
  });

  it("should call remove task on button click", () => {
    const taskListMock = [
      { id: 0, text: "hello world", isChecked: false },
    ];
    const mockRemoveTask = jest.fn();
    const { getByRole } = render(<TaskList taskList={taskListMock} removeTask={mockRemoveTask} checkTask={() => {}} />);

    const removeButton = getByRole("button");
    userEvent.click(removeButton);

    expect(mockRemoveTask).toHaveBeenCalledTimes(1);
    expect(mockRemoveTask).toHaveBeenCalledWith(0);
  });

  it("should show checked task", () => {
    const taskListMock = [
      { id: 0, text: "hello world", isChecked: false },
    ];
    const mockCheckTask = jest.fn();
    const { getByRole } = render(<TaskList taskList={taskListMock} checkTask={mockCheckTask} />);

    const checkButton = getByRole("checkbox");
    userEvent.click(checkButton);

    expect(mockCheckTask).toHaveBeenCalledTimes(1);
    expect(mockCheckTask).toHaveBeenCalledWith(0);
  });
});

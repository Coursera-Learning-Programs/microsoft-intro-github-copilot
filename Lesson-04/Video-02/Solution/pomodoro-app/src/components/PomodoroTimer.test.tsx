import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PomodoroTimer from "./PomodoroTimer";

describe("PomodoroTimer", () => {
  test("renders timer display", () => {
    render(<PomodoroTimer />);
    const timerDisplay = screen.getByText("25:00");
    expect(timerDisplay).toBeInTheDocument();
  });

  test("starts and stops the timer", () => {
    render(<PomodoroTimer />);
    const startPauseButton = screen.getByText("Start");

    fireEvent.click(startPauseButton);
    expect(startPauseButton.textContent).toBe("Pause");

    fireEvent.click(startPauseButton);
    expect(startPauseButton.textContent).toBe("Start");
  });

  test("resets the timer", () => {
    render(<PomodoroTimer />);
    const resetButton = screen.getByText("Reset");

    fireEvent.click(resetButton);
    const timerDisplay = screen.getByText("25:00");
    expect(timerDisplay.textContent).toBe("25:00");
  });

  test("adjusts session length", () => {
    render(<PomodoroTimer />);
    const increaseSessionButton = screen.getAllByText("+")[0];
    const decreaseSessionButton = screen.getAllByText("-")[0];

    fireEvent.click(increaseSessionButton);
    let sessionLength = screen.getByText("26");
    expect(sessionLength.textContent).toBe("26");

    fireEvent.click(decreaseSessionButton);
    sessionLength = screen.getByText("25");
    expect(sessionLength.textContent).toBe("25");
  });

  test("adjusts break length", () => {
    render(<PomodoroTimer />);
    const increaseBreakButton = screen.getAllByText("+")[1];
    const decreaseBreakButton = screen.getAllByText("-")[1];

    fireEvent.click(increaseBreakButton);
    let breakLength = screen.getByText("6");
    expect(breakLength.textContent).toBe("6");

    fireEvent.click(decreaseBreakButton);
    breakLength = screen.getByText("5");
    expect(breakLength.textContent).toBe("5");
  });
});
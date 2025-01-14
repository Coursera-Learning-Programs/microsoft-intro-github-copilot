import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import PomodoroTimer from './PomodoroTimer';

jest.useFakeTimers();

describe('PomodoroTimer Component', () => {
  test('renders with initial state', () => {
    render(<PomodoroTimer />);
    expect(screen.getByText('Session')).toBeInTheDocument();
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  // test('starts and pauses timer', () => {
  //   render(<PomodoroTimer />);
  //   fireEvent.click(screen.getByText('Start'));
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });
  //   expect(screen.getByText('24:59')).toBeInTheDocument();
  //   fireEvent.click(screen.getByText('Pause'));
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });
  //   expect(screen.getByText('24:59')).toBeInTheDocument();
  // });

  // test('resets timer', () => {
  //   render(<PomodoroTimer />);
  //   fireEvent.click(screen.getByText('Start'));
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });
  //   fireEvent.click(screen.getByText('Reset'));
  //   expect(screen.getByText('25:00')).toBeInTheDocument();
  // });

  // test('adjusts session and break lengths', () => {
  //   render(<PomodoroTimer />);
  //   fireEvent.click(screen.getAllByText('+')[0]);
  //   expect(screen.getByText('26')).toBeInTheDocument();
  //   fireEvent.click(screen.getAllByText('+')[1]);
  //   expect(screen.getByText('6')).toBeInTheDocument();
  // });

  // test('shows alert when session/break ends', () => {
  //   render(<PomodoroTimer />);
  //   fireEvent.click(screen.getByText('Start'));
  //   act(() => {
  //     jest.advanceTimersByTime(25 * 60 * 1001); 
  //   });
  //   expect(screen.getByText(/complete/i)).toBeInTheDocument();
  // });
});

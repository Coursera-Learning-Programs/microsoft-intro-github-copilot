// component to control the timer
// displays two buttons: one to start/pause (primary style) and the other to reset (danger style)
// props: isRunning, onStartPause, onReset
// uses ./Button.txt component

import React from 'react';
import Button from './Button';

interface ControlsProps {
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isRunning, onStartPause, onReset }) => {
  return (
    <div className="flex justify-center space-x-4">
      <Button onClick={onStartPause} variant="primary">
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={onReset} variant="danger">
        Reset
      </Button>
    </div>
  );
};

export default Controls;
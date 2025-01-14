// This is the main component of the Pomodoro timer.
// It uses useState, useEffect, useRef, and useCallback.
// It imports TimerDisplay, Controls, LengthSetting, and Alert.
// The states include sessionLength, breakLength, currentMode, prevModeRef, currentTime, isRunning, and showAlert.
// The default session length is 25 minutes, the break length is 5 minutes, and the default mode is 'session'.

"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import TimerDisplay from "./TimerDisplay";
import Controls from "./Controls";
import LengthSetting from "./LengthSetting";
import Alert from "./Alert";

const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_BREAK_LENGTH = 5;

const PomodoroTimer = () => {
  const [sessionLength, setSessionLength] = useState<number>(
    DEFAULT_SESSION_LENGTH
  );
  const [breakLength, setBreakLength] = useState<number>(DEFAULT_BREAK_LENGTH);
  const [currentMode, setCurrentMode] = useState<"session" | "break">(
    "session"
  );
  const prevModeRef = useRef<"session" | "break">("session");
  const [currentTime, setCurrentTime] = useState<number>(sessionLength * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime === 0) {
          setShowAlert(true);
          setIsRunning(false);
          switchMode();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, currentMode, sessionLength, breakLength]);

  useEffect(() => {
    prevModeRef.current = currentMode;
  }, [currentMode]);

  const switchMode = useCallback(() => {
    const nextMode = currentMode === "session" ? "break" : "session";
    const nextTime =
      (nextMode === "session" ? sessionLength : breakLength) * 60;
    setCurrentMode(nextMode);
    setCurrentTime(nextTime);
  }, [sessionLength, breakLength]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    showAlert && setShowAlert(false);
  };

const handleReset = () => {
    setIsRunning(false);
    setCurrentMode("session");
    setCurrentTime(DEFAULT_SESSION_LENGTH * 60);
    setSessionLength(DEFAULT_SESSION_LENGTH);
    setBreakLength(DEFAULT_BREAK_LENGTH);
    setShowAlert(false);
};

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const getAlertMessage = () => {
    const previousMode = prevModeRef.current;
    const previousModeComplete =
      previousMode === "session"
        ? "Time to take a break!"
        : "Time to get back to work!";
    return previousModeComplete;
  };

  const adjustLength = useCallback(
    (type: "session" | "break", adjustment: number) => {
      if (type === "session") {
        setSessionLength((prev) => {
          const newSessionLength = Math.max(1, Math.min(prev + adjustment, 60));
          if (currentMode === "session" && !isRunning) {
            setCurrentTime(newSessionLength * 60);
          }
          return newSessionLength;
        });
      } else {
        setBreakLength((prev) => Math.max(1, Math.min(prev + adjustment, 30)));
      }
    },
    [currentMode, isRunning]
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      {showAlert && (
        <Alert message={getAlertMessage()} onClose={handleCloseAlert} />
      )}
      <TimerDisplay time={currentTime} mode={currentMode} />
      <Controls
        isRunning={isRunning}
        onStartPause={handleStartStop}
        onReset={handleReset}
      />
      <div className="mt-6 grid grid-cols-2 gap-4">
        <LengthSetting
          title="Session Length"
          length={sessionLength}
          onIncrease={() => adjustLength("session", 1)}
          onDecrease={() => adjustLength("session", -1)}
          isDisabled={isRunning}
        />
        <LengthSetting
          title="Break Length"
          length={breakLength}
          onIncrease={() => adjustLength("break", 1)}
          onDecrease={() => adjustLength("break", -1)}
          isDisabled={isRunning}
        />
      </div>
    </div>
  );
};

export default PomodoroTimer;

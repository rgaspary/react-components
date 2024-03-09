import React, { FC } from "react";
import { Modal, Button } from "react-bootstrap";
import { SessionTimerProps } from "./SessionTimer.types";

interface TimerProps {
  alertTime: number;
  timeoutTime: number;
}

const timeComverter = (milliseconds: number): number => {
  return milliseconds / 1000 * 60;
}

const timer = (timeLimits: TimerProps) => {
  const currentTime = new Date().getTime();
  return setInterval(() => {
    console.log('currentTime: ', currentTime);
    if (timeComverter(timeLimits.alertTime) >= timeComverter(currentTime)) {
      renderModal();
    }
  });
}

const renderModal = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}

const SessionTimer: FC<SessionTimerProps> = () => {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div data-component="SessionTimer">
      <h1>Session Timer</h1>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default SessionTimer;
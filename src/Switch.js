import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle, onColor }) => {

  return (
    <>
      <input
        checked={isOn}
        on={false}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ backgroundImage: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
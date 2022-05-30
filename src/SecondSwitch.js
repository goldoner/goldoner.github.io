import React from 'react';
import './SecondSwitch.css';

const SecondSwitch = ({ isOn, handleToggle, onColor }) => {

    return (
      <>
        <input
          checked={isOn}
          on={false}
          onChange={handleToggle}
          className="react-switch-checkbox2"
          id={`react-switch-new2`}
          type="checkbox"
        />
        <label
          style={{ backgroundImage: isOn && onColor }}
          className="react-switch-label2"
          htmlFor={`react-switch-new2`}
        >
          <span className={`react-switch-button2`} />
        </label>
      </>
    );
  };

export default SecondSwitch;
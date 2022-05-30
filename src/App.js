import React, { useState } from 'react';
import './App.css';
import Switch from "./Switch";
import SecondSwitch from "./SecondSwitch";
import Window from "./Window";
import logo from './5.png';
import logo2 from './6.png';

function App() {
  const [value, setValue] = useState(false);
  const value2 = useState(false);
  const setValue2 = useState(false);

  let IMAGE_SOURCE = logo

  // this.switchImage = this.switchImage.bind(this);
  function edit() {
    console.log(IMAGE_SOURCE)
    IMAGE_SOURCE = logo2
    console.log(IMAGE_SOURCE);

  }

  // this.state = {
  //   currentImage: 0,
  //   images: [
  //   ]
  // };



  return (
    <div>
      <div className="row container .col-4 app centered1">
        <Switch
          isOn={value}
          onColor="#EF476F"
          handleToggle={() => setValue(true)} />


      </div>
      <div className="row container .col-4 app centered2 ">
        <SecondSwitch
          isOn2={value2}
          onColor="#EF476F"
          handleToggle={() => setValue2(false)} />

      </div>

      <div className="row container .col-4 app centered1">

        <div className='container row'>
          <Window />

        </div>
      </div>

    </div>



  );
}

export default App;
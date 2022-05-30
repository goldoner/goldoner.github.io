
import React, { Component } from 'react';
import logo from './5.png';
import logo2 from './6.png';
import './Window.css';
// import React, { useState } from 'react';



class Window extends Component {
  // const [lightMode, setLightMode] = React.useState(false)



  constructor() {
    super();

    this.onClick = this.onClick.bind(this)

    const img0 = require('./5.png')
    const img1 = require('./6.png')

    this.state = {
      index: 0,
      imgList: [img0, img1]


    };
  }


  onClick() {
    if (this.state.index === 0) {
      this.setState({
        index: 1
      })


    }
    // else {
    //   this.setState({
    //     index: 0
    //   })
    // }


  }




  edit() {
    // console.log(IMAGE_SOURCE)
    // IMAGE_SOURCE = logo2
    // console.log(logo);
    // logo = logo2;

  }

  render() {
    return (


      <div className='container image1'>
        <img className=' rounded mx-auto d-block ' height='70%' width='70%' src={this.state.imgList[this.state.index]}

          display='flex'
          justify-content=' center'
          align-items='center'


          onClick={this.onClick}
        >
        </img>
      </div >


    );
  }
}

export default Window;
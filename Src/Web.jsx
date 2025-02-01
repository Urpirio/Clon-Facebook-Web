import React, { Component } from 'react';
import "./Components/styles/Styles.less"
import SH_Structura from './Components/header/SH_Structura';


export default class Web extends Component {
  render() {
    return (
      <div className='Boby'>
        <SH_Structura/>
      </div>
    )
  }
}

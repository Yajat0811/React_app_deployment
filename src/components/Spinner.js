import React, { Component } from 'react'
import loading from './Spinner_1.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
}

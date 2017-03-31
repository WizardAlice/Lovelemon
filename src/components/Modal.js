import React from 'react'
import {Modal} form 'antd'

export default class Modall extends Modal{
  mount(parent = document.body){
    zIndex += 1;
    var container = document.createElement('div')
    parent.appendChild(container)
    return ReactDOM.render(<this {...Object.assign({}, Modal.defaultProps, props)} />, container, function (){
      this.__container = container
    })
  }
}
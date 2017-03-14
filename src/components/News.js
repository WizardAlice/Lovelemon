import React,{Component} from 'react'
import { Carousel } from 'antd'

export default class MainPage extends Component{
  render(){
    return(
      <div className="news">
        <Carousel effect="fade" autoplay>
          <div><h1>1</h1></div>
          <div><h1>2</h1></div>
          <div><h5>3</h5></div>
          <div><h1>4</h1></div>
        </Carousel>
      </div>
    )
  }
}
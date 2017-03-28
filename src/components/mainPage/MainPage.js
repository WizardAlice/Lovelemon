import React,{Component} from 'react'
import News from './books/News'
import BookTable from './books/BookTable'

export default class MainPage extends Component{
  render(){
    return(
      <div className="mainContainer">
        <News />
        <BookTable  />
        {this.props.children}
      </div>
    )
  }
}
import React,{Component} from 'react'
import News from '../components/News'
import BookTable from '../components/BookTable'

export default class MainPage extends Component{
  render(){
    return(
      <div className="mainContainer">
        <News />
        <BookTable  />
      </div>
    )
  }
}
import React,{Component} from 'react'

export default class Allbook extends Component{
  constructor(props){
    super(props)
    this.state={
      data:this.props.data
    }
  }
  render(){
  	let data = this.state.data
  	console.log(this.props.data)
    return(
      <div>{data}</div>
    )
  }
}
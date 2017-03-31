import React,{Component} from 'react'

export default class OneBook extends Component{
  
  constructor(props){
    super(props)
    this.state={
      data:this.props.data
    }
  }

  render(){
    console.log(this.props.data)
    return(
      <div>222</div>
    )
  }
}
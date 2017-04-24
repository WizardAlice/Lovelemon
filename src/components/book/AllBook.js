import React,{Component} from 'react'
import { Card , Button ,Table } from 'antd'


export default class Allbook extends Component{
  state = {
    bordered : true
  }
  render(){
    return(
      <div >
        <Table  {...this.state} scroll={this.props.scroll} style={this.props.styles} dataSource={this.props.data} columns={this.props.columns} />
      </div>
    )
  }
}
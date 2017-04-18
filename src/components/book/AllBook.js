import React,{Component} from 'react'
import { Card , Button ,Table } from 'antd'

const columns = [{
  title: '书籍封面',
  key : 'img',
  dataIndex : 'img',
  width: 100,
  render: text => <a href="javascript:;" ><img style={{height:50}} src={"http://ofdukoorb.bkt.clouddn.com/"+text}/></a>
},{
  title : '书名',
  key : 'name',
  dataIndex : 'bookName',
  width : 100
},{
  title : '作者',
  key : 'author',
  dataIndex : 'author',
  width : 100
},{
  title : '出版社',
  key : 'publish',
  dataIndex : 'publish',
  width : 100
},{
  title : '简介',
  key : 'abstract',
  dataIndex : 'abstract',
  width : 200
},{
  title : '是否可借',
  key : 'bookState',
  dataIndex : 'bookState',
  width : 50
},{
  title : '收藏',
  key : 'collect',
  width : 50,
  render : (text,record) => (
    <Button >收藏</Button>
  )
}]
export default class Allbook extends Component{
  state = {
    bordered : true
  }
  render(){
  	console.log(this.props.data)
    return(
      <div >
        <Table  {...this.state} style={{width:1400,marginLeft:150}} dataSource={this.props.data} columns={columns} />

      </div>
    )
  }
}
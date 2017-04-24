import React,{ Component } from 'react'
import { Button } from 'antd'
import AllBook from '../components/book/AllBook'
import OneBook from '../components/book/OneBook'

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
export default class BorrowCenter extends Component{
  constructor(props){
    super(props)
    this.state ={
      book:this.props.location.query.bookid?this.props.location.query.bookid:null,
      data:[],
      current:'alipay'
    }
  }
  
  componentDidMount(){
    console.log(this.state.book)
    if(this.state.book){  //特定书的时候
      fetch("http://localhost:3000/getbookInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id:this.state.book})
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        this.setState({data:data})
      })
    }
    else{
      fetch("http://localhost:3000/getallbook", {  //没有特定书的时候请求所有的书的信息
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        this.setState({data:data})
      })
    }
    this.props.callback(this.state.current)
  }
  render(){
    let ceternBook = this.props.location.query.bookid?this.props.location.query.bookid:null
    if(ceternBook){
       return(
        <OneBook data={this.state.data}/>
      )
    }
    else{
      return(
        <AllBook data={this.state.data} columns={columns} styles={{width:1400,marginLeft:150}}/>
      )
    }
  }
     
}
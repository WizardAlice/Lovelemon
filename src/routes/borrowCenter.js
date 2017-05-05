import React,{ Component } from 'react'
import { Button , message } from 'antd'
import cookie from 'react-cookie'
import AllBook from '../components/book/Table'
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
    <div>
      <Button onClick={() => collect(record.id)} style={{marginBottom:10}} ghost>收藏</Button><br />
      <Button onClick={() => order(record.id)} ghost>预约</Button>
    </div>
  )
}]

let collect = (a)=> {
  if(cookie.load('userId'))
    {fetch("http://localhost:3000/collect", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({userid: cookie.load('userId'), bookid: a})
          }).then((res) => {
            return res.json()
          }).then((data) => {
            message.success(data.answer)
          })
    }
  else message.error("请先登录")
}

let order = (a)=> {
  if(cookie.load('userId'))
    {fetch("http://localhost:3000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userid: cookie.load('userId'), bookid: a})
      }).then((res) => {
        return res.json()
      }).then((data) => {
        message.success(data.answer)
      })
    }
  else message.error("请先登录")  
}

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
    else if(typeof this.props.data == 'undefined'){
      fetch("http://localhost:3000/getallbook", {  //没有特定书的时候请求所有的书的信息
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        data.map((a, index) => a.key= index)
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
    else if(typeof this.props.data == 'undefined'){
      return(
        <AllBook data={this.state.data} columns={columns} styles={{width:1400,marginLeft:150}}/>
      )
    }
    else {
      return(
        <AllBook data={this.props.data} columns={columns} styles={{width:1400,marginLeft:150}}/>
      )
    }
  }
     
}
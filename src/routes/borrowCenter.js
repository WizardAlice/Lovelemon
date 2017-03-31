import React,{ Component } from 'react'
import AllBook from '../components/book/AllBook'
import OneBook from '../components/book/OneBook'

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
        <AllBook data={this.state.data}/>
      )
    }
  }
     
}
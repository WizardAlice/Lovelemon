import React,{ Component } from 'react'
import  cookie from 'react-cookie'
import {Table,Icon} from 'antd'

const { Column,ColumnFroup } = Table


const Columns = [{
  title:"name",
  dataIndex:"name",
  key:"name",
  render: (text,record)=>{
    console.log(record.nameNow)
    let string = "http://localhost:3000/download"+cookie.load('userid')+"?name="+record.nameNow
    return  <a href={string}>{text}</a>
  }
},{
  title:"type",
  dataIndex:"type",
  key:"type"
},{
  title:"size",
  dataIndex:"size",
  key:"size"
}]
export default class Rundownload extends Component{
  state={
    data:[]
  }
  getsize(size){
    if(size<1024){
      renturn (size+" BIT");
    }
    else{
      let yu=size%1024;
      size=size-yu;
      size=size/1024;      
      if(size<1024){
        return(size+" KB");
      }
      else{
        let yu=size%1024;
        size=size-yu;
        size=size/1024;        
        if(size<1024){
          return (size+" MB");
        }
        else{
        let yu=size%1024;
        size=size-yu;
        size=size/1024;   
          if(size<1024){
            return (size+" GB");
          }
          else{
            returm(size+" TB");
          }
        }
      }
    }
  }
  componentDidMount(){
    let string = "http://localhost:3000/gettest"+"?userid="+cookie.load('userid')
    let data = []
    fetch(string, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      result.map((res,index)=>{
        data.push({
          key: index,
          name: res.oriname,
          type: res.typeName,
          size:   this.getsize(res.size),
          nameNow: res.name
        })
      })
      this.setState({data:data})
    })
  }
  render(){
    let data = this.state.data
    return(
      <Table className="pinkzi" dataSource={data} columns={Columns} />
    )
  }


























}
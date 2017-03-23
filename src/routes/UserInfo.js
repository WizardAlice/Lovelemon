import React ,{ Component } from 'react'
import cookie from 'react-cookie'
import { Card } from 'antd'

export default class UserInfo extends Component{
  state={
  }
  componentDidMount(){
    fetch("http://localhost:3000/getUserInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id:cookie.load('userId')})
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      result.map((res)=>{
        this.setState(Object.assign({},this.state,res))     
      })
    })
  }

  render(){
    let data = this.state
    console.log(data)
    return(
      <div className="UserInfo" style={{backgroundImage:'URL(http://ofdukoorb.bkt.clouddn.com/'+data.img+')',height:'1000px',backgroundSize:"100%"}}>
        <Card style={{ height: '100%',opacity:'0.6'}}>
          <div style={{textAlign:"center",position:"relative"}}>
            <img className="" src={"http://ofdukoorb.bkt.clouddn.com/"+data.img}></img>
            <div><h1>name:{data.name}</h1></div>
            <div><h1>id:{data.id}</h1></div>
            <div><h1>address:{data.address}</h1></div>
            <div><h1>phone:{data.phone}</h1></div>
            <div><h1>birthdate:{data.birthdate}</h1></div>
            <div><h1>gender:{data.gender}</h1></div>
            <div><h1>password:{data.password}</h1></div>
          </div>
        </Card>
      </div>
    )
  }
}
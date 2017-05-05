import React,{Component} from 'react'
import cookie from 'react-cookie'
import { Row , Col , Button , message } from 'antd'

export default class OneBook extends Component{
  
  constructor(props){
    super(props)
    this.state={
      data:this.props.data
    }
  }

  collect = () => {
    if(cookie.load('userId'))
      {fetch("http://localhost:3000/collect", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({userid: cookie.load('userId'), bookid: this.props.data[0].id})
            }).then((res) => {
              return res.json()
            }).then((data) => {
              message.success(data.answer)
            })
      }
    else message.error("请先登录")
  }

  order = () => {
    if(cookie.load('userId'))
      {fetch("http://localhost:3000/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({userid: cookie.load('userId'), bookid: this.props.data[0].id})
            }).then((res) => {
              return res.json()
            }).then((data) => {
              message.success(data.answer)
            })
      }
    else message.error("请先登录")
  }
  render(){
    let data = this.props.data
    return(
      <div style={{marginTop:30}}>
        {
          data.length==0?null:(
            <Row>
              <Col span={5} offset={3}>
                <img src={"http://ofdukoorb.bkt.clouddn.com/"+data[0].img} style={{width:300}}/>
              </Col>
              <Col span={12}>
                <h1>{data[0].bookName} </h1><br />
                <h2>{data[0].author} </h2>
                <h3>{data[0].publish} </h3>
                <h3>出版于 {data[0].publishDate}</h3>
                <h3>注册于 {data[0].registeDate}</h3>
                <h3>索书号： {data[0].id} </h3>
                <h3>关键词： {data[0].keyword} </h3>
                <h3>当前状态： {data[0].bookState==0?"不可借":"可借"} </h3>
                <span><h3>简介：</h3><p>{data[0].abstract}</p></span>
                <div style={{marginTop:40}}> 
                  <Button ghost size="large" style={{marginRight:30}} onClick={this.collect}>收藏</Button>
                  <Button ghost size="large" onClick={this.order}>预约</Button>
                </div>
              </Col>
            </Row>
          )
        }
      </div>
    )
  }
}
import React,{Component} from 'react'
import { Row , Col } from 'antd'

export default class OneBook extends Component{
  
  constructor(props){
    super(props)
    this.state={
      data:this.props.data
    }
  }

  render(){
    let data = this.props.data
    console.log(data)
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
              </Col>
            </Row>
          )
        }
      </div>
    )
  }
}
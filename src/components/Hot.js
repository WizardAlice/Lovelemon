import React,{Component} from 'react'
import {Col ,Card,Tabs} from 'antd'
import _ from 'lodash'

const TabPane = Tabs.TabPane
let data =[]
export default class Hot extends Component{
  state ={
    get : false
  }
  componentDidMount(){
    fetch("http://localhost:3000/getBookHot", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      result.map((res)=>{
          data.push(res)
      })
      data = _.chunk(data,5)
      console.log(data)
      this.setState({get:true})
    })
  }
  render(){
    return(
      <Col span={16}>
        <div className="hotContent">
          <Card title={<h2>热门图书</h2>} extra={<a href="#">More</a>}>
            <Card>
              <Tabs type="card">
                <TabPane tab="小说" key="1">
                  {
                    data.length==0?null:(
                      <div className="novel">
                        {
                          data[0].map((res)=>{
                            if(res.img)
                              return (
                                <Card style={{ width: 145,margin_right: "35px" }} bodyStyle={{ padding: 0 }}>
                                  <div className="custom-image">
                                    <img src={"http://ofdukoorb.bkt.clouddn.com/"+res.img}/>
                                  </div>
                                  <div className="custom-card">
                                    <h3>Europe Street beat</h3>
                                    <p>www.instagram.com</p>
                                  </div>
                                </Card>
                              )
                          })
                        }
                      </div>
                    )
                  }
                </TabPane>
                <TabPane tab="文艺" key="2">文艺</TabPane>
                <TabPane tab="生活" key="3">生活</TabPane>
                <TabPane tab="管理" key="4">管理</TabPane>
                <TabPane tab="科技" key="5">科技</TabPane>
                <TabPane tab="教育" key="6">教育</TabPane>
                <TabPane tab="计算机" key="7">计算机</TabPane>
              </Tabs>
            </Card>
          </Card>
        </div>
      </Col>
    )
  }
}
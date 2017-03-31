import React,{Component} from 'react'
import {Col ,Card,Tabs} from 'antd'
import _ from 'lodash'

const TabPane = Tabs.TabPane
let data =[]
export default class HotBorrow extends Component{
  state ={
    get : false,
    data: []
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
      result = _.chunk(result,5)
      this.setState({data:result})
    })
  }
  render(){
    let data = this.state.data
    return(
      <Card title="热门借阅" className="hotBorrow"  extra={<a href="#">More</a>}>
        <Tabs type="card">
          <TabPane tab="小说" key="1">
            {
              data.length==0?null:(
                <div className="novel">
                  {
                    data[0].map((res,index)=>{
                        return (
                          <Card style={{ width: 145,margin_right: "35px" }} className="hotImg" bodyStyle={{ padding: 0 }}  key={index}>
                            <a href={"/#/book?bookid="+res.bookID}>
                              <div className="custom-image">
                                <img src={"http://ofdukoorb.bkt.clouddn.com/"+res.img}/>
                              </div>
                              <div className="custom-card">
                                <p className="bookname"><span>{index+1}</span>{res.bookName}</p>
                              </div>
                            </a>
                          </Card>
                        )
                    })
                  }
                  <Card className="hotList">
                  {
                    data[1].map((res,index)=>{
                      return (
                        <div key={index} ><a href="#"><span>{index+6}</span><h2>{res.bookName}</h2></a></div>
                      )
                    })
                  }
                  </Card>
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
    )
  }
}
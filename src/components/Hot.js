import React,{Component} from 'react'
import {Col ,Card,Tabs} from 'antd'
import Slider from 'react-slick'

const TabPane = Tabs.TabPane
export default class Hot extends Component{
  render(){
    return(
      <Col span={16}>
        <div className="hotContent">
          <Card title={<h2>热门图书</h2>} extra={<a href="#">More</a>}>
            <Card>
              <Tabs type="card">
                <TabPane tab="小说" key="1">
                  <Slider swipeToSlide="true" slidesToShow="true">
                    <div><img src={require(`../assets/01.jpg`)} /></div>
                    <div><img src={require(`../assets/02.jpg`)} /></div>
                    <div><img src={require(`../assets/03.jpg`)} /></div>
                    <div><img src={require(`../assets/04.jpg`)} /></div>
                    <div><img src={require(`../assets/05.jpg`)} /></div>
                    <div><img src={require(`../assets/06.jpg`)} /></div>
                  </Slider>
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
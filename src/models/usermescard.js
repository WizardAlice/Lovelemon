import React ,{ Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Card,Modal, Button,Input,Timeline,Carousel } from 'antd';
import cookie from 'react-cookie'
import '../assets/run.css'
      function onChange(a, b, c) {
        console.log(a, b, c);
    }

export default class Usermescard extends Component{
        state = {
        loading: false,
        visible: false,
      }
      showModal=()=>{
        this.setState({
          visible: true,
        });
      }
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }
      render(){
        return(
                        <Card title="Card title" className="usercard" extra={<a href="#">More</a>} style={{ width: 300 }}>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={12}>用户名</Col>
                                <Col xs={16} sm={16} md={16} lg={16} xl={12}>
                                    <Row>
                                      <Col span={12}><span className="getusername">Paradiser</span></Col>
                                      <Col span={12}><span href="#" className="lanzi" onClick={this.showModal}>修改</span></Col>
                                    </Row>
                                </Col>
                            </Row>

                                <Row>
                                    <Col span={12}>注册时间</Col>
                                    <Col span={12}>2017/4/10</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>注册时间</Col>
                                    <Col span={12}>2017/4/10</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>注册时间</Col>
                                    <Col span={12}>2017/4/10</Col>
                                </Row>
                                  <Timeline>
                                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                  </Timeline>
                                  <Carousel afterChange={onChange}>
                                    <div><h3>1</h3></div>
                                    <div><h3>2</h3></div>
                                    <div><h3>3</h3></div>
                                    <div><h3>4</h3></div>
                                  </Carousel>
                                    <Modal
                                          visible={this.state.visible}
                                          title="请输入要修改的值"
                                          onOk={this.handleOk}
                                          onCancel={this.handleCancel}
                                          footer={[
                                            <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                                            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                                              Submit
                                            </Button>,
                                          ]}
                                        >   
                                            <Input />
                                    </Modal>
                        </Card>
                          )
      }

}
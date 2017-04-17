import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Card,Modal, Button,Input,Timeline,Carousel } from 'antd';
import cookie from 'react-cookie'
import '../assets/run.css'
import Usermescard from '../models/usermescard'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
      function onChange(a, b, c) {
        console.log(a, b, c);
    }

export default class Userinfo extends Component{
      state = {
        loading: false,
        visible: false,
      }
      showModal = () => {
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
          <Layout>
            <Header className="header">
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu className="backgroundyellow"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1" className="backgroundyellow">option1</Menu.Item>
                    <Menu.Item key="2" className="backgroundyellow">option2</Menu.Item>
                    <Menu.Item key="3" className="backgroundyellow">option3</Menu.Item>
                    <Menu.Item key="4" className="backgroundyellow">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5" className="backgroundyellow">option5</Menu.Item>
                    <Menu.Item key="6" className="backgroundyellow">option6</Menu.Item>
                    <Menu.Item key="7" className="backgroundyellow">option7</Menu.Item>
                    <Menu.Item key="8" className="backgroundyellow">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9" className="backgroundyellow">option9</Menu.Item>
                    <Menu.Item key="10" className="backgroundyellow">option10</Menu.Item>
                    <Menu.Item key="11" className="backgroundyellow">option11</Menu.Item>
                    <Menu.Item key="12" className="backgroundyellow">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="backgroundyellow" style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>用户信息</Breadcrumb.Item>
                </Breadcrumb>
                <Content  style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={8}> 
                            <Card className="touxiang" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                </div>
                            </Card>
                            <p><Button className="userbtn" type="default">用户信息</Button></p>
                            <p><Button className="userbtn" type="default">用户历程</Button></p>
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                            <Usermescard />
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={8}> </Col>
                    </Row>
                </Content>
              </Layout>
            </Layout>
          </Layout>
            )
    }
}
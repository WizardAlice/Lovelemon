import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Card,Modal, Button,Input,Timeline,Carousel,Anchor } from 'antd';
import cookie from 'react-cookie'
import RunDownload from '../models/RunDownload'
import '../assets/run.css'
const { SubMenu } = Menu;
const { Link } = Anchor;
const { Header, Content, Sider } = Layout;
      function onChange(a, b, c) {
        console.log(a, b, c);
    }

export default class Userupload extends Component{
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
            <Header className="header fuye">
            </Header>
            <Layout className="userinfounder">
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu className="backgroundyellow"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={ <a className="baizi" href="http://localhost:8000"><span><Icon type="user" />首页</span></a>}>
                  </SubMenu>
                  <SubMenu key="sub2" title={<a className="baizi" href="http://localhost:8000/#/userinfo"><span><Icon type="laptop" />我的信息</span></a>}>
                  </SubMenu>
                  <SubMenu key="sub3" title={<a className="baizi" href="http://localhost:8000/#/userinfo"><span><Icon type="notification" />我的上传</span></a>}>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="backgroundblack" style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item className="baizi">首页</Breadcrumb.Item>
                  <Breadcrumb.Item className="baizi">我的上传</Breadcrumb.Item>
                </Breadcrumb>
                <Content  style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Row className="uploadpage">
                        <Col xs={0} sm={0} md={0} lg={0} xl={0}> 
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <RunDownload/>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={0} xl={0}> </Col>
                    </Row>
                </Content>
              </Layout>
            </Layout>
          </Layout>
            )
    }
}
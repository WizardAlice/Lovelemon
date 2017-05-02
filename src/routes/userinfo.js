import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Card,Modal, Button,Input,Timeline,Carousel,Anchor } from 'antd';
import cookie from 'react-cookie'
import '../assets/run.css'
import Usermescard from '../models/usermescard'
const { SubMenu } = Menu;
const { Link } = Anchor;
const { Header, Content, Sider } = Layout;
      function onChange(a, b, c) {
        console.log(a, b, c);
    }

export default class Userinfo extends Component{
      state = {
        loading: false,
        visible: false,
        data:false,
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
      componentDidMount(){
        fetch("http://localhost:3000/getUserInfo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:cookie.load('userid')})
        }).then((data)=>{
            return data.json()
        }).then((result)=>{
            console.log(result);
            result.map((res)=>{
                this.setState(Object.assign({},this.state,res))
                this.setState({data:true})
            })
        })
      }
    render(){
        let data = this.state
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
                  <SubMenu key="sub3" title={<a className="baizi" href="http://localhost:8000/#/userupload"><span><Icon type="notification" />我的上传</span></a>}>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="backgroundblack" style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item className="baizi">首页</Breadcrumb.Item>
                  <Breadcrumb.Item className="baizi">我的信息</Breadcrumb.Item>
                </Breadcrumb>
                <Content  style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={8}>
                            <Card className="touxiang" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image yonghuimg">
                                 <img src={data.img}style={{height:'100%'}}/>
                                </div>
                                <div className="custom-card">
                                </div>
                            </Card>
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                            <Usermescard className="usermescard"/>
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
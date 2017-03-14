import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon ,Row, Col} from 'antd';
import ReactHighcharts from 'react-highcharts'
import cookie from 'react-cookie'
import '../assets/style/layout.css'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const config = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'My first Highcharts chart'
  },
  xAxis: {
      categories: ['苹果', '香蕉', '橙子']   //指定x轴分组
  },
  yAxis: {
      title: {
          text: 'something'
      }
  },
   series: [{                                //指定数据列
      name: '小明',                          //数据列名
      data: [1, 0, 4]                        //数据
  }, {
      name: '小红',
      data: [5, 7, 3]
  }]
}

export default class IndexPage extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">User</span></span>}>
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}>
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row  type="flex" justify="space-around" align="middle">
            {cookie.load('userId')?
              (<Col span={1} offset={21} className="topButton">
                <a href="/#/login"><Icon type="login" /></a>
                <a href="/#/register"><Icon type="plus-circle-o" /></a>
              </Col>):null
            }
              <Col span={1} offset={21} className="topButton">
                <a href="#"><img style={{height: 45,width:45}} src="http://ofdukoorb.bkt.clouddn.com/4rrqyqt8bxkw.png" /></a>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 770 }}>
              <ReactHighcharts config = {config}></ReactHighcharts>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2016 Created by Alice
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
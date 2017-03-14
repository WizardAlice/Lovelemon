import React from 'react'
import cookie from 'react-cookie'
import { Layout ,Row , Col ,InputNumber ,Select,Input,Icon, Menu,Modal,Affix} from 'antd'
import '../assets/style/index.css'
import MainPage from './MainPage'

const InputGroup = Input.Group
const Search = Input.Search
const Option = Select.Option
const { Header, Content, Footer} = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const confirm = Modal.confirm

export default class Index extends React.Component{
  state={
    current:'mail'
  }
  handleClick =(e)=>{
    this.setState({
      current: e.key
    })
  }

  showConfirm() {
    confirm({
      title: '是否退出登录?',
      onOk() {
        cookie.remove('userId')
        location.reload(true)
      },
      onCancel() {}
    })
  }

  render(){
    return(
      <Layout>
        <Header>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={10} offset={2} className="mainTop">
              <a href='#'><img src="../assets/bg_logo.jpg" /><h1>图书馆</h1></a>
            </Col>
            <Col span={12} >
              <InputGroup compact className="InputGroup1">
                <Select defaultValue="书籍搜索">
                  <Option value="book">书籍搜索</Option>
                  <Option value="user">用户搜索</Option>
                  <Option value="news">新闻搜索</Option>
                </Select>
                <Search className="search" placeholder="input search text" style={{ width: 200 }} onSearch={value => console.log(value)} />
              </InputGroup>
              {cookie.load('userId')?(<a href='#' onClick={this.showConfirm} className="login"><Icon type="user"/><span className="loginSpan"></span></a>):(<a href='/#/login' className="login"><Icon type="user"/><span className="loginSpan">登录</span></a>)}
            </Col>
          </Row>
        </Header>
        <Content>
          <Affix>
            <Menu className="topMenu" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="mail">
                <Icon type="mail" />首页
              </Menu.Item>
              {cookie.load('userId')?
                (<Menu.Item key="app">
                  <Icon type="appstore" />个人信息
                </Menu.Item>):null
              }
              {cookie.load('userId')?
                (<SubMenu title={<span><Icon type="setting" />借阅信息</span>}>
                  <MenuItemGroup title="当前借阅">
                    <Menu.Item key="setting:1">fetch请求后端数据之后遍历一遍</Menu.Item>
                    <Menu.Item key="setting:2" className="colorRed">当前超期</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="当期预约">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>):null
              }
            <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          </Affix>
          {this.props.children||<MainPage />}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }

} 
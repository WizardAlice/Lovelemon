import React from 'react'
import cookie from 'react-cookie'
import { Layout ,Row , Col ,InputNumber ,Select,Input,Icon, Menu,Modal,Affix,BackTop} from 'antd'
import '../assets/style/index.css'
import MainPage from '../components/mainPage/MainPage'

const InputGroup = Input.Group
const Search = Input.Search
const Option = Select.Option
const { Header, Content, Footer} = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const confirm = Modal.confirm

export default class Index extends React.Component{
  state={
    current:'mail',
    borrowInfo:[]
  }
  handleClick =(e)=>{
    this.setState({
      current: e.key
    })
  }
  componentDidMount(){ //用户登录情况下，预览借阅信息
    if(cookie.load('userId')){
      fetch("http://localhost:3000/getBorrowInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id:cookie.load('userId')})
      }).then((data)=>{
        return data.json()
      }).then((result)=>{
        this.setState({borrowInfo:result})
      })      
    }
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
    let data = this.state.borrowInfo
    // console.log(data)
    return(
      <Layout>
        <BackTop />
        <Header>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={10} offset={2} className="mainTop">
              <a href='#'><img src={require(`../assets/logo.png`)}/></a>
            </Col>
            <Col span={12} className="ColLogin">
              <InputGroup compact className="InputGroup1">
                <Select defaultValue="书籍搜索">
                  <Option value="book">书籍搜索</Option>
                  <Option value="user">用户搜索</Option>
                  <Option value="news">新闻搜索</Option>
                </Select>
                <Search className="search" placeholder="input search text" style={{ width: 200 }} onSearch={value => console.log(value)} />
              </InputGroup>
              {cookie.load('userId')?(
                <span><a href='#' onClick={this.showConfirm} className="login"><Icon type="user"/></a><img className="userImg" src={"http://ofdukoorb.bkt.clouddn.com/"+cookie.load('userimg')}></img></span>
                ):(
                <a href='/#/login' className="login"><Icon type="user"/><span className="loginSpan">登录</span></a>
                )}
            </Col>
          </Row>
        </Header>
        <Content>
          <Affix>
            <Menu className="topMenu" style={{ position: 'relative',zIndex: '5' }} onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="mail">
                 <a href="/#/"><Icon type="home" />首页</a>
              </Menu.Item>
              {cookie.load('userId')?
                (<Menu.Item key="app">
                  <a href="/#/userCenter"><Icon type="appstore" />个人信息</a>
                </Menu.Item>):null
              }
              {cookie.load('userId')?
                (<SubMenu title={<span><Icon type="setting" />借阅信息</span>}>
                  {data.length==0?null:
                    (<MenuItemGroup title="当前借阅">
                      {data[0].map((res,index)=>{
                        if(res.isover=="0")
                          return (<Menu.Item key={index}>{res.bookName}</Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                  {data.length==0?null:
                    (<MenuItemGroup title="当前超期">
                      {data[0].map((res,index)=>{
                        if(res.isover=="1")
                          return (<Menu.Item key={index} className="colorRed">{res.bookName}</Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                  {data.length==0?null:
                    (<MenuItemGroup title="当前预约">
                      {data[1].map((res,index)=>{
                        return (<Menu.Item key={index}>{res.bookName}</Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                </SubMenu>):null
              }
            <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          </Affix>
          {this.props.children||<MainPage />}
        </Content>
        <Footer><h1>广告出租位？</h1></Footer>
      </Layout>
    )
  }

} 
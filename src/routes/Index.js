import React,{Component} from 'react'
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

export default class Index extends Component{
  state={
    current:'mail',
    borrowInfo:[],
    searchType:"book",
    searchResult:[]
  }
  handleClick =(e)=>{
    this.setState({
      current: e.key
    })
  }

  callback =(a)=>{
    this.setState({current:a})
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

  changeSearch=(values)=>{
    this.props.history.pushState({suibian:"123"}, '/book')
    // this.context.router.replaceWith('/');
    this.setState({book:values})
  }

  search(value){
    let type = this.state.searchType
    if(type=="book"){
      fetch('http://localhost:3000/searchBook',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({content:value})
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        this.setState({searchResult:[]})
        data.docs.map((a)=>{
          let temp = {
            bookname:a.bookName[0],
            id:a.id,
            author:a.author[0],
            abstract:a.abstract[0],
            bookState:a.bookState,
            img:a.img[0],
            keyword:a.keyword[0],
            publish:a.publish[0],
            publishdate:a.publishDate[0],
            registedate:moment(a.registeDate).format('YYYY-MM-DD'),
            key:a.id
          }
          this.state.searchResult.push(temp)
        })
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
                <Select defaultValue="书籍搜索" onChange={this.changeSearch}>
                  <Option value="book">书籍搜索</Option>
                  <Option value="user">用户搜索</Option>
                  <Option value="news">新闻搜索</Option>
                </Select>
                <Search className="search" placeholder="input search text" style={{ width: 200 }} onSearch={value => {this.search(value)}} />
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
                (<SubMenu title={<span>借阅信息</span>}>
                  {data.length==0?null:
                    (<MenuItemGroup title="当前借阅">
                      {data[0].map((res,index)=>{
                        if(res.isover=="0")
                          return (<Menu.Item key={index}><a href={"/#/book?bookid="+res.id}>{res.bookName}</a></Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                  {data.length==0?null:
                    (<MenuItemGroup title="当前超期">
                      {data[0].map((res,index)=>{
                        if(res.isover=="1")
                          return (<Menu.Item key={index}><a href={"/#/book?bookid="+res.id}  style={{color:"red"}}>{res.bookName}</a></Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                  {data.length==0?null:
                    (<MenuItemGroup title="当前预约">
                      {data[1].map((res,index)=>{
                        return (<Menu.Item key={index}><a href={"/#/book?bookid="+res.id}>{res.bookName}</a></Menu.Item>)
                      })}
                    </MenuItemGroup>)
                  }
                </SubMenu>):null
              }
              <Menu.Item key="alipay">
                <a href="/#/book" rel="noopener noreferrer">书籍详情</a>
              </Menu.Item>
              <Menu.Item key="manager">
                <a href="/#/manager" rel="noopener noreferrer"><Icon type="setting" />管理员</a>
              </Menu.Item>
            </Menu>
          </Affix>
          {
            (this.props.children && React.cloneElement(this.props.children, {callback:this.callback}))||<MainPage />
          }
        </Content>
        <Footer><h1>广告出租位？</h1></Footer>
      </Layout>
    )
  }
} 
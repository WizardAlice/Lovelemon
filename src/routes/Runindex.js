import React,{Component} from 'react'
import { Layout, Row, Col,Card,Icon ,Modal, Button,Checkbox,Form,Input,Menu, Dropdown, message,Tooltip,Popover}from 'antd';
const { Header, Footer, Sider, Content} = Layout
import cookie from 'react-cookie'
import '../assets/run.css'
import NormalLoginForm from '../models/LoginForm'
import Runupload from '../models/Runupload'
import RunDownload from '../models/RunDownload'
import App from '../models/unsignupload'
import Chart from '../models/chart'

const Search = Input.Search;
const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
const confirm = Modal.confirm;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">按名称</Menu.Item>
    <Menu.Item key="2">按作者</Menu.Item>
    <Menu.Item key="3">按类别</Menu.Item>
  </Menu>
);
const content = (
  <div>
    <p> <a href="http://localhost:8000/#/userinfo">用户详情请点击这里</a></p>
  </div>
);
  function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('已选择请输入搜索项');
  console.log('click', e);
}
// const WrappedDemo = Form.create()(Demo);
export default class Runindex extends Component{
  state = {
    ModalText: '',
    visible: false,
    suibian:false,
    shuaxin:false
  }
    calllback3=()=>{
    let shuaxin = !this.state.shuaxin
  }
  calllback2=()=>{
    let suibian = !this.state.suibian
    this.setState({suibian:suibian})
  }
  showConfirm = () =>{
    let suibian = this.calllback2
    confirm({
      content: '是否退出登录',
      onOk() {
        cookie.remove('userid')
        suibian()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  callback=()=>{
    this.setState({visible:false})
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
    render(){
       
        return (
            <Layout>
              <Header className="headpic">
                     <Popover content={content} title="提醒" trigger="hover">
                        {cookie.load('userid')?(<Icon type="user" style={{height:35}} onClick={this.showConfirm} ><span className="username">{cookie.load('username')}</span></Icon>):(<Icon type="user" style={{height:35}} onClick={this.showModal} ><span className="denglu">登录</span></Icon>)}
                     </Popover>            
                 <Modal title="Title of the modal dialog"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={[
                    ]}
                  >
                  <WrappedNormalLoginForm callback={this.callback}/>   
                       
                  </Modal>
                    <Search placeholder="input search text" style={{ width: 310 ,position: "relative",left: 578,top: 316}} onSearch={value => console.log(value)}/>
                    <div>
                        <Dropdown overlay={menu}>
                          <Button style={{ marginLeft: 8 }}>
                            <Icon type="down" />
                          </Button>
                        </Dropdown>
                    </div>
              </Header>
              <Content>
                 <div className="gutter-example">
                    <Row gutter={16}>
                      <Col className="gutter-row" span={5}>
                        <div className="gutter-box shangchuan">
                            {cookie.load('userid')?(<Runupload />):(<App />)}                        
                        </div>
                      </Col>
                      <Col className="gutter-row" span={10}>
                        <div className="gutter-box">
                          <Card  bodyStyle={{ padding: 0 }}>
                            <RunDownload />
                          </Card>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <Chart/>
                        </div>
                      </Col>
                     </Row>
                  </div>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
        )

    }
}

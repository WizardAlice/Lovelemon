import React,{Component} from 'react'
import { Layout, Row, Col,Card,Icon ,Modal, Button,Checkbox,Form,} from 'antd';
const { Header, Footer, Sider, Content} = Layout
import cookie from 'react-cookie'
import '../assets/run.css'
import NormalLoginForm from '../models/LoginForm'
import Runupload from '../models/Runupload'
import RunDownload from '../models/RunDownload'


const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
const confirm = Modal.confirm;
// const WrappedDemo = Form.create()(Demo);
export default class Runindex extends Component{
  state = {
    ModalText: '',
    visible: false,
    suibian:false
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
              <Header className="headpic"> {cookie.load('userid')?(<Icon type="user" onClick={this.showConfirm} ><span className="username">{cookie.load('username')}</span></Icon>):(<Icon type="user" onClick={this.showModal} ><span className="denglu">登录</span></Icon>)}
                 <Modal title="Title of the modal dialog"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={[
                    ]}
                  >
                  <WrappedNormalLoginForm callback={this.callback}/>   
                       
                  </Modal>
              </Header>
              <Content>
                 <div className="gutter-example">
                    <Row gutter={16}>
                      <Col className="gutter-row" span={5}>
                        <div className="gutter-box shangchuan">
                         <Runupload />
                        </div>
                      </Col>
                      <Col className="gutter-row" span={10}>
                        <div className="gutter-box">
                          <Card  bodyStyle={{ padding: 0 }}>
                            <RunDownload />
                            <div className="custom-card">
                            </div>
                          </Card>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                              
                            </div>
                            <div className="custom-card">
                              <h3>Europe Street beat</h3>
                              <p>www.instagram.com</p>
                            </div>
                          </Card>
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

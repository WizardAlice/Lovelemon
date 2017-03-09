import React,{ Component } from 'react'
import { Modal, Button ,Form} from 'antd'
import NormalLoginForm from '../components/LoginForm'

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

export default class Login extends Component{
  state = {
    visible: true,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  close(){
  	history.back()
  }
  render() {
    return (
      <div>
        <Modal title="登录"
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onClose={()=>{this.close()}}
          footer={[
          ]}
        >
          <p>{this.state.ModalText}</p>
          <WrappedNormalLoginForm />
        </Modal>
      </div>
    );
  }
} 



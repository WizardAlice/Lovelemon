import React,{ Component } from 'react'
import { Modal, Button ,Form} from 'antd'
import RegistrationForm from '../components/RegisterForm'

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default class Register extends Component{
  state = {
    visible: true,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  close(){
    window.location.href='http://localhost:8000/#/'
  }
  render() {
    return (
      <div>
        <Modal title="注册"
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onClose={()=>{this.close()}}
          footer={[
          ]}
        >
          <p>{this.state.ModalText}</p>
          <WrappedRegistrationForm />
        </Modal>
      </div>
    );
  }
} 



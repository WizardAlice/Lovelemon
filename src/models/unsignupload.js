import React ,{ Component } from 'react'
import { Modal, Icon} from 'antd'
import cookie from 'react-cookie'

export default class App extends React.Component {
     state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Icon className="shangchuanicon2" type="upload" onClick={this.showModal}  title="上传文件" />
        <Modal title="提醒" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>您可能没有登录，请先登录再进行后续操作</p>
        </Modal>
      </div>
    );
  }
}

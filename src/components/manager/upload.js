import React,{ Component } from 'react'
import { Upload, Button, Icon } from 'antd';
import cookie from 'react-cookie'

export default class MyUpload extends React.Component {
  state = {
    fileList: [],
  }
  before(a){
    this.props.callback(a.name)
  }
  render() {
    const props = {
      action: 'http://localhost:3000/gettest',
      defaultFileList: [...this.state.fileList],
      multiple: true,
      listType: this.props.listType,
      accept: this.props.accept,
      data:{userid:cookie.load('userId'),type:this.props.type},
      beforeUpload:(file)=>{this.before(file)}
    }
    return (
      <Upload {...props} onChange={(info)=>console.log(info)}>
        <Button>
          <Icon type="upload" /> upload
        </Button>
      </Upload>
    );
  }
}

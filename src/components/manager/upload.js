import React,{ Component } from 'react'
import { Upload, Button, Icon } from 'antd';
import cookie from 'react-cookie'

export default class MyUpload extends React.Component {
  state = {
    fileList: [],
  }
  render() {
    const props = {
      action: 'http://localhost:3000/gettest',
      defaultFileList: [...this.state.fileList],
      multiple: true,
      listType: 'picture',
      accept: "image/png,image/jpg",
      data:{userid:cookie.load('userId')},
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

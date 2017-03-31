import React ,{ Component } from 'react'
import {Upload,message,Button,Icon} from 'antd'
import cookie from 'react-cookie'

const Dragger = Upload.Dragger
export default class Runupload extends Component{
  static Props = {
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
  render(){
    let a = cookie.load('userid')
    let string = "http://localhost:3000/gettest?userid="+a
    return(
      <Dragger {...this.props} action={string}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Dragger>
    )
  }
}
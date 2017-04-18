import React,{ Component } from 'react'
import { Form, Row, Col, Input, Button, Icon ,Upload,DatePicker,Radio} from 'antd'
import cookie from 'react-cookie'
import MyUpload from './upload'

const RadioGroup = Radio.Group
const FormItem = Form.Item

export default class AddUser extends Component {
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    }

    const children = [
      <div key="1">
        <FormItem
          {...formItemLayout}
          label="头像"
        >
          <div className="dropbox" >
            {getFieldDecorator('img', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules:[
                {
                  required: true, message: '管理员创建用户不能使用预设头像！',
                }
              ]
            })(
              <MyUpload listType='picture' accept="image/png,image/jpg"/>
            )}
          </div>
        </FormItem>
      </div>,
      <div key="2">
        <FormItem {...formItemLayout} label="id">
          {getFieldDecorator("title",{rules:[
            {
              required: true, message: 'id不能为空',
            }
            ]})(
            <Input placeholder="id" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="3">
        <FormItem {...formItemLayout} label="姓名">
          {getFieldDecorator("subTitle",{rules:[
            {
              required: true, message: '姓名不能为空',
            }
            ]})(
            <Input placeholder="姓名" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="4">
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator("author",{rules:[
            {
              required: true, message: '密码不能为空',
            }
            ]})(
            <Input placeholder="密码" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="5">
        <FormItem {...formItemLayout} label="性别">
          {getFieldDecorator("id",{rules:[
            {
              required: true, message: '性别必须选',
            }
            ]})(
            <RadioGroup>
              <Radio value="1">男生</Radio>
              <Radio value="1">女生</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </div>,
      <div key="6">
        <FormItem {...formItemLayout} label="学院">
          {getFieldDecorator("publish",{rules:[
            {
              required: true, message: '学院不能为空',
            }
            ]})(
            <Input placeholder="学院" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="7">
        <FormItem {...formItemLayout} label="生日">
          {getFieldDecorator("publishdate",{rules:[
            {
              required: true, message: '生日不能为空',
            }
            ]})(
            <DatePicker placeholder="生日"/>
          )}
        </FormItem>
      </div>,
      <div key="8">
        <FormItem {...formItemLayout} label="当前住址">
          {getFieldDecorator("publishdate",{rules:[
            {
              required: true, message: '当前住址不能为空',
            }
            ]})(
            <Input  placeholder="当前住址"/>
          )}
        </FormItem>
      </div>
    ]

    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <div>
          {children}
        </div>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
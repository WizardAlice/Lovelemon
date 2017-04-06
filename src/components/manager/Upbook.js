import React,{ Component } from 'react'
import { Form, Row, Col, Input, Button, Icon ,Upload} from 'antd'
import cookie from 'react-cookie'
import MyUpload from './upload'
const FormItem = Form.Item

export default class UpbookForm extends Component {
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
      <Col span={5} key={5} >
        <FormItem
          {...formItemLayout}
          label="书籍封面"
        >
          <div className="dropbox">
            {getFieldDecorator('img', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <MyUpload listType='picture' accept="image/png,image/jpg"/>
            )}
          </div>
        </FormItem>
      </Col>,
      <Col span={5} key={1} >
        <FormItem {...formItemLayout} label="书名">
          {getFieldDecorator("title",{rules:[
            {
              required: true, message: '标题不能为空',
            }
            ]})(
            <Input placeholder="title" />
          )}
        </FormItem>
      </Col>,
      <Col span={5} key={2} >
        <FormItem {...formItemLayout} label="副标题">
          {getFieldDecorator("subTitle",{rules:[
            {
              required: true, message: '副标题不能为空',
            }
            ]})(
            <Input placeholder="subTitle" />
          )}
        </FormItem>
      </Col>,
      <Col span={5} key={3} >
        <FormItem {...formItemLayout} label="作者">
          {getFieldDecorator("author",{rules:[
            {
              required: true, message: '作者不能为空',
            }
            ],
            initialValue:cookie.load('userName')})(
            <Input />
          )}
        </FormItem>
      </Col>
    ]

    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>

          {children}

        </Row>
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
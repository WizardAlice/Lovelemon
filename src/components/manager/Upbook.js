import React,{ Component } from 'react'
import { Form, Row, Col, Input, Button, Icon ,Upload,DatePicker} from 'antd'
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
      <div key="1">
        <FormItem
          {...formItemLayout}
          label="书籍封面"
        >
          <div className="dropbox" >
            {getFieldDecorator('img', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules:[
                {
                  required: true, message: '封面不能为空',
                }
              ]
            })(
              <MyUpload listType='picture' accept="image/png,image/jpg"/>
            )}
          </div>
        </FormItem>
      </div>,
      <div key="2">
        <FormItem {...formItemLayout} label="书名">
          {getFieldDecorator("title",{rules:[
            {
              required: true, message: '书名不能为空',
            }
            ]})(
            <Input placeholder="书名" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="3">
        <FormItem {...formItemLayout} label="类别">
          {getFieldDecorator("subTitle",{rules:[
            {
              required: true, message: '类别不能为空',
            }
            ]})(
            <Input placeholder="类别" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="4">
        <FormItem {...formItemLayout} label="作者">
          {getFieldDecorator("author",{rules:[
            {
              required: true, message: '作者不能为空',
            }
            ]})(
            <Input placeholder="作者" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="5">
        <FormItem {...formItemLayout} label="id(扫描条形码)">
          {getFieldDecorator("id",{rules:[
            {
              required: true, message: 'id不能为空',
            }
            ]})(
            <Input placeholder="id" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="6">
        <FormItem {...formItemLayout} label="出版社">
          {getFieldDecorator("publish",{rules:[
            {
              required: true, message: '出版社不能为空',
            }
            ]})(
            <Input placeholder="出版社" style={{width:"75%"}}/>
          )}
        </FormItem>
      </div>,
      <div key="7">
        <FormItem {...formItemLayout} label="出版日期">
          {getFieldDecorator("publishdate",{rules:[
            {
              required: true, message: '出版日期不能为空',
            }
            ]})(
            <DatePicker placeholder="选择出版日期"/>
          )}
        </FormItem>
      </div>,
      <div key="8">
        <FormItem {...formItemLayout} label="内容摘要">
          {getFieldDecorator("publishdate",{rules:[
            {
              required: true, message: '内容摘要不能为空',
            }
            ]})(
            <Input type="textarea" style={{height:60}} placeholder="内容摘要"/>
          )}
        </FormItem>
      </div>,
      <div key="9">
        <FormItem {...formItemLayout} label="关键词">
          {getFieldDecorator("keyword",{rules:[
            {
              required: true, message: '必须设置关键词',
            }
            ]})(
            <Input placeholder="关键词(用-隔开)" style={{width:"75%"}}/>
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
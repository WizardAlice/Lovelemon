import React,{ Component } from 'react'
import { Form, Row, Col, Input, Button, Icon ,Upload} from 'antd'
import cookie from 'react-cookie'
import MyUpload from './manager/upload'
const FormItem = Form.Item

export default class AdvancedSearchForm extends Component {
  state = {
    expand: false,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [
      <Col span={8} key={1} offset={1}>
        <FormItem {...formItemLayout} label="标题">
          {getFieldDecorator("title",{rules:[
            {
              required: true, message: '标题不能为空',
            }
            ]})(
            <Input placeholder="title" />
          )}
        </FormItem>
      </Col>,
      <Col span={6} key={2} >
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
      </Col>,
      <Col span={19} key={4} offset={4} style={{width:"83%",marginLeft:"12.6%"}}>
        <FormItem {...formItemLayout} >
          {getFieldDecorator("content",{rules:[
            {
              required: true, message: '正文不能为空',
            }
            ]})(
            <Input type="textarea" style={{height:300}}/>
          )}
        </FormItem>
      </Col>,
      <Col span={10} key={5} >
        <FormItem
          {...formItemLayout}
          label="新闻照片"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <MyUpload />
            )}
          </div>
        </FormItem>
      </Col>
    ]
    const expand = this.state.expand;
    const shownCount = expand ? children.length : 4;
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>

          {children.slice(0,shownCount)}

        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              添加文件或附件 <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}
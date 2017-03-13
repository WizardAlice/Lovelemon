import React ,{Component} from 'react' 
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import cookie from 'react-cookie'
// import $ from 'jquery'
import "../assets/style/loginForm.css"

const FormItem = Form.Item

export default class NormalLoginForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          userName:values.userName,
          pwd:values.password
        }

        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          console.log(data.id)
          cookie.save('userId',data.id,{ path: '/' })
        })
        // var res = $.ajax({
        //   type: "POST",
        //   url: "http://localhost:3000/login",
        //   data: data
        // }).responseJson
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    )
  }
}
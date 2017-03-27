import React ,{Component} from 'react'
import moment from 'moment'
import { Button,Input ,Form,DatePicker,Select} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const dateFormat = 'YYYY/MM/DD'
export default class ChangeInfo extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        let finalResult = [["id",this.props.data.id]]
        Object.entries(values).map((res)=>{
          if(typeof(res[1])!="undefined"){
            finalResult.push(res)
          }
        })
        fetch("http://localhost:3000/changeUserInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(finalResult)
        })//在这里发送修改
      }
    });
  }
  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    let data = this.props.data
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>name:</span>
            {getFieldDecorator('name',{initialValue:data.name})(
              <Input  style={{width:220}} />
            )}
          </h1></div>
        </FormItem>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>address:</span>
            {getFieldDecorator('address',{initialValue:data.address})(
              <Input  style={{width:220}}/>
            )}
          </h1></div>
        </FormItem>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>phone:</span>
            {getFieldDecorator('phone',{initialValue:data.phone})(
              <Input  style={{width:220}}/>
            )}
          </h1></div>
        </FormItem>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>birthdate:</span>
            {getFieldDecorator('birthdate',{initialValue:moment(data.birthdate, dateFormat)})(
              <DatePicker />
            )}
          </h1></div>
        </FormItem>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>gender:</span> 
            {getFieldDecorator('gender',{initialValue:(data.gender=="女")?"female":"male"})(       
                <Select style={{width:220}}>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>
            )}</h1> 
          </div>
        </FormItem>
        <FormItem>
          <div style={{color:"#fff"}}><h1><span>password:</span>
            {getFieldDecorator('password',{initialValue:data.password})(
              <Input  style={{width:220}} />
            )}
          </h1></div>
        </FormItem>
        <Button ghost onClick={()=>this.setState({change:false})} type="primary" htmlType="submit">修改完成</Button>
      </Form>
    )
  }
}
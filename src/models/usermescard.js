import React ,{ Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Card,Modal, Button,Input,Timeline,Carousel,Form} from 'antd';
import cookie from 'react-cookie'
import '../assets/run.css'
      function onChange(a, b, c) {
        console.log(a, b, c);
    }

export default class Usermescard extends Component{
        state = {
        loading: false,
        visible: false,
        data:false,
      }
      showModal=()=>{
        this.setState({
          visible: true,
        });
      }
      handleOk = (e) => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
              if (!err) {
                let data = {
                  userName:values.userName,
                  pwd:values.password
                }
                fetch("http://localhost:3000/chagename", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                }).then((res)=>{
                  return res.json()
                }).then((data)=>{
                  if(data.id){
                    this.loadingOff()
                    message.success('登录成功！')
                    cookie.save('userid',data.id)
                    cookie.save('username',data.name)
                    this.props.callback()
                    let suibian = this.calllback3
                  }
                  else{
                    this.loadingOff()
                    message.error('密码错误或者用户不存在！');
                  }
                }).catch((err)=>{
                  this.loadingOff()
                })
                // var res = $.ajax({
                //   type: "POST",
                //   url: "http://localhost:3000/login",
                //   data: data
                // }).responseJson
              }
            })
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }
      componentDidMount(){
        fetch("http://localhost:3000/getUserInfo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:cookie.load('userid')})
        }).then((data)=>{
            return data.json()
        }).then((result)=>{
            console.log(result);
            result.map((res)=>{
                this.setState(Object.assign({},this.state,res))
                this.setState({data:true})
            })
        })
      }
      render(){
        let data = this.state
        console.log(this.state)
        return(
       <div> {

            this.state.data?(
                 <Card  className="usercard"  style={{ width: 300 }}>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={12}>用户名</Col>
                                <Col xs={16} sm={16} md={16} lg={16} xl={12}>
                                    <Row>
                                      <Col span={12}><span className="getusername">{cookie.load('username')}</span></Col>
                                      <Col span={12}><span href="#" className="lanzi" onClick={this.showModal}>修改</span></Col>
                                    </Row>
                                </Col>
                            </Row>

                                <Row>
                                    <Col span={12}>性别</Col>
                                    <Col span={12}>{data.gender}</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>生日</Col>
                                    <Col span={12}>{data.birthdate}</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>地址</Col>
                                    <Col span={12}>{data.address}</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>手机</Col>
                                    <Col span={12}>{data.phone}</Col>
                                </Row>
                                    <Modal
                                          visible={this.state.visible}
                                          title="请输入要修改的值"
                                          onOk={this.handleOk}
                                          onCancel={this.handleCancel}
                                          footer={[
                                            <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                                            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                                              Submit
                                            </Button>,
                                          ]}
                                        >   
                                                                                      <Form>
                                          <FormItem>
                                                {getFieldDecorator('chagedname', {
                                                  rules: [{ required: true, message: 'Please input your username!' }],
                                                })(
                                                  <Input prefix={<Icon type="user" />} placeholder="Username" />
                                                )}
                                          </FormItem>
                                          </Form>
                                    </Modal>
                        </Card>
                ):null
        }
        </div>
        )
      }

}
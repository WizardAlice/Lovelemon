import React,{ Component } from 'react'
import { Card ,Col ,Row ,Form,Menu, Icon, Switch} from 'antd'
import UpnewsForm from '../components/manager/UpnewsForm'
import UpbookForm from '../components/manager/Upbook'
import Delete from '../components/manager/Delete'
import ModifyUser from '../components/manager/ModifyUser'
import AddUser from '../components/manager/AddUser'


const SubMenu = Menu.SubMenu
const UpnewsFormm = Form.create()(UpnewsForm)
const UpbookFormm = Form.create()(UpbookForm)
const AddUserForm = Form.create()(AddUser)
export default class Manager extends Component{
  state = {
    current: '1',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  componentDidMount(){
    this.props.callback("manager")
  }
  render() {
    return (
      <div>
        <Row type="flex" style={{marginTop:10}}>
          <Col span={3} offset={2}>
            <Menu theme={this.state.theme} onClick={this.handleClick} style={{ width: 240 ,height:"100%"}} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]} mode="inline">
              <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>上传&修改文档</span></span>}>
                <Menu.Item key="1">上传新闻</Menu.Item>
                <Menu.Item key="2">上传书籍</Menu.Item>
                <Menu.Item key="3">修改书籍</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>管理用户信息</span></span>}>
                <Menu.Item key="5">修改用户信息</Menu.Item>
                <Menu.Item key="6">添加新用户</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>管理借阅信息</span></span>}>
                <Menu.Item key="9">删除借阅记录</Menu.Item>
                <Menu.Item key="10">添加借阅记录</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={15} offset={1}>
            {this.state.current==1?
              <Card title="添加新闻">
                <UpnewsFormm />
              </Card>
            :null}
            {this.state.current==2?
              <Card title="添加书籍">
                <UpbookFormm />
              </Card>
            :null}
            {this.state.current==3?
              <Card title="修改书籍">
                <Delete />
              </Card>
            :null}
            {this.state.current==5?
              <Card title="修改用户信息">
                <ModifyUser />
              </Card>
            :null}
            {this.state.current==6?
              <Card title="添加新用户">
                <AddUserForm />
              </Card>
            :null}
          </Col>
        </Row>
      </div>
    )
  }

}
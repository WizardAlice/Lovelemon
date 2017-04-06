import React,{ Component } from 'react'
import { Card ,Col ,Row ,Form,Menu, Icon, Switch} from 'antd'
import UpnewsForm from '../components/manager/UpnewsForm'
import UpbookForm from '../components/manager/Upbook'

const SubMenu = Menu.SubMenu
const UpnewsFormm = Form.create()(UpnewsForm)
const UpbookFormm = Form.create()(UpbookForm)
export default class Manager extends Component{
	// render(){
	// 	return(
      // <Row type="flex" >
        // <Col span={19} offset={2}>
        //   <Card title="添加新闻">
        //     <WrappedAdvancedSearchForm />
        //   </Card>
        // </Col>
      // </Row>
	// 	)
	// }
  state = {
    current: '1',
  }
  handleClick = (e) => {
    console.log('click ', e);
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
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>上传&修改文档</span></span>}>
                <Menu.Item key="1">上传新闻</Menu.Item>
                <Menu.Item key="2">上传书籍</Menu.Item>
                <Menu.Item key="3">删除书籍</Menu.Item>
                <Menu.Item key="4">修改书籍</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
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
          </Col>
        </Row>
      </div>
    )
  }

}
import React,{ Component } from 'react'
import { Card ,Col ,Row ,Form} from 'antd'
import AdvancedSearchForm from '../components/UpnewsForm'

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm)
export default class Manager extends Component{
	render(){
		return(
      <Row type="flex" >
        <Col span={19} offset={2}>
          <Card title="添加新闻">
            <WrappedAdvancedSearchForm />
          </Card>
        </Col>
      </Row>
		)
	}
}
import React,{Component} from 'react'
import {Row , Col ,Card,Icon} from 'antd'

import Category from './bookList/Category'
import NewBooks from './bookList/NewBooks'

import HotBorrow from './hot/HotBorrow'
import HotCollect from './hot/HotCollect'
import HotComment from './hot/HotComment'
import HotChart from './hot/HotChart'

import '../../../assets/style/bookTable.css'

export default class BookTable extends Component{
  render(){
    return(
      <Row justify="space-around" align="middle">
        <Col span={6}>
          <div className="bookClass">
            <Category />
            <NewBooks />
          </div>
        </Col>
        <Col span={16}>
          <div className="hotContent">
            <Card title={<h2>热门图书</h2>}>
              <HotBorrow />
              <HotCollect />
              <HotComment />
            </Card>
            <Card>
              <Row>
                <Col span={6}>
                  <HotChart />
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
    )
  }
}

import React,{ Component } from 'react'
import {Layout,Row,Col,Card,BackTop} from 'antd'
import '../assets/run.css'




const { Header, Content, Footer} = Layout
export default class Run extends Component{
    render(){
        return(
          <Layout>
            <BackTop /> 
            <Header style={{heigth:456,padding:0}}>
              <img src={require(`../assets/06.jpg`)} style={{width:"100%",height:"100%"}}></img>
            </Header>
            <Content>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={18} className="mainTop" style={{display:"inline-flex",position:"relative",top:70}}>
                  <Card style={{height:470,width:707,marginRight:80}}>
                    <div className="custom-image">
                      <img src={require(`../assets/01.jpg`)} width="100%"/>
                    </div>
                  </Card>
                  <Card style={{height:470,width:707}}>
                    <div className="custom-image">
                      <img src={require(`../assets/01.jpg`)} width="100%"/>
                    </div>
                  </Card>
                  <Card style={{height:470,width:707,marginLeft:80}}>
                    <div className="custom-image">
                      <img src={require(`../assets/01.jpg`)} width="100%"/>
                    </div>
                  </Card> 
                </Col>
              </Row>
            </Content>
            <Footer>Footer</Footer>
      </Layout>
        )
    }
}
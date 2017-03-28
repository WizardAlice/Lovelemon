import React,{Component} from 'react'
import { Carousel ,Row ,Col ,Icon ,Card} from 'antd'
import '../../../assets/style/carousel.css'

export default class MainPage extends Component{
  state={
    data:[]
  }
  componentDidMount(){
    fetch("http://localhost:3000/getNews5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      this.setState({data:result})
    })
  }

  render(){
    let data = this.state.data
    return(
      <Row justify="space-around" align="middle">
        <Col span={13}>
          {
            data.length==0?null:(
              <Carousel effect="fade" autoplay>
                {
                  data.map((res,index)=>{
                    if(res.img)
                      return (<div key={index}><img className="img_of_news" src={"http://ofdukoorb.bkt.clouddn.com/"+res.img}/></div>)
                  })
                }
              </Carousel>
            )
          }
        </Col>
        <Col span={9}>
          {
            data.length==0?null:(
              <Card title="新闻" extra={<a href="#">More</a>}>
                {data.map((res,index)=>{
                  return (
                    <div className="oneNews" key={index}>
                      <a href={"/#/?news="+res.id}>{res.title}</a>
                      <p>{res.date}</p>
                      <hr />
                    </div>   
                  )
                })}
              </Card>
            )
          }
        </Col>
      </Row>
    )
  }
}
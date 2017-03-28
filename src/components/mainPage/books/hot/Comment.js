import React ,{ Component } from 'react'
import { Card ,Icon} from 'antd'


export default class Comment extends Component{
  state={
    data:[],
  }
  componentDidMount(){
    fetch("http://localhost:3000/latestComment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      result.map((res)=>{
          this.state.data.push(res)
      })
      this.setState({get:true})
    })
  }
  render(){
    let data = this.state.data
    return (
      <Card title={<h4>大家都在...</h4>} style={{ height: 260}}>
        {
          data.length==0?null:(
            <div className="latestComment">
              {
                data.map((res,index)=>{
                  return(
                    <Card style={{ width: 260,marginRight: 18,height:170}} key={index}>
                      <div style={{overflow:'hidden',height:'15px'}}><Icon type="pushpin-o" />&nbsp;&nbsp;&nbsp;评论了  《{res.bookname}》</div>
                      <br />
                      <div>Comment&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{res.content}</div>
                      <img className="userImg" src={"http://ofdukoorb.bkt.clouddn.com/"+res.userimg}></img><span style={{position:'relative',left:'20px',top:'25'}}>{res.username}</span>
                    </Card>
                  )
                })
              }
            </div>
          )
        }
      </Card> 
    )
  }
}
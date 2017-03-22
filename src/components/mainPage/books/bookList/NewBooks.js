import React ,{ Component } from 'react'
import { Card,Icon } from 'antd'

let data = []
export default class NewBooks extends Component{
  state: {
    get: false,
  }
  componentDidMount(){
    fetch("http://localhost:3000/getNewBooks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      result.map((res)=>{
          data.push(res)
      })
      this.setState({get:true})
    })
  }
  render(){
    return (
      <Card title={<h2><Icon type="shopping-cart" /> 新到资源</h2>}>
        {
          data.length==0?null:(
            <div>
              {
                data.map((res,index)=>{
                  return (
                    <Card style={{ width: 308,height: 150,margin_right: "35px" }} className="hotImg  newBooksImg" bodyStyle={{ padding: 0 }}  key={index}>
                      <div className="custom-image">
                        <img width="100%" src={"http://ofdukoorb.bkt.clouddn.com/"+res.img}/>
                      </div>
                      <div className="newBookName">
                        <div>
                          <h2>
                            {res.bookName}
                          </h2>
                        </div>
                        <div>
                          <h3>
                            {res.registeDate}
                          </h3>
                        </div>
                      </div>
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
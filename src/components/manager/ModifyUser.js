import React,{ Component } from 'react'
import { Input ,Button} from 'antd'
import SearchResult from '../book/Table'
import moment from 'moment'

const Search = Input.Search

const columns = [{
  title: '头像',
  key : 'img',
  dataIndex : 'img',
  width: 80,
  render: text => <a href="javascript:;" ><img style={{height:50,height:50}} src={"http://ofdukoorb.bkt.clouddn.com/"+text}/></a>
},{
  title : '姓名',
  key : 'name',
  dataIndex : 'name',
  width : 100
},{
  title : 'id',
  key : 'id',
  dataIndex : 'id',
  width : 100
},{
  title : '住址',
  key : 'address',
  dataIndex : 'address',
  width : 100
},{
  title : '电话',
  key : 'phone',
  dataIndex : 'phone',
  width : 100
},{
  title : '院系',
  key : 'department',
  dataIndex : 'department',
  width : 100
},{
  title : '生日',
  key : 'birthdate',
  dataIndex : 'birthdate',
  width : 100
},{
  title : '性别',
  key : 'gender',
  dataIndex : 'gender',
  width : 50,
  render : (text,record) => (
    <div >{text?"男生":"女生"}</div>
  )
},{
  title : '删除',
  key : 'collect',
  width : 50,
  render : (text,record) => (
    <Button >删除</Button>
  )
}]
export default class Delete extends Component {
  state = {
    searchResult:[],
    havaData:false
  }
  search(value){
    fetch('http://localhost:3000/searchUser',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({content:value})
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      this.setState({searchResult:[]})
      data.docs.map((a)=>{
        let temp = {
          name:a.name,
          id:a.id,
          gender:a.gender,
          phone:a.phone,
          address:a.address,
          img:a.img,
          department:a.department,
          birthdate:moment(a.birthdate).format("YYYY-MM-DD"),
          key:a.id
        }
        this.state.searchResult.push(temp)
      })
      this.setState({havaData:true})
    })
  }

  render(){
    return (
      <div>
        <Search placeholder="输入搜索内容" style={{width:300}} onSearch={value => this.search(value)}/>
        {
          this.state.searchResult.length==0?null:
            <div>
              <SearchResult data={this.state.searchResult} columns={columns}/>
            </div>
          
        }
      </div>
    )
  }
}
import React,{ Component } from 'react'
import { Input ,Button} from 'antd'
import SearchResult from '../book/Table'
import moment from 'moment'

const Search = Input.Search

const columns = [{
  title: '书籍封面',
  key : 'img',
  dataIndex : 'img',
  width: 100,
  height:20,
  render: text => <a href="javascript:;" ><img style={{height:50}} src={"http://ofdukoorb.bkt.clouddn.com/"+text}/></a>
},{
  title : '书名',
  key : 'name',
  dataIndex : 'bookname',
  width : 100
},{
  title : '索书号',
  key : 'id',
  dataIndex : 'id',
  width : 100
},{
  title : '作者',
  key : 'author',
  dataIndex : 'author',
  width : 100
},{
  title : '出版社',
  key : 'publish',
  dataIndex : 'publish',
  width : 100
},{
  title : '出版日期',
  key : 'publishdate',
  dataIndex : 'publishdate',
  width : 100,
},{
  title : '关键词',
  key : 'keyword',
  dataIndex : 'keyword',
  width : 100
},{
  title : '注册日期',
  key : 'registedate',
  dataIndex : 'registedate',
  width : 100,
  render : (text) => (
    <div>{text}</div>
  )
},{
  title : '是否可借',
  key : 'bookState',
  dataIndex : 'bookState',
  width : 50,
  render : (text,record) => (
    <div >{text==1?"可借":"不可借"}</div>
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
    fetch('http://localhost:3000/searchBook',{
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
          bookname:a.bookName[0],
          id:a.id,
          author:a.author[0],
          abstract:a.abstract[0],
          bookState:a.bookState,
          img:a.img[0],
          keyword:a.keyword[0],
          publish:a.publish[0],
          publishdate:a.publishDate[0],
          registedate:moment(a.registeDate).format('YYYY-MM-DD'),
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
              <SearchResult data={this.state.searchResult}  columns={columns}/>
            </div>
        }
      </div>
    )
  }
}
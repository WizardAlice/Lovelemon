import React,{ Component } from 'react'
import { Input } from 'antd'

const Search = Input.Search
export default class Delete extends Component {
	search(value){
		console.log(value)
	}

	render(){
		return <Search placeholder="输入搜索内容" style={{width:300}} onSearch={value => this.search(value)}/>
	}
}
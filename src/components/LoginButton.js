import React, { Component} from 'react';
import { Icon } from 'antd'

export default class LoginButton extends Component{
	render(){
		return (
			<div className="loginButton">
				<Icon type="login" />
			</div>
		)
	}
}
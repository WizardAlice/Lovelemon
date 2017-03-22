import React,{ Component } from 'react'
import { connect } from 'dva'

const Test = ({ dispatch, count }) => {
	return (<div><button onClick={() => { dispatch({type: 'add'}) }}>+</button></div>)
}

function mapStateToProps(state) {
  return {
  	count: state.hotbook
  }
}

export default connect(mapStateToProps)(Test);


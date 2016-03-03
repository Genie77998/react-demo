import React from 'react'
import _select from '../lib/directive-mobiscroll'
class tokenNo extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    return (
    	<div className="itemInput">
	    	<div className="key">车主身份证</div>
	    	<div className="value">
				<input type="text" ref="tokenNo" placeholder="请填写车主身份证" defaultValue={_defalutValue} onBlur={this.checkFn.bind(this)}/>
	    	</div>
    	</div>
    )
  }

  componentDidMount() {
  }
  componentDidUpdate(){
  	this.refs.tokenNo.value = this.props.defalutValue;
  }
  checkFn(){
  	const el = this.refs.tokenNo
  	const reg = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/
  	if(!reg.test(el.value)){
        console.log('error')
    }
  }

}

export default tokenNo

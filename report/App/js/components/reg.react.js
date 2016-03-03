import React from 'react'
import _select from '../lib/directive-mobiscroll'
class reg extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    return (
    	<div className="itemInput">
	    	<div className="key">注册日期</div>
	    	<div className="value arrow">
				<input type="text" ref="reg" placeholder="请填车辆注册日期" defaultValue={_defalutValue} />
	    	</div>
    	</div>
    )
  }
  componentDidMount() {
  	_select.date.bind(this.refs.reg)
  }
  componentDidUpdate(){
  	this.refs.reg.value = this.props.defalutValue;
  }
}

export default reg

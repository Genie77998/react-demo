import React from 'react'
class motorNo extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    return (
    	<div className="itemInput">
	    	<div className="key">发动机号</div>
	    	<div className="value">
				<input type="text" ref="motorNo" data-focus="true" placeholder="请填写您的发动机号" defaultValue={_defalutValue} />
	    	</div>
    	</div>
    )
  }

  componentDidMount() {
  }

  componentDidUpdate(){
  	this.refs.motorNo.value = this.props.defalutValue;
  }
}

export default motorNo

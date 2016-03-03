import React from 'react'
class owner extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    return (
    	<div className="itemInput">
	    	<div className="key">车主姓名</div>
	    	<div className="value">
				<input type="text" ref="owner" placeholder="请填写车主姓名" defaultValue={_defalutValue} />
	    	</div>
    	</div>
    )
  }
  componentDidMount() {
  }
  componentDidUpdate(){
  	this.refs.owner.value = this.props.defalutValue;
  }
}

export default owner

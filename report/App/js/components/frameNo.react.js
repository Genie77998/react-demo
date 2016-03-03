import React from 'react'
class frameNo extends React.Component {
  render() {
    const _defalutValue = '' || this.props.defalutValue
    
    return (
    	<div className="itemInput">
	    	<div className="key">车辆识别代号</div>
	    	<div className="value">
				<input type="text" ref="frameNo" data-focus="true" placeholder="请填写车辆识别代号" defaultValue={_defalutValue.substr(0,17)} onChange={this.changeFn.bind(this)}/>
	    	</div>
    	</div>
    )
  }

  componentDidMount() {
  }
  componentDidUpdate(){
  	this.refs.frameNo.value = this.props.defalutValue;
  }
  changeFn(){
  	const el = this.refs.frameNo
  	if(el.value.length >= 17){
        el.value = el.value.substr(0,17);
    }
  }
}

export default frameNo

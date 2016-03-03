import React from 'react'
import _select from '../lib/directive-mobiscroll'
class brand extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    return (
    	<div className="itemInput">
	    	<div className="key">品牌型号</div>
	    	<div className="value">
				<input type="text" ref="brand" data-focus="true" placeholder="请填写您的品牌型号" defaultValue={_defalutValue} />
	    	</div>
    	</div>
    )
  }
  componentDidMount() {
  }
  componentDidUpdate(){
  	this.refs.brand.value = this.props.defalutValue;
  }
}

export default brand

import React from 'react'
import _select from '../lib/directive-mobiscroll'
class vehicleNum extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue
    const _pre = _defalutValue!='' ? _defalutValue.substr(0,1) : '浙'
    const _prf = _defalutValue!='' ? _defalutValue.substr(1,6) : ''
    const proviceArr = ['京', '沪', '浙', '苏', '粤', '鲁', '晋', '冀', '豫', '川', '渝', '辽', '吉', '黑', '皖', '鄂', '湘', '赣', '闽', '陕', '甘', '宁', '蒙', '津', '贵', '云', '桂', '琼', '青', '新', '藏']
    let preovinceList = []
    for(let i = 0 , len = proviceArr.length; i < len; i++){
    	preovinceList.push(
    		<option value={proviceArr[i]} key={i}>{proviceArr[i]}</option>
    	)
    }
    return (
    	<div className="itemInput">
	    	<div className="key">车牌号</div>
	    	<div className="dir">
	    		<span className="chooseSf">
	    			<select ref="province" defaultValue={_pre}>
	    				{preovinceList}
	    			</select>
	    		</span>
	    	</div>
	    	<div className="value">
				<input type="text" ref="vehicleNum" onBlur={this.props.blurFn} placeholder="请填写您的车牌号" defaultValue={_prf} onChange={this.changeFn.bind(this)}/>
	    	</div>
    	</div>
    )
  }

  componentDidMount() {
  	_select.select.bind(this.refs.province)
  }

  changeFn(){
  	const el = this.refs.vehicleNum
  	if(el.value.length >= 6){
        el.value = el.value.substr(0,6);
    }
  }
}

export default vehicleNum

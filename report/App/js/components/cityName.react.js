import React from 'react'
import cityList from '../lib/city-list'
import _select from '../lib/directive-mobiscroll'
class cityName extends React.Component {
  render() {
    const _defalutValue = this.props.defalutValue || '杭州'
    let city = []
    let list = ["北京", "天津", "上海", "重庆", "河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "甘肃", "四川", "贵州", "海南", "云南", "青海", "陕西", "广西", "西藏", "宁夏", "新疆", "内蒙古"]
	   const filter = function(items){
	   	let _arr = []
		   	for(let s = 0 ,_len = cityList.length; s < _len ; s++ ){
		   		let _a = cityList[s]
				if(_a.province == items){
					_arr.push(
						<option value={_a.name} key={s}>{_a.name}</option>
					)
				}
	    	}
	    	return _arr
	   }
    for(let i = 0 ,len = list.length; i < len ; i++ ){
    	city.push(
    		<optgroup label={list[i]} key={i}>
    			{filter(list[i])}
    		</optgroup>
    	)
    }
    return (
    	<div className="itemInput">
	    	<div className="key">行驶城市</div>
	    	<div className="value arrow">
				<select ref="city" defalutValue={_defalutValue}>
			        {city}
			    </select>
	    	</div>
    	</div>
    )
  }
  componentDidMount() {
  	_select.tree.bind(this.refs.city)
  	this.refs.city.value = this.props.defalutValue || '杭州'
  	_select.tree.update(this.refs.city,this.props.defalutValue || '杭州')
  }
  componentDidUpdate(){
  	this.refs.city.value = this.props.defalutValue || '杭州'
  	_select.tree.update(this.refs.city,this.props.defalutValue || '杭州')
  }
}

export default cityName

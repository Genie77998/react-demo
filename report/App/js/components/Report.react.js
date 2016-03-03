import React, { Component, PropTypes } from 'react'
import { common } from '../com/unilt'
import VehicleNum from './vehicleNum.react'
import CityName from './cityName.react'
import Owner from './owner.react'
import TokenNo from './tokenNo.react'
import FrameNo from './frameNo.react'
import MotorNo from './motorNo.react'
import Brand from './brand.react'
import Reg from './reg.react'
const _log = function(errmsg){
  common.showMsg(errmsg)
}
const Report = React.createClass({
    getInitialState() {
      let _carList = common.getObj('infoList') || []
      let _now = common.getObj('nowCar') || ''
      if(_carList.length == 0){
        return {
            vehicleNum : '',
            cityName : '',
            owner : '',
            tokenNo : '',
            frameNo : '',
            motorNo : '',
            brand : '',
            reg : ''
        }
      }else{
        if(_now){
          for(let i = 0 ; i < _carList.length ; i++){
            if(_carList[i].vehicleNum == _now){
              return _carList[i]
            }
          }
        }else{
          return _carList[0]
        }
      }
    },
    componentDidMount() {
    },
    searchNum(){
        let _carList = common.getObj('infoList') || []
        const _vehicleNum = this.refs.vehicleNum
        const _v1 = $(_vehicleNum.refs.province).val() + _vehicleNum.refs.vehicleNum.value.toUpperCase()
        const len = _carList.length
        if(len == 0 ){return}
        if(/^[A-Z]{1}[A-Z_0-9]{5}$/.test(_vehicleNum.refs.vehicleNum.value.toUpperCase())){
          for(let i = 0 ; i < len ; i++){
            if(_carList[i].vehicleNum == _v1){
              this.setState(_carList[i])
            }
          }
        }
    },
    submitFn(){
      let _carList = common.getObj('infoList') || []
      const _vehicleNum = this.refs.vehicleNum
      const _cityName = this.refs.cityName
      const _owner = this.refs.owner
      const _tokenNo = this.refs.tokenNo
      const _frameNo = this.refs.frameNo
      const _motorNo = this.refs.motorNo
      const _brand = this.refs.brand
      const _reg = this.refs.reg
      const _v1 = $(_vehicleNum.refs.province).val() + _vehicleNum.refs.vehicleNum.value.toUpperCase()
      const _v2 = _cityName.refs.city.value
      const _v3 = _owner.refs.owner.value
      const _v4 = _tokenNo.refs.tokenNo.value.toUpperCase()
      const _v5 = _frameNo.refs.frameNo.value.toUpperCase()
      const _v6 = _motorNo.refs.motorNo.value.toUpperCase()
      const _v7 = _brand.refs.brand.value.toUpperCase()
      const _v8 = _reg.refs.reg.value
      const _obj = {
        vehicleNum : _v1,
        cityName : _v2,
        owner : _v3,
        tokenNo : _v4,
        frameNo : _v5,
        motorNo : _v6,
        brand : _v7,
        reg : _v8,
        channel:'picc'
      }
      if(!/^[A-Z]{1}[A-Z_0-9]{5}$/.test(_vehicleNum.refs.vehicleNum.value.toUpperCase())){
        _log('车牌号不正确');
        return;
      }

      if(_v2 == ''){
        _log('请选择行驶城市');
        return;
      }

      if(!common.idCardNameReg.test(_v3)){
        _log('车主姓名格式错误');
        return;
      }

      if(!common.idCardReg.test(_v4)){
        _log('身份证格式错误');
        return;
      }

      if(_v5.length != 17){
        _log('请输入正确的车辆识别代号');
        return;
      }

      if(_v6.length < 4){
        _log('请输入正确的发动机号');
        return;
      }

      if(_v7.length < 2){
        _log('请输入正确的品牌型号');
        return;
      }

      if(_v8.length == 0){
        _log('请选择注册日期');
        return;
      }
      common.setObj('nowCar',_v1);
      if(_carList.length == 0){
        _carList = [_obj];
        common.setObj('infoList',_carList);
      }else{
        let _flg = false
        for(let i = 0 ; i < _carList.length ; i++){
          if(_carList[i].vehicleNum == _v1){
            _flg = true
          }
        }
        if(!_flg){
          _carList.push(_obj);
          common.setObj('infoList',_carList)
        }
      }
      common.setObj('infos',_obj)
      common.removeItem('result')
      this.props.history.push('/result')
    },
    render() {
        return (
          <div className="formData">
               <VehicleNum defalutValue={this.state.vehicleNum} blurFn={this.searchNum} ref="vehicleNum"/>
               <CityName defalutValue={this.state.cityName} ref="cityName"/>
               <Owner defalutValue={this.state.owner} ref="owner"/>
               <TokenNo defalutValue={this.state.tokenNo} ref="tokenNo"/>
               <FrameNo defalutValue={this.state.frameNo} ref="frameNo"/>
               <MotorNo defalutValue={this.state.motorNo} ref="motorNo"/>
               <Brand defalutValue={this.state.brand} ref="brand"/>
               <Reg defalutValue={this.state.reg} ref="reg"/>
               <div className="action">
                  <button className="btn" onClick={this.submitFn}>快速报价</button>
               </div>
          </div>
        )
    }
});

export default Report

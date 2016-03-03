import React from 'react'
import { common } from '../com/unilt'
const result = React.createClass({   
    render() {
        if(this.state.code == 1){
          return (
            <div className="reusltBox result_load">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
              <p className="resultLoading">正在努力加载中，请不要退出...</p>
            </div>
          )
        }else if(this.state.code == 0){
          let _obj = this.state.Package.optional
          let _items = _obj.optionalPackage
          console.log(_items)
          let items = []
          let itemst = []
          let price = []
          if(_obj.premium > 0){
            price.push(
              <div className="priceItem zhj">
                <div className="key">折后价</div>
                <div className="value">￥{_obj.premium}元</div>
              </div>
            )
          }
          if(_obj.discountPremium > 0){
            price.push(
              <div className="priceItem scj">
                <div className="key">市场价</div>
                <div className="value">￥{_obj.discountPremium}元</div>
              </div>
            )
          }
          itemst.push(
            <div className="items items_h">
                <div className="itemInput">
                    <div className="atc f_bk">投保项目</div>
                    <div className="ifos f_bk">投保细节</div>
                    <div className="pri f_bk">投保价格</div>
                </div>
            </div>
          )
          for (let i = 0; i < _items.length; i++) {
            let _its = _items[i]
            if(_its.amount > 0 && _its.premium > 0){
              items.push(
                <div key={i} className="itemInput">
                    <div className="atc">{_its.kindName}{_its.kindCode.indexOf('0509')>-1 ? '不计免赔': ''}</div>
                    <div className="ifos">
                      {this.rule(_its)}
                    </div>
                    <div className="pri">￥{_its.premium}</div>
                </div>
              )
            }
          }
          return (
            <div className="reusltBox">
                <div className="insurfo">
                    <div className="pics">
                      <img src="http://file.chengniu.com/baoxian/smalllogos/renmin.png" />
                    </div>
                    <div className="infos">
                        <h3 className="body1">中国人保机动车商业保险</h3>
                        <p className="caption">车险大哥大  粉丝遍布全国</p>
                    </div>
              </div>
              <div className="price">
                {price}
              </div>
                <div>
                  {itemst}
                </div>
                <div className="items">
                  {items}
                </div>
                  <div className="action">
                    <button className="btn" onClick={this.goDownload}>下载官方应用进行投保</button>
                  </div>
                  <div className="action">
                  <button className="btn btn-next" onClick={this.goBack}>返回更改车辆信息</button>
               </div>
            </div>
            )
        }else{
          let errmsg = []
          if(this.state.msg){
            errmsg.push(this.state.msg)
          }else{
            errmsg.push(<p>获取报价失败了，请刷新重试</p>)
          }
          return (
          <div className="reusltBox reusltBox_err">
                  <div className="action">
                    {errmsg}
                    <button className="btn" onClick={this.reload}>重新获取报价</button>
                  </div>
                  <div className="action">
                  <button className="btn btn-next" onClick={this.goBack}>返回更改车辆信息</button>
               </div>
            </div>
          )
        }
    },
    rule(_its){
      let _code = _its.amount
      if(_its.kindCode == '050231'){
        if(_code == 10){
            return '国产玻璃'
        }else{
            return '进口玻璃'
        }
      }else{
        if(_code == 1){
          return '投保'
        }else if(_code == 0){
          return '不投保'
        }else{
          return '￥'+_its.amount
        }
      }
    },
    getInitialState(){
      return {
        code : 1
      }
    },
    componentWillMount(){
      let _re = common.getObj('result');
      let _me = this
      if(_re&&_re.code == 0){
          _me.setState(_re)
          return;
      }
      $.ajax({
        url: 'http://114.215.174.36:3000/spider/',
        type : 'get',
        data: common.getObj('infos'),
        success : function(r){
          common.setObj('result',r)
          _me.setState(r)
          console.log(r)
        },
        error : function(){
          _me.setState({
            code : -1
          })
        }
      })
    },
    goBack(){
      this.props.history.goBack()
    },
    goDownload(){
      Daze.pushWindow('http://a.app.qq.com/o/simple.jsp?pkgname=com.kplus.car');
    },
    reload(){
      location.reload()
    }
})





export default result

/**
 * author:wj77998
 */
const layer = require('./layer/layer')
const _caobj = 'fastReportCache'

;(function() {
    var globalData = store('globalData');
    if (!globalData) {
        store('globalData', {});
    }
})()

function store(itemName, obj) {
    if (obj) {
        if (typeof obj == 'object') {
            obj = JSON.stringify(obj);
            localStorage.setItem(itemName, obj);
        }
    } else {
        var data = localStorage.getItem(itemName);
        return JSON.parse(data);
    }
}

const storage = {
    getItem: function(itemName) {
        return store(itemName);
    },
    setItem: function(itemName, obj) {
        store(itemName, obj);
    },
    clearItem: function(itemName) {
        localStorage.removeItem(itemName);
    },
    setCityData: function(obj) {
        this.setItem('cityData', obj);
    },
    getCityData: function() {
        return this.getItem('cityData') || {};
    },
    getGlobalData: function() {
        return this.getItem('globalData') || {};
    },
    storeInfo: function(key, value) {
        var globalData = this.getGlobalData();
        globalData[key] = value;
        this.setItem('globalData', globalData);
    },
    removeInfo: function(key) {
        var globalData = this.getGlobalData();
        delete globalData[key];
        this.setItem('globalData', globalData);
    }
}

const common = {
    phoneReg: /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
    idCardNameReg: /^[\u2E80-\u9FFF]{2,}$/,
    idCardReg: /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/,
    priceReg: /^\d{1,4}(\.\d{1,2})?$/g,
    emailReg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    showMsg : function(str,callback){
        var me = this;
        layer.open({
            content: str,
            shade : false,
            style: 'background-color:#4E4D4D;color: #fff;border:none;',
            time : 2,
            end : function(){
                me.isFunction(callback) && callback(layer);
            }
        });
        return this;
    },
    isFunction : function(callback){
        return typeof callback != 'undefined' && callback.constructor == Function;
    },
    confirm : function(obj){
        obj = obj || {};
        var me = this,
            content = obj.content || '';
            btn = obj.btn || ['确认', '取消'];
            if(!content){return;}
            var _lay = layer.open({
                content: content,
                btn: btn,
                shadeClose: false,
                yes: function(){
                    layer.close(_lay);
                    me.isFunction(obj.yes) && obj.yes();
                }, no: function(){
                    me.isFunction(obj.no) && obj.no();
                }
            });
        return this;
    },
    alert : function(str,callback){
        var me = this;
        layer.open({
            content: str,
            shadeClose:false,
            btn: ['确定'],
            end : function(){
                me.isFunction(callback) && callback();
            }
        });
        return this;
    },
    removeItem: function(item) {
        var _re = this.getObj();
        if (item in _re) {
            delete _re[item];
            this.setObj(_re);
        }
    },
    getObj: function(item) {
        var _re = storage.getGlobalData()[_caobj] || {};
        if (item) {
            if (typeof _re[item] != 'undefined') {
                return _re[item];
            } else {
                return undefined;
            }
        } else {
            return _re;
        }
    },
    setObj: function(a, b) {
        var _re = this.getObj();
        if (!a) {
            storage.removeInfo(_caobj);
        } else {
            if (typeof a == 'object') {
                storage.storeInfo(_caobj, a);
            } else {
                _re[a] = b;
                storage.storeInfo(_caobj, _re);
            }
        }
    }
}
export {
    common , storage
}

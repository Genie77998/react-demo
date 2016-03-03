import './mobiscroll/mobiscroll'
module.exports = {
    date:{
        bind(el){
            $(el).mobiscroll().date({
                theme:'mobiscroll',
                dateFormat: 'yy-mm-dd',
                mode:'scroller',
                lang: 'zh',
                maxDate:new Date(),
                display:'bottom',
                buttons : ['set']
            })
        }
    },
    select:{
        bind(el){
            $(el).mobiscroll().select({
                theme:'mobiscroll',
                mode:'scroller',
                lang: 'zh',
                display:'modal',
                buttons : ['set']
            })
        }
        
    },
    tree : {
        bind(el){
            $(el).mobiscroll().select({
                theme:'mobiscroll',
                lang: 'zh',
                display: 'bottom',
                label: 'City',
                group: true,
                groupLabel: 'Province',
                fixedWidth: [100, 170]
            })
        },
        update:function(el,value){
            $(el).prev().val(value)
        }
    }
}


$(document).ready(function(){
    $('.tooltip-x').tooltip({
        html:true,
        placement:'top',
        trigger:'hover'
    });
    $('.specific-tip').tooltip({
        html:true,
        placement:'bottom',
        trigger:'click'
    });

    //////////////////////////
    const getAttr=(el,child)=>{
        return $(`.data-${child}`,$(el).attr('data-bind')).html();
    }

    $('.dynamic-popover1').popover({
        html:true,
        placement:'bottom',
        title:function(){
            return getAttr(this,'title');
        },
        content:function(){
            return getAttr(this,'content');
        }
    });
    $('.dynamic-popover2').popover({
        html:true,
        placement:'bottom',
        title:function(){
            return getAttr(this,'title');
        },
        content:function(){
            return getAttr(this,'content');
        }
    });
    $('.dynamic-popover1').click('hidden.bs.popover', function () {
        $('.dynamic-popover1').html("Following");
    });
    $('.dynamic-popover2').click('hidden.bs.popover', function () {
        $('.dynamic-popover2').html("Following");
    })
});
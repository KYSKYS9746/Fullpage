$(function(){
    $('.Main').fullpage({
        anchors: ['01','02', '03', '04', '05'],
        // navigation: true,
        onLeave: function(index, nextIndex, direction){
            $('.Gnb li').removeClass('on');
            $('.Gnb li').eq(nextIndex-1).addClass('on');
            
            $('.section').removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on');
        },
    });
})
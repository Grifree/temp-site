import $ from 'jquery';

$(function(){
    let headHeight = $('.m-head').height()
    let clientHeight = document.documentElement.clientHeight
    let clientWidth = document.documentElement.clientWidth
    let $targetScreenFirst = $('.m-screen--split').eq(0)
    $targetScreenFirst.css({
        height : clientHeight - headHeight + 'px',
        width : clientWidth + 'px'
    })
    $(window).resize(function(){
        let headHeight = $('.m-head').height()
        let clientHeight = document.documentElement.clientHeight
        let clientWidth = document.documentElement.clientWidth
        let $targetScreenFirst = $('.m-screen--split').eq(0)
        $targetScreenFirst.css({
            height : clientHeight - headHeight + 'px',
            width : clientWidth + 'px'
        })
    })
    // ios不支持 MP4 添加背景图片
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        $('.m-screen-bg-mark').each(function(){
            $(this).addClass('m-screen-bg-mark--ios')
        })
    }
})

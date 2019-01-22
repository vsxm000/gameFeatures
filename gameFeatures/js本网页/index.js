

// 第一屏点击播放按钮播放页面
$('.video .click').click(function () {
    $('.video .video_tan_hh').css('display','block');
})

// 点击x号关闭视频
$('.video_tan_hh span').click(function () {
    $(this).parent().css('display','none');
})
// 第一屏结束






// 第二屏左侧楼梯按钮
// 获取第二屏到文档的距离
var two = $('.twovideo').offset().top
console.log(two)
// 给窗口注册鼠标滚动事件, 当滚动到第二屏时显示左侧导航栏
$(window).scroll(function () {
    // 当鼠标滚动时获取窗口卷上去的距离
    var v = $(window).scrollTop()
    // 判断
    if (v >= two) {
        $('.left_nav').show()
    }else {
        $('.left_nav').hide()
    }
})
// 显示左侧导航栏结束


// 获取第一屏到文档的距离
var one = $('.video').offset().top
console.log(one)

// 获取第三屏到文档的距离
var three = $('.threevideo').offset().top
console.log(three)

// 获取第四屏到文档的距离
var four = $('.four_picter').offset().top
console.log(four)

// 获取第五屏到文档的距离
var five = $('.fivevideo').offset().top

// 获取第六屏到文档的距离
var six = $('.flooter_map').offset().top



// 当鼠标点击向上的按钮时跳转到上一屏页面
$('.nav_up1 a').click(function () {

    // 获取窗口向上滚动时卷上去的距离
    var v = $(window).scrollTop()

    if (v >= two && v < three) {
        $('html,body').animate({scrollTop: 0},500)
    } 
    if (v >= three && v < four) {
        $('html,body').animate({scrollTop: two},500)
    } 
    if (v >= four && v < five) {
        $('html,body').animate({scrollTop: three},500)
    } 
    if (v >= five && v < six) {
        $('html,body').animate({scrollTop: four},500)
    } 
    if (v >= six) {
        $('html,body').animate({scrollTop: five},500)
    } 
})

// 当鼠标点击相应的楼层时跳转到相应的地方
$('.li_all').click(function () {
    // 获取当前li的下标
    var index = $(this).index()
    // 找到对应的楼层，并获取对应的top值
    var lou = $('.btn').eq(index).offset().top
    // 设置页面卷上去的距离
    $('html,body').animate({scrollTop:lou},1000)
})



// 点击加号跳转页面
// $('.plus').click(function () {

// })












//第四屏轮播图
$('.four_picter .carousel a').mouseenter(function () {
    // ①：鼠标进入之后让当前的a标签宽度动画到56%，其他的兄弟动画都22%
    $(this).stop().animate({width: '56%'},500).siblings().stop().animate({width: '22%'},1000)
    // ②：鼠标进入后，图片上的文字隐藏
    $(this).children('div').fadeOut('500','linear')
})

// 鼠标离开事件
$('.four_picter .carousel a').mouseleave(function () {
    //①：鼠标离开后让所有的a标签宽度动画到33.33%
    $('.four_picter .carousel a').stop().animate({width:'33.33%'},500)
    // ②：鼠标离开后，图片中的文字显示
    $(this).children('div').fadeIn('500','linear')
})





// 第六屏天命圈
// 鼠标进入安全区显示视频
$('.flooter_map_plus1').mouseenter(function () {
    $('.video_end1').css('display','block')
})
// 鼠标离开隐藏视频
$('.flooter_map_plus1').mouseleave(function () {
    $('.video_end1').css('display','none')
})

// 鼠标进入轰炸区显示视频
$('.flooter_map_plus2').mouseenter(function () {
    $('.video_end2').css('display','block')
})
// 鼠标离开隐藏视频
$('.flooter_map_plus2').mouseleave(function () {
    $('.video_end2').css('display','none')
})
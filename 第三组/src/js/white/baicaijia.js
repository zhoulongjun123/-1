require('../common/footer.js')
$('.backTop').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

// 导航栏页面渲染

$.get('http://139.199.192.48:9090/api/getbaicaijiatitle', function(data) {
    var html = template('nav_tpl', data.result);
    $('#nav_list').html(html);

})

$.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: 0 }, function(data) {
    var html = template('common_tpl', data.result);
    $('#common_list').html(html);
    my_scroll();
})


// 因为压面是动态渲染，需要通过委托方式注册click事件
$(document).on('click', '.btn_nav', function() {
    var data = {
            titleid: $(this).attr('data-id')
        }
        // 商品列表页面渲染
    $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', data, function(data) {
            var html = template('common_tpl', data.result);
            $('#common_list').html(html);
        })
        // 点击时导航栏右移
    $(this).parent().css({ 'float': 'right' });

})





function my_scroll() {
    // 目标元素
    var ul = document.querySelector("#nav_list");
    // 手指按下的x坐标
    var startX;

    // 已经移动了的距离
    var preDistance = 0;
    // 弹簧
    var springs = 100;

    // 往左拖动最大的距离 (没有包括弹簧) 往上滑动的距离是负数
    var maxUp = -(ul.offsetWidth - ul.parentNode.offsetWidth);
    ul.addEventListener("touchstart", function(e) {
        // 判断手指的个数
        if (e.targetTouches.length > 1) {
            return;
        }
        // 记录坐标
        startX = e.targetTouches[0].clientX;

        // 清除过渡
        ul.style.transition = "none";
    });

    // 手指移动事件
    ul.addEventListener("touchmove", function(e) {
        // 判断手指的个数
        if (e.targetTouches.length > 1) {
            return;
        }

        // 记录坐标
        var moveX = e.targetTouches[0].clientX;


        // 移动的距离 加上之前已经移动了的距离
        var distance = moveX - startX + preDistance;

        // 判断下拉的最大距离
        if (distance > springs) {
            distance = springs;
        } else if (distance < maxUp - springs) {
            // 谁的值越小 谁就越在上面 
            distance = maxUp - springs;
        }
        // 设置位移
        ul.style.transform = "translateX(" + distance + "px)";
    });

    // 手指松开
    ul.addEventListener("touchend", function(e) {
        // 判断手指的个数
        if (e.changedTouches.length > 1) {
            return;
        }

        // 记录手指松开的坐标
        var endX = e.changedTouches[0].clientX;

        // 记录这一次移动了的距离 需要加上之前已经移动了的距离 所以是+=
        preDistance += endX - startX;
        // console.log(preDistance);
        // 判断下拉是否超出界限
        if (preDistance > 0) {
            preDistance = 0;
            // 设置ul的位移- 添加过渡
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + preDistance + "px)";
        } else if (preDistance < maxUp) {
            preDistance = maxUp;
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + preDistance + "px)";
        }
    });

    // ul绑定tap点击事件
    itcast(ul).tap(function(e) {
        var targetLi = e.target;
        if (targetLi.nodeName == "A") {
            targetLi = targetLi.parentNode;
        }
        // li标签的索引
        var index = -1;
        var lis = document.querySelectorAll("#nav_list>li");
        for (var i = 0; i < lis.length; i++) {
            var element = lis[i];
            element.classList.remove("active");
            if (element === targetLi) {
                index = i;
                element.classList.add("active");
            }
        }

        // console.log(index);
        // 获取要往上移动的总距离
        var totalUp = -(index * targetLi.offsetWidth);

        //  添加上滚动的限制 maxup
        if (totalUp < maxUp) {
            totalUp = maxUp;
        }
        // 为了点击置顶之后  再手动拖动  
        preDistance = totalUp;
        // 设置ul的位移 要添加过渡
        ul.style.transition = "transform .5s";
        ul.style.transform = "translateX(" + totalUp + "px)";
    });
}




function itcast(div) {
    var obj = {
        tap: function(callback) {
            // 手指按下的坐标
            var startX, startY;
            // 手指按下的时间
            var startTime;
            // 手指按下
            div.addEventListener("touchstart", function(e) {
                // 判断触摸点的个数 手指的个数
                if (e.targetTouches.length > 1) {
                    return;
                }

                // 记录手指按下坐标
                startX = e.targetTouches[0].clientX;
                startY = e.targetTouches[0].clientY;

                // 手指按下的时间 
                // var date=new Date()  date.getTime(); 返回 1970 1 1 到现在的毫秒数
                startTime = Date.now();

                // console.log(startX, startY, startTime);
            });
            // 手指离开
            div.addEventListener("touchend", function(e) {
                // 判断手指的个数
                if (e.changedTouches.length > 1) {
                    return;
                }

                // 记录手指松开的坐标
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;
                // 获取手指松开的时间
                var endTime = Date.now();

                // 判断手指位移的距离 
                if (Math.abs(endX - startX) > 5) {
                    return;
                }
                if (Math.abs(endY - startY) > 5) {
                    return;
                }

                // 判断手指按下的时间  单位 是毫秒
                if (endTime - startTime > 200) {
                    return;
                }

                // 执行tap点击事件的逻辑
                // console.log("恭喜你  到达了钻石💎");
                callback(e);
            });
        },
        swipe: function(callback) {
            // 记录手指按下的坐标
            var startX, startY;
            // 记录手指按下的时间
            var startTime;

            div.addEventListener("touchstart", function(e) {
                // 判断手指的个数
                if (e.targetTouches.length > 1) {
                    return;
                }

                // 记录手指按下的坐标
                startX = e.targetTouches[0].clientX;
                startY = e.targetTouches[0].clientY;

                // 记录手指按下的时间
                startTime = Date.now();
            });
            div.addEventListener("touchend", function(e) {
                // 判断手指的个数
                if (e.changedTouches.length > 1) {
                    return;
                }

                // 获取手指松开的坐标
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;
                // 获取手指松开的时间
                var endTime = Date.now();
                // 方向
                var direction;
                // 判断距离  水平距离
                if (Math.abs(endX - startX) > 15) {
                    // 判断方向 水平
                    direction = endX > startX ? "right" : "left";
                } else if (Math.abs(endY - startY) > 5) {
                    // 判断方向 竖直方向
                    direction = endY > startY ? "down" : "up";
                } else {
                    return;
                }

                // 判断时间
                if (endTime - startTime > 500) {
                    return;
                }

                // 执行自己的逻辑
                // console.log(direction);
                callback(direction);
            });
        }
    };
    return obj;
}
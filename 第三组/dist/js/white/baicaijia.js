(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.back_to_top').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

$('.login').on('click', function() {
    alert('没有这个功能');
})
$('.register').on('click', function() {
    alert('没有这个功能');
})
},{}],2:[function(require,module,exports){
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
},{"../common/footer.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy93aGl0ZS9iYWljYWlqaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoJy5iYWNrX3RvX3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA1MDApO1xyXG59KVxyXG5cclxuJCgnLmxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pXHJcbiQoJy5yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoJ+ayoeaciei/meS4quWKn+iDvScpO1xyXG59KSIsInJlcXVpcmUoJy4uL2NvbW1vbi9mb290ZXIuanMnKVxyXG4kKCcuYmFja1RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA1MDApO1xyXG59KVxyXG5cclxuLy8g5a+86Iiq5qCP6aG16Z2i5riy5p+TXHJcblxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGJhaWNhaWppYXRpdGxlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSgnbmF2X3RwbCcsIGRhdGEucmVzdWx0KTtcclxuICAgICQoJyNuYXZfbGlzdCcpLmh0bWwoaHRtbCk7XHJcblxyXG59KVxyXG5cclxuJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRiYWljYWlqaWFwcm9kdWN0JywgeyB0aXRsZWlkOiAwIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHZhciBodG1sID0gdGVtcGxhdGUoJ2NvbW1vbl90cGwnLCBkYXRhLnJlc3VsdCk7XHJcbiAgICAkKCcjY29tbW9uX2xpc3QnKS5odG1sKGh0bWwpO1xyXG4gICAgbXlfc2Nyb2xsKCk7XHJcbn0pXHJcblxyXG5cclxuLy8g5Zug5Li65Y6L6Z2i5piv5Yqo5oCB5riy5p+T77yM6ZyA6KaB6YCa6L+H5aeU5omY5pa55byP5rOo5YaMY2xpY2vkuovku7ZcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5fbmF2JywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGl0bGVpZDogJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5ZWG5ZOB5YiX6KGo6aG16Z2i5riy5p+TXHJcbiAgICAkLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGJhaWNhaWppYXByb2R1Y3QnLCBkYXRhLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBodG1sID0gdGVtcGxhdGUoJ2NvbW1vbl90cGwnLCBkYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICQoJyNjb21tb25fbGlzdCcpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDngrnlh7vml7blr7zoiKrmoI/lj7Pnp7tcclxuICAgICQodGhpcykucGFyZW50KCkuY3NzKHsgJ2Zsb2F0JzogJ3JpZ2h0JyB9KTtcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbXlfc2Nyb2xsKCkge1xyXG4gICAgLy8g55uu5qCH5YWD57SgXHJcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdl9saXN0XCIpO1xyXG4gICAgLy8g5omL5oyH5oyJ5LiL55qEeOWdkOagh1xyXG4gICAgdmFyIHN0YXJ0WDtcclxuXHJcbiAgICAvLyDlt7Lnu4/np7vliqjkuobnmoTot53nprtcclxuICAgIHZhciBwcmVEaXN0YW5jZSA9IDA7XHJcbiAgICAvLyDlvLnnsKdcclxuICAgIHZhciBzcHJpbmdzID0gMTAwO1xyXG5cclxuICAgIC8vIOW+gOW3puaLluWKqOacgOWkp+eahOi3neemuyAo5rKh5pyJ5YyF5ous5by557CnKSDlvoDkuIrmu5HliqjnmoTot53nprvmmK/otJ/mlbBcclxuICAgIHZhciBtYXhVcCA9IC0odWwub2Zmc2V0V2lkdGggLSB1bC5wYXJlbnROb2RlLm9mZnNldFdpZHRoKTtcclxuICAgIHVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyDliKTmlq3miYvmjIfnmoTkuKrmlbBcclxuICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDorrDlvZXlnZDmoIdcclxuICAgICAgICBzdGFydFggPSBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHJcbiAgICAgICAgLy8g5riF6Zmk6L+H5rihXHJcbiAgICAgICAgdWwuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5omL5oyH56e75Yqo5LqL5Lu2XHJcbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyDliKTmlq3miYvmjIfnmoTkuKrmlbBcclxuICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6w5b2V5Z2Q5qCHXHJcbiAgICAgICAgdmFyIG1vdmVYID0gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XHJcblxyXG5cclxuICAgICAgICAvLyDnp7vliqjnmoTot53nprsg5Yqg5LiK5LmL5YmN5bey57uP56e75Yqo5LqG55qE6Led56a7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbW92ZVggLSBzdGFydFggKyBwcmVEaXN0YW5jZTtcclxuXHJcbiAgICAgICAgLy8g5Yik5pat5LiL5ouJ55qE5pyA5aSn6Led56a7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gc3ByaW5ncykge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IHNwcmluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IG1heFVwIC0gc3ByaW5ncykge1xyXG4gICAgICAgICAgICAvLyDosIHnmoTlgLzotorlsI8g6LCB5bCx6LaK5Zyo5LiK6Z2iIFxyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IG1heFVwIC0gc3ByaW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6K6+572u5L2N56e7XHJcbiAgICAgICAgdWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgZGlzdGFuY2UgKyBcInB4KVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5omL5oyH5p2+5byAXHJcbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIOWIpOaWreaJi+aMh+eahOS4quaVsFxyXG4gICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6w5b2V5omL5oyH5p2+5byA55qE5Z2Q5qCHXHJcbiAgICAgICAgdmFyIGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcblxyXG4gICAgICAgIC8vIOiusOW9lei/meS4gOasoeenu+WKqOS6hueahOi3neemuyDpnIDopoHliqDkuIrkuYvliY3lt7Lnu4/np7vliqjkuobnmoTot53nprsg5omA5Lul5pivKz1cclxuICAgICAgICBwcmVEaXN0YW5jZSArPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByZURpc3RhbmNlKTtcclxuICAgICAgICAvLyDliKTmlq3kuIvmi4nmmK/lkKbotoXlh7rnlYzpmZBcclxuICAgICAgICBpZiAocHJlRGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZURpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgLy8g6K6+572udWznmoTkvY3np7stIOa3u+WKoOi/h+a4oVxyXG4gICAgICAgICAgICB1bC5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gLjVzXCI7XHJcbiAgICAgICAgICAgIHVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIHByZURpc3RhbmNlICsgXCJweClcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHByZURpc3RhbmNlIDwgbWF4VXApIHtcclxuICAgICAgICAgICAgcHJlRGlzdGFuY2UgPSBtYXhVcDtcclxuICAgICAgICAgICAgdWwuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIC41c1wiO1xyXG4gICAgICAgICAgICB1bC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyBwcmVEaXN0YW5jZSArIFwicHgpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdWznu5Hlrpp0YXDngrnlh7vkuovku7ZcclxuICAgIGl0Y2FzdCh1bCkudGFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0TGkgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0TGkubm9kZU5hbWUgPT0gXCJBXCIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGkgPSB0YXJnZXRMaS5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsaeagh+etvueahOe0ouW8lVxyXG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xyXG4gICAgICAgIHZhciBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25hdl9saXN0PmxpXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbGlzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0YXJnZXRMaSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgLy8g6I635Y+W6KaB5b6A5LiK56e75Yqo55qE5oC76Led56a7XHJcbiAgICAgICAgdmFyIHRvdGFsVXAgPSAtKGluZGV4ICogdGFyZ2V0TGkub2Zmc2V0V2lkdGgpO1xyXG5cclxuICAgICAgICAvLyAg5re75Yqg5LiK5rua5Yqo55qE6ZmQ5Yi2IG1heHVwXHJcbiAgICAgICAgaWYgKHRvdGFsVXAgPCBtYXhVcCkge1xyXG4gICAgICAgICAgICB0b3RhbFVwID0gbWF4VXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4uuS6hueCueWHu+e9rumhtuS5i+WQjiAg5YaN5omL5Yqo5ouW5YqoICBcclxuICAgICAgICBwcmVEaXN0YW5jZSA9IHRvdGFsVXA7XHJcbiAgICAgICAgLy8g6K6+572udWznmoTkvY3np7sg6KaB5re75Yqg6L+H5rihXHJcbiAgICAgICAgdWwuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIC41c1wiO1xyXG4gICAgICAgIHVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIHRvdGFsVXAgKyBcInB4KVwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGl0Y2FzdChkaXYpIHtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgdGFwOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAvLyDmiYvmjIfmjInkuIvnmoTlnZDmoIdcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WCwgc3RhcnRZO1xyXG4gICAgICAgICAgICAvLyDmiYvmjIfmjInkuIvnmoTml7bpl7RcclxuICAgICAgICAgICAgdmFyIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgLy8g5omL5oyH5oyJ5LiLXHJcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3op6bmkbjngrnnmoTkuKrmlbAg5omL5oyH55qE5Liq5pWwXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6w5b2V5omL5oyH5oyJ5LiL5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBzdGFydFggPSBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WSA9IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaJi+aMh+aMieS4i+eahOaXtumXtCBcclxuICAgICAgICAgICAgICAgIC8vIHZhciBkYXRlPW5ldyBEYXRlKCkgIGRhdGUuZ2V0VGltZSgpOyDov5Tlm54gMTk3MCAxIDEg5Yiw546w5Zyo55qE5q+r56eS5pWwXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0WCwgc3RhcnRZLCBzdGFydFRpbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g5omL5oyH56a75byAXHJcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5omL5oyH55qE5Liq5pWwXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOiusOW9leaJi+aMh+advuW8gOeahOWdkOagh1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIC8vIOiOt+WPluaJi+aMh+advuW8gOeahOaXtumXtFxyXG4gICAgICAgICAgICAgICAgdmFyIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJi+aMh+S9jeenu+eahOi3neemuyBcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRYIC0gc3RhcnRYKSA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kWSAtIHN0YXJ0WSkgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJi+aMh+aMieS4i+eahOaXtumXtCAg5Y2V5L2NIOaYr+avq+enklxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFRpbWUgLSBzdGFydFRpbWUgPiAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5omn6KGMdGFw54K55Ye75LqL5Lu255qE6YC76L6RXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaBreWWnOS9oCAg5Yiw6L6+5LqG6ZK755+z8J+SjlwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXBlOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAvLyDorrDlvZXmiYvmjIfmjInkuIvnmoTlnZDmoIdcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WCwgc3RhcnRZO1xyXG4gICAgICAgICAgICAvLyDorrDlvZXmiYvmjIfmjInkuIvnmoTml7bpl7RcclxuICAgICAgICAgICAgdmFyIHN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3miYvmjIfnmoTkuKrmlbBcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDorrDlvZXmiYvmjIfmjInkuIvnmoTlnZDmoIdcclxuICAgICAgICAgICAgICAgIHN0YXJ0WCA9IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRZID0gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6w5b2V5omL5oyH5oyJ5LiL55qE5pe26Ze0XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3miYvmjIfnmoTkuKrmlbBcclxuICAgICAgICAgICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5omL5oyH5p2+5byA55qE5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5omL5oyH5p2+5byA55qE5pe26Ze0XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmlrnlkJFcclxuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3ot53nprsgIOawtOW5s+i3neemu1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZFggLSBzdGFydFgpID4gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3mlrnlkJEg5rC05bmzXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kWCA+IHN0YXJ0WCA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhlbmRZIC0gc3RhcnRZKSA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3mlrnlkJEg56uW55u05pa55ZCRXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kWSA+IHN0YXJ0WSA/IFwiZG93blwiIDogXCJ1cFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5pe26Ze0XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kVGltZSAtIHN0YXJ0VGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmiafooYzoh6rlt7HnmoTpgLvovpFcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxufSJdfQ==

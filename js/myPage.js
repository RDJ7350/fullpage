$(function(){

	var height = $(window).height();
	// 第四屏的标志位
	var flag4 = false;
	// 点击next 往下播放一屏幕
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });

	$("#fullpage").fullpage({

		navigation: true,
		loopBottom: true,
		loopTop: true,

		// anchorLink:锚链接名称 index：序号
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$(".next").fadeOut();
				$(".search").show().animate({"right": 370}, 1500, "easeOutBack", function(){
					// 方块进来，显示沙发两个字
					$(".search-words").animate({"opacity": 1}, 500, function(){
						$(".search").hide();
						// 方块缩小
						$(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452}, 500);
						// 沙发图片显示，变大
						$(".goods-02").show().animate({"height": 218}, 1000);
						// 显示在computer盒子上方的字体图片
						$(".words-02").show().animate({"opacity": 1}, function(){
							$(".next").fadeIn();
						});
					});
				});
			}	
		},
		// index 从1开始，表示开始滚动的第几屏，nextIndex：滚动到哪一屏，direction可选参数up|down
		onLeave: function(index, nextIndex, direction){
			$(".next").fadeOut();
			if(index == 2 && nextIndex == 3 && direction == 'down'){
				// 沙发显示，并通过动画移动到第三屏
				$(".shirt-02").show().animate({"bottom": -(height - 250), "width": 207, "left": 260}, 2000, function(){
					// 第三屏的沙发显示，盖住从第二屏移动到第三屏的沙发
					// $(".shirt-03").show();
					$(".img").animate({"opacity": 1}, 800, function(){
						$(".btn-01").animate({"opacity": 1}, 800);
						$(".next").fadeIn();
					});
				});
				// 白色盒子显示，盖住原图的沙发
				$(".cover").show();
			}
			// 第三屏到第四屏
			else if(index == 3 && nextIndex == 4 && direction == 'down' && !flag4){
				flag4 = true;
				// 隐藏第三屏的沙发
				$(".shirt-02").hide();
				// 第三屏隐藏的倾斜的沙发
				$(".shirt-04").show().animate({"bottom": -(height - 210), "left": 290}, 2500, function(){
					// 隐藏从第三屏下来的倾斜的沙发
					$(this).hide();
					// 购物车中的沙发
					$(".car-img").show();
					// 购物车运动
					$(".car-container").animate({"left": "120%"}, 2500, "easeInElastic", function(){
						$(".note").animate({"opacity": 1}, 500);
						$(".note-img, .words-04-a").animate({"opacity": 1}, 1000);
						$(".next").fadeIn();
					});
				});
			}
            else if(index == 4 && nextIndex == 5 ) {
                // 小手上来
                $(".hand-05").animate({"bottom": 0}, 2000, function() {
                	// 鼠标显示
                	$(".mouse-05-a").animate({"opacity": 1});
                    // 沙发从 800 到  70
                    $(".t1f-05").show().animate({"bottom": 70}, 1000, function() {
                        // 单子上走 走完之后， 我们的文字翻转
                        $(".order-05").animate({"bottom": 390}, function() {
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });
                    })
                });
            }
            // 第5屏幕到第6屏幕过渡
            else if(index == 5 && nextIndex == 6 ) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                $(".t1f-05").animate({"bottom": -(height - 500), "left": "40%", "width": 65}, 1500, function() {
                    $(".t1f-05").hide();
                });

                $(".box-06").animate({"left": "38%"}, 1500, function() {
                     $(this).animate({"bottom": 40}, 500, function() {
                        $(this).hide();

                        // 行走的过程就是 背景移动的过程
                        // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
                        // 
                        $(".section6").animate({"backgroundPositionX": "100%"}, 4000, function() {
                            // 当背景动画执行完毕  boy 大小复原  
                            $(".boy").animate({"height": 305, "bottom": 116}, 1000, function() {
                                $(this).animate({ "right": 500}, 500, function() {
                                    // 门显示出来 模拟打开门的效果
                                    $(".door").animate({"opacity": 1},200, function() {
                                        // 之后girl 显示出来
                                        $(".girl").show().animate({"right": 350, "height": 306 },500, function() {
                                              $(".pop-07").show();
                                              $(".next").fadeIn();
                                        })
                                    });
                                });
                            });
                        });
                        // 光的速度
                        $(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
                        // 
                        $(".pop-06").show();
                    });
                });
                     
            }
            // 第6屏幕到第7屏幕过渡
            else if(index == 6 && nextIndex == 7 ) {
                setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                        $(".next").fadeIn();
                    });

                }, 2000);
            }
            // 这是第8屏幕动画
            
            // $(".beginShoping").mouseenter(function(event) {
            //     $(".btn-08-a").show();
            // }).mouseleave(function(event) {
            //    $(".btn-08-a").hide();
            // });
            // 用hover和toggle混搭
            $(".beginShoping").hover(function() {
                 $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
            });
            // 大手跟随鼠标移动  
            $(document).mousemove(function(event) {
                 var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠标在页面中的x坐标
                 var y = event.pageY + 10;  // 获得鼠标在页面中的y坐
                 // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
                 var minY = height - 449; 
                 // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
                 if(y < minY ) {
                    y = minY;
                 }
               $(".hand-08").css({"left": x, "top": y});
            })
             // 当我们点击 再来一次的 时候， 分两步进行
            $(".again").click(function(event) {
               // 1. 返回第1屏幕 
                 $.fn.fullpage.moveTo(1);
                  // 2. 所有的动画都复原 就是原来没有看过的样子 
                  // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
                  // 所有带有动画的div 盒子 添加 move 类名
                 $("img, .move").attr("style", "");
            });
		}
	});
});
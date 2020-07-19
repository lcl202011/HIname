//背景随机
$(function() {

	//编辑器控制
	$("h4,.nav b").css("color", "#fff");
	$(".fades").addClass("fadesin");
	$(" h1.fade").addClass("fadesin1");
	$(" h3.fade").addClass("fadesin2");
	$(" span.fade").addClass("fadesin3");
	//获取相对应得值
	var _top;
	var top1 = $("#section2").offset().top - 30;
	var top2 = $("#section3").offset().top - 30;
	var top3 = $("#section4").offset().top - 30;
	var top4 = $("#section5").offset().top - 30;
	var top5 = $("#section6").offset().top - 30;
	var top6 = $("#section7").offset().top - 30;
	var tops = [top1, top2, top3, top4, top5, top6];
	$(window).resize();

	// 背景图片轮播图
	var length = 3;
	$(".bg-img li:nth-child(2)").show();
	setInterval(function() {
		var randomBgIndex = Math.round(Math.random() * length);
		$("#section1 .bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
	}, 5000);

	// 导航菜单切换激活高亮
	// var lis = $('.fr>li')
	// for (let i = 0; i < lis.length; i++) {
	// 	lis.eq(i).on('click', function(e) {
	// 		lis.eq(i).siblings().removeClass('active')
	// 		lis.eq(i).addClass('active')
	// 	})
	// }

	$(".fr>li").on("click", function() {
		var index = $(this).index(); //获取序号
		console.log(index)
		$(".fr>li").eq(index).siblings().removeClass('active')
		$(".fr>li").eq(index).addClass("active").siblings().removeClass("active");
		$(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
	});
	// 导航点击
	$(".nav-ul li").on("click", function() {
		var index = $(this).index(); //获取序号
		// console.log(index);
		_top = $(".section").eq(index + 1).offset().top; //获取对应div距顶高度
		moveTo();
	});
	$(window).scroll(function() {
		//导航fixed
		var s = $(window).scrollTop();
		s > top1 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
		//导航跟随滚动响应
		// if ((s > top1) && (s < top2)) {
		// 	$(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
		// 	$(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
		// 	$("#section2").addClass("active");
		// } else if ((s > top2) && (s < top3)) {
		// 	$(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
		// 	$(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
		// 	$("#section3").addClass("active");
		// } else if ((s > top3) && (s < top4)) {
		// 	 $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
  //           $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
  //           $("#section4").addClass("active");
		// } else if ((s > top4) && (s < top5)) {
		// 	 $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
  //           $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
  //           $("#section5").addClass("active");
		// } else if ((s > top5) && (s < top6)) {
		// 	 $(".nav-ul li").eq(4).addClass("active").siblings().removeClass("active");
  //           $(".nav-xs-ul li").eq(4).addClass("active").siblings().removeClass("active");
  //           $("#section6").addClass("active");
		// } else if (s > top6) {
		// 	 $(".nav-ul li").eq(5).addClass("active").siblings().removeClass("active");
  //           $(".nav-xs-ul li").eq(5).addClass("active").siblings().removeClass("active");
  //           $("#section7").addClass("active");
		// }
	});
	// 导航slideToggle
	$(".more-nav").on("click", function() {
		$(".nav-ul.nav-xs-ul").stop().slideToggle(300);
	});
	$(".nav-ul li").on("click", function() {
		var index = $(this).index(); //获取序号
		_top = $(".section").eq(index + 1).offset().top; //获取对应div距顶高度
		moveTo();
	})

	function moveTo() {
		$('html,body').animate({
			scrollTop: _top
		}, 500);
	}
	$(".nav-xs-ul li").click(function() {
		$(".nav-xs-ul").slideUp(300)
	});
	//回到顶部
	$("#top").click(function() {
		$('html,body').stop().animate({
			scrollTop: 0
		}, 700);
	});
	//获取高度
	showScroll();
	var min_height = document.documentElement.clientHeight / 2;

	function showScroll() {
		$(window).scroll(function() {
			var s = $(window).scrollTop();
			s > min_height ? $('#top,#down').fadeIn() : $('#top,#down').fadeOut();
		});
	}

	//关于我
	$("#abMe").on("click", function() {
		$(".nav-ul li:nth-child(1)").click();
	});

	// 我的作品
	$("#mypro").on("click", function() {
		$(".nav-ul li:nth-child(3)").click();
	});


});
// 页面加载
$(window).resize(function() {
	var wid = $(window).width();
	if (wid > 750) {
		$(".nav-xs-ul").hide();
	}
});

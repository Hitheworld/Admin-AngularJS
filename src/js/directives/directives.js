var directives = angular.module("routerApp.directives", [
			'routerApp.navService'
		]);
//主导航指令
//在指令里面操作DOM
directives.directive("mainnav", function(){
	return {
		scope: {
			mnav:"="   //绑定策略 @字符串   =双向数据绑定    &绑定函数
			
		}, //创建独立作用域
		restrict:"AE",
		template: '<a href="javascript:;" class="button menu_title js_boss ui-nav">'+
						'<i class="icon_menu compose"></i>{{mnav.name}}'+
				  '</a>',
		controller: function($scope){   //向外部爆露方法以便外部调用
			
		},
		link: function(scope, element, attr){   //link是处理指令内部的一些事务
			//绑定事件
//			element.bind("click", function(){
//			});
			var isFirst = true;
			$(function(){
				if(isFirst){
					$('li a.js_boss').eq(0).addClass('menu_on');
					isFirst = false;
				}
			});

			/*一级导航-导航点击样式*/
			$('li a.js_boss').bind("click" ,function(e) {
				//e.preventDefault();
				$('li a.js_boss').removeClass('menu_on');
				$(this).addClass('menu_on');
			});
		}
	};
});



//子导航指令
directives.directive("subnav", function(){
	return {
		scope: {
			bnav:"="   //绑定策略 @字符串   =双向数据绑定    &
		}, //创建独立作用域
		restrict:"AE",
		template: '<a ui-sref="{{bnav.href}}" class="menu_title boss_btn fee_list">'+
						'<i class="icon_menu address"></i>{{bnav.navName}}'+
				  '</a>',
		link: function(scope, element, attr){
			var isFirst = true;
			$(function(){
				if(isFirst){
					$('li.menu').children().eq(1).addClass('on');
					$('li a.boss_btn').eq(0).addClass('menu2_on');
					isFirst = false;
				}
			});
			/*二级导航菜单显示与隐藏*/
			$('li.menu').bind("click" ,function(e) {
				//e.preventDefault();
				$('.col_side ul li ul').removeClass('on');
				$(this).children().eq(1).addClass('on');
			});
			/*二级导航-导航点击样式*/
			$('li a.boss_btn').bind("click" ,function(e) {
				//e.preventDefault();
				$('li a.boss_btn').removeClass('menu2_on');
				$(this).addClass('menu2_on');
			});
		}
	};
});



/**
 * 登录
 */
directives.directive("login", function(){
	return {
		scope: {
			
		}, //创建独立作用域
		restrict:"AE",
		template: '<a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" tabindex="7">快速登录</a>',
		link: function(scope, element, attr){
			$(function(){
				$('#switch_qlogin').click(function(){
					$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
					$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
					$('#switch_bottom').animate({left:'0px',width:'70px'});
					$('#qlogin').css('display','none');
					$('#web_qr_login').css('display','block');
				});
			});
		}
	};
});


/**
 * 注册
 */
directives.directive("register", function(){
	return {
		scope: {
			
		}, //创建独立作用域
		restrict:"AE",
		template: '<a class="switch_btn" id="switch_login" href="javascript:void(0);" tabindex="8">快速注册</a>',
		link: function(scope, element, attr){
			$(function(){
				$('#switch_login').click(function(){
					$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
					$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
					$('#switch_bottom').animate({left:'154px',width:'70px'});
					$('#qlogin').css('display','block');
					$('#web_qr_login').css('display','none');
				});
			});
		}
	};
});
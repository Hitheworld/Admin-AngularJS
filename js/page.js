$(document).ready(function(){
	/*公共行为*/
	/*查看详情----1.显示角色详细信息*/
	$(".summary").mouseout(function () {
	    $(".detail_info").css("display","none");
	});
	
	$(".summary").mouseover(function () {
	    $(".detail_info").css("display","block");
	    
	});
	
	
	
	
	/*请至少选择一条数据*/
	/*1.管理员列表--*/
	$(".select_one").click(function () {
	    alert("请至少选择一条数据！");
	    //document.getElementById("operate_result_info").style.display = "block";
	});
	
	
	//删除
	$(".btn_delete").click(function() {
		alert("这是删除");
	    var r = window.confirm("确定要删除此管理员吗？");
	    document.getElementById("operate_result_info").style.display = "block";
	});

});







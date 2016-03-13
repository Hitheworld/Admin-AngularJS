$(document).ready(function(){
	/*公共行为*/
	/*查看详情----1.显示角色详细信息*/
	$(".summary").mouseenter(function (flag, a) {
	    var detailDiv = a.parentNode.$("div")[0];
	    if (flag) {
	        detailDiv.CSS("display","block");
	    }
	    else
	        detailDiv.CSS("display","none");
	});
	
	
	/*请至少选择一条数据*/
	/*1.管理员列表--*/
	$(".select_one").click(function () {
	    alert("请至少选择一条数据！");
	    //document.getElementById("operate_result_info").style.display = "block";
	});
	
	
	//删除
	$(".btn_delete").click(function(){
		alert("你好");
	});

});

function deleteAdmin() {
    var r = window.confirm("确定要删除此管理员吗？");
    document.getElementById("operate_result_info").style.display = "block";
}
//全选
function selectAdmins(inputObj) {
    var inputArray = document.getElementById("datalist").getElementsByTagName("input");
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i].type == "checkbox") {
            inputArray[i].checked = inputObj.checked;
        }
    }
}





/*admin_add.html*/
//保存成功的提示消息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}





/*admin_modi.html*/
//保存成功的提示消息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}




/*role_list.html*/
function deleteRole() {
    var r = window.confirm("确定要删除此角色吗？");
    document.getElementById("operate_result_info").style.display = "block";
}



/*role_add.html*/
 //保存成功的提示消息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}




/*role_modi.html*/
//保存成功的提示消息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}


/*fee_list.html*/
//排序按钮的点击事件
function sort(btnObj) {
    if (btnObj.className == "sort_desc")
        btnObj.className = "sort_asc";
    else
        btnObj.className = "sort_desc";
}

//启用
function startFee() {
    var r = window.confirm("确定要启用此资费吗？资费启用后将不能修改和删除。");
    document.getElementById("operate_result_info").style.display = "block";
}
//删除
function deleteFee() {
    var r = window.confirm("确定要删除此资费吗？");
    document.getElementById("operate_result_info").style.display = "block";
}



/*fee_add.html*/
 //保存结果的提示
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}

//切换资费类型
function feeTypeChange(type) {
    var inputArray = document.getElementById("main").getElementsByTagName("input");
    if (type == 1) {
        inputArray[4].readonly = true;
        inputArray[4].value = "";
        inputArray[4].className += " readonly";
        inputArray[5].readonly = false;
        inputArray[5].className = "width100";
        inputArray[6].readonly = true;
        inputArray[6].className += " readonly";
        inputArray[6].value = "";
    }
    else if (type == 2) {
        inputArray[4].readonly = false;
        inputArray[4].className = "width100";
        inputArray[5].readonly = false;
        inputArray[5].className = "width100";
        inputArray[6].readonly = false;
        inputArray[6].className = "width100";
    }
    else if (type == 3) {
        inputArray[4].readonly = true;
        inputArray[4].value = "";
        inputArray[4].className += " readonly";
        inputArray[5].readonly = true;
        inputArray[5].value = "";
        inputArray[5].className += " readonly";
        inputArray[6].readonly = false;
        inputArray[6].className = "width100";
    }
}





/*fee_modi.html*/
//保存结果的提示
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}

//切换资费类型
function feeTypeChange(type) {
    var inputArray = document.getElementById("main").getElementsByTagName("input");
    if (type == 1) {
        inputArray[5].readonly = true;
        inputArray[5].value = "";
        inputArray[5].className += " readonly";
        inputArray[6].readonly = false;
        inputArray[6].className = "width100";
        inputArray[7].readonly = true;
        inputArray[7].className += " readonly";
        inputArray[7].value = "";
    }
    else if (type == 2) {
        inputArray[5].readonly = false;
        inputArray[5].className = "width100";
        inputArray[6].readonly = false;
        inputArray[6].className = "width100";
        inputArray[7].readonly = false;
        inputArray[7].className = "width100";
    }
    else if (type == 3) {
        inputArray[5].readonly = true;
        inputArray[5].value = "";
        inputArray[5].className += " readonly";
        inputArray[6].readonly = true;
        inputArray[6].value = "";
        inputArray[6].className += " readonly";
        inputArray[7].readonly = false;
        inputArray[7].className = "width100";
    }
}





/*account_list.html*/
//删除
function deleteAccount() {
    var r = window.confirm("确定要删除此账务账号吗？\r\n删除后将不能恢复，且会删除其下属的所有业务账号。");
    document.getElementById("operate_result_info").style.display = "block";
}
//开通或暂停
function setState() {
    var r = window.confirm("确定要开通此账务账号吗？");
    document.getElementById("operate_result_info").style.display = "block";
}



/*account_add.html*/
 //保存成功的提示信息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}

//显示选填的信息项
function showOptionalInfo(imgObj) {
    var div = document.getElementById("optionalInfo");
    if (div.className == "hide") {
        div.className = "show";
        imgObj.src = "../images/hide.png";
    }
    else {
        div.className = "hide";
        imgObj.src = "../images/show.png";
    }
}





/*account_modi.html*/
 //保存成功的提示信息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}

//显示修改密码的信息项
function showPwd(chkObj) {
    if (chkObj.checked)
        document.getElementById("divPwds").style.display = "block";
    else
        document.getElementById("divPwds").style.display = "none";
}





/*service_list.html*/
 //显示角色详细信息
function showDetail(flag, a) {
    var detailDiv = a.parentNode.getElementsByTagName("div")[0];
    if (flag) {
        detailDiv.style.display = "block";
    }
    else
        detailDiv.style.display = "none";
}
//删除
function deleteAccount() {
    var r = window.confirm("确定要删除此业务账号吗？删除后将不能恢复。");
    document.getElementById("operate_result_info").style.display = "block";
}
//开通或暂停
function setState() {
    var r = window.confirm("确定要开通此业务账号吗？");
    document.getElementById("operate_result_info").style.display = "block";
}





/*service_add.html*/
//保存成功的提示信息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}

//自动查询账务账号
function searchAccounts(txtObj) {
    //document.getElementById("a1").innerHTML = txtObj.value;
}





/*service_modi.html*/
//保存成功的提示信息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}





/*bill_list.html*/
//写入下拉框中的年份和月份
function initialYearAndMonth() {
    //写入最近3年
    var yearObj = document.getElementById("selYears");
    var year = (new Date()).getFullYear();
    for (var i = 0; i <= 2; i++) {
        var opObj = new Option(year - i, year - i);
        yearObj.options[i] = opObj;
    }
    //写入 12 月
    var monthObj = document.getElementById("selMonths");
    var opObj = new Option("全部", "全部");
    monthObj.options[0] = opObj;
    for (var i = 1; i <= 12; i++) {
        var opObj = new Option(i, i);
        monthObj.options[i] = opObj;
    }
}





/*report_list.html*/
 function changeTab(e,ulObj) {                
    var obj = e.srcElement || e.target;
    if (obj.nodeName == "A") {
        var links = ulObj.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].innerHTML == obj.innerHTML) {
                links[i].className = "tab_on";
            }
            else {
                links[i].className = "tab_out";
            }
        }
    }
}
 
 
 
 
 
 
 /*user_info.html*/
//保存成功的提示信息
function showResult() {
    showResultDiv(true);
    window.setTimeout("showResultDiv(false);", 3000);
}
function showResultDiv(flag) {
    var divResult = document.getElementById("save_result_info");
    if (flag)
        divResult.style.display = "block";
    else
        divResult.style.display = "none";
}





/*user_modi_pwd.html*/


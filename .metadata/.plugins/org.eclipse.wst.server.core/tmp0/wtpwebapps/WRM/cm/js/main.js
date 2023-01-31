/**
 * 화면 초기 로딩
 * @lastUpdate 2016.08.28 
 * @author Inswave Systems
 * @since 2016.08.28
 */
scwin.initMainLoad = function() {
	wfm_side.getWindow().scwin.getInitData();
	
	var deviceWidth = com.num.parseFloat($("body").css("width"));
	if (deviceWidth < 1280) {
		$(".wrap").removeClass("show_menu");
		$(".btn_toggle_menu").removeClass("on");
	}
	
	gcm.win.addEventOnBeforeUnload();
};

/**
 * TabControl의 모든 메뉴 닫기 버튼 이벤트
 * @lastUpdate 2016.08.28
 * @author Inswave Systems
 * @since 2016.08.28
 */
scwin.btn_CloseAll_onclick = function() {
	var cnt = tac_layout.getTabCount();
	for (var i = cnt; i > 0; i--) {
		tac_layout.deleteTab(i);
	}
};

/**
 * header menu 생성
 */
scwin.setHeaderMenu = function() {
	wfm_header.getWindow().scwin.setGenerator(); //메뉴 생성
	wfm_header.getWindow().scwin.setMenuCss(); //메뉴 css 적용
};

scwin.getLayoutId = function() {
	if (typeof $p.top().$p.getComponentById("tac_layout") === "object") {
		return "T";
	} else if (typeof $p.top().$p.getComponentById("wdc_main") === "object") {
		return "M";
	} else if (typeof $p.top().$p.getComponentById("wfm_layout") === "object") {
		return "S";
	}
	return null;
};

scwin.isMobileSize = function() {
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight
	};
	
	if (size.width <= 1024) {
		return true;
	} else {
		return false;
	}
};

/**
 * 화면이 닫히 전에 변경된 데이터가 있는지 검사한다.
 */
scwin.closeBeforePage = function(frameObj) {
	if (scwin.checkBeforeCloseModified(frameObj)) {
		if (confirm(com.data.getMessage("MSG_CM_00006"))) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};

scwin.checkBeforeCloseModified = function(frameObj) {
	var changeCheckMainFrame = gcm.data.getChangeCheckedMainFrame(frameObj.scope.$p);
	if (!com.util.isEmpty(changeCheckMainFrame)) {
		var changeCheckDcList = gcm.data.getChangeCheckedMainFrame(frameObj.scope.$p)._changeCheckDcList;
	
		if (!com.util.isEmpty(changeCheckDcList) && com.util.isArray(changeCheckDcList) && (changeCheckDcList.length > 0)) {
			for (var i = 0; i < changeCheckDcList.length; i++) {
				var dlObj = com.util.getComponent(changeCheckDcList[i]);
				if (!com.util.isEmpty(dlObj) && (dlObj.getObjectType() == "dataList" || dlObj.getObjectType() == "dataMap")) {
					if (dlObj.getModifiedIndex().length > 0) {
						return true;
					}
				}
			}
		}
	}
	
	return false;
};

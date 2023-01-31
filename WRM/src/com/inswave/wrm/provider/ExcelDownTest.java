package com.inswave.wrm.provider;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.parser.JSONParser;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.w3c.dom.Document;

import com.inswave.wrm.sample.service.impl.EduServiceImpl;
import com.inswave.wrm.util.MapUtil;

import websquare.http.WebSquareContext;
import websquare.http.controller.grid.excel.write.IExternalGridDataProvider;
import websquare.util.XMLUtil;

public class ExcelDownTest implements IExternalGridDataProvider {
	
	// Excel 파일로 다운로드 받을 최대 Row 수 설정
	private final int MAX_ROW_COUNT = 10000;

	public String[] getData(Document requestObj) throws Exception {
		
		JSONParser parser = new JSONParser();
		Map data = (Map)parser.parse(XMLUtil.getText(requestObj, "jsonData" ));
		// Get WebApplicationContext
		WebSquareContext context = WebSquareContext.getContext();
		HttpServletRequest request = context.getRequest();
		HttpSession httpSession = request.getSession();
		ServletContext sc = httpSession.getServletContext();
		WebApplicationContext wContext = WebApplicationContextUtils.getWebApplicationContext(sc);
		EduServiceImpl eduService = (EduServiceImpl)wContext.getBean("eduService");
		ArrayList<Object> dataArr = new ArrayList();
		String[] returnData = null;
		try {
			// Loading Parameter
			Map req = new HashMap();
			Map res = new HashMap();
			// data 조회 
			List dataList = eduService.selectListLWST(data);
			System.out.println("가져온 데이터!!" + dataList);
			int _size = dataList.size();
			
			for(int i=0; i<_size; i++) {
				res = (Map) dataList.get(i);
				
				Set keySet = res.keySet();
				Iterator<String> keys = keySet.iterator();
				while (keys.hasNext()) {
					String key = (String)keys.next();
					if ( res.get(key) == null ){
						dataArr.add("");
					} else {
						dataArr.add(String.valueOf(res.get(key)));
					}
				}
			}
			returnData = new String[dataArr.size()];
			dataArr.toArray(returnData);
		}catch(Exception ex){
			System.out.println(ex);
			ex.printStackTrace();
		}finally {
			try {
				
			}catch(Exception ex){
				
			}finally {
				httpSession = null;
			}
		}
		return returnData;
	}

}

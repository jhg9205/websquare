package com.inswave.wrm.sample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.inswave.wrm.sample.service.EduService;
import com.inswave.wrm.util.Result;

@Controller
public class EduController {

	@Resource(name = "eduService")
	private EduService eduService;

	@RequestMapping(value = "/edu/e001Init", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getMemberInfo(@RequestBody Map<String, Object> param) throws Exception {
		String empCd = null;
		Map memMap = null;
		List favList = null;
		Result result = new Result();
		try {
			result.setStatusMsg(result.STATUS_SUCESS, "조회가 완료되었습니다.");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

	@RequestMapping(value = "/edu/e001SelectListAll", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> e001SelectListAll(@RequestBody Map<String, Object> param) throws Exception {
		Map sParam = null;
		String daoType = null;
		boolean isArrayType = false;
		Result result = new Result();

		try {
			sParam = (Map) param.get("dma_searchParam");
			if (sParam != null) {
				daoType = (String) sParam.get("daoType");
				if (daoType != null && daoType.equals("array")) {
					isArrayType = true;
				}
			}

			if (isArrayType) {
				result.setData("dlt_member", eduService.selectListSpMemberByHandler(null));
			} else {
				result.setData("dlt_member", eduService.selectListSpMember(null));
			}
			result.setStatusMsg(result.STATUS_SUCESS, "조회가 완료되었습니다.");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

	@RequestMapping(value = "/edu/e001SearchZipcode", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> e001SearchZipcode(@RequestBody Map<String, Object> param) throws Exception {
		Map sParam = null;
		String sTown = null;
		boolean isArrayType = false;
		Result result = new Result();

		try {
			sParam = (Map) param.get("dma_searchParam");
			if (sParam != null && sParam.get("town") != null) {
				result.setData("dlt_zipCd", eduService.selectListZipCodeByTown(sParam));
			} else {
				throw new Exception("검색 조건을 확인하세요.");
			}

			result.setStatusMsg(result.STATUS_SUCESS, "조회가 완료되었습니다.");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}
	


/*********************************************************************************************/
	//연습용 그리드
	@RequestMapping(value = "/edu/subMainSearch", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> saupCode(@RequestBody Map<String, Object> param) throws Exception {
		Result result = new Result();
		result.setData("dc_saupList", eduService.selectListLWST((Map)param.get("dc_saupSearch")));
		return result.getResult();
	}
	

	@RequestMapping(value = "/edu/subMainDetail", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> saupCodeDetail(@RequestBody Map<String, Object> param) throws Exception {
		Result result = new Result();
		result.setData("dc_saupListDetail", eduService.selectListLWSTDetail((Integer)((Map)param.get("dc_saupCodeDetail")).get("LWST_GNRL_CODE")));
		return result.getResult();
	}
	
	@RequestMapping(value = "/edu/subDetailUpdate", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> saupUpdate(@RequestBody Map<String, Object> param) throws Exception {
		Result result = new Result();
		result.setData("dc_result", eduService.updateDetail(param));
		return result.getResult();
	}
	
	@RequestMapping(value = "/edu/subDetailDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> saupDelete(@RequestBody Map<String, Object> param) throws Exception {
		Result result = new Result();
		result.setData("dc_result", eduService.deleteDetail((Integer)((Map)param.get("dc_deleteCode")).get("LWST_ACUSR_CODE")));
		return result.getResult();
	}

/*********************************************************************************************/
	
}

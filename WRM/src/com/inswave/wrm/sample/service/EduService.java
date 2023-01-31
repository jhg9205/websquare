package com.inswave.wrm.sample.service;

import java.util.List;
import java.util.Map;

public interface EduService {
	public int insertSpMember(Map param) throws Exception;

	public int updateSpMember(Map param) throws Exception;

	public Map selectOneSpMember(Map param) throws Exception;

	public List selectListSpMember(Map param) throws Exception;

	public Map selectListSpMemberByHandler(Map param) throws Exception;

	public List selectListZipCodeByTown(Map param) throws Exception;

/*********************************************************************************************/
	//연습용 그리드
	public List selectListLWST(Map param) throws Exception;
	
	public List selectListLWSTDetail(int param) throws Exception;
	
	public Map updateDetail(Map param) throws Exception;
	
	public Map deleteDetail(int param) throws Exception;
/*********************************************************************************************/
}

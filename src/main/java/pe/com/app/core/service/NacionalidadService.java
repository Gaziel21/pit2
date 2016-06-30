package pe.com.app.core.service;

import java.util.List;

import pe.com.app.common.Pagination;
import pe.com.app.core.model.NacionalidadModel;

public interface NacionalidadService {

	List<NacionalidadModel> getAll(Pagination pagination);
	
	NacionalidadModel saveOrUpdate(NacionalidadModel t);
	
	NacionalidadModel get(int id);
	
	void delete(int id);
}

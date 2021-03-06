package pe.com.app.core.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import pe.com.app.common.Pagination;
import pe.com.app.core.dao.NacionalidadDAO;
import pe.com.app.core.model.NacionalidadModel;
import pe.com.app.core.service.NacionalidadService;

@Service
public class NacionalidadServiceImpl implements NacionalidadService {

	@Resource
	private NacionalidadDAO nacionalidadDAO;

	@Override
	public List<NacionalidadModel> getAll(Pagination pagination) {
		return nacionalidadDAO.getAll(pagination);
	}

	@Override
	public NacionalidadModel saveOrUpdate(NacionalidadModel t) {
		if(t.getIdNacionalidad()!=null && t.getIdNacionalidad()!=0){
			this.nacionalidadDAO.update(t);
		} else {
			this.nacionalidadDAO.save(t);
		}
		return t;
	}

	@Override
	public NacionalidadModel get(int id) {
		return nacionalidadDAO.getById(id);
	}

	@Override
	public void delete(int id) {
		nacionalidadDAO.deleteById(id);
	}

}

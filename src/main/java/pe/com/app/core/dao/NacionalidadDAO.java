package pe.com.app.core.dao;

import java.util.List;

import pe.com.app.common.Pagination;
import pe.com.app.core.model.NacionalidadModel;

public interface NacionalidadDAO {

	List<NacionalidadModel> getAll(Pagination pagination);
}

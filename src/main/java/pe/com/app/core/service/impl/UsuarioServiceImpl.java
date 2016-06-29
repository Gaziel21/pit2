package pe.com.app.core.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import pe.com.app.core.dao.UsuarioDao;
import pe.com.app.core.model.UsuarioModel;
import pe.com.app.core.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Resource
	public UsuarioDao usuarioDao;

	@Override
	public List<UsuarioModel> getAll() {
		return usuarioDao.getAll();
	}
}

package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "USUARIO_ROL")
public class UsuarioRolModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idRol;
	private int idUsuario;

	
	public UsuarioRolModel(int idRol, int idUsuario) {
		super();
		this.idRol = idRol;
		this.idUsuario = idUsuario;
	}

	
	@Column(name = "ID_ROL")
	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	@Column(name = "ID_USUARIO")
	public int getIdRol() {
		return idRol;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

}

package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "ROL_ENLACE")
public class RolEnlaceModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idRol;
	private int idEnlace;

	public RolEnlaceModel(int idRol, int idEnlace) {
		this.idRol = idRol;
		this.idEnlace = idEnlace;
	}

	@Column(name = "ID_ROL")
	public int getIdRol() {
		return idRol;
	}

	@Column(name = "ID_ENLACE")
	public int getIdEnlace() {
		return idEnlace;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public void setIdEnlace(int idEnlace) {
		this.idEnlace = idEnlace;
	}

}

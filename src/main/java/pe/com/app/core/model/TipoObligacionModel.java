package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TIPO_OBLIGACION")
public class TipoObligacionModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idTipoObligacion;
	private String descripcion;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_TIPO_OBLIGACION")
	public int getIdTipoObligacion() {
		return idTipoObligacion;
	}

	@Column(name = "DESCRIOCION")
	public String getDescripcion() {
		return descripcion;
	}

	public void setIdTipoObligacion(int idTipoObligacion) {
		this.idTipoObligacion = idTipoObligacion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}

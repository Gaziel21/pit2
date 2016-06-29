package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "UBIGEO")
public class UbigeoModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idUbigeo;
	private String departamento;
	private String provincia;
	private String distritro;
	private String descripcion;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_UBIGEO")
	public int getIdUbigeo() {
		return idUbigeo;
	}

	@Column(name = "DEPARTAMENTO")
	public String getDepartamento() {
		return departamento;
	}

	@Column(name = "PROVINCIA")
	public String getProvincia() {
		return provincia;
	}

	@Column(name = "DISTRITO")
	public String getDistritro() {
		return distritro;
	}

	@Column(name = "DESCRIPCION")
	public String getDescripcion() {
		return descripcion;
	}

	public void setIdUbigeo(int idUbigeo) {
		this.idUbigeo = idUbigeo;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public void setDistritro(String distritro) {
		this.distritro = distritro;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}

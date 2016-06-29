package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "NACIONALIDAD")
public class NacionalidadModel implements Serializable  {

	private static final long serialVersionUID = 1L;
	
	private int idNacional;
	private String nacionalidad;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_NACIONALIDAD")
	public int getIdNacional() {
		return idNacional;
	}

	public void setIdNacional(int idNacional) {
		this.idNacional = idNacional;
	}

	@Column(name = "NACIONALIDAD")
	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

}

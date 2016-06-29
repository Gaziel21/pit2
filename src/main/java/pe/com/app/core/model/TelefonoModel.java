package pe.com.app.core.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TELEFONO")
public class TelefonoModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idTelefono;
	private String telefono;
	private Date fecha_registro;
	private String estado;
	private String numPersona;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_TELEFONO")
	public int getIdTelefono() {
		return idTelefono;
	}

	@Column(name = "TELEFONO")
	public String getTelefono() {
		return telefono;
	}

	@Column(name = "FECHA_REGISTRO")
	public Date getFecha_registro() {
		return fecha_registro;
	}

	@Column(name = "ESTADO")
	public String getEstado() {
		return estado;
	}

	/* COMPUESTA */
	@Column(name = "NUM_PERSONA")
	public String getNumPersona() {
		return numPersona;
	}

	public void setIdTelefono(int idTelefono) {
		this.idTelefono = idTelefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public void setFecha_registro(Date fecha_registro) {
		this.fecha_registro = fecha_registro;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public void setNumPersona(String numPersona) {
		this.numPersona = numPersona;
	}
}

package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TIPO_PERSONA")
public class TipoPersonaModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idTipoPersona;
	private String tipoPersona;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_TIPO_PERSONA")
	public int getIdTipoPersona() {
		return idTipoPersona;
	}

	@Column(name = "TIPO_PERSONA")
	public String getTipoPersona() {
		return tipoPersona;
	}

	public void setIdTipoPersona(int idTipoPersona) {
		this.idTipoPersona = idTipoPersona;
	}

	public void setTipoPersona(String tipoPersona) {
		this.tipoPersona = tipoPersona;
	}

}

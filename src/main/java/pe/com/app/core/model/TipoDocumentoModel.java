package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TIPO_DOCUMENTO")
public class TipoDocumentoModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private int idTipoDocumento;
	private String tipoDocumento;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_TIPO_DOCUMENTO")
	public int getIdTipoDocumento() {
		return idTipoDocumento;
	}

	@Column(name = "TIPO_DOCUMENTO")
	public String getTipoDocumento() {
		return tipoDocumento;
	}

	public void setIdTipoDocumento(int idTipoDocumento) {
		this.idTipoDocumento = idTipoDocumento;
	}

	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

}

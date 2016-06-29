package pe.com.app.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "ROL")
public class RolModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int idRol;
    private String descripcion;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID_ROL")
    public int getIdRol() {
		return idRol;
	}
    
    @Column(name = "DESCRIPCION")
    public String getDescripcion() {
		return descripcion;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.com.app.core.dao;

import java.util.List;

import pe.com.app.core.model.UsuarioModel;

/**
 *
 * @author Julio
 */
public interface UsuarioDao {

    List<UsuarioModel> getAll();
}

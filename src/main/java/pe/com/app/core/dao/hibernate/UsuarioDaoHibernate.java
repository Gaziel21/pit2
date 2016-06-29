package pe.com.app.core.dao.hibernate;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import pe.com.app.core.dao.UsuarioDao;
import pe.com.app.core.model.UsuarioModel;

@Repository
public class UsuarioDaoHibernate implements UsuarioDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Transactional
    @Override
    public List<UsuarioModel> getAll() {
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(UsuarioModel.class);
        return criteria.list(); 
    }

}

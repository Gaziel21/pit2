package pe.com.app.core.dao.hibernate;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import pe.com.app.common.Pagination;
import pe.com.app.core.dao.NacionalidadDAO;
import pe.com.app.core.model.NacionalidadModel;

@Repository
public class NacionalidadDAOHibernate implements NacionalidadDAO {

	@Resource
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Transactional
	@Override
	public List<NacionalidadModel> getAll(Pagination pagination) {
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(NacionalidadModel.class);
		// search
		if (pagination.getSearch() != null) {
			criteria.add(Restrictions.ilike("nacionalidad", pagination.getSearch(), MatchMode.ANYWHERE));
		}
		// paginacion
		if (pagination.getPaginationActive() != null && pagination.getPaginationActive()) {
			// Total Count
			criteria.setProjection(Projections.rowCount());
			pagination.setTotalCount(criteria.uniqueResult());
			// Pagination
			criteria.setProjection(null);
			criteria.setFirstResult(Integer.parseInt(String.valueOf(pagination.getStart())));
			criteria.setMaxResults(Integer.parseInt(String.valueOf(pagination.getLimit())));
		}
		criteria.addOrder(Order.asc("nacionalidad"));
		return criteria.list();
	}

	@Override
	@Transactional
	public void save(NacionalidadModel nacionalidadModel) {
		sessionFactory.getCurrentSession().save(nacionalidadModel);
	}

	@Override
	@Transactional
	public void update(NacionalidadModel nacionalidadModel) {
		sessionFactory.getCurrentSession().update(nacionalidadModel);
	}

	@Override
	@Transactional
	public void deleteById(int id) {
		sessionFactory.getCurrentSession().delete(this.getById(id));
	}

	@Override
	@Transactional
	public NacionalidadModel getById(int id) {
		return (NacionalidadModel) sessionFactory.getCurrentSession().get(NacionalidadModel.class, id);
	}

}

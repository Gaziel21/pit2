package pe.com.app.common;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Clase utilizada para el acotamiento de listado de datos de tabla, <br/>
 * contiene informaci�n como de donde empieza (start) cuantos registros va a tomar (limit) <br/>
 * el nombre del campo a ordenar el listado (fieldNameSort) y
 * el ordenamiento (directionSort) que puede ser ASC o DESC 
 * 
 * @author Mayer
 * @version 1.0, 01/06/2009
 * @since 1.0
 * <p>
 * actualizaciones:
 * 	Mayer 11 Junio 2009, Se a�adio comentarios a la clase y metodos
 * </p> 
 * 
 */
public class Pagination  {
	/**
	 * indice de registro a empezar la paginaci�n
	 */
	private Long start;
	
	//private List<SortField> sort;
	private String sort;
	
	/**
	 * cantidad de registros a tomar a partir de "start"
	 */
	private Long limit = Constants.PAGINATION_SIZE;
	
	/**
	 * cantidad total de registros en tabla  
	 */
	private Long totalCount;
	
	private Boolean onlyActive;
	
	private Boolean paginationActive;
	
	private Object param1;
	
	/**
	 * nombre del campo a ordenar
	 */
	private String fieldNameSort;
	
	/**
	 * ASC o DESC
	 */
	private String directionSort = "ASC";
	
	/**
	 * Cadena con los filtros a aplicar
	 */
	private Map<String, Object> filter;
	
	/**
	 * Cadena de b�squeda
	 */
	private String search;
	
	/**
	 * Cadena que contiene el criterio o condici�n a a�adir al where de la select que trae la data
	 * para la grilla. pe: {alias}.code is not null and {alias}.name is not null
	 */
	private String criterionByDefault;
	
	/**
	 * Lista de parametros a aplicar por defecto, al cargar la grilla, se aplica sobre criterionByDefault a los parametros de la forma
	 * {0} {1} .... {n}
	 */
	private List<Object> parametersDefaultFilter;
	
	/**
	 * Constructor por defecto
	 */
	public Pagination() {		
	}
	
	/**
	 * Constructor cuando se quiere utilizar el acotamiento de filas y el ordenamiento
	 * @param sort campo a ordenar 
	 * @param dir "ASC" o "DESC"
	 */
	public Pagination(Object start, Object limit, String sort, String dir) {
		super();
		//this.start = null;
		//this.limit = null;		
		this.start = GenericUtil.getDefaultLong(start,0L);
		this.limit = GenericUtil.getDefaultLong(limit,Constants.PAGINATION_SIZE);       	
       	this.fieldNameSort = sort;
       	this.directionSort = dir;
	}
	
	/**
	 * Constructor cuando se quiere utilizar el acotamiento de filas y el ordenamiento
	 * @param sort campo a ordenar 
	 * @param dir "ASC" o "DESC"
	 */
	public Pagination(Object start, Object limit, String sort, String dir, Map<String, Object> filter, String search) {
		super();
		this.start = GenericUtil.getDefaultLong(start,0L);
		this.limit = GenericUtil.getDefaultLong(limit,Constants.PAGINATION_SIZE);       	
       	this.fieldNameSort = sort;
       	this.directionSort = dir;
       	this.filter = filter;
       	this.search = search;
	}

	/**
	 * Constructor cuando se quiere utilizar solo el ordenamiento
	 * @param sort campo a ordenar 
	 * @param dir "ASC" o "DESC"
	 */
	public Pagination(String sort, String dir) {
		super();
		this.fieldNameSort = sort;
       	this.directionSort = dir;
	}

	public void setStart(Object start) {
		this.start = Long.valueOf(String.valueOf(start));
	}

	public void setLimit(Object limit) {
		this.limit = Long.valueOf(String.valueOf(limit));
	}

	/**
	 * @return el start
	 */
	public Long getStart() {
		return start;
	}

	/**
	 * @param start el start a establecer
	 */
	public void setStart(Long start) {
		this.start = start;
	}

	/**
	 * @return el limit
	 */
	public Long getLimit() {
		return limit;
	}

	/**
	 * @param limit el limit a establecer
	 */
	public void setLimit(Long limit) {
		this.limit = limit;
	}

	/**
	 * @return el totalCount
	 */
	public Long getTotalCount() {
		return totalCount;
	}

	/**
	 * @param totalCount el totalCount a establecer
	 * @see GenericUtil#getDefaultLong(java.lang.Object) 
	 */
	public void setTotalCount(Object totalCount) {
		this.totalCount = GenericUtil.getDefaultLong(totalCount);
	}

	/**
	 * @return el fieldNameSort
	 */
	public String getFieldNameSort() {
		return fieldNameSort;
	}

	/**
	 * @param fieldNameSort el fieldNameSort a establecer
	 */
	public void setFieldNameSort(String fieldNameSort) {
		this.fieldNameSort = fieldNameSort;
	}

	/**
	 * @return el directionSort
	 */
	public String getDirectionSort() {
		return directionSort;
	}

	/**
	 * @param directionSort el directionSort a establecer
	 */
	public void setDirectionSort(String directionSort) {
		this.directionSort = directionSort;
	}

	/**
	 * @return el filter
	 */
	public Map<String, Object> getFilter() {
		return filter;
	}

	/**
	 * @param filter el filter a establecer
	 */
	public void setFilter(Map<String, Object> filter) {
		this.filter = filter;
	}

	/**
	 * @return el search
	 */
	public String getSearch() {
		return search;
	}

	/**
	 * @param search el search a establecer
	 */
	public void setSearch(String search) {
		this.search = search;
	}

	/**
	 * @return el criterionByDefault
	 */
	public String getCriterionByDefault() {
		return criterionByDefault;
	}

	/**
	 * @param criterionByDefault el criterionByDefault a establecer
	 */
	public void setCriterionByDefault(String criterionByDefault) {
		this.criterionByDefault = criterionByDefault;
	}

	/**
	 * @return el parametersDefaultFilter
	 */
	public List<Object> getParametersDefaultFilter() {
		return parametersDefaultFilter;
	}

	/**
	 * @param parametersDefaultFilter el parametersDefaultFilter a establecer
	 */
	public void setParametersDefaultFilter(List<Object> parametersDefaultFilter) {
		this.parametersDefaultFilter = parametersDefaultFilter;
	}
	
	public List<Object> addParameterDefaultFilter(Object parameter){
		if(this.parametersDefaultFilter == null){
			this.parametersDefaultFilter = new ArrayList<Object>();;
		}
		this.parametersDefaultFilter.add(parameter);
		return this.parametersDefaultFilter;
	}

	//public List<SortField> getSort() {
	public String getSort() {
		return sort;
	}

	//public void setSort(List<SortField> sort) {
	public void setSort(String sort) {
		this.sort = sort;
	}

	public Boolean getOnlyActive() {
		return onlyActive;
	}

	public void setOnlyActive(Boolean onlyActive) {
		this.onlyActive = onlyActive;
	}

	public Boolean getPaginationActive() {
		return paginationActive;
	}

	public void setPaginationActive(Boolean paginationActive) {
		this.paginationActive = paginationActive;
	}

	public Object getParam1() {
		return param1;
	}

	public void setParam1(Object param1) {
		this.param1 = param1;
	}

}

class SortField{
	private String property; 
	private String direction;
	public String getProperty() {
		return property;
	}
	public void setProperty(String property) {
		this.property = property;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	
}
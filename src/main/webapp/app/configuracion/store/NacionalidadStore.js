Ext.define('app.configuracion.store.NacionalidadStore',{
	extend : 'Ext.data.Store',
	model:'app.configuracion.model.NacionalidadModel',
	autoLoad : false,
	proxy : {
			type : 'ajax',
			method : 'GET',
			url: CONTEXT_PATH+'/mvc/nacionalidad/getAll',
			extraParams:{paginationActive:true},
			reader: {
				type: 'json',
				rootProperty:'data',
				totalProperty:'totalCount'
			}
	}
});
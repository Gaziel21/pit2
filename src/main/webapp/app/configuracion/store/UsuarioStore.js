Ext.define('app.configuracion.store.UsuarioStore', {
    extend: 'Ext.data.Store',
    model: 'app.configuracion.model.UsuarioModel',
    autoLoad: false,
    proxy: {
    	type : 'ajax',
		method : 'POST',
		url: CONTEXT_PATH+'/mvc/usuario/getAll',
		reader: {
			type: 'json',
			rootProperty:'data',
			totalProperty:'totalCount'
		}
    }
});

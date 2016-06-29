Ext.define('app.configuracion.store.UsuarioStore', {
    extend: 'Ext.data.Store',
    model: 'app.configuracion.model.UsuarioModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: CONTEXT_PATH + '/mvc/usuario/getAll'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        writer: {
            allowSingle: true	//para solo enviar un registro al servidor y mapearlo con @RequestBody

        }
    }
});

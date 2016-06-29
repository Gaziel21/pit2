Ext.define('app.principal.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
    model: 'app.principal.model.MenuModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: CONTEXT_PATH + '/jsp/menu/menu-administrador.json'
    },
    root: {
        expanded: true
    }
});


Ext.define('app.configuracion.view.UsuarioGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.UsuarioGridPanel',
    
    title: ' Usuario',
    layout: {
        type: 'fit',
        align: 'stretch'
    },
    columns: [
        {xtype: 'rownumberer'},
        {text: 'Usuario', dataIndex: 'usuario'},
        {text: 'Password', dataIndex: 'password'},
        {text: 'Correo', dataIndex: 'correo'}
    ],
    initComponent: function () {
    	var storeCobro= Ext.create('app.configuracion.store.UsuarioStore',{autoLoad:true});
        this.tbar = [{
                text: 'A&#241;adir',
                iconCls: 'icon-add-btn',
                iconMask: true,
                action: 'add'
            }, {
                text: 'Eliminar',
                iconCls: 'icon-delete-btn',
                action: 'delete'
            }, {
                text: 'Actualizar',
                iconCls: 'icon-refresh',
                action: 'update'
            }];
        this.store=storeCobro;
        this.callParent(arguments);
    }
});
Ext.define('app.configuracion.controller.UsuarioController', {
    extend: 'Ext.app.Controller',
    views: [
        'app.configuracion.view.UsuarioGridPanel'
    ],
    stores: [
        'app.configuracion.store.UsuarioStore'
    ],
    models: [
        'app.configuracion.model.UsuarioModel'
    ],
    principalView: null,
    constructor: function () {
        this.callParent(arguments);
    },
    createPrincipalWindow: function (principalView) {
        this.principalView = Ext.widget(principalView);
    },
    getPrincipalView: function (principalView) {
        this.createPrincipalWindow(principalView);
        return this.principalView;
    },
    init: function () {
        this.control({
            'UsuarioGridPanel button[action=add]': {
                click: this.testServlet
            },
            'UsuarioGridPanel button[action=update]': {
                click: this.updateUsuario
            }
        });
    },
    updateUsuario: function (button) {
        var storeUsuario = button.up('grid').getStore();
        storeUsuario.reload();
    },
    testServlet: function (button) {
    	var url=CONTEXT_PATH+'/mvc/usuario/pdf';
    	var panel = Ext.create('Ext.panel.Panel', {
            html: "<iframe width='100%' height='100%' src='" + url + "'></iframe>"
        });
    	
        Ext.create('Ext.window.Window', {
            autoShow: true,
            width: 600,
            height: 600,
            layout: 'fit',
            modal:true,
            items: [panel]
        });
    }
});
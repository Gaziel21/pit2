Ext.define("app.principal.view.PrincipalView", {
    extend: 'Ext.container.Viewport',
    alias: 'widget.Principal',
    layout: 'border',
    items: [
        Ext.create("app.principal.view.secciones.PrincipalHeaderView"),
        Ext.create("app.principal.view.secciones.PrincipalMenuView"),
        Ext.create("app.principal.view.secciones.PrincipalFooterView"),
        {
            region: 'center',
            layout: 'fit',
            xtype: 'tabpanel',
            id: 'tabPrincipal',
            activeTab: 1,
            items: [
                Ext.create("app.principal.view.PanelBienvenidoView")
            ]}
    ]});


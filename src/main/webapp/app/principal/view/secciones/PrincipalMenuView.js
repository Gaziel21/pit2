Ext.define("app.principal.view.secciones.PrincipalMenuView", {
    extend: 'Ext.form.Panel',
    alias: 'widget.PrincipalMenu',
    region: 'west',
    collapsible: true,
    collapsed: false,
    title: 'Opciones',
    width: 180,
    minWidth: 180,
    split: true,
    iconCls: 'icon-modules',
    layout: 'fit',
    items: Ext.create("app.principal.view.secciones.MenuTreeView")
});


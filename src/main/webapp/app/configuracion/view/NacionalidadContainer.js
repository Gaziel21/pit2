Ext.define("app.configuracion.view.NacionalidadContainer", {
	extend : 'Ext.container.Container',
	alias : 'widget.NacionalidadContainer',
	iconCls:'icon-Nacionalidad',
	title : 'Nacionalidad',
	layout: 'fit',
	name:'nacionalidadContainer',
	initComponent:function(){
		this.items=Ext.create('app.configuracion.view.NacionalidadGridPanel');
	    this.callParent(arguments);
	}
});
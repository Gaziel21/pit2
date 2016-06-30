Ext.define("app.configuracion.view.NacionalidadGridPanel", {
	extend : 'Ext.grid.Panel',
	alias : 'widget.NacionalidadGridPanel',
	border:false,
	name:'NacionalidadGridPanel',
	layout: 'fit',
	initComponent:function(){
		var storeCN=Ext.create('app.configuracion.store.NacionalidadStore',{autoLoad:true});
		this.columns=[
		 {header:'Nacionalidad', dataIndex:'nacionalidad', width:250}
  		];
		this.dockedItems =[{
			xtype:'toolbar',
			items:[{
				text : '<b>Nuevo</b>',
				iconCls : 'icon-add-btn',
				action : 'add'  
				},'-',{
					text : '<b>Modificar</b>',
					iconCls : 'icon-edit-btn',
					action : 'edit'
				},{
					text : '<b>Eliminar</b>',
					iconCls : 'icon-delete-btn',
					action : 'delete'
				}, '-', {
				   fieldLabel: '<b>&nbsp;&nbsp;Buscar</b>',
				   labelWidth: 50,
				   xtype: 'searchfield',
				   store: storeCN,
				   fieldStyle:{textTransform:'uppercase'}
				}]
		},{
		     xtype : 'pagingtoolbar',
		     store: storeCN,
		     dock : 'bottom',
		     displayInfo : true
		}];
		this.store=storeCN;
	    this.callParent(arguments);
	}
});
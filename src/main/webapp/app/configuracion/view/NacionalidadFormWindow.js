Ext.define("app.configuracion.view.NacionalidadFormWindow",{
	extend:'Ext.window.Window',
	alias: 'widget.NacionalidadFormWindow',
    width: 350,
    height: 250,
    modal:true,
    constrain: true,
    resizable:false,
    layout: 'fit',	
    title:'Nacionalidad',
    name:'nacionalidadFormWindow',
	tbar:[{
		text:'<b>Guardar</b>',
		iconCls:'icon-save-btn',
		action: 'save' 
	},'-', {
		text:'<b>Cerrar Ventana</b>',
		iconCls:'icon-cerrar-atencion',
 		handler:function(button){
 			button.up('window').close();
 		}
	}],
	initComponent:function(){
		this.items=[{
			xtype:'form',
			bodyStyle:'padding:10px;',
			reader : Ext.create('Ext.data.reader.Json', {model: 'app.configuracion.model.NacionalidadModel'}),
			layout:'hbox',defaults:{flex:1},
			border:false,
			items:[{
				 	xtype: 'panel',
				    border:false,
				    layout:{type:'vbox',align:'stretch'},
				    defaults:{xtype:'uppertextfield',labelAlign:'right', flex:1, labelWidth:70},
				    items:[
				     {fieldLabel:'Nombre', name:'nombre'},
				     {fieldLabel:'A. Paterno', name:'apellidoPaterno'},
				     {fieldLabel:'A. Materno', name:'apellidoMaterno'},
				     {fieldLabel:'Licencia', name:'licencia'}
				    ]
			},
			{xtype:'hidden',name:'id'}
		  ]
		}];
		this.callParent(arguments);
	}
});
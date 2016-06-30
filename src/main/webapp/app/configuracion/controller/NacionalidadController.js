Ext.define('app.configuracion.controller.NacionalidadController',{
	extend:'Ext.app.Controller',
	views:[
	   'app.configuracion.view.NacionalidadContainer',
	   'app.configuracion.view.NacionalidadGridPanel',
	   'app.configuracion.view.NacionalidadFormWindow'
	], 
	stores:[
	   'app.configuracion.store.NacionalidadStore'
	],
	models:[
	   'app.configuracion.model.NacionalidadModel'
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
	init: function(){
		this.control({
			'NacionalidadContainer NacionalidadGridPanel toolbar button[action=add]':{
				click:this.addNacionalidad
			},
			'NacionalidadContainer NacionalidadGridPanel toolbar button[action=edit]':{
				click:this.editNacionalidad
			},
			'NacionalidadContainer NacionalidadGridPanel toolbar button[action=delete]':{
				click:this.deleteNacionalidad
			},
			'NacionalidadFormWindow toolbar button[action=save]':{
				click:this.saveNacionalidad
			},
			  'NacionalidadContainer NacionalidadGridPanel ':{
	            itemdblclick:this.editNacionalidad
	        },
		});
	},
	deleteNacionalidad:function(button){
		var grid=button.up('grid');
		var selection=grid.getSelectionModel();
		if(!selection.hasSelection()){
			MsgShow('Warning','Seleccione un Registro');
			return;
		}
		var data=selection.getSelection()[0].data;
		var idNacionalidad=data.idNacionalidad;
		var fn=function(){
			Ext.ComponentQuery.query('grid[name=NacionalidadGridPanel]')[0].getStore().reload();
		};
		var url='/mvc/nacionalidad/delete/'+idNacionalidad;
		deleteFormulario(url,fn);
	},
	saveNacionalidad:function(button){
		var win=button.up('window');
		var formPanel=win.down('form');
		var objTextFieldID=win.down('[name=id]');
		var url='/mvc/nacionalidad/saveOrUpdate';
		var fn=function(){
			Ext.ComponentQuery.query('grid[name=NacionalidadGridPanel]')[0].getStore().reload();
			win.close();
		};
		saveFormulario(formPanel, url, objTextFieldID,fn);
	},
	addNacionalidad: function(button){
		this.showWindowNacionalidad(button,'Agregar Nacionalidad');
	},
	editNacionalidad: function(button){
		debugger;
		var grid=button.up('grid');
		var selection=grid.getSelectionModel();
		if(!selection.hasSelection()){
			MsgShow('Warning','Seleccione un Registro');
			return;
		}
		var data=selection.getSelection()[0].data;
		var idNacionalidad=data.idNacionalidad;
		var win=this.showWindowNacionalidad(button,'Editar Nacionalidad');
		var formPanel=win.down('form');
		var url='/mvc/nacionalidad/edit/'+idNacionalidad;
		formLoadGET(formPanel,url);
	},
	showWindowNacionalidad:function(button, title){
		var container=button.up('container[name=nacionalidadContainer]');
		var win= Ext.widget('NacionalidadFormWindow',{title:title});
		container.add(win);win.show();
		return win;
	}
});
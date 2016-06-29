//Ext.define("app.principal.view.PrincipalView", {
//    extend: 'Ext.container.Viewport',
//    alias: 'widget.Principal',
//    layout: 'border',
//    items: [
//        Ext.create("app.principal.view.secciones.PrincipalHeaderView"),
//        Ext.create("app.principal.view.secciones.PrincipalMenuView"),
//        Ext.create("app.principal.view.secciones.PrincipalFooterView"),
//        {
//            region: 'center',
//            layout: 'fit',
//            xtype: 'tabpanel',
//            id: 'tabPrincipal',
//            activeTab: 1,
//            items: [
//                Ext.create("app.principal.view.PanelBienvenidoView")
//            ]}
//    ]});
Ext.define("app.principal.view.PrincipalView",{
	extend:'Ext.container.Viewport',	
	alias: 'widgent.Principal',
	layout: 'border',
	deferredRender : true,
	items: [{
		 xtype:'panel',
		 border:false,
		 region: 'north',
		 collapsible: true,
		 header: false,
		 titleAlign: 'center',
		 resizable: false,
		 layout: {type:'hbox', align:'stretch'},
		 defaults: {border: false},
		 items: [
			         {
			             width: 300,
			             border: false,
			             xtype: 'panel'
			         },
			         {
			             flex: 1,
			             xtype: 'panel',
			             border: false,
			             layout:{type:'vbox', align:'stretch'},
			             defaults: {border: false, flex:1},
			             style: {'border-radius': '60px 0px 0px 0px'},
			             items: [{
			                     xtype: 'toolbar',
			                     cls: 'background-header',
			                     style: {
			                         top: '10px!important',
			                         background: '#BEBDBD!important'
			                     },
			                     items: [
			                         '->', '<b style="font-size: 11px; color:white;font-family: Helvetica Neue, Arial, Verdana, sans-serif;"></b>'
			                     ]
			                 }, {
			                     xtype: 'toolbar',
			                     cls: 'background-header',
			                     style: {
			                         background: '#BEBDBD!important'
			                     },
			                     items: [
			                         '->', '<b style="font-size: 11px; color:white;font-family: Helvetica Neue, Arial, Verdana, sans-serif;">Fecha de Hoy, ' + (Ext.Date.format(new Date(), 'd-m-Y')) + '</b>'
			                     ]
			                 }, {
			                     xtype: 'toolbar',
			                     cls: 'background-header',
			                     style: {
			                         background: '#BEBDBD!important'
			                     },
			                     enableOverflow: true,
			                     border: false,
			                     items: [
			                         '->',
			                         '-',
			                         {
			                        	text: 'Cambiar Contrase&ntilde;a', iconCls: 'icon-salir',
			                        	listeners:{
			                        		click:function(){
			                        			Ext.widget('ContrasenaFormWindow');
			                        		}
			                        	}
			                         },
			                         '-',
			                         {text: 'Cerrar Sesi&oacute;n', iconCls: 'icon-salir',
			                             listeners: {
			                                 click: function () {
			                                     window.location = "../../j_spring_security_logout";
			                                 }
			                             }
			                         }
			                     ]
			                 }]
			         }]
	},
	{ 
	    region: 'west',
	    collapsible: true,
	    split:true,
	    title: 'M&#243;dulos',
	    width: 220,
	    layout:{type:'fit', align:'stretch'},
	    iconCls:'icon-modules',
	    items: Ext.create("app.principal.view.secciones.MenuTreeView")
	},/* { 
	    region: 'east',
	    split:true,
	    title: 'Perfil',
	    collapsed: true,
	    collapsible: true,
//	    iconCls:'icon-modules',
	    iconCls:'icon-usuario',
	    layout:'fit',width : 280
//	    items: Ext.create("app.principal.view.Perfil")
	},*/
  {
  region: 'center',
  layout: 'fit',
  xtype: 'tabpanel',
  id: 'tabPrincipal',
  activeTab: 1,
  items: [
      Ext.create("app.principal.view.PanelBienvenidoView")
  ]}]
});



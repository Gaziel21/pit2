// funcion para previsualizar pdf
function printReport(url){
	var messageBoxImpresora = Ext.MessageBox.show({
		msg : 'Eliminando...',
		progressText : 'Por favor espere...',
		width : 300,
		wait : true,
		waitConfig : {
			interval : 200
		}
	});
	Ext.Ajax.request({
		url:CONTEXT_PATH+url,
		success:function(form,action){
			debugger;
			messageBoxImpresora.hide();
			var jsonResponse = Ext.decode(form.responseText);
			var success = !Ext.isEmpty(jsonResponse)?jsonResponse.success:false;
			var message=!Ext.isEmpty(jsonResponse)? jsonResponse.message:"Error al intentar imprmir";
			if(!success){
				MsgShow('Error',message);
			}
		},
		failure:function(form,action){
			messageBoxImpresora.hide();
			MsgShow('Error','Error al intentar imprmir');
		}
	});
}
// funcion para previsualizar pdf
function verPdf(url,containerName,titulo){
	if(Ext.isEmpty(titulo)){titulo="PREVIEW";}
	var winReport=Ext.create('Ext.window.Window',{
        title: titulo,
        width: 580,
        height: 580,
        constrain: true,
        modal:true,
        items: {
            xtype: 'component',
            autoEl: {tag: 'iframe',style: 'height: 100%; width: 100%; border: none',src: CONTEXT_PATH+url}
        }
    });
	var container=Ext.ComponentQuery.query('container[name='+containerName+']');
	if(!Ext.isEmpty(container) && container.length>0){
		container[0].add(winReport);
	}
	winReport.show();
}
// funcion para desactivar opciones del un window
function desactivarWindow(win, sn){
	win.query('.field').forEach(function(t) {
		t.setReadOnly(sn);
	});
	
	if(!Ext.isEmpty(win.down('toolbar button[action=save]'))){
		win.down('toolbar button[action=save]').setDisabled(sn);
	}
	
	if(!Ext.isEmpty(win.down('combo[name=impresora]'))){
		win.down('combo[name=impresora]').setReadOnly(false);
	}
	
	if(!Ext.isEmpty(win.down('button[disRef=add]'))){
		win.down('button[disRef=add]').setDisabled(sn);
	}
	
	if(!Ext.isEmpty(win.down('button[disRef=search]'))){
		win.down('button[disRef=search]').setDisabled(sn);
	}
	
	win.query('.grid').forEach(function(t) {
		t.setDisabled(sn);
	});
	
}
// funcion para cambiar de foco
function cambiarFoco(thiss,e){
	if(e.getKey()!=e.ENTER){	
		return;
	}
	var posActual=thiss.focusPosicion;
	var objFocus=thiss.up('window').down('[focusPosicion='+(posActual+1)+']');
	if(!Ext.isEmpty(objFocus)){
		objFocus.focus(true,200);
	}
}
// funcion para validar ventana
function validarVentana(name){
	var winActive=Ext.WindowManager.getActive();
	if(!Ext.isEmpty(winActive) && !Ext.isEmpty(winActive.name) && winActive.name==name){return true;}return false;
}
// Funcion para guardar la data de un treepanel en un array
function treeToArray(array,childnode){
	if(childnode.childNodes.length>0){
		childnode.eachChild(function(leaf) {
			treeToArray(array,leaf);
        });
	}else{
		if(childnode.data!=undefined) array.push(childnode.data);
	}
	return array;
}
//Funciones para extraer ids desde treePanel 
function getListId(arrayListId,record){
	if(record.data.id!=undefined && !isNaN(record.data.id)){
		arrayListId.push(record.data.id);		
	}
	if(record.parentNode!=null){
		getListId(arrayListId,record.parentNode);
	}
	return arrayListId;
};
// Funcion para validar json
function JSONize(str) {
	  return str
	    // wrap keys without quote with valid double quote
	    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})    
	    // replacing single quote wrapped ones to double quote 
	    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';});
};
// Funcion para eliminar valores duplicados en un array
Array.prototype.unique=function(a){return function(){return this.filter(a);};}(function(a,b,c){return c.indexOf(a,b+1)<0;});
//Permite eliminar un registro
function deleteFormulario(url,funcionEjecutar){
	var messageBoxFormulario = Ext.MessageBox.show({
		msg : 'Eliminando...',
		progressText : 'Por favor espere...',
		width : 300,
		wait : true,
		waitConfig : {
			interval : 200
		}
	});
	Ext.Ajax.request({
		method : 'GET',
		url : CONTEXT_PATH + url,
		success : function(form, action) {
			messageBoxFormulario.hide();
			var jsonResponse = Ext.decode(form.responseText);
			var message=!Ext.isEmpty(jsonResponse)? jsonResponse.message:null;
			if(Ext.isEmpty(message)!=undefined && message!=null) {
				var iconMsg='Informacion';
				if(!Ext.isEmpty(jsonResponse.icon) && jsonResponse.icon!=null){iconMsg=jsonResponse.icon;}
				MsgShow(iconMsg,message);
			}
			runFunction(funcionEjecutar,jsonResponse);
		},
		failure : function(form, action) {
			messageBoxFormulario.hide();
			var jsonResponse = Ext.decode(form.responseText);
			var message=!Ext.isEmpty(jsonResponse)? jsonResponse.message:null;
			if(message!=undefined && message!=null) {
				var iconMsg='Error';
				if(jsonResponse.icon!=undefined && jsonResponse.icon!=null){iconMsg=jsonResponse.icon;}
				MsgShow(iconMsg,message);
				return;
			}
			MsgShow('Warning', 'Error al Guardar');
	     }
   });
}
// Permite cargar un formulario (GET)
function formLoadGET(formPanel,url,funcionEjecutar,params){
	formPanel.getForm().load({
		method : 'GET',
		url : CONTEXT_PATH + url,
		params : params,
		success : function(form, action) {
			var jsonResponse = Ext.decode(action.response.responseText);
//			runFunction(funcionEjecutar,jsonResponse);
//			funcionEjecutar(jsonResponse);
		},
		failure : function(form, action) {
			var jsonResponse = Ext.decode(action.response.responseText);
			if (!jsonResponse.success) {MsgShow('Warning','Error al cargar el Formulario');}
	     }
   });
}
// Permite guardar un formulario, esta preparado para recibir un id (ID)
// formPanel: formulario a guardar // Requerido
// urlSave: url para guardar el formulario // Requerido
// objTextFieldID: textfield donde se cargara el id que retorne
// funcionEjecutar: funcion adicionales a ejecutar si se guarda
// paramsEjecutar: indica los parametros a enviar en formato JSON
function saveFormulario(formPanel, urlSave, objTextFieldID, funcionEjecutar) {
	var valido = formPanel.getForm().isValid();
	if (!valido) {
		MsgShow('Warning', 'INGRESE DATOS EN LOS CAMPOS REQUERIDOS');
		return;
	}
	var messageBoxFormulario = Ext.MessageBox.show({
		msg : 'Guardando Formulario...',
		progressText : 'Por favor espere...',
		width : 300,
		wait : true,
		waitConfig : {
			interval : 200
		}
	});
	formPanel.getForm().submit(	{
		url : CONTEXT_PATH + urlSave,
		method : 'POST',
		submitEmptyText: false,
		success : function(form, action) {
			messageBoxFormulario.hide();
			var jsonResponse = Ext.decode(action.response.responseText);
			var message=!Ext.isEmpty(jsonResponse)? jsonResponse.message:null;
			var valorActual="";
			if (!Ext.isEmpty(objTextFieldID)&& !Ext.isEmpty(jsonResponse.data) && !Ext.isEmpty(jsonResponse.data.id)) {
				valorActual=objTextFieldID.getValue();
				if(!Ext.isEmpty(jsonResponse.data) && !Ext.isEmpty(jsonResponse.data.id)){
					objTextFieldID.setValue(jsonResponse.data.id);					
				}
			}
			if(Ext.isEmpty(message)!=undefined && message!=null) {
				var iconMsg='Informacion';
				if(!Ext.isEmpty(jsonResponse.icon) && jsonResponse.icon!=null){iconMsg=jsonResponse.icon;}
				MsgShow(iconMsg,message);
			} else if(!Ext.isEmpty(objTextFieldID)){
				if (Ext.isEmpty(valorActual)){MsgShow('Info','Guardo Satisfactoriamente');} 
				else { MsgShow('Info', 'Actualiz&#243; Satisfactoriamente');}	
			}
			runFunction(funcionEjecutar,jsonResponse);
		},
		failure : function(form, action) {
			messageBoxFormulario.hide();
			var jsonResponse = action.result;
			var message=!Ext.isEmpty(jsonResponse)? jsonResponse.message:null;
			if(message!=undefined && message!=null) {
				var iconMsg='Error';
				if(jsonResponse.icon!=undefined && jsonResponse.icon!=null){iconMsg=jsonResponse.icon;}
				MsgShow(iconMsg,message);
				return;
			}
			MsgShow('Warning', 'Error al Guardar');
		},scope : this
	});
};
// Permite mostrar una ventana de mensaje
function MsgShow(tipo, mensaje) {
	var icono, title;
	switch(tipo){
		case 'Warning': icono = Ext.MessageBox.WARNING; title = 'ATENCI&#211;N'; break;
		case 'Error': icono = Ext.MessageBox.ERROR; title = 'ATENCI&#211;N'; break;
		case 'Informacion': icono = Ext.MessageBox.INFO; title = 'INFORMACI&#211;N'; break;
		default: icono = Ext.MessageBox.INFO; title = 'INFORMACI&#211;N';break;
	}
	Ext.Msg.show({
		title : title,
		msg : mensaje,
		buttons : Ext.MessageBox.OK,
		icon : icono
	});
};
// Permite guardar un gridPanel, esta preparado para enviar parametros de
// nuevo/modificacion e eliminacion
function saveGridParamJson(grid, url,funcionEjecutar, arrayParams) {
	var storeGrid = grid.getStore();
	var arrayOther = [], arrayRemove = [];
	var recordsOther = storeGrid.getRange();
	var recordsRemove = storeGrid.getRemovedRecords();
	Ext.each(recordsOther, function(a, b, c) {
		arrayOther.push(a.data);
	});
	Ext.each(recordsRemove, function(a, b, c) {
		arrayRemove.push(a.data);
	});
	var jsonDataEncodeOther = Ext.encode(arrayOther);
	var jsonDataEncodeRemove = Ext.encode(arrayRemove);
    var jsonParams=Ext.encode(arrayParams);
    var messageBoxGrid = Ext.MessageBox.show({
		msg : 'Guardando Grilla...',
		progressText : 'Por favor espere...',
		width : 300,
		wait : true,
		waitConfig : {
			interval : 200
		}
	});
	Ext.Ajax.request({
		url : CONTEXT_PATH + url,
		waitMsg : '...',
		params : {
			dataEncode : jsonDataEncodeOther,
			deleteEncode : jsonDataEncodeRemove,
			paramsGrid:jsonParams
		},
		success : function(form, action) {
			messageBoxGrid.hide();
			runFunction(funcionEjecutar);
		},
		failure : function(form, action) {
			messageBoxGrid.hide();
			runFunction(funcionEjecutar);
			MsgShow('Warning', 'Ocurrio un error');
		}
	});
};
function runFunction(funcionEjecutar,jsonResponse){
	var success=!Ext.isEmpty(jsonResponse)? jsonResponse.success:false;
	if (success && !Ext.isEmpty(funcionEjecutar)) {
		funcionEjecutar(jsonResponse);
	}
}
// Menu
var storeTipoParametro=Ext.create('Ext.data.Store',{
	fields : [ 'text', 'value' ],
	data : [
	{text:'Controller', value:'1'},
	{text:'Vista', value:'2'},
	{text:'Icono', value:'3'}]
});

var storeTipoMoneda = Ext.create('Ext.data.Store', {
	fields : [ {name:'id', type:'int', mapping:'id' },{name:'tipo', type:'string', mapping:'tipo' }],
	data : [ {id:1, tipo:'Nuevos Soles'}]
});

var storeTipoDocumento = Ext.create('Ext.data.Store', {
	fields : [ {name:'id', type:'int', mapping:'id' },{name:'tipo', type:'string', mapping:'tipo' }],
	data : [ {id:1, tipo:'DNI'},
	         {id:2, tipo:'RUC'},
	         {id:3, tipo:'PASAPORTE'},
			 {id:4, tipo:'CARNET EXTRANGERIA'}]
});

var storeTipoExistencia = Ext.create('Ext.data.Store', {
	fields : [{name:'codigo',type:'string',mapping:'codigo'},{name:'tipo',type:'string',mapping:'tipo'}],
	data : [ {codigo:'01', tipo:'01 MERCADERÍA'},
	         {codigo:'02', tipo:'02 PRODUCTO TERMINADO'},
	         {codigo:'03', tipo:'03 MATERIAS PRIMAS Y AUXILIARES'},
	         {codigo:'04', tipo:'04 ENVASES Y EMBALAJES'},
	         {codigo:'05', tipo:'05 SUMINISTROS DIVERSOS'}]
});

var storeTipoOperacion = Ext.create('Ext.data.Store', {
	fields : [{name:'codigo',type:'string',mapping:'codigo'},{name:'tipo',type:'string',mapping:'tipo'}],
	data : [ {codigo:'01', tipo:'01 VENTA'},
	         {codigo:'02', tipo:'02 COMPRA'},
	         {codigo:'05', tipo:'05 DEVOLUCIÓN RECIBIDA'},
	         {codigo:'06', tipo:'06 DEVOLUCIÓN ENTREGADA'},
	         {codigo:'16', tipo:'16 SALDO INICIAL'}]
});

var storeCodigoSunat = Ext.create('Ext.data.Store', { // tipo de comprobante
	fields : [{name:'codigo',type:'string',mapping:'codigo'},{name:'tipo',type:'string',mapping:'tipo'}],
	data : [ {codigo:'00', tipo:'00 OTROS'},
	         {codigo:'01', tipo:'01 FACTURA'},
	         {codigo:'03', tipo:'03 BOLETA'},
	         {codigo:'09', tipo:'09 GUIA REMISION REMITENTE'}]
});

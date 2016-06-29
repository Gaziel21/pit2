Ext.define('app.configuracion.model.NacionalidadModel', {
    extend: 'Ext.data.Model',
    fields: [
      {name:'id', type:'int', mapping:'id',convert: null},
      {name:'nacionalidad', type:'string', mapping:'nacionalidad'}
    ]	
}); 

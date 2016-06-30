Ext.define('app.configuracion.model.NacionalidadModel', {
    extend: 'Ext.data.Model',
    fields: [
      {name:'idNacionalidad', type:'int', mapping:'idNacionalidad',convert: null},
      {name:'nacionalidad', type:'string', mapping:'nacionalidad'}
    ]	
}); 

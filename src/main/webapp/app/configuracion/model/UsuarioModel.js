Ext.define('app.configuracion.model.UsuarioModel', {
    extend: 'Ext.data.Model',
    idProperty: 'idUsuario',
    fields: [
        {name: 'idUsuario', type: 'int', mapping: 'idUsuario',convert: null},
        {name: 'usuario', type: 'string', mapping: 'usuario'},
        {name: 'password', type: 'string', mapping: 'password'},
        {name: 'correo', type: 'string', mapping: 'correo'}
    ]
});
Ext.define('app.principal.model.MenuModel', {
    extend: 'Ext.data.Model',
    fields : [{  name : 'name',
                 type : 'string'
         },{
                 name : 'id',
                 type : 'int',
                 convert: null
                 
         },{
                 name : 'leaf',
                 type : 'boolean'
         },{
                 name: 'classInit',
                 type:'string'
         },{
                 name: 'principalView',
                 type:'string'
         }]
});
Ext.define('Ext.ux.form.UpperTextField', {
    extend: 'Ext.form.field.Text',
    alias : 'widget.uppertextfield',
    constructor: function(config) {
        config = config || {};
        // Aplicar configuraciones por defecto
        Ext.apply(this, config,
        {
            selectOnFocus: true,
            forzarMayusculas: true,
            enableKeyEvents : true,
            listeners:{
                // Al salir del campo ponemos todo en mayusculas o minusculas si está configurado asi
                blur: function(field, e) {
                    if (this.forzarMayusculas) {
                        field.setValue(field.getValue().toUpperCase());
                    }
                }
            }
        });  // fin del Apply
        this.callParent(arguments);
    },
    // Inicializar el componente
    initComponent: function () {
        this.callParent();   
        if (this.forzarMayusculas) {
            this.setFieldStyle('text-transform:uppercase;');
        }
    }

});
Ext.define('Ext.ux.form.ToolbarFilter', {
	extend:'Ext.form.field.Text',
	alias:'widget.toolbarFilter',
    triggers: {
        clear: {
            weight: 0,
            cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            hidden: true,
            handler: 'onClearClick',
            scope: 'this'
        },
        search: {
            weight: 1,
            cls: Ext.baseCSSPrefix + 'form-search-trigger',
            handler: 'onSearchClick',
            scope: 'this'
        }
    },
    filtro1:null,
    filtro2:null,
    hasSearch : false,
    init: function (component) {
        var me = this,
        store=me.store;
        me.callParent(arguments);
    },
    listeners:{
    	specialkey:function(field, e){
    		var me=this;
    		if (e.getKey() == e.ENTER) {
                me.onSearchClick();
            }
    	}
    },
    onClearClick : function(){
        var me = this;
        me.setValue('');
        me.getTrigger('clear').hide();
        me.updateLayout();
        me.store.clearFilter(true);
        me.store.filterBy(function(record){
        	return true;
        });
    },
    
    onSearchClick: function() {
        var me = this, 
        	value = me.getValue();
            me.store.clearFilter(true);
            me.store.filterBy(function(record){
            	var rpt=false;
            	if(!Ext.isEmpty(me.filtro1) && !Ext.isEmpty(record.get(me.filtro1)) && (record.get(me.filtro1).toUpperCase()).indexOf(value.toUpperCase())>=0){
            		rpt=true;
            	}
            	if(!Ext.isEmpty(me.filtro2) && !Ext.isEmpty(record.get(me.filtro2)) && (record.get(me.filtro2).toUpperCase()).indexOf(value.toUpperCase())>=0){
            		rpt=true;
            	}
            	return rpt;
            });
            me.getTrigger('clear').show();
            me.updateLayout();
    }
});
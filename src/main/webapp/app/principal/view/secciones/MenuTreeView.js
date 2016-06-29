Ext.define('app.principal.view.secciones.MenuTreeView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.MenuTree',
    store: Ext.create("app.principal.store.MenuStore"),
    layout: 'fit',
    displayField: "name",
    width: 300,
    border: false,
    useArrows: true,
    styleHtmlContent: true,
    rootVisible: false,
    initComponent: function () {
        this.callParent();
    },
    listeners: {
        itemclick: function (view, record) {
            var leaf = record.get("leaf");
            if (leaf) {
                var classInit = record.get("classInit");
                var principalView = record.get("principalView");
                var tabPanel = this.up("viewport").down("tabpanel");
                var principalViewCmp = tabPanel.down(principalView);
                var tab = null;
                if (Ext.isEmpty(principalViewCmp)) {
                    var controller = sgo.getApplication().controllers.get(classInit);
                    if (!controller) {
                        controller = sgo.getApplication().getController(classInit);
                    }
                    tab = controller.getPrincipalView(principalView);
                    tab.closable = true;
                    tabPanel.add(tab);
                } else {
                    tab = principalViewCmp;
                }
                tabPanel.setActiveTab(tab);
            }
        },
        load: function () {
//            var classInit = "app.configuracion.controller.AtencionController";
//            var principalView = "AtencionGridPanel";
//            var tabPanel = this.up("viewport").down("tabpanel");
//            var principalViewCmp = tabPanel.down(principalView);
//            var tab = null;
//            if (Ext.isEmpty(principalViewCmp)) {
//                var controller = auna.getApplication().controllers.get(classInit);
//                if (!controller) {
//                    controller = auna.getApplication().getController(classInit);
//                }
//            } else {
//                tab = principalViewCmp;
//            }
//            tabPanel.setActiveTab(tab);
        }
    }
});

Ext.define('app.principal.view.secciones.PrincipalHeaderView', {
    extend: 'Ext.panel.Panel',
    region: 'north',
    collapsible: true,
    header: false,
    titleAlign: 'center',
    resizable: false,
    name: 'principalHeader',
    standardSubmit: true,
    layout: 'hbox',
    defaults: {
        border: false
    },
    items: [
        {
            width: 300,
            border: false,
            xtype: 'panel',
            baseCls: 'panel-logo'
        },
        {
            flex: 1,
            xtype: 'form',
            id: 'panelCerrar',
            standardSubmit: true,
            defaults: {
                border: false
            },
            style: {
                'border-radius': '60px 0px 0px 0px'
            },
            items: [{
                    xtype: 'toolbar',
                    cls: 'background-header',
                    style: {
                        top: '10px!important',
                        background: '#BEBDBD!important'
                    },
                    items: [
                        '->', '<b style="font-size: 11px; color:white;font-family: Helvetica Neue, Arial, Verdana, sans-serif;"> GRAFICA DE PETROLEO v 1.0</b>'
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
});

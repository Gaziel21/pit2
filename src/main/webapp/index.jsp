<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>::Sistema::</title>
        <!-- Referencia a ExtJS -->
        <script type ="text/javascript"  src="${pageContext.request.contextPath}/extjs/4.2.1/ext-all.js"></script>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/extjs/4.2.1/resources/css/ext-all.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/app.css" />

    </head>
    <body>
        <script>
            var CONTEXT_PATH = "${pageContext.request.contextPath}";
            Ext.Loader.setConfig({//**
                enabled: true,
                paths: {
                    "app": "${pageContext.request.contextPath}/app",
                    "model": "${pageContext.request.contextPath}/app/principal/model",
                    "view": "${pageContext.request.contextPath}/app/principal/view",
                    "controller": "${pageContext.request.contextPath}/app/principal/controller",
                    "store": "${pageContext.request.contextPath}/app/principal/store"
                }
            });
            Ext.application({
                name: 'sgo', //**
                appFolder: 'app', //**
                controllers: [
                    'app.configuracion.controller.UsuarioController'
                ],
                launch: function () {
                    Ext.create("app.principal.view.PrincipalView");

                    new Ext.KeyMap(document, {
                    });
//                    Ext.History.on('change', function (token) {
//                        Ext.History.add("app:principalDesktop");
//                    });
////
//                    Ext.History.add("app");
//                    Ext.History.add("app:principalDesktop");
                }
            });
        </script>
    </body>
</html>

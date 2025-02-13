# angular-v18
Angular 18 Installation for check new version updates and try new components, signals, translations and hooks



Dos variantes.
Internacionalización: Preparamos el proyecto para que se peuda usar en cualquier lugar.
Localización: Compilamos nuestro proyecto para regiones especificas.

Localización:  
ng add @angular/localize

En archivo angular.json, se especifica la porpiedad de i18n. En este ejemplo, definimos cual 
es el origen de nuestra aplicación. Sera en España

"i18n": {
  "sourceLocale": "es-ES",
  "locales": {
    "eu": "src/locale/messages.eu.xlf",
    "ca": "src/locale/messages.ca.xlf"
  }
},
 Los archivos no se han creado todavia, solo estan definidos.
Una vez que se ha configurado esto, en angular.json, iremos al nodo architef -> options 
e incluiremos Localize, donde queremos que este localizada la app.

 "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "localize": [
              "es-ES"
            ],

Una vez configurado, bastará con incluir en nuestros parrafos, titulos, etc, la directiva i18n.
En el caso de que tengamos variables que completen este texto, en nuestro .ts, tendremos que agregar la directiva $localize.


Una vez que hayamos marcado todos los titulos y parrafos que queremos traducir, necesitamos rellenar el archivo que hemos declarado en nuestro angular.json

Para eso, tenemos que ejecutar el comando  ng extract-i18n --output-path src/locale
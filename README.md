# PPTLS - UI GAME

Bienvenido a la guía de **PPTLS**. Para el desarrollo del juego intenté salir del formato convencional en el que suele jugar este juego (manos), pasando a un tradicional juego árcade de cartas como podríamos encontrar en los años 80. Todas las animaciones fueron dibujas a mano con el fin de generar en el usuario una inmersión plena de la época. Espero que se diviertan.

## Instalacion
> *Aclaración*: El trabajo practico fue creado a partir de typescript, me parecio que era una buena oportunidad para probar esta poderoza herramienta.

Descargue el contenido del repositorio en forma que crea más conveniente. GitHub ofrece el clonado por consola o la descarga del archivo zip. Una vez tenga la carpeta del proyecto en su computadora, diríjase a la carpeta *WEB* e ingrese mediante consola el comando:
```js
    npm install
```
Con este comando, instalaremos todas las dependencias que esten escritas en el archivo package.json que posee el proyecto.

## Ejecucion
#### API
Antes de iniciar la aplicación, es necesario levantar la API que trae el videojuego. Esta es la encargada de dar soporte al modo de juego **Tres Para Ganar**, donde el usuario podrá ingresar su nickname y registrar cuantas victorias obtuvo en este modo.
> *Aclaración*: Para ejecutar la API, se utilizó como IDE IntelliJ IDEA, los pasos que se nombraran a continuación pueden variar dependiendo su IDE.

Una vez abierto el proyecto y construido mediante Maven, siga el siguiente recorrido  en búsqueda del archivo *"Main.kt"*
```js
    API -> src -> main -> kotlin -> org
```
Ahí dentro encontrará el archivo Main.kt, el cual ejecutaremos para poder iniciar la API. En la "*Run  configurations*" seleccionaremos una versión de JRE  corretto 1.8 o superior. 
![enter image description here](https://i.ibb.co/ZhrrXpq/1.png)
![enter image description here](https://i.ibb.co/SBFPPcs/2.png)
Una vez configurado, ejecute el archivo *Main.kt y* verá en consola *Javalin 4*. Simplemente deje el IDE abierto y prosiga con el tutorial.

#### WEB
Una vez que tenemos la API funcionando, simplemente debemos iniciar nuestra aplicación. Para esto iremos a la raíz de nuestro proyecto y volveremos a ingresar a la carpeta WEB. Dentro iniciaremos una consola e introduciremos el comando:
```js
    npm start
```
Si todo salió bien, verá en su navegador la página web con el juego **PPTLS**.





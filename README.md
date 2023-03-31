# Markdown Links

## Índice

- [1. Introducción](#1-Introducción)
- [2. Objetivo del proyecto](#2-Objetivo-del-proyecto)
- [3. Como instalar Md-Links](#3-Como-instalar-Md--Links)
- [4. Intrucciones de uso](#4-instrucciones-de-uso)
- [5. CLI (Command Line Interface - Interfaz de Línea de Comando)](#5-CLI-interfaz-de-Linea-de-Comando)
- [6. Diagrama de flujo](#6-Diagrama-de-flujo)


***

## 1. Preámbulo
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos _Markdown_ de manera frecuente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## 2. Objetivo del proyecto
Este proyecto consiste en desarrollar una herramienta de linea de comando que nos permita leer y analizar archivos en formato _Markdown_, para verificar los links que contengan y reportar algunas estadísticas como son:
- Número total de links encontrados
- Número de links rotos
- Número de links únicos

## 3. Diseño del proyecto

A continuación se muestra el diagrama de flujo que se empleo para el desarrollo del proyecto:

![Diagrama de flujo fondo blanco](https://user-images.githubusercontent.com/114185794/229027340-c45d1432-4338-4beb-baf2-7028204d49ce.JPG)




La funcion principal md-Links cuenta con dos argumentos, path (ruta) y options (opciones) se conforman de la siguiente manera:

##### Argumentos

- `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
  Si la ruta pasada es relativa, debe resolverse como relativa al directorio
  desde donde se invoca node - _current working directory_).
- `options`: Un objeto con **únicamente** la siguiente propiedad:

  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

    ##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

Con `validate:false` :

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.
- `status`: Código de respuesta HTTP.
- `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

## 4. Como instalar Md-Links
![Captura](https://user-images.githubusercontent.com/114185794/218780224-7b514613-3f0e-4b62-9999-1d8899377b17.PNG)

El módulo debera ser instalado vía ``a traves de la terminal
El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

## 5.CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`npm i gabygonher-md-links`

Por ejemplo:

![Capturalinks1](https://user-images.githubusercontent.com/114185794/218780688-fe024c31-ae0a-452a-b3a5-776dff9709a6.PNG)

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link.

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

![Capturafail](https://user-images.githubusercontent.com/114185794/218781053-bf2f09fa-f873-4db2-be85-d202f176df49.PNG)


Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links, como se muestra a continuación.
![stats](https://user-images.githubusercontent.com/114185794/218781206-d59a6061-479d-4b25-83e8-41088014dccb.PNG)

# Repositorio rubiko-basic-docker

Este repositorio contiene archivos para crear una imagen Docker llamada `rubiko-basic-docker` con Node.js que expone un endpoint HTTP en el puerto 5000 y responde a peticiones GET en `/health`.

## Contenido del Repositorio

- `Dockerfile`: Archivo para construir la imagen Docker.
- `app.js`: Código Node.js que define el servidor Express.
- `package.json` y `package-lock.json`: Archivos de configuración de Node.js.
- `docker-compose.yml`: Archivo para definir los servicios usando Docker Compose.

## Instrucciones

### Construir y Ejecutar la Imagen Docker

1. Clona este repositorio: `git clone https://github.com/tu-usuario/rubiko-node-docker.git`
2. Abrir terminal y ejecutar 'npm install', y posteriormente, 'npm i express'
3. Navega a la carpeta del repositorio: `cd rubiko-node-docker`
4. Construye la imagen Docker: `docker build -t rubiko-basic-docker .`
5. Ejecuta el contenedor: `docker run -p 5050:5000 rubiko-basic-docker`
6. Accede al endpoint http://localhost:5050/health para obtener un resultado 200 con la palabra "OK"

Ahora puedes acceder al endpoint en http://localhost:5050/health para obtener un resultado 200 con la palabra "OK".

### Usar Docker Compose

1. Asegúrate de tener Docker Compose instalado.
2. Clona este repositorio si aún no lo has hecho.
3. Navega a la carpeta del repositorio.
4. Ejecuta: `docker-compose up`

Esto creará y ejecutará los servicios definidos en el archivo `docker-compose.yml`, incluyendo el servicio `curl` que realizará una llamada al servicio `web` y mostrará la respuesta.

### Avanzado

1. Por último, podemos ejecutar el siguiente comando `docker run -p 5050:5000 -e GREETINGS="Hello Rubiko Tech! " rubiko-basic-docker`
2. Accede al endpoint http://localhost:5050/health para obtener un resultado 200 con la frase "Hello Rubiko Tech!".
3. Esta variable de entorno se ejecuta al introducir el comando, por lo que tienes la posibilidad de cambiarla en el momento de escribir dicho comando por otra frase diferente.

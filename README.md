# Bienvenidos
## Como levantar la api
Bien, primero lo que vamos a hacer es, teniendo docker instalado, parados en la carpeta raiz del proyecto, vamos a correr el comando

```
docker-compose up -d
```

Este comando nos va a levantar un contenedor de docker con mysql para la bd y les va a crear el volumen. Luego de esto ejecutamos el comando

```
npm install
```

Con esto vamos a poder instalar todos los paquetes para que funcione el proyecto y si corremos

```
npm start
```

vamos a poder correr el proyecto.

Si entran en http://localhost:3000/docs/ van a poder ver todos los endpoints para poder llamarlos
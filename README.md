<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Ejecutar en desarrollo

1 Clonar al repositorio
2 Ejecutar

npm install

3 Tener Nest CLI Instalado

```
npm i -g @nestjs/cli
```

4 Levantar base de datos

```
docker-compose up -d
```

5 Clonar el archivo __.env.template__ y renombrar la copia a ```.env```

```
docker-compose up -d
```

6 Llenar las variables de entorno 

7 Ejecutar la app con 

```
npm run start:dev
```

8 Reconstruir base de datos con la seed
```
http://localhost:3000/api/seed
```

### Stack usado

* MongoDB
* Nest
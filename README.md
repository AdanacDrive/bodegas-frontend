# bodegas-frontend

Frontend del taller de bodegas y productos, hecho en Angular.

Permite registrar bodegas (nombre y ubicación) y muestra una tabla con los productos y la bodega a la que pertenecen. Los datos salen de `GET /bodegas` del backend.

## Requisitos

- Node.js (LTS) y npm
- El backend `bodegas-backend` corriendo en `http://localhost:8080`

## Cómo ejecutarlo

Instalar dependencias (solo la primera vez):

```
npm install
```

Levantar el servidor de desarrollo:

```
npm start
```

Abrir `http://localhost:4200`.

## Estructura

```
src/app
  models       bodega.model.ts, producto.model.ts
  services     bodega.service.ts
  bodegas
    bodega-form      formulario para registrar bodegas
    producto-tabla   tabla de productos con su bodega
```

`AppComponent` consulta el backend y le pasa las bodegas a la tabla con `@Input`. Cuando se registra una bodega, el formulario avisa con un `@Output` y `AppComponent` vuelve a consultar.

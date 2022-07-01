# Dziro
> Web app para administrar artículos a comprar


---
## Requisitos

> Componentes de la biblioteca

```bash
$ npm link path_to_library 
```

> Tipografías

---
## Scope

La app está organizada para ofrecer dos experiencias:

- **Free** 
  -  Permite guardar artículos usando como almacenamiento el local storage.

- **Pro**
   - Permite guardar artículos y logearse por medio de una  cuenta de Spotify.

---


## DEV
Al correr el comando dev de npm podra ver los scopes en dos lugares distintos.
- PRO - http://localhost:3000/
- FREE - http://localhost:3000/Free/


```
$ npm run dev
```
## PROD

> Add this line to package.json
```
"dziro-components": "gitlab:opensource13/dziro/components#e1e111c1f3280a2f8a54defe5629257a3f2acca1"
```

> Run vercel
```bash
$ vercel
```

## TODO


- [X] Marcado de comprado
- [X] Edición de artículos
- [X] Eliminación de artículos
- [X] No sabe si meter la imagen o la url
- [X] Agregar elementos de una forma más fácil (Chrome extension)
- [X] Agregar elementos de una forma más fácil (Firefox extension)
- [X] Colores oscuros, se pierden títulos
- [X] A lo mejor no sabe dónde editar
- [ ] Filtrado de artículos por comprado / pendiente

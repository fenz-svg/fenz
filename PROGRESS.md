# Progress Log

## 2026-06-14
- Carpeta de proyecto estaba vacía; no se encontró rastro de la sesión anterior.
- Se inicializó un repositorio git y este archivo de progreso para que el trabajo futuro quede registrado y no se pierda.
- Próximo paso: pendiente de que el usuario indique en qué quiere trabajar.
- Se identificó el proyecto activo: landing page "Fenz" (`fenz_tech_13.html` en Downloads).
- Se armó panel de edición de contenido para el cliente con Decap CMS:
  - `index.html`: página migrada, carga textos dinámicamente desde `content.json`.
  - `content.json`: todos los textos editables (hero, servicios, proceso, precios, faq, contacto, footer).
  - `admin/index.html` + `admin/config.yml`: panel Decap CMS configurado para editar `content.json`.
  - `DEPLOY.md`: instrucciones para publicar en GitHub + Netlify (Identity + Git Gateway) e invitar al cliente.
- Probado localmente con `npx http-server` (config en `.claude/launch.json`): hero, servicios, precios, proceso, faq y contacto cargan bien desde `content.json`, sin errores de consola. `/admin` carga el login de Decap CMS correctamente (no se puede loguear local, requiere Netlify Identity).
- Repo creado por el usuario y código pusheado: https://github.com/fenz-svg/fenz (rama `main`).
- Pendiente: conectar el repo a Netlify, activar Identity + Git Gateway, e invitar al cliente (pasos detallados en DEPLOY.md).

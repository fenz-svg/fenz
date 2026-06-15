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

## 2026-06-15
- Sitio desplegado en Netlify: https://relaxed-marshmallow-ac29a3.netlify.app (deploys automáticos desde GitHub main).
- Git Gateway resultó no funcional (Netlify lo está descontinuando para sitios nuevos: el botón "Enable" nunca persiste).
- Se migró el backend de Decap CMS de `git-gateway` a `github` con OAuth:
  - `admin/config.yml`: backend `github`, repo `fenz-svg/fenz`, base_url del sitio.
  - `netlify/functions/auth.js` y `callback.js`: proveedor OAuth propio (Netlify Functions) que intermedia entre Decap CMS y GitHub.
  - `netlify.toml`: redirige `/auth` y `/callback` a esas funciones.
  - Variables de entorno en Netlify: `OAUTH_CLIENT_ID` y `OAUTH_CLIENT_SECRET` (de una OAuth App de GitHub "Fenz CMS").
- Se agregó al cliente (guidogonza33@gmail.com) como colaborador con push access al repo `fenz-svg/fenz`.
- Probado en el celular del cliente: `/admin` carga, login con GitHub funciona, panel "Contenido del sitio" visible. **CMS funcionando end-to-end.**
- Integración de notificaciones de leads con n8n (proof of concept, funcionando end-to-end):
  - Workflow en n8n cloud (fenzsupport.app.n8n.cloud): Webhook (POST) → HTTP Request (CallMeBot, WhatsApp) → Gmail (Send a message).
  - `index.html`: el formulario de contacto hace un `fetch` POST adicional (form-urlencoded, sin headers, para evitar preflight CORS) al webhook de producción de n8n.
  - URL de producción del webhook: `https://fenzsupport.app.n8n.cloud/webhook/e703b4e7-2aa4-430f-8e44-75705d5cb48c`.
  - Truco clave para que el webhook quede activo: el campo "Método HTTP" del nodo Webhook no debe quedar en modo expresión (fx) vacío — debe ser un valor fijo "POST". Si el workflow ya estaba publicado antes de corregir esto, hay que Despublicar y volver a Publicar para que registre el webhook de producción correctamente.
  - Patrón reutilizable para otros clientes (landing/tienda/institucional): mismo workflow base, cambiar destinatarios de email/WhatsApp y los campos del formulario.

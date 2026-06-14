# Publicar el sitio con panel de edición para el cliente

Esta página usa **Decap CMS** para que el cliente edite los textos desde `/admin`
sin tocar código. El contenido vive en `content.json` y se publica como un
commit a git, así que necesita el sitio en GitHub + Netlify (gratis).

## 1. Subir el proyecto a GitHub

1. Crear un repositorio nuevo en GitHub (puede ser privado).
2. Desde esta carpeta:
   ```
   git remote add origin <URL del repo>
   git branch -M main
   git push -u origin main
   ```

## 2. Conectar el repo a Netlify

1. Crear cuenta en https://www.netlify.com (gratis).
2. "Add new site" → "Import an existing project" → elegir el repo de GitHub.
3. No hace falta build command ni publish directory especiales (es HTML estático):
   - Build command: (vacío)
   - Publish directory: `/`
4. Deploy.

## 3. Activar Netlify Identity + Git Gateway

1. En el panel del sitio en Netlify: **Site configuration → Identity → Enable Identity**.
2. En **Identity → Registration**, dejarlo en "Invite only" (así solo el cliente que invites puede entrar).
3. En **Identity → Services → Git Gateway**, hacer click en "Enable Git Gateway".

## 4. Invitar al cliente

1. En **Identity → Invite users**, ingresar el email del cliente.
2. El cliente recibe un mail, define su contraseña y queda habilitado.

## 5. Acceso del cliente al panel

El cliente entra a:
```
https://<tu-sitio>.netlify.app/admin/
```
inicia sesión con el email/contraseña que configuró, y puede editar:
- Textos del hero
- Servicios, precios, proceso, FAQ
- Datos de contacto (email, WhatsApp, Instagram)
- Pie de página

Cada cambio que guarda genera un commit automático en el repo y Netlify
republica el sitio en ~1 minuto, sin que dependa de vos.

## Notas

- El widget de Identity (`netlify-identity-widget`) no es necesario salvo que
  quieras un botón de login visible en el propio sitio público — el acceso al
  `/admin` ya queda protegido por Netlify Identity automáticamente.
- Si en el futuro agregás imágenes editables, se guardan en la carpeta `images/`
  (configurado en `admin/config.yml` como `media_folder`).

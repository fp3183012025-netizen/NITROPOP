Nitropop — Sitio Estático (Estilo Tropical)
==========================================

Este paquete contiene un sitio estático listo para publicar en GitHub Pages o cualquier hosting estático.

Archivos principales:
- index.html
- styles.css
- script.js
- cart.html, cart.js
- blog.html, post1.html, post2.html
- products.json is embedded in script.js for simplicity
- Imagen del logo (si fue incluida)

Cómo publicar en GitHub Pages (rápido):
1. Crea un nuevo repositorio en GitHub (por ejemplo: nitropop).
2. Sube todos los archivos de este ZIP al repositorio (puedes arrastrar y soltar en GitHub web).
3. En GitHub, ve a Settings → Pages (o Settings → Code and automation → Pages).
4. Elige la rama `main` (o `master`) y la carpeta `/ (root)`, guarda.
5. Después de unos segundos, GitHub te dará una URL como `https://<tu-usuario>.github.io/nitropop/`.
6. Si necesitas ayuda con Git local (push), dime y te doy los comandos.

Nota sobre carrito y pagos:
- El carrito está simulado con localStorage; no procesa pagos reales.
- Para integrar pagos reales (Stripe, PayPal) necesitarás backend o integración con servicios que admitan solo frontend.

¿Quieres que:
A) Genere un README con comandos Git para subir desde la terminal?
B) Añada integraciones para subir automáticamente a Netlify?
C) Personalice textos, precios o imágenes?
D) Cree una versión en carpeta `docs/` preparada para GitHub Pages (si prefieres usar `docs` en vez de root)?

# Técnicos del Sinú: pasos para lanzar

La página está en modo demostración: sin teléfono, sin indexar y con datos por confirmar
subrayados en naranja (clase `pendiente`).

## 1. Datos del cliente

- **Teléfono y WhatsApp**: `JS/main.js` → `CONTACT_CONFIG.phone` y `phoneInternational`.
  Con el número puesto desaparece la franja de demostración y se activan todos los botones.
- **Garantía, horario, municipios y medios de pago**: buscar `class="pendiente"` en
  `index.html`, poner el dato real y quitar la clase.
- Si cambian clases de Tailwind: `npm install` y `npm run build:css`.

## 2. Dominio `tecnicosdelsinu.com`

1. Comprarlo y crear en el DNS:
   - `A` @ → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` www → `martinechavez.github.io`
   - `TXT` @ → `v=spf1 -all` (el dominio no envía correo)
   - `TXT` _dmarc → `v=DMARC1; p=reject;`
2. Verificar el dominio en GitHub (Settings de la cuenta → Pages → Add a domain).
3. Crear el archivo `CNAME` con `tecnicosdelsinu.com` y activar **Enforce HTTPS**.

## 3. SEO

En `index.html`:
- `<meta name="robots">` → `index, follow`.
- Añadir `<link rel="canonical" href="https://tecnicosdelsinu.com/">` y `og:url`.
- Cambiar `og:image` y el `image` del schema a `https://tecnicosdelsinu.com/Images/og.jpg`.
- Añadir `"telephone"` y `"url"` al schema.

Crear `robots.txt` y `sitemap.xml` (mismo formato que en lgsoportetecnico.com) y enviar el
sitemap en Google Search Console. Crear el perfil de Google Business **sin** la palabra
"autorizado".

## Reglas de marca

- No decir "autorizado", "oficial" ni "certificado por el fabricante".
- No usar logos de LG, Samsung ni Haceb; las marcas van solo como texto.
- Mantener el aviso de no afiliación en el pie.

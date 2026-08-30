# CONTEXTO PARA NUEVO CHAT — TrulyFreeQR / Google Review Stands (Session 018 cerrada por saturación de contexto 95%, 2026-08-22)

Proyecto: ~/truly-free-qr (repo gsmith0572-dot/truly-free-qr, deploy Vercel → trulyfreeqr.com). VPS: root@187.77.18.151 (ssh -i ~/.ssh/id_ed25519), servicio trulyfreeqr-redirect corre /opt/trulyfreeqr/redirect/index.js vía systemd, Postgres+Redis locales. Admin panel /admin: login MamboVault / Sasha0572!.

## 1) Groq fix — CERRADO, sin acción
QR/pdf-tools/mortgage-calculator migrados a openai/gpt-oss-120b, probados en vivo, pusheados. Próximo autopost viernes 2026-08-28, 14:00/14:15/14:30 UTC escalonado.

## 2) Google Review Stands — pivote de estrategia (ESTA sesión)
Descartado el plan original de comprar NFC tags Yolev en Amazon por separado — el mercado Alibaba ya bundlea NFC (NTAG213/215/216) + impresión QR/logo en el mismo pedido, MOQ 100pcs, $0.50-3/u. Decisión tomada: single-supplier Alibaba (stand+NFC+print todo en uno), NO comprar NFC Yolev.

**5 proveedores shortlisted (ficha de producto bloqueada por captcha slider — Alibaba solo deja ver vía búsqueda/listado, no producto directo; no se fuerza el captcha):**
1. https://www.alibaba.com/product-detail/Custom-Google-Review-NFC-Table-Stand_1601076326906.html — 9,456 sold, $0.50-1.80/u, MOQ100 (mejor trust)
2. https://www.alibaba.com/product-detail/Custom-Acrylic-NFC-google-Review-and_1600999531961.html — 5,401 sold, $2-3.50/u
3. https://www.alibaba.com/product-detail/NFC-Google-Review-Stand-QR-Code_1601523562745.html — 2,581 sold, $0.80-2.20/u
4. https://www.alibaba.com/product-detail/RFID-Google-Review-Stand-13-56MHz_1601424120989.html — explícito "White", $0.99-2.99/u
5. https://www.alibaba.com/product-detail/Custom-Matte-Acrylic-White-black-Blank_1601004047451.html — explícito White/Black matte, $4-5/u

George ya tiene cuenta Alibaba logueada y puede chatear con vendedores directamente (yo no tengo login, no puedo mandar mensajes).

**Especificación real confirmada por un proveedor** (foto que mandó George): stand en L doblada, una sola pieza (base+cara), **76mm ancho x 127.5mm alto** (NO 5x3in landscape como se asumió al principio de la sesión — corregido a mitad de sesión). Base ~50mm profundidad. Diseño de referencia del proveedor: ícono NFC tipo wifi (ondas), logo G de Google, 5 estrellas doradas, texto "Review us on Google" (Google en colores).

**RFQ message final acordado** (sin "pre-programmed" — George programa el NFC él mismo con app NFC Tools después de recibir; sin mencionar VPS/dominio interno al vendedor):
```
Hi, interested in 100pcs of your Google Review NFC acrylic stand. Requirements:
- Solid one-piece acrylic block/wedge, self-standing (NOT a sign holder with a pocket/slot)
- Color: white
- Size: approx 76mm x 127.5mm
- NFC chip: NTAG213, blank/writable — I'll program it myself after receiving
- Custom print: my QR code + Google logo, same wording and design as shown in your product photo, plus small footnote text "vacaysmith.com" at the bottom
- Need quote for 100pcs incl. shipping to US, and estimated production + shipping lead time
- Can I get 1 sample before committing to 100pcs?
```
Nota: mensaje dice tamaño 76x127.5mm — si el diseño final terminó siendo landscape en algún momento intermedio, ESTE es el spec correcto vigente (portrait, matching foto del proveedor).

**vacaysmith.com** — dominio nuevo de George, quiere branding permanente ("footer") en los 100 stands. Wording elegido tras iterar: **"vacaysmith.com"** solo (sin "powered by"/"via"/etc, minimal, texto chico al pie).

## 3) Diseño gráfico — HECHO, publicado
Usé skill `design` (Claude Design canvas). Artifact publicado:
**https://claude.ai/code/artifact/25f932b0-4c52-4665-b30e-214798b8cc55**
(contract 0.1.31, capabilities self+downloads declaradas)

Diseño actual (portrait 288x482px = 76x127.5mm @96dpi): ícono NFC wifi arriba, logo G Google grande, 5 estrellas doradas, texto "Review us on Google" (Google multicolor), fila TAP (ícono teléfono+mano, label verde) | "or" | SCAN (QR **dummy/placeholder no escaneable**, label verde), franja horizontal 4 colores Google (azul/rojo/amarillo/verde) al pie con texto "VACAYSMITH.COM" blanco superpuesto.

Archivos de trabajo (working files del canvas, para re-editar si hace falta) en:
`/private/tmp/claude-501/-Users-mbp-alfa-01-Desktop-Claude-Projetcs-Utility-Websites-Adsense-TrulyFreeQR/1121cb81-8ed5-4968-9be5-401b9122796c/scratchpad/review-stand-design/`
— `Main.dc.html` (fuente del artboard), `google-review-stand-design.html` (canvas seedeado, lo que se publicó), `print.html` (versión standalone sin el wrapper del canvas, usada para exportar PDF), `google-review-stand.svg` (versión vector standalone).
**OJO: esa carpeta es scratchpad de ESTA sesión, puede no persistir.** Si el nuevo chat necesita re-editar el diseño, mejor recrear desde el Artifact (`WebFetch` la URL + `--extract` con el helper del skill `design`, ver instrucciones del skill) en vez de asumir que esos paths siguen vivos.

**Archivos entregados en ~/Desktop (estos si son permanentes):**
- `google-review-stand.pdf` — 76x127.5mm tamaño real, generado con `/Applications/Google Chrome.app` headless `--print-to-pdf` (Chrome instalado, no hay chromium/wkhtmltopdf/rsvg-convert en la máquina).
- `google-review-stand.svg` — vector, abre nativo en Adobe Illustrator (George puede "Guardar como .ai" desde ahí). **No se generó .ai real** — no hay Illustrator instalado en esta Mac, no existe forma de producir .ai nativo sin él.

## 4) PENDIENTE — arranca en el chat nuevo, BLOQUEADO por una decisión de George
George pidió: generar **100 archivos vectoriales individuales**, cada uno con el **QR real** de `trulyfreeqr.com/s/standee-001` ... `standee-100` (ya precargados en `/admin`, sale_status: available) baked-in, reemplazando el QR dummy del diseño actual.

Es técnicamente viable (generar QR real por standee-XXX con una librería tipo `qrcode` a SVG/path, insertar en copia del SVG base, loop x100, guardar 100 archivos). **No se arrancó** — la sesión se cortó por contexto antes de hacerlo.

**Pregunta abierta que hay que resolver ANTES de generar los 100 archivos** (se la hice a George al cierre, no la contestó todavía): si el QR va baked en el print de fábrica, cada uno de los 100 stands físicos queda atado a un cliente específico DESDE la fabricación — no hay stock genérico, el proveedor tendría que imprimir 100 diseños distintos (variable data printing, probablemente con recargo o mínimo por diseño, hay que preguntarle al vendedor si lo soporta a MOQ100). La alternativa charlada antes en la sesión era dejar el stand genérico (mismo diseño en los 100, QR vacío/placeholder) y aplicar el QR real como sticker aparte después de fabricado (variable printing barato tipo Vistaprint, pegado manual). **Confirmar con George cuál de las dos rutas antes de tocar código.**

## 5) Gotchas de esta sesión (no hace falta redescubrir)
- Alibaba: página de producto (`/product-detail/...`) SIEMPRE tira captcha slider al entrar directo — no se fuerza (evasión anti-bot). Pero `/trade/search?SearchText=...` (listado/búsqueda) carga bien y trae precio+MOQ+sold count reales sin bloqueo — usar SIEMPRE esa ruta para sacar data de Alibaba.
- Snapshots de glance/Playwright en Alibaba son gigantes (100K+ chars) — se guardan en archivo, hay que grepear en vez de leer entero (mismo patrón ya conocido de Amazon).
- Vistaprint Die-Cut Sticker Singles 100u @ 2"x2" blanco BOPP = $69.99 total ($0.70/u) confirmado con pricing guide real — dato queda obsoleto si se descarta la ruta sticker separado, pero sirve si George elige la ruta "QR aparte" del punto 4.
- Chrome headless en esta Mac: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=out.pdf file://...` — funciona bien para exportar PDF con tamaño físico exacto via `@page { size: 76mm 127.5mm; margin:0; }`.

## Pendientes viejos sin tocar (backlog, no urgente)
AdSense resubmit window (oct 2026), Lighthouse perf 63-70 en los 3 sitios, AlternativeTo/SaaSHub/Product Hunt submission (requiere cuentas), DeepSeek batch de 12 artículos por sitio (DEEPSEEK_PROMPT_QR.md/_MORTGAGE.md/_TOOLS.md), TCPA/opt-in antes de SMS real con client_phone guardado.

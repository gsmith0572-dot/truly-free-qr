# SESSION_DIARY — TrulyFreeQR / Google Review Stands

## 2026-08-22 — Session 018 (continuación de Session 017)

**Groq fix:** cerrado (Session 016/017), sin acción pendiente.

**NFC tags Yolev:** DESCARTADO — plan sandwich (stand+film+NFC separado) abandonado.

**Acrylic stand:** proveedor real de Alibaba mandó ficha con dimensiones reales
**76mm x 127.5mm (no 127x76 como se asumió antes), forma en L doblada
(base+cara una pieza), NO 5x3in landscape.** RFQ message actualizado sin
"pre-programmed" (usuario programa el NFC el mismo con app) y sin mencionar
VPS/dominio interno al vendedor.

**Diseño cara del stand:** hecho con skill `design`, publicado como Artifact
en https://claude.ai/code/artifact/25f932b0-4c52-4665-b30e-214798b8cc55 —
NFC wifi icon + logo G + 5 estrellas + "Review us on Google" + fila TAP
(icono teléfono)/or/SCAN (QR dummy placeholder) + franja 4 colores con
footer "VACAYSMITH.COM" (nuevo dominio de George, branding permanente en
los 100 stands).

Archivos entregados en ~/Desktop: `google-review-stand.pdf` (76x127.5mm
tamaño real, generado con Chrome headless print-to-pdf) y
`google-review-stand.svg` (vector, abre nativo en Illustrator — no se pudo
generar .ai real, no hay Illustrator instalado en esta máquina).

**PENDIENTE — arranca en chat nuevo (bloqueado por contexto 94% esta sesión):**
Generar 100 archivos SVG vectoriales individuales, cada uno con el QR REAL
de trulyfreeqr.com/s/standee-001 ... standee-100 (ya precargados en /admin)
baked-in reemplazando el QR dummy placeholder del diseño actual. Approach:
script que genera QR (ej. librería qrcode a SVG path) por cada standee-XXX,
inserta en copia del SVG base (`google-review-stand.svg` en scratchpad de
esta sesión, o rehacer), exporta 100 archivos. Decisión de George pendiente:
¿el QR va baked en el print de fábrica (entonces cada uno de los 100 stands
físicos queda atado a un cliente específico DESDE fabricación, no hay
stock genérico) o se sigue con la idea de aplicar QR aparte (sticker) post-
fabricación? Esto cambia todo el flujo de producción — aclarar antes de
generar los 100 archivos.

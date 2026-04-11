# TrulyFreeQR — Contexto del Proyecto para Claude

## Descripción
Utility website de generación de códigos QR. Totalmente gratuito, sin suscripciones, sin login obligatorio. Monetización exclusiva via Google AdSense. Competidor directo de qr-code-generator.com atacando su modelo bait-and-switch de 14 días.

## URLs
- Frontend: https://trulyfreeqr.com
- Backend/Redirects: https://trulyfreeqr.link
- GitHub: https://github.com/gsmith0572-dot/truly-free-qr

## Stack
- Frontend: Next.js 16 + TypeScript + Tailwind — Vercel
- Backend: Fastify (Node 22) — VPS Hostinger KVM2 Ubuntu 24.04
- Database: PostgreSQL 16
- Cache: Redis (ioredis)
- Analytics: Vercel Analytics + PostgreSQL scan events
- Monetización: Google AdSense (pub-8680464039127093) — en revisión

## VPS
- IP: 187.77.18.151
- Dominio: trulyfreeqr.link
- Backend path: /opt/trulyfreeqr/redirect/index.js
- Puerto: 127.0.0.1:3001
- API Key: 2361edd231b8642fcf4b152675d45afe6dfc00403a448a62709c2b341c4c9b50
- Servicios activos: nginx, postgresql@16-main, redis-server, trulyfreeqr-redirect.service, trulyfreeqr-worker.service

## Rutas del Backend (trulyfreeqr.link)
- GET /health
- GET /r/:shortId — redirect engine <5ms
- GET /safe/:shortId — Safe-Scan preview
- POST /api/qr — crear QR dinámico
- GET /api/analytics/:shortId — analytics por QR

## Estructura del Proyecto
src/app/
  page.tsx — homepage con QRGenerator
  layout.tsx — layout global con Vercel Analytics
  about/page.tsx — página About Us (AdSense)
  contact/page.tsx — página Contact Us (AdSense)
  dashboard/page.tsx — analytics dashboard anónimo
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  [slug]/page.tsx — pSEO dinámico
  dynamic-qr-code-generator/page.tsx
  permanent-qr-code-free/page.tsx
  qr-code-for-restaurants/page.tsx
  qr-code-for-real-estate/page.tsx
  qr-code-generator-without-login/page.tsx
  qr-code-no-subscription/page.tsx
  safe-qr-code-generator/page.tsx
  vcard-qr-code-generator/page.tsx
  wifi-qr-code-generator/page.tsx
  api/qr/route.ts
  api/analytics/[shortId]/route.ts
  api/upload-pdf/route.ts
  api/health/route.ts
src/components/
  QRGenerator.tsx — motor QR completo
  Footer.tsx — footer global
  ads/AdSlot.tsx — slots de AdSense

## Design System
- Brand: Technical Minimalist / Precision Instruments
- Gradient: linear-gradient(135deg, #0058c3, #0070f3)
- Font: Inter, letter-spacing: -2%
- Border radius: 4-8px
- No-Line Rule: sin bordes decorativos
- Tonal layering: alternar #ffffff y #f7fafc entre secciones

## Workflow Vibe Coding
- SIEMPRE comandos de terminal — nunca decirle al usuario que abra un editor
- Todo via heredoc (cat > file << EOF) o echo
- Terminal 1: dev server (npm run dev)
- Terminal 2: comandos locales del proyecto
- Terminal 3: SSH al VPS (ssh root@187.77.18.151 via Hostinger console)
- Sin comentarios inline en el código

## Estado Actual (Abril 2026)
COMPLETADO:
- QR Engine: URL, WiFi, vCard, Email, Text, PDF
- Colores, Logo overlay, PNG download, SVG download
- Dashboard anónimo con analytics reales
- 9 páginas pSEO de nicho
- Privacy Policy + Terms of Service
- About Us + Contact Us
- Backend Fastify con Safe-Scan anti-phishing
- Vercel Analytics live
- AdSense aplicado — pub-8680464039127093 en revisión

PENDIENTE:
- Aprobación de Google AdSense
- Indexación completa en Google (2-4 semanas)
- Primer tráfico orgánico

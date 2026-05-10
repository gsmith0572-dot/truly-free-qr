import AuthorBox from "@/components/blog/AuthorBox";
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Código QR para Menú de Restaurante Gratis 2026: Guía Completa",
  description: "Cómo crear un código QR para el menú de tu restaurante gratis. Sin suscripción, sin caducidad. Incluye guía paso a paso, mejores prácticas y estadísticas de adopción.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/codigo-qr-menu-restaurante" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Código QR para Menú de Restaurante Gratis 2026: Guía Completa",
  datePublished: "2026-05-05",
  dateModified: "2026-05-05",
  inLanguage: "es",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cómo crear un código QR para el menú de mi restaurante gratis?", acceptedAnswer: { "@type": "Answer", text: "Ve a trulyfreeqr.com, selecciona el tipo URL, introduce el enlace a tu menú digital (puede ser un PDF, Google Drive, o tu web), personaliza los colores y descarga el código QR. Es gratis, sin registro y el código nunca caduca." } },
    { "@type": "Question", name: "¿Qué porcentaje de restaurantes usan menú QR en 2026?", acceptedAnswer: { "@type": "Answer", text: "El 52% de los restaurantes en Estados Unidos usan códigos QR para sus menús en 2026, frente al 8% antes de 2020. El 58% de los comensales adultos prefieren los menús digitales accesibles por QR sobre los menús impresos." } },
    { "@type": "Question", name: "¿Cuánto cuesta un código QR para menú de restaurante?", acceptedAnswer: { "@type": "Answer", text: "Un código QR para menú de restaurante puede ser completamente gratuito usando Truly Free QR. Las plataformas de pago cobran entre 7 y 30 euros al mes por códigos QR dinámicos que permiten actualizar el menú sin reimprimir el código." } },
    { "@type": "Question", name: "¿Qué pasa si cambio el menú? ¿Tengo que cambiar el código QR?", acceptedAnswer: { "@type": "Answer", text: "Con un código QR dinámico, puedes cambiar el menú (la URL de destino) en cualquier momento sin cambiar ni reimprimir el código QR. El código siempre dirige a la versión actualizada del menú." } },
  ],
}

export default function ArticleCodigoQRMenuRestaurante() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(74,85,104,0.12)", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 14, color: "#181c1e", textDecoration: "none" }}>Truly Free <span style={{ color: "#0058c3" }}>QR</span></Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#718096", textDecoration: "none" }}>Blog</Link>
          <Link href="/" style={{ padding: "7px 18px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Crear Código QR Gratis</Link>
        </div>
      </nav>
      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(234,88,12,0.15)", border: "1px solid rgba(234,88,12,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: 20 }}>GUÍA PARA RESTAURANTES 2026</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>Código QR para Menú de Restaurante Gratis 2026: Guía Completa</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>El 52% de los restaurantes ya usan menús digitales con código QR. Esta guía explica cómo crear el tuyo gratis en menos de 5 minutos, qué tipo de código QR necesitas, y cómo evitar pagar suscripciones innecesarias.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Mayo 2026 · 10 min de lectura · Equipo Editorial Truly Free QR</div>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { stat: "52%", label: "Restaurantes con menú QR en 2026", color: "#ea580c" },
            { stat: "58%", label: "Comensales prefieren menú digital", color: "#0058c3" },
            { stat: "$0", label: "Coste real de un menú QR dinámico", color: "#16a34a" },
          ].map(({ stat, label, color }) => (
            <div key={stat} style={{ background: "#fff", borderRadius: 8, padding: "20px 16px", border: "1px solid rgba(74,85,104,0.09)", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color, marginBottom: 6 }}>{stat}</div>
              <div style={{ fontSize: 12, color: "#718096", lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Por qué tu restaurante necesita un menú con código QR</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Un restaurante que actualiza su carta cuatro veces al año y tiene 60 mesas con dos cartas cada una gasta entre 500 y 2.000 euros anuales solo en impresión de menús. Con un código QR dinámico gratuito, el menú se actualiza en tiempo real desde cualquier dispositivo sin reimprimir nada y sin coste adicional.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Más allá del ahorro económico, los menús digitales permiten incluir fotos de platos, información de alérgenos, opciones de filtrado por dieta, y precios actualizados al momento. La Asociación Nacional de Restaurantes de Estados Unidos confirma que el 58% de los comensales adultos prefieren los menús digitales accesibles por QR sobre los menús impresos tradicionales.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: 0 }}>El único requisito técnico es que tu menú esté disponible en formato digital: un PDF en Google Drive, una página web, o cualquier servicio de menús online. El código QR simplemente enlaza a esa URL.</p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 20px", color: "#181c1e" }}>Cómo crear tu código QR de menú gratis: paso a paso</h2>
          {[
            { n: "1", t: "Sube tu menú online", d: "Si aún no tienes el menú en digital, sube el PDF a Google Drive y activa el enlace público. También puedes usar Canva para diseñar un menú digital y publicarlo como página web. Copia la URL resultante." },
            { n: "2", t: "Ve a trulyfreeqr.com", d: "Abre el generador. No necesitas crear cuenta ni introducir ningún dato personal. La herramienta está disponible inmediatamente sin ningún paso previo." },
            { n: "3", t: "Selecciona URL e introduce el enlace", d: "Pega la URL de tu menú en el campo correspondiente. El código QR se genera automáticamente en tiempo real según escribes." },
            { n: "4", t: "Personaliza con los colores de tu restaurante", d: "Cambia el color del código QR para que coincida con tu identidad visual. Puedes usar el color principal de tu logo. Añade un marco 'Scan Me' para indicar claramente al comensal qué debe hacer." },
            { n: "5", t: "Activa código dinámico (recomendado)", d: "Pulsa 'Make Dynamic (Free)'. Esto te permite cambiar la URL del menú en el futuro sin cambiar el código QR impreso. Si el menú cambia de ubicación o actualizas la carta, solo cambias el destino desde el dashboard." },
            { n: "6", t: "Descarga e imprime", d: "Descarga en PNG para impresión básica o SVG para impresión de alta calidad. Imprime en papel resistente o plastifica para mayor durabilidad. Coloca el código en un lugar visible en cada mesa." },
          ].map(({ n, t, d }) => (
            <div key={n} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#ea580c,#f97316)", color: "#fff", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{d}</div>
              </div>
            </div>
          ))}
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Estático vs dinámico: qué tipo de QR necesita tu restaurante</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Para un restaurante, el código QR dinámico es siempre la opción correcta. La razón es simple: los menús cambian. Precios, platos disponibles, ofertas del día, menús de temporada. Con un código estático, cada vez que cambia el menú hay que generar un código nuevo y reimprimir todos los soportes. Con un código dinámico, solo actualizas el destino desde el dashboard y todos los códigos impresos apuntan automáticamente al nuevo menú.</p>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "20px 22px", marginBottom: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { title: "Código QR Estático", items: ["Destino fijo, no se puede cambiar", "Si cambia el menú, hay que reimprimir", "No tiene analíticas de escaneo", "Funciona sin internet", "Gratis en cualquier plataforma"], bad: true },
                { title: "Código QR Dinámico", items: ["Destino actualizable en cualquier momento", "El código impreso nunca necesita cambiar", "Analíticas: cuándo, dónde y con qué dispositivo", "Requiere conexión para el redirect", "Gratis en Truly Free QR"], bad: false },
              ].map(({ title, items, bad }) => (
                <div key={title}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: bad ? "#718096" : "#0058c3", marginBottom: 10 }}>{title}</div>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 12, color: "#4a5568" }}>
                      <span style={{ color: bad && i < 2 ? "#dc2626" : "#16a34a", fontWeight: 700 }}>{bad && i < 2 ? "✗" : "✓"}</span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Preguntas frecuentes</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>
        <div style={{ background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Crea el código QR de tu menú ahora gratis</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Sin cuenta. Sin suscripción. Sin caducidad. El código es tuyo para siempre.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Crear Código QR de Menú</Link>
        </div>
        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>ARTÍCULOS RELACIONADOS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/generador-codigos-qr-gratis" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Generador de Códigos QR Gratis: Sin Suscripción, Sin Registro, Sin Caducidad</Link>
            <Link href="/blog/qr-code-industry-usage" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code Usage by Industry 2026: Restaurants, Retail, Healthcare</Link>
            <Link href="/blog/how-mcdonalds-uses-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>How McDonald's Uses QR Codes: Strategy, Campaigns & Results 2026</Link>
          </div>
        </div>
      </div>
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(74,85,104,0.09)", padding: "24px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#718096" }}>
          <span>2026 Truly Free QR</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/" style={{ color: "#718096", textDecoration: "none" }}>Generador</Link>
            <Link href="/blog" style={{ color: "#718096", textDecoration: "none" }}>Blog</Link>
            <Link href="/about" style={{ color: "#718096", textDecoration: "none" }}>Sobre nosotros</Link>
            <Link href="/privacy-policy" style={{ color: "#718096", textDecoration: "none" }}>Privacidad</Link>
          </div>
        </div>
      
      <AuthorBox />
      </footer>
    </div>
  )
}
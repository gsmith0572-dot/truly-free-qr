# EMPALME — sesión nube (iPhone) → Mac · 2026-10-31 ~23:30 UTC
Repo: gsmith0572-dot/truly-free-qr · rama `fix/friday-article-no-invented-specs`
Sesión nube: https://claude.ai/code/session_01Czf5YqxAAMw7b3XGNiHY3A

## PRIMERA ACCIÓN (Mac): arreglar el VPS — claude-rc caído
- Sesión "VPS Portafolio" (session_01Czf5YrbTz5oGocJjkPGDqv) desconectada desde 22:26 UTC.
  Estado: `computer_unreachable`. Causa: la sesión anterior programó `systemctl restart claude-rc`
  tras cambiar /etc/systemd/system/claude-rc.service a `--permission-mode bypassPermissions`.
  Tras el reinicio solo hubo 1 init (22:26, aún permissionMode=acceptEdits) y luego nada.
- HIPÓTESIS (no verificada): Claude Code rechaza bypassPermissions corriendo como root → el servicio
  no arranca o queda en crash-loop.
- Desde Mac por SSH:
  ```
  journalctl -u claude-rc -n 30 --no-pager      # ver error real
  # si confirma lo de root, revertir:
  sed -i 's/--permission-mode bypassPermissions/--permission-mode acceptEdits/' /etc/systemd/system/claude-rc.service
  systemctl daemon-reload && systemctl restart claude-rc && systemctl is-active claude-rc
  ```
  Luego decidir con George cómo lograr "sin permisos" sin tumbar el servicio (p.ej. usuario no-root,
  o allowlist amplia en settings.json). NO aplicar IS_SANDBOX=1 sin su "go".
- Revisar también ~/.claude/settings.json defaultMode=bypassPermissions (mismo problema posible).
- George quiere: entrar al VPS desde el iPhone con la Mac APAGADA. Abrir siempre "VPS Portafolio"
  (no sesión nube nueva). Verificar que vuelva a responder desde el iPhone.

## ARTÍCULO DEL VIERNES (TrulyFreeQR)
- VERIFICADO: run 41246974975 (main) = failure. Fact-check rechazó los 3 temas tras 4 pasadas
  (NFC vs QR: "QR siempre estático"; QR vs barcode: versiones/módulos/mm inventados; printing tips).
  No fue el token (OK) ni las 1100 palabras.
- HECHO: rama `fix/friday-article-no-invented-specs` (commit f5d77ba): prompt sin "numbers", regla 7
  anti-specs/estadísticas/"real-world example" inventados, datos compactos del sitio en prompt_extra
  de scripts/article_config.json (site_facts.md completo no cabe: Groq TPM=8000).
- VERIFICADO: dry run 41250956994 en la rama = success. "QR code printing tips" pasó: fact-check
  corrigió 4 en pasada 1, pasada 2 limpia, build OK (61 páginas). Nada publicado.
- ESPERANDO "go" DE GEORGE: merge de la rama a main. Si entra antes del sáb 2026-11-01 14:15 UTC,
  el backup del sábado publica solo. Después verificar en vivo trulyfreeqr.com/blog (REGLA #7).
- Sin merge, el backup del sábado corre sobre main viejo → casi seguro falla de nuevo.

## SEGURIDAD
- HECHO en main (5424e5b, verificado en GitHub raw): quitadas credenciales /admin en texto plano de
  HANDOFF_NEW_CHAT.md (repo PÚBLICO). Siguen en el historial git.
- PENDIENTE George: rotar contraseña /admin y guardarla solo en su gestor. Reescribir historial solo con "go".

## PENDIENTES QUE VIENEN DEL EMPALME ANTERIOR (requieren VPS/Mac)
1. Comparar ~/.claude/SOP_CLOSING_PROTOCOL.sync-conflict-20261031-182524-OOT5ZX4.md contra el original. Nunca borrar sin comparar.
2. Memoria project_token_savers_stack: VPS cubierto (savers_guard OK, 9 activos); CCE reinstalado con
   `uv tool install 'code-context-engine[local]==0.4.26' --with 'mcp<2'`.
   GOTCHA: `graphify install` pisa ~/.claude/CLAUDE.md (backup + cmp). No exportar CLAUDE_CODE_OAUTH_TOKEN global.
3. Agregar esta entrada al SESSION_DIARY.md de la Mac (TrulyFreeQR) y correr el CP real del SOP.
4. Confirmar que bypass no pide permisos en sesión nueva (pendiente, ahora bloqueado por punto VPS).

## DECISIONES DE GEORGE (esta sesión)
- "Go" → arreglar workflow (hecho en rama, NO en main).
- "Arregla esto" → quitar credenciales del archivo (hecho en main).
- Emails del inbox que no son el de GitHub: ignorar ("no te preocupes").

## NO HACER
- No merge a main ni deploy sin "go". No imprimir credenciales. No borrar el sync-conflict sin comparar.

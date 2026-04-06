import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-10',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-10.component.html',
})
export class Modulo10Component {
  readonly prev: NavLink = {
    label: 'Modulo 9: Integraciones y Workflows',
    route: '/cursos/claude-code/modulo-09',
  };

  readonly next: NavLink = {
    label: 'Modulo 11: Claude API y SDKs',
    route: '/cursos/claude-code/modulo-11',
  };

  readonly code = {
    phase4Cycle: `
<span class="comment"># Fase 1 — Explorar (Plan Mode)</span>
read /src/auth and understand how we handle sessions.
also look at how we manage environment variables for secrets.

<span class="comment"># Fase 2 — Planear</span>
I want to add Google OAuth. What files need to change?
What's the session flow? Create a detailed plan.

<span class="comment"># Fase 3 — Implementar (Normal Mode)</span>
implement the OAuth flow from your plan.
write tests for the callback handler, run the suite and fix failures.

<span class="comment"># Fase 4 — Commitear</span>
commit with a descriptive message and open a PR`,

    claudeMdExample: `
<span class="comment"># CLAUDE.md — ejemplo efectivo y conciso</span>

<span class="comment"># Code style</span>
- Use ES modules (import/export), not CommonJS (require)
- Destructure imports when possible

<span class="comment"># Workflow</span>
- Typecheck after making a series of code changes: npm run typecheck
- Run single tests (not the full suite): npm test -- --testPathPattern=filename
- Branch naming: feat/, fix/, chore/ prefixes

<span class="comment"># Environment</span>
- Requires .env.local with SUPABASE_URL and SUPABASE_ANON_KEY
- Dev server: npm run dev (port 3000)`,

    claudeMdImports: `
<span class="comment"># CLAUDE.md puede referenciar otros archivos</span>
See @README.md for project overview.
See @package.json for available npm commands.

<span class="comment"># Git workflow</span>
@docs/git-instructions.md

<span class="comment"># Personal overrides (no se commitea)</span>
@~/.claude/my-project-instructions.md`,

    richContext: `
<span class="comment"># @-mencionar archivos directamente (Claude los lee antes de responder)</span>
Explain the logic in @src/auth/tokenRefresh.ts#45-67

<span class="comment"># Referenciar patrones existentes</span>
Look at how HotDogWidget.php is implemented to understand the patterns,
then build a new CalendarWidget following the same approach.

<span class="comment"># Apuntar a fuentes de verdad</span>
Look through ExecutionFactory's git history and summarize how its API evolved.

<span class="comment"># Pasar datos por pipe</span>
cat build-error.txt | claude -p "explain the root cause of this error"

<span class="comment"># Dejar que Claude se documente a sí mismo</span>
Use 'foo-cli --help' to learn about foo, then use it to accomplish X.`,

    interviewClaude: `
I want to build [brief description]. Interview me using AskUserQuestion.

Ask about technical implementation, UI/UX, edge cases, concerns, and tradeoffs.
Don't ask obvious questions — dig into the hard parts I might not have considered.

Keep interviewing until we've covered everything, then write a complete spec to SPEC.md.`,

    verificationExample: `
<span class="comment"># Mal — sin verificación</span>
implement a function that validates email addresses

<span class="comment"># Bien — con criterios explícitos</span>
write a validateEmail function.
test cases: user@example.com → true, invalid → false, user@.com → false
run the tests after implementing and fix any failures.`,

    tddSessions: `
<span class="comment"># Session A — solo escribe tests</span>
Write comprehensive tests for a UserAuthService class.
Define the interface and all edge cases, but don't implement yet.

<span class="comment"># Session B — implementa para pasar los tests</span>
Implement UserAuthService to pass all tests in @src/auth/userAuth.test.ts
Run the tests after each change and fix failures.`,

    fanOut: `
<span class="comment"># Paso 1: Claude genera la lista de archivos a migrar</span>
list all Python files that use the old requests library (output: files.txt)

<span class="comment"># Paso 2: Script itera con una invocación por archivo</span>
for file in $(cat files.txt); do
  claude -p <span class="string">"Migrate $file from requests to httpx.
    Keep the same logic. Return OK or FAIL."</span> \\
    --allowedTools <span class="string">"Edit,Bash(git commit *)"</span> &
done
wait

<span class="comment"># Paso 3: Testear en 2-3 archivos primero, refinar el prompt, luego full run</span>`,

    nonInteractive: `
<span class="comment"># Output de texto plano (default)</span>
claude -p <span class="string">"Explain what this project does"</span>

<span class="comment"># JSON estructurado para parseo</span>
claude -p <span class="string">"List all API endpoints"</span> --output-format json

<span class="comment"># Streaming JSON en tiempo real</span>
claude -p <span class="string">"Analyze this log file"</span> --output-format stream-json

<span class="comment"># Pipe a otro comando</span>
claude -p <span class="string">"&lt;prompt&gt;"</span> --output-format json | jq <span class="string">'.result'</span>

<span class="comment"># Como linter en scripts de CI</span>
claude -p <span class="string">'Review the diff vs main for security issues.
  Report: filename:line — description. No other text.'</span>`,

    subagentsContext: `
<span class="comment"># Delegar investigación</span>
Use subagents to investigate how our auth system handles token refresh
and whether we have any existing OAuth utilities to reuse.

<span class="comment"># Delegar verificación post-implementación</span>
Use a subagent to review this code for edge cases and security issues.

<span class="comment"># Configurar subagente especializado</span>
<span class="comment"># .claude/agents/security-reviewer.md</span>
---
name: security-reviewer
description: Reviews code for security vulnerabilities. Use for any security audit.
tools: Read, Grep, Glob, Bash
model: opus
---
You are a senior security engineer. Review code for:
- SQL injection, XSS, command injection
- Authentication and authorization flaws
- Hardcoded secrets or credentials
Provide specific line references and suggested fixes.`,

    agentTeamsConfig: `
<span class="comment"># Habilitar en settings.json o como variable de entorno</span>
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`,

    debugVerification: `
<span class="comment"># Sin verificación — Claude no puede saber si funcionó</span>
fix the login bug

<span class="comment"># Con verificación — Claude puede iterar hasta que pase</span>
Users report login fails after session timeout.
Check the auth flow in src/auth/, especially token refresh.
Write a failing test that reproduces the issue, then fix it.
The test must pass before you're done.`,

    debugErrorInfo: `
<span class="comment"># Dar el error exacto, no una descripción</span>
The build fails with this error:
[paste exact error output]

Fix it and verify the build succeeds.
Address the root cause — don't suppress the error.

<span class="comment"># Para errores intermitentes</span>
Login fails ~20% of the time with: [error]
It's intermittent — likely a race condition or session timing issue.
Check the auth flow in src/auth/ and write a test that reliably reproduces it.

<span class="comment"># Con contexto de reproducción</span>
Steps to reproduce:
1. Login with valid credentials
2. Wait 30 minutes (session timeout)
3. Try to access /dashboard
4. Error: 401 Unauthorized

Check src/auth/session.ts and src/middleware/auth.ts`,

    debugPlanMode: `
<span class="comment"># Analizar sin modificar nada primero</span>
claude --permission-mode plan

Analyze the authentication system.
What could cause intermittent 401 errors after session timeout?
Don't make any changes — just investigate and explain your theory.

<span class="comment"># Después de entender el problema, implementar</span>
<span class="comment"># (Shift+Tab para salir de Plan Mode)</span>
Now implement the fix for the race condition you identified.`,

    debugPatterns: `
<span class="comment"># Debugging de performance — dar contexto de profiling</span>
The API endpoint /users takes 800ms. Here's the flame graph: @profile.png
Identify the bottleneck and fix it. Target: under 200ms.

<span class="comment"># Debugging de tests flaky</span>
This test fails ~30% of the time: @src/__tests__/userService.test.ts
Failures always show: "Timeout waiting for database"
The test doesn't mock the DB. Identify the root cause and fix it.

<span class="comment"># Debugging con subagente para no contaminar contexto</span>
Use a subagent to investigate why the payment flow fails for users
with special characters in their email. Check src/payments/ thoroughly.`,

    modelCommands: `
<span class="comment"># Cambiar modelo en la sesión actual</span>
/model sonnet

<span class="comment"># Iniciar con un modelo específico</span>
claude --model opus

<span class="comment"># Configurar default en settings.json</span>
{ "model": "opusplan" }

<span class="comment"># opusplan: Opus para planear, Sonnet para implementar</span>
<span class="comment"># El cambio es automático al salir/entrar de Plan Mode</span>`,

    effortCommands: `
<span class="comment"># Cambiar effort level en sesión</span>
/effort low
/effort medium
/effort high
/effort max        <span class="comment"># solo Opus 4.6</span>
/effort auto       <span class="comment"># resetear al default del modelo</span>

<span class="comment"># Para UN turno específico — sin cambiar la sesión</span>
ultrathink: refactor the payment module to handle concurrent transactions safely

<span class="comment"># Al iniciar</span>
claude --effort high

<span class="comment"># En settings.json (persiste)</span>
{ "effortLevel": "medium" }

<span class="comment"># Variable de entorno (mayor prioridad que todo)</span>
export CLAUDE_CODE_EFFORT_LEVEL=high`,

    promptCaching: `
<span class="comment"># Deshabilitar caching para todos los modelos</span>
export DISABLE_PROMPT_CACHING=1

<span class="comment"># Solo para un modelo específico</span>
export DISABLE_PROMPT_CACHING_SONNET=1
export DISABLE_PROMPT_CACHING_OPUS=1
export DISABLE_PROMPT_CACHING_HAIKU=1`,

    tokenStrategies: `
<span class="comment"># 1. /clear entre tareas no relacionadas</span>
/clear                          <span class="comment"># elimina todo el contexto</span>
/compact Focus on API changes   <span class="comment"># compacta preservando lo importante</span>

<span class="comment"># 2. Compactar parte de la conversación</span>
<span class="comment"># Esc+Esc → seleccionar mensaje → "Summarize from here"</span>

<span class="comment"># 3. Personalizar qué preservar al compactar</span>
<span class="comment"># En CLAUDE.md:</span>
When compacting, always preserve:
- The full list of modified files
- Any test commands used
- Error messages encountered

<span class="comment"># 4. Monitorear uso continuamente</span>
/cost    <span class="comment"># tokens y costo de la sesión actual</span>
/stats   <span class="comment"># patrones de uso (suscriptores Max/Pro)</span>`,

    checkpoints: `
<span class="comment"># Claude crea checkpoints antes de cada cambio</span>
<span class="comment"># Doble Esc o /rewind para abrir el menú</span>

/rewind    <span class="comment"># opciones: restaurar conversación, código, o ambos</span>

<span class="comment"># Estrategia: "try risky things"</span>
<span class="comment"># Si no funciona → rewind → probar otro enfoque</span>
<span class="comment"># Los checkpoints persisten entre sesiones</span>`,

    promptInjection: `
<span class="comment"># Contenido que puede contener prompt injection — revisar con cuidado</span>
cat external-config.yaml | claude -p "parse this"   <span class="comment"># riesgo: config maliciosa</span>
claude -p "review @untrusted-file.js"               <span class="comment"># riesgo: archivo con instrucciones</span>

<span class="comment"># Mejor práctica: revisar el contenido antes de pasarlo a Claude</span>`,

    permissionModes: `
<span class="comment"># Plan Mode — Claude solo lee, no modifica</span>
claude --permission-mode plan

<span class="comment"># Auto mode — clasificador revisa comandos automáticamente</span>
<span class="comment"># Bloquea: escalación de scope, infraestructura desconocida, contenido hostil</span>
claude --permission-mode auto

<span class="comment"># Sandbox — aislamiento a nivel OS (filesystem + network)</span>
/sandbox    <span class="comment"># desde dentro de Claude Code</span>

<span class="comment"># bypassPermissions — SOLO para sandboxes sin internet</span>
<span class="comment"># Habilitar en settings.json solo si sabes lo que haces</span>
{ "dangerouslySkipPermissions": true }`,

    secretsManagement: `
<span class="comment"># ✓ API keys almacenadas encriptadas por Claude Code</span>
<span class="comment"># ✓ Nunca hardcodear en YAML o código del proyecto</span>

<span class="comment"># GitHub Actions — siempre usar secrets del repo</span>
anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>  <span class="comment"># ✓ Correcto</span>
anthropic_api_key: <span class="string">"sk-ant-..."</span>                   <span class="comment"># ✗ NUNCA</span>

<span class="comment"># Variables de entorno locales</span>
export ANTHROPIC_API_KEY=<span class="string">"sk-ant-..."</span>   <span class="comment"># no commitear .env con esto</span>

<span class="comment"># .gitignore siempre debe incluir</span>
.env
.env.local
.env.*.local
**/secrets.json`,

    enterpriseSecurity: `
<span class="comment"># managed-settings.json — políticas que los usuarios no pueden cambiar</span>
{
  "availableModels": ["sonnet", "haiku"],
  "permissions": {
    "defaultMode": "plan"
  }
}

<span class="comment"># Hook ConfigChange — auditar cambios de settings durante sesiones</span>
{
  "hooks": {
    "ConfigChange": [{
      "matcher": "",
      "hooks": [{
        "type": "command",
        "command": "echo 'Config changed' >> ~/.claude/config-audit.log"
      }]
    }]
  }
}

<span class="comment"># Bloquear cambios específicos</span>
<span class="comment"># Si el hook retorna exit code 2 → el cambio se bloquea</span>`,
  };
}

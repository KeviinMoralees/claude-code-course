import{a as p}from"./chunk-HSI73NXQ.js";import{a as m,b as c,c as u,d as E}from"./chunk-C7DOBPJR.js";import{e as o,f as d,i as s,j as n,k as t,l as i,t as e}from"./chunk-HIV27VVN.js";var x=class l{prev={label:"Modulo 9: Integraciones y Workflows",route:"/cursos/claude-code/modulo-09"};next={label:"Modulo 11: Claude API y SDKs",route:"/cursos/claude-code/modulo-11"};code={phase4Cycle:`
<span class="comment"># Fase 1 \u2014 Explorar (Plan Mode)</span>
read /src/auth and understand how we handle sessions.
also look at how we manage environment variables for secrets.

<span class="comment"># Fase 2 \u2014 Planear</span>
I want to add Google OAuth. What files need to change?
What's the session flow? Create a detailed plan.

<span class="comment"># Fase 3 \u2014 Implementar (Normal Mode)</span>
implement the OAuth flow from your plan.
write tests for the callback handler, run the suite and fix failures.

<span class="comment"># Fase 4 \u2014 Commitear</span>
commit with a descriptive message and open a PR`,claudeMdExample:`
<span class="comment"># CLAUDE.md \u2014 ejemplo efectivo y conciso</span>

<span class="comment"># Code style</span>
- Use ES modules (import/export), not CommonJS (require)
- Destructure imports when possible

<span class="comment"># Workflow</span>
- Typecheck after making a series of code changes: npm run typecheck
- Run single tests (not the full suite): npm test -- --testPathPattern=filename
- Branch naming: feat/, fix/, chore/ prefixes

<span class="comment"># Environment</span>
- Requires .env.local with SUPABASE_URL and SUPABASE_ANON_KEY
- Dev server: npm run dev (port 3000)`,claudeMdImports:`
<span class="comment"># CLAUDE.md puede referenciar otros archivos</span>
See @README.md for project overview.
See @package.json for available npm commands.

<span class="comment"># Git workflow</span>
@docs/git-instructions.md

<span class="comment"># Personal overrides (no se commitea)</span>
@~/.claude/my-project-instructions.md`,richContext:`
<span class="comment"># @-mencionar archivos directamente (Claude los lee antes de responder)</span>
Explain the logic in @src/auth/tokenRefresh.ts#45-67

<span class="comment"># Referenciar patrones existentes</span>
Look at how HotDogWidget.php is implemented to understand the patterns,
then build a new CalendarWidget following the same approach.

<span class="comment"># Apuntar a fuentes de verdad</span>
Look through ExecutionFactory's git history and summarize how its API evolved.

<span class="comment"># Pasar datos por pipe</span>
cat build-error.txt | claude -p "explain the root cause of this error"

<span class="comment"># Dejar que Claude se documente a s\xED mismo</span>
Use 'foo-cli --help' to learn about foo, then use it to accomplish X.`,interviewClaude:`
I want to build [brief description]. Interview me using AskUserQuestion.

Ask about technical implementation, UI/UX, edge cases, concerns, and tradeoffs.
Don't ask obvious questions \u2014 dig into the hard parts I might not have considered.

Keep interviewing until we've covered everything, then write a complete spec to SPEC.md.`,verificationExample:`
<span class="comment"># Mal \u2014 sin verificaci\xF3n</span>
implement a function that validates email addresses

<span class="comment"># Bien \u2014 con criterios expl\xEDcitos</span>
write a validateEmail function.
test cases: user@example.com \u2192 true, invalid \u2192 false, user@.com \u2192 false
run the tests after implementing and fix any failures.`,tddSessions:`
<span class="comment"># Session A \u2014 solo escribe tests</span>
Write comprehensive tests for a UserAuthService class.
Define the interface and all edge cases, but don't implement yet.

<span class="comment"># Session B \u2014 implementa para pasar los tests</span>
Implement UserAuthService to pass all tests in @src/auth/userAuth.test.ts
Run the tests after each change and fix failures.`,fanOut:`
<span class="comment"># Paso 1: Claude genera la lista de archivos a migrar</span>
list all Python files that use the old requests library (output: files.txt)

<span class="comment"># Paso 2: Script itera con una invocaci\xF3n por archivo</span>
for file in $(cat files.txt); do
  claude -p <span class="string">"Migrate $file from requests to httpx.
    Keep the same logic. Return OK or FAIL."</span> \\
    --allowedTools <span class="string">"Edit,Bash(git commit *)"</span> &
done
wait

<span class="comment"># Paso 3: Testear en 2-3 archivos primero, refinar el prompt, luego full run</span>`,nonInteractive:`
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
  Report: filename:line \u2014 description. No other text.'</span>`,subagentsContext:`
<span class="comment"># Delegar investigaci\xF3n</span>
Use subagents to investigate how our auth system handles token refresh
and whether we have any existing OAuth utilities to reuse.

<span class="comment"># Delegar verificaci\xF3n post-implementaci\xF3n</span>
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
Provide specific line references and suggested fixes.`,agentTeamsConfig:`
<span class="comment"># Habilitar en settings.json o como variable de entorno</span>
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`,debugVerification:`
<span class="comment"># Sin verificaci\xF3n \u2014 Claude no puede saber si funcion\xF3</span>
fix the login bug

<span class="comment"># Con verificaci\xF3n \u2014 Claude puede iterar hasta que pase</span>
Users report login fails after session timeout.
Check the auth flow in src/auth/, especially token refresh.
Write a failing test that reproduces the issue, then fix it.
The test must pass before you're done.`,debugErrorInfo:`
<span class="comment"># Dar el error exacto, no una descripci\xF3n</span>
The build fails with this error:
[paste exact error output]

Fix it and verify the build succeeds.
Address the root cause \u2014 don't suppress the error.

<span class="comment"># Para errores intermitentes</span>
Login fails ~20% of the time with: [error]
It's intermittent \u2014 likely a race condition or session timing issue.
Check the auth flow in src/auth/ and write a test that reliably reproduces it.

<span class="comment"># Con contexto de reproducci\xF3n</span>
Steps to reproduce:
1. Login with valid credentials
2. Wait 30 minutes (session timeout)
3. Try to access /dashboard
4. Error: 401 Unauthorized

Check src/auth/session.ts and src/middleware/auth.ts`,debugPlanMode:`
<span class="comment"># Analizar sin modificar nada primero</span>
claude --permission-mode plan

Analyze the authentication system.
What could cause intermittent 401 errors after session timeout?
Don't make any changes \u2014 just investigate and explain your theory.

<span class="comment"># Despu\xE9s de entender el problema, implementar</span>
<span class="comment"># (Shift+Tab para salir de Plan Mode)</span>
Now implement the fix for the race condition you identified.`,debugPatterns:`
<span class="comment"># Debugging de performance \u2014 dar contexto de profiling</span>
The API endpoint /users takes 800ms. Here's the flame graph: @profile.png
Identify the bottleneck and fix it. Target: under 200ms.

<span class="comment"># Debugging de tests flaky</span>
This test fails ~30% of the time: @src/__tests__/userService.test.ts
Failures always show: "Timeout waiting for database"
The test doesn't mock the DB. Identify the root cause and fix it.

<span class="comment"># Debugging con subagente para no contaminar contexto</span>
Use a subagent to investigate why the payment flow fails for users
with special characters in their email. Check src/payments/ thoroughly.`,modelCommands:`
<span class="comment"># Cambiar modelo en la sesi\xF3n actual</span>
/model sonnet

<span class="comment"># Iniciar con un modelo espec\xEDfico</span>
claude --model opus

<span class="comment"># Configurar default en settings.json</span>
{ "model": "opusplan" }

<span class="comment"># opusplan: Opus para planear, Sonnet para implementar</span>
<span class="comment"># El cambio es autom\xE1tico al salir/entrar de Plan Mode</span>`,effortCommands:`
<span class="comment"># Cambiar effort level en sesi\xF3n</span>
/effort low
/effort medium
/effort high
/effort max        <span class="comment"># solo Opus 4.6</span>
/effort auto       <span class="comment"># resetear al default del modelo</span>

<span class="comment"># Para UN turno espec\xEDfico \u2014 sin cambiar la sesi\xF3n</span>
ultrathink: refactor the payment module to handle concurrent transactions safely

<span class="comment"># Al iniciar</span>
claude --effort high

<span class="comment"># En settings.json (persiste)</span>
{ "effortLevel": "medium" }

<span class="comment"># Variable de entorno (mayor prioridad que todo)</span>
export CLAUDE_CODE_EFFORT_LEVEL=high`,promptCaching:`
<span class="comment"># Deshabilitar caching para todos los modelos</span>
export DISABLE_PROMPT_CACHING=1

<span class="comment"># Solo para un modelo espec\xEDfico</span>
export DISABLE_PROMPT_CACHING_SONNET=1
export DISABLE_PROMPT_CACHING_OPUS=1
export DISABLE_PROMPT_CACHING_HAIKU=1`,tokenStrategies:`
<span class="comment"># 1. /clear entre tareas no relacionadas</span>
/clear                          <span class="comment"># elimina todo el contexto</span>
/compact Focus on API changes   <span class="comment"># compacta preservando lo importante</span>

<span class="comment"># 2. Compactar parte de la conversaci\xF3n</span>
<span class="comment"># Esc+Esc \u2192 seleccionar mensaje \u2192 "Summarize from here"</span>

<span class="comment"># 3. Personalizar qu\xE9 preservar al compactar</span>
<span class="comment"># En CLAUDE.md:</span>
When compacting, always preserve:
- The full list of modified files
- Any test commands used
- Error messages encountered

<span class="comment"># 4. Monitorear uso continuamente</span>
/cost    <span class="comment"># tokens y costo de la sesi\xF3n actual</span>
/stats   <span class="comment"># patrones de uso (suscriptores Max/Pro)</span>`,checkpoints:`
<span class="comment"># Claude crea checkpoints antes de cada cambio</span>
<span class="comment"># Doble Esc o /rewind para abrir el men\xFA</span>

/rewind    <span class="comment"># opciones: restaurar conversaci\xF3n, c\xF3digo, o ambos</span>

<span class="comment"># Estrategia: "try risky things"</span>
<span class="comment"># Si no funciona \u2192 rewind \u2192 probar otro enfoque</span>
<span class="comment"># Los checkpoints persisten entre sesiones</span>`,promptInjection:`
<span class="comment"># Contenido que puede contener prompt injection \u2014 revisar con cuidado</span>
cat external-config.yaml | claude -p "parse this"   <span class="comment"># riesgo: config maliciosa</span>
claude -p "review @untrusted-file.js"               <span class="comment"># riesgo: archivo con instrucciones</span>

<span class="comment"># Mejor pr\xE1ctica: revisar el contenido antes de pasarlo a Claude</span>`,permissionModes:`
<span class="comment"># Plan Mode \u2014 Claude solo lee, no modifica</span>
claude --permission-mode plan

<span class="comment"># Auto mode \u2014 clasificador revisa comandos autom\xE1ticamente</span>
<span class="comment"># Bloquea: escalaci\xF3n de scope, infraestructura desconocida, contenido hostil</span>
claude --permission-mode auto

<span class="comment"># Sandbox \u2014 aislamiento a nivel OS (filesystem + network)</span>
/sandbox    <span class="comment"># desde dentro de Claude Code</span>

<span class="comment"># bypassPermissions \u2014 SOLO para sandboxes sin internet</span>
<span class="comment"># Habilitar en settings.json solo si sabes lo que haces</span>
{ "dangerouslySkipPermissions": true }`,secretsManagement:`
<span class="comment"># \u2713 API keys almacenadas encriptadas por Claude Code</span>
<span class="comment"># \u2713 Nunca hardcodear en YAML o c\xF3digo del proyecto</span>

<span class="comment"># GitHub Actions \u2014 siempre usar secrets del repo</span>
anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>  <span class="comment"># \u2713 Correcto</span>
anthropic_api_key: <span class="string">"sk-ant-..."</span>                   <span class="comment"># \u2717 NUNCA</span>

<span class="comment"># Variables de entorno locales</span>
export ANTHROPIC_API_KEY=<span class="string">"sk-ant-..."</span>   <span class="comment"># no commitear .env con esto</span>

<span class="comment"># .gitignore siempre debe incluir</span>
.env
.env.local
.env.*.local
**/secrets.json`,enterpriseSecurity:`
<span class="comment"># managed-settings.json \u2014 pol\xEDticas que los usuarios no pueden cambiar</span>
{
  "availableModels": ["sonnet", "haiku"],
  "permissions": {
    "defaultMode": "plan"
  }
}

<span class="comment"># Hook ConfigChange \u2014 auditar cambios de settings durante sesiones</span>
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

<span class="comment"># Bloquear cambios espec\xEDficos</span>
<span class="comment"># Si el hook retorna exit code 2 \u2192 el cambio se bloquea</span>`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=d({type:l,selectors:[["app-modulo-10"]],decls:688,vars:26,consts:[["number","M\xF3dulo 10","title","T\xE9cnicas Avanzadas","subtitle","Prompt engineering, multi-agent workflows, debugging, performance y seguridad"],[1,"container"],["id","prompt-engineering"],[1,"concept-grid"],["title","1. Explorar","description","Entrar en Plan Mode. Claude lee archivos y responde preguntas sin hacer cambios."],["title","2. Planear","description","Pedir un plan detallado. Ctrl+G abre el plan en tu editor para editarlo antes de continuar."],["title","3. Implementar","description","Volver a Normal Mode. Claude ejecuta el plan verificando contra los criterios que definiste."],["title","4. Commitear","description","Claude hace commit con mensaje descriptivo, push y abre el PR."],[3,"code"],["type","info","title","\u2139 Cu\xE1ndo saltarse las 4 fases"],[1,"table-wrapper"],["type","good","title","\u2713 Dar a Claude un mecanismo de verificaci\xF3n"],["type","bad","title","\u2717 Patrones de fallo comunes"],["id","multi-agent"],["type","warn","title","\u26A0 Costos de Agent Teams"],["id","debugging"],["type","good","title","\u2713 Loop de feedback apretado"],["id","performance"],["type","warn","title","\u26A0 Medium es el default correcto"],["id","security"],["title","Restricci\xF3n de escritura","description","Claude solo puede escribir en el directorio donde se inici\xF3 y sus subdirectorios. No puede modificar directorios padre sin permiso expl\xEDcito."],["title","Blocklist de comandos","description","curl y wget bloqueados por default \u2014 pueden traer contenido malicioso del exterior."],["title","Contexto separado para web fetch","description","El fetch de URLs usa un context window separado para evitar inyectar prompts maliciosos en la conversaci\xF3n principal."],["title","Verificaci\xF3n de fuentes nuevas","description","Primera ejecuci\xF3n en un codebase y nuevos servidores MCP requieren verificaci\xF3n de confianza expl\xEDcita."],["type","good","title","\u2713 Mejores pr\xE1cticas"],["type","bad","title","\u2717 Anti-patrones de seguridad"],["id","resumen"],[3,"prev","next"]],template:function(r,a){r&1&&(i(0,"app-module-header",0),n(1,"div",1)(2,"section",2)(3,"h2"),e(4,"10.1 \u2014 Prompt Engineering para Claude Code"),t(),n(5,"p"),e(6," La restricci\xF3n fundamental de Claude Code es el "),n(7,"strong"),e(8,"context window"),t(),e(9,": se llena r\xE1pido y el rendimiento degrada al llenarse. Toda t\xE9cnica efectiva de prompt engineering existe para gestionar esta restricci\xF3n. "),t(),n(10,"h3"),e(11,"La restricci\xF3n que lo explica todo"),t(),n(12,"p"),e(13,' El context window contiene toda la conversaci\xF3n: cada mensaje, cada archivo que Claude lee, cada output de comando. Una sola sesi\xF3n de debugging puede consumir decenas de miles de tokens. Cuando el contexto se llena, Claude puede empezar a "olvidar" instrucciones anteriores o cometer m\xE1s errores. '),t(),n(14,"h3"),e(15,"El ciclo de 4 fases"),t(),n(16,"p"),e(17,"Separar la exploraci\xF3n de la implementaci\xF3n evita solucionar el problema equivocado:"),t(),n(18,"div",3),i(19,"app-concept-card",4)(20,"app-concept-card",5)(21,"app-concept-card",6)(22,"app-concept-card",7),t(),i(23,"app-code-block",8),n(24,"app-callout",9)(25,"p"),e(26,' El ciclo agrega overhead. Para tareas peque\xF1as y claras ("corrige el typo en l\xEDnea 42", "renombra esta variable") ve directo a implementar. El planning es m\xE1s valioso cuanto m\xE1s archivos toca el cambio o m\xE1s incertidumbre hay sobre el enfoque. '),t()(),n(27,"h3"),e(28,"CLAUDE.md efectivo \u2014 la regla de oro"),t(),n(29,"p"),e(30," Por cada l\xEDnea, pregunta: "),n(31,"em"),e(32,'"\xBFCausar\xEDa errores en Claude eliminarla?"'),t(),e(33," Si no, elim\xEDnala. Un CLAUDE.md demasiado largo hace que Claude ignore las instrucciones importantes porque se pierden en el ruido. "),t(),n(34,"div",10)(35,"table")(36,"thead")(37,"tr")(38,"th"),e(39,"Incluir \u2705"),t(),n(40,"th"),e(41,"Excluir \u274C"),t()()(),n(42,"tbody")(43,"tr")(44,"td"),e(45,"Comandos bash que Claude no puede adivinar"),t(),n(46,"td"),e(47,"Convenciones est\xE1ndar del lenguaje (Claude ya las sabe)"),t()(),n(48,"tr")(49,"td"),e(50,"Reglas de estilo que difieren del default"),t(),n(51,"td"),e(52,"Documentaci\xF3n de APIs (mejor linkear a la docs)"),t()(),n(53,"tr")(54,"td"),e(55,"Test runner preferido y comandos de build"),t(),n(56,"td"),e(57,"Informaci\xF3n que cambia frecuentemente"),t()(),n(58,"tr")(59,"td"),e(60,"Etiqueta del repo (branches, naming de PRs)"),t(),n(61,"td"),e(62,"Descripciones de archivos del proyecto"),t()(),n(63,"tr")(64,"td"),e(65,"Decisiones arquitect\xF3nicas espec\xEDficas del proyecto"),t(),n(66,"td"),e(67,'Pr\xE1cticas evidentes como "escribe c\xF3digo limpio"'),t()(),n(68,"tr")(69,"td"),e(70,"Gotchas no obvios del entorno de desarrollo"),t(),n(71,"td"),e(72,"Instrucciones de workflows espec\xEDficos (mejor en Skills)"),t()()()()(),i(73,"app-code-block",8),n(74,"h3"),e(75,"Importar archivos en CLAUDE.md"),t(),i(76,"app-code-block",8),n(77,"h3"),e(78,"Dar contexto rico y espec\xEDfico"),t(),i(79,"app-code-block",8),n(80,"h3"),e(81,"Entrevistar a Claude antes de implementar"),t(),n(82,"p"),e(83,"Para features grandes, deja que Claude haga las preguntas dif\xEDciles primero:"),t(),i(84,"app-code-block",8),n(85,"p"),e(86," Una vez generada la spec, iniciar una sesi\xF3n nueva para implementar \u2014 contexto limpio, enfocado en la implementaci\xF3n. "),t(),n(87,"app-callout",11)(88,"p"),e(89,' Es la t\xE9cnica de mayor impacto. Sin criterios de \xE9xito claros, Claude produce algo que "se ve bien" pero no funciona, y t\xFA eres el \xFAnico feedback loop. '),t(),i(90,"app-code-block",8),t(),n(91,"app-callout",12)(92,"ul")(93,"li")(94,"strong"),e(95,"La sesi\xF3n kitchen sink"),t(),e(96,": empiezas con una tarea, agregas otra no relacionada, vuelves a la primera. Contexto lleno de ruido. Soluci\xF3n: "),n(97,"code"),e(98,"/clear"),t(),e(99," entre tareas. "),t(),n(100,"li")(101,"strong"),e(102,"Corregir repetidamente"),t(),e(103,": Claude hace algo mal, correg\xEDs, sigue mal, correg\xEDs de nuevo. Contexto contaminado con intentos fallidos. Soluci\xF3n: despu\xE9s de 2 correcciones, "),n(104,"code"),e(105,"/clear"),t(),e(106," y escribir un prompt mejor. "),t(),n(107,"li")(108,"strong"),e(109,"La exploraci\xF3n infinita"),t(),e(110,': pides "investigar" algo sin scope. Claude lee cientos de archivos. Soluci\xF3n: scope la investigaci\xF3n o usa subagentes. '),t()()()(),n(111,"section",13)(112,"h2"),e(113,"10.2 \u2014 Multi-Agent Workflows"),t(),n(114,"p"),e(115," Claude Code escala horizontalmente. Una vez que dominas una sesi\xF3n, puedes multiplicar tu output con sesiones paralelas, modo no-interactivo y patrones de fan-out. "),t(),n(116,"h3"),e(117,"Patr\xF3n Writer/Reviewer"),t(),n(118,"p"),e(119," Un contexto fresco mejora la revisi\xF3n de c\xF3digo \u2014 Claude no tiene bias hacia c\xF3digo que \xE9l mismo escribi\xF3. Usar dos sesiones separadas: "),t(),n(120,"div",10)(121,"table")(122,"thead")(123,"tr")(124,"th"),e(125,"Session A (Writer)"),t(),n(126,"th"),e(127,"Session B (Reviewer)"),t()()(),n(128,"tbody")(129,"tr")(130,"td")(131,"code"),e(132,"Implement a rate limiter for our API endpoints"),t()(),i(133,"td"),t(),n(134,"tr"),i(135,"td"),n(136,"td")(137,"code"),e(138,"Review @src/middleware/rateLimiter.ts for edge cases, race conditions, and consistency with existing patterns."),t()()(),n(139,"tr")(140,"td")(141,"code"),e(142,"Here's the review: [output]. Address these issues."),t()(),i(143,"td"),t()()()(),n(144,"h3"),e(145,"Patr\xF3n TDD con sesiones separadas"),t(),i(146,"app-code-block",8),n(147,"h3"),e(148,"Fan-out para operaciones masivas"),t(),i(149,"app-code-block",8),n(150,"h3"),e(151,"Modo no-interactivo \u2014 integraci\xF3n con scripts y CI"),t(),i(152,"app-code-block",8),n(153,"h3"),e(154,"Subagentes para mantener el contexto limpio"),t(),n(155,"p"),e(156," Los subagentes corren en su propio context window y reportan un resumen. La exploraci\xF3n de archivos no contamina tu conversaci\xF3n principal. "),t(),i(157,"app-code-block",8),n(158,"h3"),e(159,"Agent Teams (experimental)"),t(),n(160,"p"),e(161," M\xFAltiples sesiones completas de Claude coordinadas por un team lead mediante mensajer\xEDa. "),t(),i(162,"app-code-block",8),n(163,"div",10)(164,"table")(165,"thead")(166,"tr")(167,"th"),e(168,"Caracter\xEDstica"),t(),n(169,"th"),e(170,"Subagentes"),t(),n(171,"th"),e(172,"Agent Teams"),t()()(),n(173,"tbody")(174,"tr")(175,"td"),e(176,"Context window"),t(),n(177,"td"),e(178,"Separado del principal"),t(),n(179,"td"),e(180,"Cada teammate tiene su propio"),t()(),n(181,"tr")(182,"td"),e(183,"Comunicaci\xF3n"),t(),n(184,"td"),e(185,"Reporta al finalizar"),t(),n(186,"td"),e(187,"SendMessage entre sesiones"),t()(),n(188,"tr")(189,"td"),e(190,"Costo en tokens"),t(),n(191,"td"),e(192,"Moderado"),t(),n(193,"td"),e(194,"~7x m\xE1s que sesi\xF3n est\xE1ndar"),t()(),n(195,"tr")(196,"td"),e(197,"Disponibilidad"),t(),n(198,"td"),e(199,"GA"),t(),n(200,"td"),e(201,"Experimental"),t()(),n(202,"tr")(203,"td"),e(204,"Mejor para"),t(),n(205,"td"),e(206,"Investigaci\xF3n, verificaci\xF3n, tasks aislados"),t(),n(207,"td"),e(208,"Tasks genuinamente paralelos y coordinados"),t()()()()(),n(209,"app-callout",14)(210,"p"),e(211," Cada teammate mantiene su propio context window como instancia separada de Claude. Los costos son aproximadamente proporcionales al n\xFAmero de teammates activos. Usar Sonnet para teammates, equipos peque\xF1os, y prompts de spawn enfocados. Terminar equipos cuando terminan su trabajo \u2014 teammates activos siguen consumiendo tokens aunque est\xE9n idle. "),t()()(),n(212,"section",15)(213,"h2"),e(214,"10.3 \u2014 Debugging con Claude"),t(),n(215,"p"),e(216," El debugging efectivo con Claude requiere darle la informaci\xF3n correcta desde el inicio y los medios para verificar que el fix funciona. "),t(),n(217,"h3"),e(218,"El principio central: verificaci\xF3n propia"),t(),n(219,"p"),e(220,' Si Claude no puede verificar que su fix funciona, puede producir algo que "se ve bien" pero no resuelve el problema. Siempre incluir un mecanismo de verificaci\xF3n: '),t(),i(221,"app-code-block",8),n(222,"h3"),e(223,"Dar la informaci\xF3n del error correcta"),t(),i(224,"app-code-block",8),n(225,"h3"),e(226,"Herramientas de diagn\xF3stico"),t(),n(227,"div",10)(228,"table")(229,"thead")(230,"tr")(231,"th"),e(232,"Herramienta"),t(),n(233,"th"),e(234,"C\xF3mo activar"),t(),n(235,"th"),e(236,"Qu\xE9 muestra"),t()()(),n(237,"tbody")(238,"tr")(239,"td")(240,"code"),e(241,"mcp__ide__getDiagnostics"),t()(),n(242,"td"),e(243,"Autom\xE1tico con extensi\xF3n VS Code"),t(),n(244,"td"),e(245,"Errores y warnings del Language Server (Problems panel)"),t()(),n(246,"tr")(247,"td"),e(248,"Diagnostic sharing en JetBrains"),t(),n(249,"td"),e(250,"Autom\xE1tico con plugin instalado"),t(),n(251,"td"),e(252,"Errores de lint y sintaxis del IDE en tiempo real"),t()(),n(253,"tr")(254,"td"),e(255,"Verbose mode"),t(),n(256,"td")(257,"code"),e(258,"Ctrl+O"),t(),e(259," en CLI"),t(),n(260,"td"),e(261,"Pensamiento interno de Claude (texto gris it\xE1lico)"),t()(),n(262,"tr")(263,"td"),e(264,"Plan Mode para an\xE1lisis"),t(),n(265,"td")(266,"code"),e(267,"Shift+Tab"),t(),e(268," o "),n(269,"code"),e(270,"--permission-mode plan"),t()(),n(271,"td"),e(272,"Claude analiza sin modificar nada \u2014 ideal para diagn\xF3stico"),t()(),n(273,"tr")(274,"td"),e(275,"/rewind"),t(),n(276,"td")(277,"code"),e(278,"/rewind"),t(),e(279," o doble "),n(280,"code"),e(281,"Esc"),t()(),n(282,"td"),e(283,"Restaurar c\xF3digo y conversaci\xF3n a checkpoint anterior"),t()()()()(),n(284,"h3"),e(285,"Debugging con Plan Mode"),t(),i(286,"app-code-block",8),n(287,"h3"),e(288,"Patrones de debugging efectivos"),t(),i(289,"app-code-block",8),n(290,"app-callout",16)(291,"p"),e(292," Corregir a Claude tan pronto como notes que va por mal camino. "),n(293,"code"),e(294,"Esc"),t(),e(295," detiene a Claude inmediatamente (el contexto se conserva). Redirigir es m\xE1s eficiente que dejar que termine y luego deshacer. Si corregiste el mismo problema m\xE1s de 2 veces: "),n(296,"code"),e(297,"/clear"),t(),e(298," y reescribir el prompt inicial con lo que aprendiste. "),t()()(),n(299,"section",17)(300,"h2"),e(301,"10.4 \u2014 Performance y Optimizaci\xF3n"),t(),n(302,"h3"),e(303,"Elegir el modelo correcto"),t(),n(304,"div",10)(305,"table")(306,"thead")(307,"tr")(308,"th"),e(309,"Alias"),t(),n(310,"th"),e(311,"Modelo actual"),t(),n(312,"th"),e(313,"Usar cuando"),t()()(),n(314,"tbody")(315,"tr")(316,"td")(317,"code"),e(318,"sonnet"),t()(),n(319,"td"),e(320,"Sonnet 4.6"),t(),n(321,"td"),e(322,"90% de tareas de coding diario \u2014 equilibrio ideal"),t()(),n(323,"tr")(324,"td")(325,"code"),e(326,"opus"),t()(),n(327,"td"),e(328,"Opus 4.6"),t(),n(329,"td"),e(330,"Arquitectura compleja, debugging dif\xEDcil, razonamiento profundo"),t()(),n(331,"tr")(332,"td")(333,"code"),e(334,"haiku"),t()(),n(335,"td"),e(336,"Haiku 4.5"),t(),n(337,"td"),e(338,"Subagentes de exploraci\xF3n, tareas simples y r\xE1pidas"),t()(),n(339,"tr")(340,"td")(341,"code"),e(342,"opusplan"),t()(),n(343,"td"),e(344,"Opus en Plan + Sonnet en ejecuci\xF3n"),t(),n(345,"td"),e(346,"Lo mejor de ambos: razonamiento de Opus, velocidad de Sonnet"),t()(),n(347,"tr")(348,"td")(349,"code"),e(350,"sonnet[1m]"),t()(),n(351,"td"),e(352,"Sonnet con 1M de contexto"),t(),n(353,"td"),e(354,"Sesiones largas con codebases enormes"),t()(),n(355,"tr")(356,"td")(357,"code"),e(358,"best"),t()(),n(359,"td"),e(360,"Opus 4.6"),t(),n(361,"td"),e(362,"Alias de conveniencia para el modelo m\xE1s capaz disponible"),t()()()()(),i(363,"app-code-block",8),n(364,"h3"),e(365,"Effort levels \u2014 profundidad del razonamiento"),t(),n(366,"p"),e(367," Controlan el razonamiento adaptativo de Opus 4.6 y Sonnet 4.6. El modelo asigna tokens de thinking din\xE1micamente seg\xFAn la complejidad. "),t(),n(368,"div",10)(369,"table")(370,"thead")(371,"tr")(372,"th"),e(373,"Nivel"),t(),n(374,"th"),e(375,"Comportamiento"),t(),n(376,"th"),e(377,"Cu\xE1ndo usar"),t()()(),n(378,"tbody")(379,"tr")(380,"td")(381,"code"),e(382,"low"),t()(),n(383,"td"),e(384,"Razonamiento m\xEDnimo, m\xE1s r\xE1pido y barato"),t(),n(385,"td"),e(386,"Tareas rutinarias donde la respuesta es obvia"),t()(),n(387,"tr")(388,"td")(389,"code"),e(390,"medium"),t()(),n(391,"td"),e(392,"Equilibrio velocidad/profundidad"),t(),n(393,"td")(394,"strong"),e(395,"Default recomendado"),t(),e(396," para 90% de tareas"),t()(),n(397,"tr")(398,"td")(399,"code"),e(400,"high"),t()(),n(401,"td"),e(402,"Razonamiento profundo"),t(),n(403,"td"),e(404,"Debugging dif\xEDcil, decisiones arquitect\xF3nicas complejas"),t()(),n(405,"tr")(406,"td")(407,"code"),e(408,"max"),t()(),n(409,"td"),e(410,"Sin l\xEDmite de tokens de thinking (solo Opus 4.6)"),t(),n(411,"td"),e(412,"Problemas de m\xE1xima dificultad. No persiste entre sesiones."),t()()()()(),i(413,"app-code-block",8),n(414,"app-callout",18)(415,"p"),e(416," Usar "),n(417,"code"),e(418,"high"),t(),e(419," o "),n(420,"code"),e(421,"max"),t(),e(422,' en tareas rutinarias puede hacer que Claude "piense demasiado" y sobre-complique soluciones simples. Reservar niveles altos para problemas que genuinamente lo necesitan. '),t()(),n(423,"h3"),e(424,"Prompt caching (autom\xE1tico)"),t(),n(425,"p"),e(426," Claude Code usa prompt caching por defecto \u2014 el system prompt, CLAUDE.md y otros contenidos repetidos se reutilizan entre requests, reduciendo latencia y costo. "),t(),i(427,"app-code-block",8),n(428,"h3"),e(429,"Estrategias para reducir tokens y costos"),t(),i(430,"app-code-block",8),n(431,"h3"),e(432,"Tabla de estrategias de reducci\xF3n de tokens"),t(),n(433,"div",10)(434,"table")(435,"thead")(436,"tr")(437,"th"),e(438,"Estrategia"),t(),n(439,"th"),e(440,"T\xE9cnica"),t(),n(441,"th"),e(442,"Impacto"),t()()(),n(443,"tbody")(444,"tr")(445,"td"),e(446,"Gesti\xF3n de contexto"),t(),n(447,"td")(448,"code"),e(449,"/clear"),t(),e(450," entre tareas, "),n(451,"code"),e(452,"/compact"),t(),e(453," en sesiones largas"),t(),n(454,"td"),e(455,"Alto \u2014 elimina tokens irrelevantes"),t()(),n(456,"tr")(457,"td"),e(458,"Modelo correcto"),t(),n(459,"td"),e(460,"Sonnet para coding diario, Haiku para subagentes simples"),t(),n(461,"td"),e(462,"Alto \u2014 Opus cuesta ~5x m\xE1s que Sonnet"),t()(),n(463,"tr")(464,"td"),e(465,"Effort level"),t(),n(466,"td"),e(467,"Medium por default, High solo cuando se necesita"),t(),n(468,"td"),e(469,"Medio \u2014 thinking tokens cuentan como output"),t()(),n(470,"tr")(471,"td"),e(472,"Subagentes para operaciones verbosas"),t(),n(473,"td"),e(474,"Delegarles tests, logs, exploraci\xF3n de archivos"),t(),n(475,"td"),e(476,"Alto \u2014 output verbose no contamina contexto principal"),t()(),n(477,"tr")(478,"td"),e(479,"Skills en lugar de CLAUDE.md"),t(),n(480,"td"),e(481,"Instrucciones de workflows espec\xEDficos \u2192 Skills (on-demand)"),t(),n(482,"td"),e(483,"Medio \u2014 CLAUDE.md carga en cada sesi\xF3n"),t()(),n(484,"tr")(485,"td"),e(486,"MCP servers"),t(),n(487,"td"),e(488,"Deshabilitar servidores no usados ("),n(489,"code"),e(490,"/mcp"),t(),e(491,")"),t(),n(492,"td"),e(493,"Bajo-Medio \u2014 herramientas deferred, pero tool names en contexto"),t()(),n(494,"tr")(495,"td"),e(496,"Prompts espec\xEDficos"),t(),n(497,"td"),e(498,'"a\xF1ade validaci\xF3n al login en auth.ts" vs "mejora el c\xF3digo"'),t(),n(499,"td"),e(500,"Medio \u2014 evita scanning innecesario del codebase"),t()(),n(501,"tr")(502,"td"),e(503,"Hooks para preprocessing"),t(),n(504,"td"),e(505,"Filtrar logs/test output antes de que Claude los vea"),t(),n(506,"td"),e(507,"Alto \u2014 puede reducir miles de tokens a cientos"),t()()()()(),n(508,"h3"),e(509,"Checkpoints y rewind"),t(),i(510,"app-code-block",8),t(),n(511,"section",19)(512,"h2"),e(513,"10.5 \u2014 Seguridad"),t(),n(514,"p"),e(515," Claude Code usa una arquitectura basada en permisos con protecciones integradas, pero la seguridad final depende de las decisiones del usuario. "),t(),n(516,"h3"),e(517,"Protecciones integradas"),t(),n(518,"div",3),i(519,"app-concept-card",20)(520,"app-concept-card",21)(521,"app-concept-card",22)(522,"app-concept-card",23),t(),n(523,"h3"),e(524,"Prompt injection \u2014 mitigaciones"),t(),n(525,"p"),e(526," Un atacante puede intentar insertar instrucciones maliciosas en archivos que Claude lee. Las protecciones actuales: "),t(),n(527,"ul")(528,"li")(529,"strong"),e(530,"An\xE1lisis de contexto completo"),t(),e(531,": detecta instrucciones potencialmente da\xF1inas analizando el request completo "),t(),n(532,"li")(533,"strong"),e(534,"Comandos bash sospechosos"),t(),e(535,": requieren aprobaci\xF3n manual incluso si est\xE1n en la allowlist "),t(),n(536,"li")(537,"strong"),e(538,"Fail-closed matching"),t(),e(539,": comandos no reconocidos requieren aprobaci\xF3n manual por default "),t(),n(540,"li")(541,"strong"),e(542,"Descripciones en lenguaje natural"),t(),e(543,": comandos bash complejos incluyen explicaci\xF3n antes de pedir aprobaci\xF3n "),t()(),i(544,"app-code-block",8),n(545,"h3"),e(546,"Modos de permiso para reducir riesgo"),t(),i(547,"app-code-block",8),n(548,"h3"),e(549,"Gesti\xF3n de secrets"),t(),i(550,"app-code-block",8),n(551,"app-callout",24)(552,"ul")(553,"li"),e(554," Revisar todos los cambios propuestos antes de aprobar \u2014 especialmente scripts bash con efectos secundarios "),t(),n(555,"li"),e(556," Usar "),n(557,"code"),e(558,"devcontainers"),t(),e(559," para aislamiento adicional en proyectos sensibles "),t(),n(560,"li"),e(561,"Auditar configuraci\xF3n peri\xF3dicamente con "),n(562,"code"),e(563,"/permissions"),t()(),n(564,"li"),e(565," Usar VS Code Restricted Mode cuando trabajas con c\xF3digo no confiable "),t(),n(566,"li"),e(567," Para equipos: usar "),n(568,"code"),e(569,"managed-settings.json"),t(),e(570," para forzar pol\xEDticas organizacionales "),t(),n(571,"li"),e(572,"Monitorear uso con OpenTelemetry si tienes equipos grandes"),t(),n(573,"li"),e(574,"Reportar comportamiento sospechoso con "),n(575,"code"),e(576,"/feedback"),t()()()(),n(577,"app-callout",25)(578,"ul")(579,"li"),e(580,"Pipear contenido no confiable a Claude: "),n(581,"code"),e(582,"cat suspicious.txt | claude"),t()(),n(583,"li"),e(584,"Habilitar "),n(585,"code"),e(586,"bypassPermissions"),t(),e(587," fuera de un sandbox sin internet"),t(),n(588,"li"),e(589,"Dar permisos de escritura irrestrictos en repos con c\xF3digo sensible"),t(),n(590,"li"),e(591,"Confiar ciegamente en MCP servers de terceros no auditados"),t(),n(592,"li"),e(593,"Habilitar WebDAV en Windows \u2014 riesgo de network requests bypass"),t(),n(594,"li"),e(595," No revisar cambios a archivos de configuraci\xF3n cr\xEDticos (migrations, CI, secrets) "),t()()(),n(596,"h3"),e(597,"Seguridad para equipos enterprise"),t(),i(598,"app-code-block",8),t(),n(599,"section",26)(600,"h2"),e(601,"10.6 \u2014 Resumen \u2014 Cu\xE1ndo aplicar cada t\xE9cnica"),t(),n(602,"div",10)(603,"table")(604,"thead")(605,"tr")(606,"th"),e(607,"Situaci\xF3n"),t(),n(608,"th"),e(609,"T\xE9cnica recomendada"),t()()(),n(610,"tbody")(611,"tr")(612,"td"),e(613,"Feature grande con m\xFAltiples archivos"),t(),n(614,"td"),e(615,"Ciclo 4 fases + CLAUDE.md con criterios del proyecto"),t()(),n(616,"tr")(617,"td"),e(618,"Claude hace cosas que no quieres repetidamente"),t(),n(619,"td"),e(620,"Actualizar CLAUDE.md \u2014 si ya es largo, usar Hooks en su lugar"),t()(),n(621,"tr")(622,"td"),e(623,"Sesi\xF3n con contexto contaminado por intentos fallidos"),t(),n(624,"td")(625,"code"),e(626,"/clear"),t(),e(627," + reescribir prompt con lo aprendido"),t()(),n(628,"tr")(629,"td"),e(630,"Migraci\xF3n masiva de 100+ archivos"),t(),n(631,"td"),e(632,"Fan-out con "),n(633,"code"),e(634,"claude -p"),t(),e(635," en loop + "),n(636,"code"),e(637,"--allowedTools"),t()()(),n(638,"tr")(639,"td"),e(640,"Code review sin bias"),t(),n(641,"td"),e(642,"Sesi\xF3n separada (Writer/Reviewer) con contexto fresco"),t()(),n(643,"tr")(644,"td"),e(645,"Investigaci\xF3n de codebase sin contaminar contexto"),t(),n(646,"td"),e(647,"Subagentes para exploraci\xF3n, reportan resumen al principal"),t()(),n(648,"tr")(649,"td"),e(650,"Debugging de problema complejo y oscuro"),t(),n(651,"td")(652,"code"),e(653,"/effort high"),t(),e(654," + Plan Mode para an\xE1lisis + subagente para exploraci\xF3n "),t()(),n(655,"tr")(656,"td"),e(657,"Tasks rutinarias donde la velocidad importa"),t(),n(658,"td"),e(659,"Sonnet + "),n(660,"code"),e(661,"/effort low"),t(),e(662," o "),n(663,"code"),e(664,"medium"),t()()(),n(665,"tr")(666,"td"),e(667,"Decisiones arquitect\xF3nicas importantes"),t(),n(668,"td")(669,"code"),e(670,"opusplan"),t(),e(671," alias \u2014 Opus para planear, Sonnet para ejecutar"),t()(),n(672,"tr")(673,"td"),e(674,"Sesi\xF3n larga con codebase enorme"),t(),n(675,"td")(676,"code"),e(677,"sonnet[1m]"),t(),e(678," o "),n(679,"code"),e(680,"opus[1m]"),t(),e(681," para 1M token context window"),t()(),n(682,"tr")(683,"td"),e(684,"Trabajo con c\xF3digo no confiable o auditor\xEDa de seguridad"),t(),n(685,"td"),e(686,"Plan Mode + revisar cada cambio + devcontainer para aislamiento"),t()()()()()(),i(687,"app-module-nav",27),t()),r&2&&(o(23),s("code",a.code.phase4Cycle),o(50),s("code",a.code.claudeMdExample),o(3),s("code",a.code.claudeMdImports),o(3),s("code",a.code.richContext),o(5),s("code",a.code.interviewClaude),o(6),s("code",a.code.verificationExample),o(56),s("code",a.code.tddSessions),o(3),s("code",a.code.fanOut),o(3),s("code",a.code.nonInteractive),o(5),s("code",a.code.subagentsContext),o(5),s("code",a.code.agentTeamsConfig),o(59),s("code",a.code.debugVerification),o(3),s("code",a.code.debugErrorInfo),o(62),s("code",a.code.debugPlanMode),o(3),s("code",a.code.debugPatterns),o(74),s("code",a.code.modelCommands),o(50),s("code",a.code.effortCommands),o(14),s("code",a.code.promptCaching),o(3),s("code",a.code.tokenStrategies),o(80),s("code",a.code.checkpoints),o(34),s("code",a.code.promptInjection),o(3),s("code",a.code.permissionModes),o(3),s("code",a.code.secretsManagement),o(48),s("code",a.code.enterpriseSecurity),o(89),s("prev",a.prev)("next",a.next))},dependencies:[u,E,m,p,c],encapsulation:2})};export{x as Modulo10Component};

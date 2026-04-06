import{a as p}from"./chunk-HSI73NXQ.js";import{a as c,b as u,c as E,d as x}from"./chunk-C7DOBPJR.js";import{e as a,f as d,i as l,j as n,k as t,l as i,t as e,u as m}from"./chunk-HIV27VVN.js";var S=class s{apiKeyRef="${{ secrets.ANTHROPIC_API_KEY }}";prev={label:"Modulo 8: MCP",route:"/cursos/claude-code/modulo-08"};next={label:"Modulo 10: T\xE9cnicas Avanzadas",route:"/cursos/claude-code/modulo-10"};code={triggers:`
<span class="keyword">on</span>:
  <span class="string">issue_comment</span>:           <span class="comment"># comentarios en issues y PRs</span>
    types: [created]
  <span class="string">pull_request_review_comment</span>:
    types: [created]
  <span class="string">issues</span>:                   <span class="comment"># nuevo issue abierto/asignado</span>
    types: [opened, assigned]
  <span class="string">pull_request</span>:             <span class="comment"># PR abierto o actualizado</span>
    types: [opened, synchronize]
  <span class="string">schedule</span>:                 <span class="comment"># cron programado</span>
    - cron: <span class="string">"0 9 * * 1-5"</span>
  <span class="string">push</span>:                     <span class="comment"># push a rama espec\xEDfica</span>
    branches: [main]`,basicWorkflow:`
<span class="keyword">name</span>: Claude Code
<span class="keyword">on</span>:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

<span class="keyword">jobs</span>:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>`,reviewWorkflow:`
<span class="keyword">name</span>: Automated PR Review
<span class="keyword">on</span>:
  pull_request:
    types: [opened, synchronize]

<span class="keyword">jobs</span>:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Review this PR for code quality, security issues,
            and adherence to project standards. Post inline review comments."</span>
          claude_args: <span class="string">"--max-turns 5 --model claude-sonnet-4-6"</span>`,claudeArgs:`
claude_args: <span class="string">"--max-turns 10 --model claude-sonnet-4-6 --allowedTools Edit,Write,Bash"</span>

<span class="comment"># M\xFAltiples flags con bloque multilinea</span>
claude_args: |
  --max-turns 5
  --model claude-opus-4-6
  --append-system-prompt <span class="string">"Always add unit tests for changes"</span>
  --mcp-config <span class="string">.mcp.json</span>`,bedrockWorkflow:`
<span class="comment"># AWS Bedrock con OIDC (sin credenciales est\xE1ticas)</span>
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: <span class="string">\${{ secrets.AWS_ROLE_TO_ASSUME }}</span>
    aws-region: us-west-2

- uses: anthropics/claude-code-action@v1
  with:
    github_token: <span class="string">\${{ steps.app-token.outputs.token }}</span>
    use_bedrock: <span class="string">"true"</span>
    claude_args: <span class="string">'--model us.anthropic.claude-sonnet-4-6 --max-turns 10'</span>`,atMentions:`
<span class="comment"># Referenciar archivo con rango de l\xEDneas</span>
Explain the logic in @auth.ts#5-10

<span class="comment"># Fuzzy matching \u2014 encuentra auth.js, AuthService.ts, etc.</span>
Review @auth

<span class="comment"># Directorio completo</span>
What's the structure of @src/components/

<span class="comment"># Recurso MCP</span>
Show me @github:repos/owner/repo/issues

<span class="comment"># Atajo: selecciona c\xF3digo y presiona Option+K para insertar referencia</span>
Check this: @UserController.ts#45-67`,vscodeUri:`
<span class="comment"># URI handler \u2014 abre nueva tab en VS Code</span>
open "vscode://anthropic.claude-code/open"

<span class="comment"># Con prompt pre-cargado</span>
open "vscode://anthropic.claude-code/open?prompt=review%20my%20changes"

<span class="comment"># Retomando sesi\xF3n espec\xEDfica</span>
open "vscode://anthropic.claude-code/open?session=abc123"`,jetbrainsTerminal:`
<span class="comment"># Conectar Claude Code externo al IDE JetBrains activo</span>
claude
/ide

<span class="comment"># Asegurarse de iniciar Claude desde el mismo directorio que el proyecto</span>
cd /path/to/project && claude`,cronSyntax:`
<span class="comment"># Formato: minuto hora d\xEDa-del-mes mes d\xEDa-de-la-semana</span>
<span class="string">"0 9 * * *"</span>        <span class="comment"># todos los d\xEDas a las 9am UTC</span>
<span class="string">"0 9 * * 1-5"</span>      <span class="comment"># lunes a viernes 9am UTC</span>
<span class="string">"0 */6 * * *"</span>      <span class="comment"># cada 6 horas</span>
<span class="string">"0 9 1 * *"</span>        <span class="comment"># primer d\xEDa de cada mes 9am</span>
<span class="string">"30 14 * * 5"</span>      <span class="comment"># viernes 2:30pm UTC</span>

<span class="comment"># Nota: GitHub Actions cron usa UTC siempre</span>`,dailyCron:`
<span class="keyword">name</span>: Daily PR Review
<span class="keyword">on</span>:
  schedule:
    - cron: <span class="string">"0 9 * * 1-5"</span>   <span class="comment"># 9am lunes a viernes UTC</span>

<span class="keyword">jobs</span>:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Review all open PRs labeled 'needs-review'.
            Post inline comments for any issues found.
            Post a summary in the PR description when done."</span>
          claude_args: <span class="string">"--max-turns 15 --model claude-sonnet-4-6"</span>`,securityAudit:`
<span class="keyword">name</span>: Weekly Security Audit
<span class="keyword">on</span>:
  schedule:
    - cron: <span class="string">"0 8 * * 1"</span>    <span class="comment"># lunes 8am UTC</span>
  workflow_dispatch:              <span class="comment"># tambi\xE9n permite ejecuci\xF3n manual</span>

<span class="keyword">permissions</span>:
  contents: write
  issues: write
  pull-requests: write

<span class="keyword">jobs</span>:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Perform a security audit of this codebase:
            1. Check for hardcoded secrets or credentials
            2. Review authentication and authorization logic
            3. Check for common vulnerabilities (SQL injection, XSS, etc.)
            4. Review dependency versions for known CVEs
            Create a GitHub issue titled 'Weekly Security Report - [date]'
            with your findings categorized by severity (Critical/High/Medium/Low).
            If you find critical issues, label the issue as 'critical'."</span>
          claude_args: <span class="string">"--max-turns 20 --model claude-opus-4-6"</span>`,gitCommands:`
<span class="comment"># Claude puede hacer todo el flujo git por ti</span>
commit my changes with a descriptive message
create a pr for this feature with a detailed description
summarize the changes I've made to the auth module

<span class="comment"># Resume sesi\xF3n ligada a un PR espec\xEDfico</span>
claude --from-pr 123

<span class="comment"># Setup GitHub App (desde dentro de Claude)</span>
/install-github-app`,worktrees:`
<span class="comment"># Crear worktree con nombre espec\xEDfico</span>
claude --worktree feature-auth
<span class="comment"># Crea .claude/worktrees/feature-auth/ con rama worktree-feature-auth</span>

<span class="comment"># Worktree con nombre auto-generado</span>
claude --worktree
<span class="comment"># Genera nombre como "bright-running-fox"</span>

<span class="comment"># Dos sesiones paralelas sin conflictos</span>
claude --worktree feature-payments   <span class="comment"># terminal 1</span>
claude --worktree bugfix-login       <span class="comment"># terminal 2</span>`,worktreeinclude:`
<span class="comment"># .worktreeinclude en la ra\xEDz del repo</span>
.env
.env.local
config/secrets.json
.credentials`,worktreeCleanup:`
<span class="comment"># Gesti\xF3n manual de worktrees</span>
git worktree list
git worktree remove .claude/worktrees/feature-auth

<span class="comment"># Re-sincronizar rama base si cambi\xF3 el default branch en GitHub</span>
git remote set-head origin -a`,resumeCommands:`
<span class="comment"># Retomar la conversaci\xF3n m\xE1s reciente del directorio actual</span>
claude --continue

<span class="comment"># Abrir picker interactivo de conversaciones</span>
claude --resume

<span class="comment"># Retomar por nombre</span>
claude --resume auth-refactor

<span class="comment"># Nombrar sesi\xF3n al iniciar</span>
claude -n auth-refactor

<span class="comment"># Retomar sesi\xF3n ligada a un PR</span>
claude --from-pr 456`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=d({type:s,selectors:[["app-modulo-09"]],decls:906,vars:20,consts:[["number","M\xF3dulo 9","title","Integraciones y Workflows","subtitle","GitHub Actions, CI/CD, extensiones IDE y tareas programadas con Claude Code"],[1,"container"],["id","github-actions"],[3,"code"],[1,"concept-grid"],["title","Modo interactivo","description","Responde a menciones @claude en comentarios de PRs e issues. No requiere prompt."],["title","Modo automatizaci\xF3n","description","Se ejecuta con un prompt fijo cuando ocurre un evento (PR abierto, cron, push). No necesita trigger humano."],[1,"table-wrapper"],["type","warn","title","\u26A0 Migraci\xF3n Beta \u2192 v1.0"],[1,"table-wrapper",2,"margin-top","0.75rem"],["type","good","title","\u2713 Buenas pr\xE1cticas GitHub Actions"],["type","bad","title","\u2717 Errores comunes"],["id","vscode"],["title","Icono \u2726 Editor Toolbar","description","Esquina superior derecha del editor. S\xF3lo aparece cuando hay un archivo abierto. Forma m\xE1s r\xE1pida."],["title","Activity Bar","description","Barra lateral izquierda \u2014 siempre visible. Abre lista de sesiones. Click en sesi\xF3n = tab completo."],["title","Status Bar","description","\u2731 Claude Code en la esquina inferior derecha. Funciona aunque no haya archivos abiertos."],["title","Command Palette","description","Cmd+Shift+P \u2192 buscar 'Claude Code'. Opciones: abrir en tab, sidebar, nueva ventana."],["type","info","title","\u2139 MCP server IDE interno"],["id","jetbrains"],["title","Diff viewer nativo","description","Los cambios de Claude se muestran en el visor de diffs del IDE en lugar del terminal."],["title","Contexto de selecci\xF3n","description","La selecci\xF3n activa del editor se comparte autom\xE1ticamente con Claude."],["title","Diagn\xF3sticos autom\xE1ticos","description","Errores de lint y sintaxis del IDE se comparten con Claude mientras trabajas."],["title","File reference shortcuts","description","Insertar referencias @File#L1-99 directamente desde el editor."],["type","warn","title","\u26A0 Casos especiales"],["type","bad","title","\u2717 Diferencia clave vs VS Code"],["id","scheduled-agents"],["title","Daily standup report","description","Cada ma\xF1ana: resume commits de ayer, issues abiertos, PRs bloqueados. Postea en Slack o crea un issue."],["title","Dependency audit semanal","description","Cada lunes: revisa si hay vulnerabilidades en dependencias y crea PR con actualizaciones."],["title","Code review autom\xE1tico","description","En cada PR abierto: Claude revisa calidad, seguridad y adherencia a est\xE1ndares."],["title","Stale PR cleanup","description","Semanal: identifica PRs sin actividad por m\xE1s de 2 semanas y agrega etiqueta o comenta."],["type","good","title","\u2713 Buenas pr\xE1cticas para tareas programadas"],["type","bad","title","\u2717 Anti-patrones en scheduled agents"],["id","git-advanced"],["type","info","title","\u2139 .gitignore recomendado"],["id","resumen"],[3,"prev","next"]],template:function(o,r){o&1&&(i(0,"app-module-header",0),n(1,"div",1)(2,"section",2)(3,"h2"),e(4,"9.1 \u2014 GitHub Actions"),t(),n(5,"p"),e(6," Claude Code se integra con GitHub a trav\xE9s de la action oficial "),n(7,"code"),e(8,"anthropics/claude-code-action@v1"),t(),e(9,". Con un simple "),n(10,"code"),e(11,"@claude"),t(),e(12," en cualquier PR o issue, Claude puede analizar c\xF3digo, crear PRs, implementar features y corregir bugs \u2014 todo siguiendo los est\xE1ndares del proyecto. "),t(),n(13,"h3"),e(14,"Setup r\xE1pido"),t(),n(15,"p"),e(16,"La forma m\xE1s f\xE1cil es ejecutar el comando desde el terminal de Claude Code:"),t(),i(17,"app-code-block",3),n(18,"p"),e(19," Este comando gu\xEDa la instalaci\xF3n de la GitHub App y los secrets necesarios. Requiere ser admin del repositorio. Para Bedrock/Vertex, hacer setup manual. "),t(),n(20,"h3"),e(21,"Setup manual (3 pasos)"),t(),n(22,"ol")(23,"li"),e(24,"Instalar la "),n(25,"strong"),e(26,"GitHub App de Claude"),t(),e(27," en el repositorio (permisos: Contents, Issues, Pull requests \u2014 lectura y escritura)"),t(),n(28,"li"),e(29,"Agregar "),n(30,"code"),e(31,"ANTHROPIC_API_KEY"),t(),e(32," a los secrets del repositorio"),t(),n(33,"li"),e(34,"Copiar el workflow desde "),n(35,"code"),e(36,"examples/claude.yml"),t(),e(37," a "),n(38,"code"),e(39,".github/workflows/"),t()()(),n(40,"h3"),e(41,"Dos modos de operaci\xF3n (auto-detectados en v1)"),t(),n(42,"div",4),i(43,"app-concept-card",5)(44,"app-concept-card",6),t(),n(45,"h3"),e(46,"Triggers disponibles"),t(),i(47,"app-code-block",3),n(48,"h3"),e(49,"Workflow b\xE1sico \u2014 responde a @claude"),t(),i(50,"app-code-block",3),n(51,"h3"),e(52,"Workflow de code review autom\xE1tico"),t(),i(53,"app-code-block",3),n(54,"h3"),e(55,"Par\xE1metros de la action v1"),t(),n(56,"div",7)(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Par\xE1metro"),t(),n(62,"th"),e(63,"Descripci\xF3n"),t(),n(64,"th"),e(65,"Requerido"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"code"),e(70,"prompt"),t()(),n(71,"td"),e(72,"Instrucciones (texto plano o nombre de skill). Opcional si hay trigger phrase."),t(),n(73,"td"),e(74,"No*"),t()(),n(75,"tr")(76,"td")(77,"code"),e(78,"claude_args"),t()(),n(79,"td"),e(80,"Flags del CLI: "),n(81,"code"),e(82,"--max-turns"),t(),e(83,", "),n(84,"code"),e(85,"--model"),t(),e(86,", "),n(87,"code"),e(88,"--allowedTools"),t(),e(89,", etc."),t(),n(90,"td"),e(91,"No"),t()(),n(92,"tr")(93,"td")(94,"code"),e(95,"anthropic_api_key"),t()(),n(96,"td"),e(97,"API key de Claude desde secrets del repo"),t(),n(98,"td"),e(99,"S\xED (API directa)"),t()(),n(100,"tr")(101,"td")(102,"code"),e(103,"github_token"),t()(),n(104,"td"),e(105,"Token GitHub para acceso a la API. Usar con GitHub App personalizada."),t(),n(106,"td"),e(107,"No"),t()(),n(108,"tr")(109,"td")(110,"code"),e(111,"trigger_phrase"),t()(),n(112,"td"),e(113,"Frase que activa Claude. Default: "),n(114,"code"),e(115,"@claude"),t()(),n(116,"td"),e(117,"No"),t()(),n(118,"tr")(119,"td")(120,"code"),e(121,"use_bedrock"),t()(),n(122,"td"),e(123,"Usar AWS Bedrock en lugar de la API de Claude"),t(),n(124,"td"),e(125,"No"),t()(),n(126,"tr")(127,"td")(128,"code"),e(129,"use_vertex"),t()(),n(130,"td"),e(131,"Usar Google Vertex AI en lugar de la API de Claude"),t(),n(132,"td"),e(133,"No"),t()()()()(),n(134,"h3"),e(135,"Argumentos CLI comunes en "),n(136,"code"),e(137,"claude_args"),t()(),i(138,"app-code-block",3),n(139,"app-callout",8)(140,"p"),e(141,"Si usas la versi\xF3n beta, los nombres de par\xE1metros cambiaron:"),t(),n(142,"div",9)(143,"table")(144,"thead")(145,"tr")(146,"th"),e(147,"Beta (obsoleto)"),t(),n(148,"th"),e(149,"v1.0 (actual)"),t()()(),n(150,"tbody")(151,"tr")(152,"td")(153,"code"),e(154,"direct_prompt"),t()(),n(155,"td")(156,"code"),e(157,"prompt"),t()()(),n(158,"tr")(159,"td")(160,"code"),e(161,"custom_instructions"),t()(),n(162,"td")(163,"code"),e(164,"claude_args: --append-system-prompt"),t()()(),n(165,"tr")(166,"td")(167,"code"),e(168,"max_turns"),t()(),n(169,"td")(170,"code"),e(171,"claude_args: --max-turns"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"model"),t()(),n(176,"td")(177,"code"),e(178,"claude_args: --model"),t()()(),n(179,"tr")(180,"td")(181,"code"),e(182,"allowed_tools"),t()(),n(183,"td")(184,"code"),e(185,"claude_args: --allowedTools"),t()()(),n(186,"tr")(187,"td")(188,"code"),e(189,'mode: "tag"'),t()(),n(190,"td"),e(191,"Eliminado (auto-detectado)"),t()()()()()(),n(192,"h3"),e(193,"Enterprise: AWS Bedrock y Google Vertex AI"),t(),n(194,"p"),e(195,"Para entornos enterprise con control de residencia de datos:"),t(),i(196,"app-code-block",3),n(197,"app-callout",10)(198,"ul")(199,"li"),e(200,"Usar siempre "),n(201,"code"),e(202),t(),e(203," \u2014 nunca hardcodear la API key en el YAML"),t(),n(204,"li"),e(205,"Configurar "),n(206,"code"),e(207,"CLAUDE.md"),t(),e(208," en el root del repo para que Claude respete los est\xE1ndares del proyecto"),t(),n(209,"li"),e(210,"Limitar permisos del job al m\xEDnimo necesario ("),n(211,"code"),e(212,"contents: write"),t(),e(213,", etc.)"),t(),n(214,"li"),e(215,"Usar "),n(216,"code"),e(217,"--max-turns"),t(),e(218," para evitar iteraciones excesivas y costos inesperados"),t(),n(219,"li"),e(220,"Configurar timeouts a nivel de job para evitar workflows que se queden colgados"),t()()(),n(221,"app-callout",11)(222,"ul")(223,"li"),e(224,"Hardcodear la API key directamente en el workflow YAML \u2014 queda expuesta en git"),t(),n(225,"li"),e(226,"No configurar "),n(227,"code"),e(228,"--max-turns"),t(),e(229," \u2014 Claude puede ejecutar muchas iteraciones costosas"),t(),n(230,"li"),e(231,"Usar "),n(232,"code"),e(233,"GITHUB_TOKEN"),t(),e(234," (Actions user) en lugar de la GitHub App \u2014 los CI no se activan con commits del Actions user"),t(),n(235,"li"),e(236,"Usar "),n(237,"code"),e(238,"@beta"),t(),e(239," en lugar de "),n(240,"code"),e(241,"@v1"),t(),e(242," \u2014 la versi\xF3n beta est\xE1 deprecada"),t()()()(),n(243,"section",12)(244,"h2"),e(245,"9.2 \u2014 Extensi\xF3n VS Code"),t(),n(246,"p"),e(247," La extensi\xF3n "),n(248,"code"),e(249,"anthropic.claude-code"),t(),e(250," proporciona una interfaz gr\xE1fica nativa integrada directamente en VS Code. La extensi\xF3n incluye la CLI \u2014 comparten historial de conversaciones, settings y MCP servers. "),t(),n(251,"h3"),e(252,"Requisitos e instalaci\xF3n"),t(),n(253,"ul")(254,"li"),e(255,"VS Code 1.98.0 o superior"),t(),n(256,"li"),e(257,"Cuenta de Anthropic (o proveedor de terceros configurado)"),t(),n(258,"li"),e(259,"Instalar desde la marketplace: buscar "),n(260,"strong"),e(261,'"Claude Code"'),t(),e(262," o presionar "),n(263,"code"),e(264,"Cmd+Shift+X"),t()()(),n(265,"h3"),e(266,"C\xF3mo abrir el panel"),t(),n(267,"div",4),i(268,"app-concept-card",13)(269,"app-concept-card",14)(270,"app-concept-card",15)(271,"app-concept-card",16),t(),n(272,"h3"),e(273,"Modos de permiso"),t(),n(274,"div",7)(275,"table")(276,"thead")(277,"tr")(278,"th"),e(279,"Modo"),t(),n(280,"th"),e(281,"Comportamiento"),t(),n(282,"th"),e(283,"Cu\xE1ndo usar"),t()()(),n(284,"tbody")(285,"tr")(286,"td")(287,"strong"),e(288,"Normal"),t()(),n(289,"td"),e(290,"Claude pide permiso antes de cada acci\xF3n"),t(),n(291,"td"),e(292,"Trabajo general, m\xE1ximo control"),t()(),n(293,"tr")(294,"td")(295,"strong"),e(296,"Plan"),t()(),n(297,"td"),e(298,"Claude describe el plan y espera aprobaci\xF3n. El plan se abre como markdown editable."),t(),n(299,"td"),e(300,"Cambios complejos, multi-archivo"),t()(),n(301,"tr")(302,"td")(303,"strong"),e(304,"Auto-accept"),t()(),n(305,"td"),e(306,"Claude hace edits sin pedir permiso"),t(),n(307,"td"),e(308,"Tareas rutinarias de confianza"),t()()()()(),n(309,"h3"),e(310,"Shortcuts VS Code"),t(),n(311,"div",7)(312,"table")(313,"thead")(314,"tr")(315,"th"),e(316,"Acci\xF3n"),t(),n(317,"th"),e(318,"Mac"),t(),n(319,"th"),e(320,"Windows/Linux"),t()()(),n(321,"tbody")(322,"tr")(323,"td"),e(324,"Toggle foco editor \u2194 Claude"),t(),n(325,"td")(326,"code"),e(327,"Cmd+Esc"),t()(),n(328,"td")(329,"code"),e(330,"Ctrl+Esc"),t()()(),n(331,"tr")(332,"td"),e(333,"Nueva conversaci\xF3n en tab"),t(),n(334,"td")(335,"code"),e(336,"Cmd+Shift+Esc"),t()(),n(337,"td")(338,"code"),e(339,"Ctrl+Shift+Esc"),t()()(),n(340,"tr")(341,"td"),e(342,"Insertar @-mention (archivo+l\xEDneas)"),t(),n(343,"td")(344,"code"),e(345,"Option+K"),t()(),n(346,"td")(347,"code"),e(348,"Alt+K"),t()()(),n(349,"tr")(350,"td"),e(351,"Nueva conversaci\xF3n (Claude focused)"),t(),n(352,"td")(353,"code"),e(354,"Cmd+N"),t()(),n(355,"td")(356,"code"),e(357,"Ctrl+N"),t()()(),n(358,"tr")(359,"td"),e(360,"Toggle thinking mode"),t(),n(361,"td")(362,"code"),e(363,"Option+T"),t()(),n(364,"td")(365,"code"),e(366,"Alt+T"),t()()()()()(),n(367,"h3"),e(368,"@-mentions y referencias de archivos"),t(),i(369,"app-code-block",3),n(370,"h3"),e(371,"Checkpoints \u2014 rewind del c\xF3digo"),t(),n(372,"p"),e(373," VS Code registra cada edici\xF3n de Claude como checkpoint. Al pasar el cursor sobre cualquier mensaje, aparece el bot\xF3n de rewind con tres opciones: "),t(),n(374,"ul")(375,"li")(376,"strong"),e(377,"Fork conversation from here"),t(),e(378," \u2014 nueva rama de conversaci\xF3n, c\xF3digo intacto"),t(),n(379,"li")(380,"strong"),e(381,"Rewind code to here"),t(),e(382," \u2014 revierte archivos a este punto, conserva historial"),t(),n(383,"li")(384,"strong"),e(385,"Fork conversation and rewind code"),t(),e(386," \u2014 nueva rama + c\xF3digo revertido"),t()(),n(387,"h3"),e(388,"Abrir Claude desde scripts externos"),t(),i(389,"app-code-block",3),n(390,"h3"),e(391,"Settings importantes de la extensi\xF3n"),t(),n(392,"div",7)(393,"table")(394,"thead")(395,"tr")(396,"th"),e(397,"Setting"),t(),n(398,"th"),e(399,"Default"),t(),n(400,"th"),e(401,"Descripci\xF3n"),t()()(),n(402,"tbody")(403,"tr")(404,"td")(405,"code"),e(406,"initialPermissionMode"),t()(),n(407,"td")(408,"code"),e(409,"default"),t()(),n(410,"td"),e(411,"Modo inicial: "),n(412,"code"),e(413,"default"),t(),e(414,", "),n(415,"code"),e(416,"plan"),t(),e(417,", "),n(418,"code"),e(419,"acceptEdits"),t(),e(420,", "),n(421,"code"),e(422,"auto"),t()()(),n(423,"tr")(424,"td")(425,"code"),e(426,"useTerminal"),t()(),n(427,"td")(428,"code"),e(429,"false"),t()(),n(430,"td"),e(431,"Abre Claude en modo CLI en lugar del panel gr\xE1fico"),t()(),n(432,"tr")(433,"td")(434,"code"),e(435,"autosave"),t()(),n(436,"td")(437,"code"),e(438,"true"),t()(),n(439,"td"),e(440,"Auto-guarda archivos antes de que Claude los lea o escriba"),t()(),n(441,"tr")(442,"td")(443,"code"),e(444,"useCtrlEnterToSend"),t()(),n(445,"td")(446,"code"),e(447,"false"),t()(),n(448,"td"),e(449,"Enviar con "),n(450,"code"),e(451,"Ctrl+Enter"),t(),e(452," en lugar de "),n(453,"code"),e(454,"Enter"),t()()(),n(455,"tr")(456,"td")(457,"code"),e(458,"preferredLocation"),t()(),n(459,"td")(460,"code"),e(461,"panel"),t()(),n(462,"td")(463,"code"),e(464,"sidebar"),t(),e(465," (derecha) o "),n(466,"code"),e(467,"panel"),t(),e(468," (tab)"),t()(),n(469,"tr")(470,"td")(471,"code"),e(472,"selectedModel"),t()(),n(473,"td")(474,"code"),e(475,"default"),t()(),n(476,"td"),e(477,"Modelo para nuevas conversaciones. Se puede cambiar con "),n(478,"code"),e(479,"/model"),t(),e(480,"."),t()()()()(),n(481,"h3"),e(482,"CLI vs Extensi\xF3n VS Code"),t(),n(483,"div",7)(484,"table")(485,"thead")(486,"tr")(487,"th"),e(488,"Feature"),t(),n(489,"th"),e(490,"CLI"),t(),n(491,"th"),e(492,"Extensi\xF3n VS Code"),t()()(),n(493,"tbody")(494,"tr")(495,"td"),e(496,"Comandos y skills"),t(),n(497,"td"),e(498,"Todos"),t(),n(499,"td"),e(500,"Subconjunto (ver con "),n(501,"code"),e(502,"/"),t(),e(503,")"),t()(),n(504,"tr")(505,"td"),e(506,"MCP server config"),t(),n(507,"td"),e(508,"Completo"),t(),n(509,"td"),e(510,"Parcial (agregar v\xEDa CLI, gestionar con "),n(511,"code"),e(512,"/mcp"),t(),e(513,")"),t()(),n(514,"tr")(515,"td"),e(516,"Checkpoints (rewind)"),t(),n(517,"td"),e(518,"S\xED"),t(),n(519,"td"),e(520,"S\xED"),t()(),n(521,"tr")(522,"td"),e(523,"Bash shortcut "),n(524,"code"),e(525,"!"),t()(),n(526,"td"),e(527,"S\xED"),t(),n(528,"td"),e(529,"No"),t()(),n(530,"tr")(531,"td"),e(532,"Tab completion"),t(),n(533,"td"),e(534,"S\xED"),t(),n(535,"td"),e(536,"No"),t()(),n(537,"tr")(538,"td"),e(539,"Panel gr\xE1fico con diff nativo"),t(),n(540,"td"),e(541,"No"),t(),n(542,"td"),e(543,"S\xED"),t()()()()(),n(544,"app-callout",17)(545,"p"),e(546," La extensi\xF3n corre un servidor MCP local llamado "),n(547,"code"),e(548,"ide"),t(),e(549," que el CLI usa autom\xE1ticamente. Expone dos herramientas al modelo: "),n(550,"code"),e(551,"mcp__ide__getDiagnostics"),t(),e(552," (errores/warnings del IDE) y "),n(553,"code"),e(554,"mcp__ide__executeCode"),t(),e(555," (ejecutar celdas Jupyter \u2014 siempre pide confirmaci\xF3n expl\xEDcita). Este servidor no aparece en "),n(556,"code"),e(557,"/mcp"),t(),e(558," porque no necesita configuraci\xF3n. "),t()()(),n(559,"section",18)(560,"h2"),e(561,"9.3 \u2014 JetBrains IDEs"),t(),n(562,"p"),e(563," Claude Code se integra con los IDEs de JetBrains a trav\xE9s del plugin "),n(564,"strong"),e(565,"Claude Code [Beta]"),t(),e(566," disponible en el JetBrains Marketplace. A diferencia de VS Code, no hay panel gr\xE1fico propio \u2014 la interacci\xF3n ocurre desde el terminal integrado del IDE. "),t(),n(567,"h3"),e(568,"IDEs soportados"),t(),n(569,"p"),e(570,"IntelliJ IDEA, PyCharm, WebStorm, Android Studio, PhpStorm, GoLand y la mayor\xEDa de IDEs JetBrains."),t(),n(571,"h3"),e(572,"Instalaci\xF3n"),t(),n(573,"ol")(574,"li"),e(575,"Buscar "),n(576,"strong"),e(577,'"Claude Code"'),t(),e(578," en el JetBrains Marketplace e instalar"),t(),n(579,"li"),e(580,"Reiniciar el IDE completamente (puede requerir reiniciar varias veces)"),t(),n(581,"li"),e(582,"Ejecutar "),n(583,"code"),e(584,"claude"),t(),e(585," desde el terminal integrado del IDE"),t()(),n(586,"h3"),e(587,"Features de integraci\xF3n"),t(),n(588,"div",4),i(589,"app-concept-card",19)(590,"app-concept-card",20)(591,"app-concept-card",21)(592,"app-concept-card",22),t(),n(593,"h3"),e(594,"Shortcuts JetBrains"),t(),n(595,"div",7)(596,"table")(597,"thead")(598,"tr")(599,"th"),e(600,"Acci\xF3n"),t(),n(601,"th"),e(602,"Mac"),t(),n(603,"th"),e(604,"Windows/Linux"),t()()(),n(605,"tbody")(606,"tr")(607,"td"),e(608,"Abrir Claude Code"),t(),n(609,"td")(610,"code"),e(611,"Cmd+Esc"),t()(),n(612,"td")(613,"code"),e(614,"Ctrl+Esc"),t()()(),n(615,"tr")(616,"td"),e(617,"Insertar referencia de archivo"),t(),n(618,"td")(619,"code"),e(620,"Cmd+Option+K"),t()(),n(621,"td")(622,"code"),e(623,"Alt+Ctrl+K"),t()()()()()(),n(624,"h3"),e(625,"Uso desde terminal externo"),t(),i(626,"app-code-block",3),n(627,"h3"),e(628,"Configuraci\xF3n del plugin"),t(),n(629,"p"),e(630,"Settings \u2192 Tools \u2192 Claude Code [Beta]:"),t(),n(631,"ul")(632,"li")(633,"strong"),e(634,"Claude command"),t(),e(635,": ruta personalizada si "),n(636,"code"),e(637,"claude"),t(),e(638," no est\xE1 en PATH"),t(),n(639,"li")(640,"strong"),e(641,"Enable automatic updates"),t(),e(642,": actualiza el plugin autom\xE1ticamente al reiniciar"),t(),n(643,"li")(644,"strong"),e(645,"ESC key"),t(),e(646,': si ESC no interrumpe operaciones, ir a Settings \u2192 Tools \u2192 Terminal y desvincular "Move focus to editor with Escape"'),t()(),n(647,"app-callout",23)(648,"p")(649,"strong"),e(650,"Remote Development"),t(),e(651,": instalar el plugin en el "),n(652,"em"),e(653,"host remoto"),t(),e(654,", no en el cliente local. Ir a Settings \u2192 Plugin (Host)."),t(),n(655,"p")(656,"strong"),e(657,"WSL"),t(),e(658,": configurar el Claude command como "),n(659,"code"),e(660,'wsl -d Ubuntu -- bash -lic "claude"'),t(),e(661," (reemplazar Ubuntu con el nombre de tu distribuci\xF3n)."),t()(),n(662,"app-callout",24)(663,"p"),e(664," JetBrains "),n(665,"strong"),e(666,"no tiene panel gr\xE1fico"),t(),e(667," de Claude. Toda la interacci\xF3n es a trav\xE9s del terminal integrado. Si buscas la experiencia visual (diffs inline, plan mode con markdown editable, checkpoints), usa VS Code. "),t()()(),n(668,"section",25)(669,"h2"),e(670,"9.4 \u2014 Scheduled Agents \u2014 Tareas Programadas"),t(),n(671,"p"),e(672," Claude Code puede ejecutar tareas de forma aut\xF3noma en un horario predefinido. La clave es ser expl\xEDcito en el prompt sobre qu\xE9 significa \xE9xito y qu\xE9 hacer con los resultados \u2014 la tarea corre sin supervisi\xF3n humana. "),t(),n(673,"h3"),e(674,"Las cuatro opciones de scheduling"),t(),n(675,"div",7)(676,"table")(677,"thead")(678,"tr")(679,"th"),e(680,"Opci\xF3n"),t(),n(681,"th"),e(682,"D\xF3nde corre"),t(),n(683,"th"),e(684,"Mejor para"),t(),n(685,"th"),e(686,"Configuraci\xF3n"),t()()(),n(687,"tbody")(688,"tr")(689,"td")(690,"strong"),e(691,"Cloud scheduled tasks"),t()(),n(692,"td"),e(693,"Infra de Anthropic"),t(),n(694,"td"),e(695,"Tareas que deben correr aunque la m\xE1quina est\xE9 apagada"),t(),n(696,"td")(697,"code"),e(698,"claude.ai/code"),t()()(),n(699,"tr")(700,"td")(701,"strong"),e(702,"Desktop scheduled tasks"),t()(),n(703,"td"),e(704,"Tu m\xE1quina (app desktop)"),t(),n(705,"td"),e(706,"Necesita acceso a archivos locales o cambios no comiteados"),t(),n(707,"td"),e(708,"App desktop \u2192 Schedule"),t()(),n(709,"tr")(710,"td")(711,"strong"),e(712,"GitHub Actions"),t(),e(713," ("),n(714,"code"),e(715,"schedule:"),t(),e(716,")"),t(),n(717,"td"),e(718,"Runners de GitHub"),t(),n(719,"td"),e(720,"Tareas ligadas al repo, cron que vive junto al c\xF3digo"),t(),n(721,"td")(722,"code"),e(723,".github/workflows/"),t()()(),n(724,"tr")(725,"td")(726,"strong")(727,"code"),e(728,"/loop"),t()()(),n(729,"td"),e(730,"Sesi\xF3n CLI activa"),t(),n(731,"td"),e(732,"Polling r\xE1pido mientras la sesi\xF3n est\xE1 abierta"),t(),n(733,"td"),e(734,"Comando en la sesi\xF3n"),t()()()()(),n(735,"h3"),e(736,"GitHub Actions con cron \u2014 el m\xE1s com\xFAn"),t(),i(737,"app-code-block",3),n(738,"h3"),e(739,"Referencia de sintaxis cron"),t(),i(740,"app-code-block",3),n(741,"h3"),e(742,"Casos de uso t\xEDpicos de tareas programadas"),t(),n(743,"div",4),i(744,"app-concept-card",26)(745,"app-concept-card",27)(746,"app-concept-card",28)(747,"app-concept-card",29),t(),n(748,"h3"),e(749,"Ejemplo completo: audit de seguridad semanal"),t(),i(750,"app-code-block",3),n(751,"app-callout",30)(752,"ul")(753,"li"),e(754,'Ser expl\xEDcito sobre qu\xE9 significa \xE9xito: "crea un issue con t\xEDtulo X", "postea en canal Y"'),t(),n(755,"li"),e(756,"Siempre incluir "),n(757,"code"),e(758,"workflow_dispatch"),t(),e(759," adem\xE1s del cron \u2014 permite pruebas manuales"),t(),n(760,"li"),e(761,"Usar "),n(762,"code"),e(763,"--max-turns"),t(),e(764," para controlar costo \u2014 sin \xE9l, Claude puede iterar indefinidamente"),t(),n(765,"li"),e(766,"Agregar "),n(767,"code"),e(768,"--model claude-opus-4-6"),t(),e(769," para tareas complejas que requieren razonamiento profundo"),t(),n(770,"li"),e(771,"Configurar timeouts a nivel de job: "),n(772,"code"),e(773,"timeout-minutes: 30"),t()(),n(774,"li"),e(775,"Usar GitHub's concurrency controls para evitar runs paralelos del mismo job"),t()()(),n(776,"app-callout",31)(777,"ul")(778,"li"),e(779,'Prompts ambiguos como "revisa el c\xF3digo" \u2014 Claude no puede pedir aclaraciones en modo automatizaci\xF3n'),t(),n(780,"li"),e(781,"No especificar d\xF3nde poner los resultados \u2014 Claude no sabr\xE1 qu\xE9 hacer con sus hallazgos"),t(),n(782,"li"),e(783,"Omitir "),n(784,"code"),e(785,"--max-turns"),t(),e(786," en tareas de larga duraci\xF3n \u2014 genera costos impredecibles"),t(),n(787,"li"),e(788,"Correr audits de seguridad autom\xE1ticos con acceso de escritura irrestricto sin revisi\xF3n humana"),t()()()(),n(789,"section",32)(790,"h2"),e(791,"9.5 \u2014 Git Workflows Avanzados"),t(),n(792,"p"),e(793," Claude Code tiene soporte nativo profundo para Git, desde commits y PRs hasta worktrees para trabajo paralelo aislado. "),t(),n(794,"h3"),e(795,"Comandos Git con Claude"),t(),i(796,"app-code-block",3),n(797,"h3"),e(798,"Worktrees \u2014 trabajo paralelo sin conflictos"),t(),n(799,"p"),e(800," Los worktrees de Git crean directorios de trabajo separados con su propia rama, compartiendo el historial del repositorio. Permiten que m\xFAltiples sesiones de Claude trabajen simult\xE1neamente sin interferirse. "),t(),i(801,"app-code-block",3),n(802,"h3"),e(803,"Copiar archivos gitignored a worktrees"),t(),n(804,"p"),e(805," Los worktrees son checkouts frescos \u2014 no incluyen "),n(806,"code"),e(807,".env"),t(),e(808," ni archivos locales. Usar "),n(809,"code"),e(810,".worktreeinclude"),t(),e(811," para copiarlos autom\xE1ticamente: "),t(),i(812,"app-code-block",3),n(813,"p"),e(814,"Solo se copian archivos que coincidan con el patr\xF3n "),n(815,"em"),e(816,"y"),t(),e(817," est\xE9n en "),n(818,"code"),e(819,".gitignore"),t(),e(820,". Los archivos tracked nunca se duplican."),t(),n(821,"h3"),e(822,"Cleanup de worktrees"),t(),n(823,"ul")(824,"li")(825,"strong"),e(826,"Sin cambios"),t(),e(827,": el worktree y su rama se eliminan autom\xE1ticamente al salir"),t(),n(828,"li")(829,"strong"),e(830,"Con cambios"),t(),e(831,": Claude pregunta si conservar o eliminar el worktree"),t()(),i(832,"app-code-block",3),n(833,"app-callout",33)(834,"p"),e(835," Agregar "),n(836,"code"),e(837,".claude/worktrees/"),t(),e(838," al "),n(839,"code"),e(840,".gitignore"),t(),e(841," del repo para evitar que el contenido de los worktrees aparezca como archivos sin trackear en el repositorio principal. "),t()(),n(842,"h3"),e(843,"Resumir conversaciones"),t(),i(844,"app-code-block",3),t(),n(845,"section",34)(846,"h2"),e(847,"9.6 \u2014 Resumen \u2014 Cu\xE1ndo usar cada integraci\xF3n"),t(),n(848,"div",7)(849,"table")(850,"thead")(851,"tr")(852,"th"),e(853,"Escenario"),t(),n(854,"th"),e(855,"Herramienta recomendada"),t()()(),n(856,"tbody")(857,"tr")(858,"td"),e(859,"Desarrollo diario con UI, diffs inline, plan review"),t(),n(860,"td"),e(861,"Extensi\xF3n VS Code"),t()(),n(862,"tr")(863,"td"),e(864,"Equipos que usan IntelliJ/PyCharm/WebStorm"),t(),n(865,"td"),e(866,"Plugin JetBrains"),t()(),n(867,"tr")(868,"td"),e(869,"Automatizar tareas en respuesta a eventos de GitHub"),t(),n(870,"td"),e(871,"GitHub Actions + "),n(872,"code"),e(873,"anthropics/claude-code-action@v1"),t()()(),n(874,"tr")(875,"td"),e(876,"Tareas recurrentes (audits, reportes, PR review diario)"),t(),n(877,"td"),e(878,"GitHub Actions con "),n(879,"code"),e(880,"schedule:"),t(),e(881," cron"),t()(),n(882,"tr")(883,"td"),e(884,"Tareas que necesitan archivos locales y corren sin servidor"),t(),n(885,"td"),e(886,"Desktop scheduled tasks"),t()(),n(887,"tr")(888,"td"),e(889,"Trabajo paralelo en m\xFAltiples features sin conflictos"),t(),n(890,"td")(891,"code"),e(892,"claude --worktree"),t()()(),n(893,"tr")(894,"td"),e(895,"Enterprise con control de datos (AWS/GCP)"),t(),n(896,"td"),e(897,"GitHub Actions + Bedrock/Vertex + OIDC"),t()(),n(898,"tr")(899,"td"),e(900,"Code review autom\xE1tico en cada PR"),t(),n(901,"td"),e(902,"GitHub Actions con trigger "),n(903,"code"),e(904,"pull_request"),t()()()()()()(),i(905,"app-module-nav",35),t()),o&2&&(a(17),l("code","/install-github-app"),a(30),l("code",r.code.triggers),a(3),l("code",r.code.basicWorkflow),a(3),l("code",r.code.reviewWorkflow),a(85),l("code",r.code.claudeArgs),a(58),l("code",r.code.bedrockWorkflow),a(6),m(r.apiKeyRef),a(167),l("code",r.code.atMentions),a(20),l("code",r.code.vscodeUri),a(237),l("code",r.code.jetbrainsTerminal),a(111),l("code",r.code.dailyCron),a(3),l("code",r.code.cronSyntax),a(10),l("code",r.code.securityAudit),a(46),l("code",r.code.gitCommands),a(5),l("code",r.code.worktrees),a(11),l("code",r.code.worktreeinclude),a(20),l("code",r.code.worktreeCleanup),a(12),l("code",r.code.resumeCommands),a(61),l("prev",r.prev)("next",r.next))},dependencies:[E,x,c,p,u],encapsulation:2})};export{S as Modulo09Component};

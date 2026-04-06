import{a as c,b as p,c as m,d as u,e as g}from"./chunk-LCHIYWU5.js";import{e as i,f as d,i as o,j as t,k as n,l as a,t as e}from"./chunk-HIV27VVN.js";var x=class r{prev={label:"Modulo 6: Skills",route:"/cursos/claude-code/modulo-06"};next={label:"Modulo 8: MCP",route:"/cursos/claude-code/modulo-08"};code={agentsCommand:`
<span class="command">/agents</span>  <span class="comment">\u2192 "Create new agent" \u2192 Personal/Project \u2192 "Generate with Claude"</span>

<span class="comment"># Desde CLI sin sesion interactiva:</span>
<span class="command">claude agents</span>  <span class="comment">\u2192 lista todos los agentes agrupados por fuente</span>`,agentScope:`
<span class="comment"># Personal (todos los proyectos)</span>
<span class="string">~/.claude/agents/code-reviewer.md</span>

<span class="comment"># Proyecto (compartible via git)</span>
<span class="string">.claude/agents/code-reviewer.md</span>`,basicAgentStructure:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: code-reviewer</span>
<span class="keyword">description</span><span class="string">: Expert code reviewer. Proactively reviews code for quality,
  security, and maintainability. Use immediately after writing or modifying code.</span>
<span class="keyword">tools</span><span class="string">: Read, Grep, Glob, Bash</span>
<span class="keyword">model</span><span class="string">: inherit</span>
<span class="comment">---</span>

<span class="string">You are a senior code reviewer ensuring high standards.</span>

<span class="string">When invoked:</span>
<span class="string">1. Run git diff to see recent changes</span>
<span class="string">2. Focus on modified files</span>
<span class="string">3. Begin review immediately</span>

<span class="string">Review checklist:</span>
<span class="string">- Code clarity and readability</span>
<span class="string">- No exposed secrets or API keys</span>
<span class="string">- Input validation implemented</span>
<span class="string">- Proper error handling and test coverage</span>

<span class="string">Output: critical issues, warnings, suggestions (ordered by priority)</span>`,cliFlag:`
<span class="command">claude</span> <span class="flag">--agents</span> <span class="string">'{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  },
  "debugger": {
    "description": "Debugging specialist for errors and test failures.",
    "prompt": "You are an expert debugger. Analyze errors and identify root causes."
  }
}'</span>`,modelResolution:`
<span class="string">1.</span> Variable de entorno <span class="keyword">CLAUDE_CODE_SUBAGENT_MODEL</span>
<span class="string">2.</span> Parametro <span class="keyword">model</span> de la invocacion especifica
<span class="string">3.</span> Campo <span class="keyword">model</span> en el frontmatter del subagente
<span class="string">4.</span> Modelo de la conversacion principal (<span class="keyword">inherit</span>)`,toolsAllowDeny:`
<span class="comment"># Allowlist \u2014 SOLO estas herramientas</span>
<span class="keyword">tools</span><span class="string">: Read, Grep, Glob, Bash</span>

<span class="comment"># Denylist \u2014 todo excepto estas</span>
<span class="keyword">disallowedTools</span><span class="string">: Write, Edit</span>

<span class="comment"># Si ambas estan definidas:</span>
<span class="comment"># primero se aplica disallowedTools, luego se resuelve tools contra lo que queda</span>
<span class="comment"># un tool en ambas listas queda removido</span>`,agentRestrictions:`
<span class="comment"># Allowlist de subagentes que puede crear</span>
<span class="keyword">tools</span><span class="string">: Agent(worker, researcher), Read, Bash</span>

<span class="comment"># Sin restriccion de subagentes</span>
<span class="keyword">tools</span><span class="string">: Agent, Read, Bash</span>

<span class="comment"># No puede crear ningun subagente (omitir Agent del tools)</span>
<span class="keyword">tools</span><span class="string">: Read, Bash</span>`,mcpScopedAgent:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: browser-tester</span>
<span class="keyword">description</span><span class="string">: Tests features in a real browser using Playwright</span>
<span class="keyword">mcpServers</span><span class="string">:</span>
  <span class="comment"># Definicion inline: scoped solo a este subagente</span>
  <span class="string">- playwright:</span>
      <span class="keyword">type</span><span class="string">: stdio</span>
      <span class="keyword">command</span><span class="string">: npx</span>
      <span class="keyword">args</span><span class="string">: ["-y", "@playwright/mcp@latest"]</span>
  <span class="comment"># Referencia a servidor ya configurado en la sesion</span>
  <span class="string">- github</span>
<span class="comment">---</span>

<span class="string">Use the Playwright tools to navigate, screenshot, and interact with pages.</span>`,disableAgents:`
<span class="comment">// settings.json</span>
{
  <span class="string">"permissions"</span>: {
    <span class="string">"deny"</span>: [<span class="string">"Agent(Explore)"</span>, <span class="string">"Agent(my-custom-agent)"</span>]
  }
}

<span class="comment"># O via CLI flag:</span>
<span class="command">claude</span> <span class="flag">--disallowedTools</span> <span class="string">"Agent(Explore)"</span>`,memoryAgent:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: code-reviewer</span>
<span class="keyword">description</span><span class="string">: Reviews code and accumulates project knowledge over time</span>
<span class="keyword">memory</span><span class="string">: project</span>
<span class="comment">---</span>

<span class="string">You are a code reviewer. As you work, update your agent memory with:</span>
<span class="string">- Codepaths and their purpose</span>
<span class="string">- Recurring issues and patterns you observe</span>
<span class="string">- Architectural decisions and conventions</span>

<span class="string">Before reviewing, check your memory for patterns you've seen before.</span>
<span class="string">After finishing, save what you learned to your memory.</span>`,hooksInFrontmatter:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: db-reader</span>
<span class="keyword">description</span><span class="string">: Execute read-only database queries</span>
<span class="keyword">tools</span><span class="string">: Bash</span>
<span class="keyword">hooks</span><span class="string">:</span>
  <span class="keyword">PreToolUse</span><span class="string">:</span>
    <span class="string">- matcher: "Bash"</span>
      <span class="keyword">hooks</span><span class="string">:</span>
        <span class="string">- type: command</span>
          <span class="keyword">command</span><span class="string">: "./scripts/validate-readonly-query.sh"</span>
  <span class="keyword">PostToolUse</span><span class="string">:</span>
    <span class="string">- matcher: "Edit|Write"</span>
      <span class="keyword">hooks</span><span class="string">:</span>
        <span class="string">- type: command</span>
          <span class="keyword">command</span><span class="string">: "./scripts/run-linter.sh"</span>
<span class="comment">---</span>`,validateReadonlyScript:`
<span class="comment">#!/bin/bash</span>
<span class="comment"># ./scripts/validate-readonly-query.sh</span>

INPUT=$(<span class="keyword">cat</span>)
COMMAND=$(<span class="command">echo</span> <span class="string">"$INPUT"</span> | <span class="command">jq</span> <span class="flag">-r</span> <span class="string">'.tool_input.command // empty'</span>)

<span class="comment"># Bloquear operaciones de escritura SQL</span>
<span class="keyword">if</span> <span class="command">echo</span> <span class="string">"$COMMAND"</span> | <span class="command">grep</span> <span class="flag">-iE</span> <span class="string">'\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE)\b'</span> &gt; <span class="string">/dev/null</span>; <span class="keyword">then</span>
  <span class="command">echo</span> <span class="string">"Blocked: Only SELECT queries are allowed"</span> <span class="flag">&gt;&amp;2</span>
  <span class="command">exit</span> <span class="string">2</span>
<span class="keyword">fi</span>

<span class="command">exit</span> <span class="string">0</span>`,hooksInSettings:`
<span class="comment">// settings.json</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"SubagentStart"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"db-agent"</span>,
        <span class="string">"hooks"</span>: [
          { <span class="string">"type"</span>: <span class="string">"command"</span>, <span class="string">"command"</span>: <span class="string">"./scripts/setup-db-connection.sh"</span> }
        ]
      }
    ],
    <span class="string">"SubagentStop"</span>: [
      {
        <span class="string">"hooks"</span>: [
          { <span class="string">"type"</span>: <span class="string">"command"</span>, <span class="string">"command"</span>: <span class="string">"./scripts/cleanup.sh"</span> }
        ]
      }
    ]
  }
}`,invokeNatural:`
<span class="string">Use the code-reviewer subagent to look at my recent changes</span>
<span class="string">Have the debugger subagent analyze this error</span>`,invokeMention:`
<span class="string">@"code-reviewer (agent)" review the auth module</span>
<span class="string">@"debugger (agent)" fix the failing tests in src/api/</span>`,invokeFlag:`
<span class="comment"># La sesion completa corre con ese system prompt</span>
<span class="command">claude</span> <span class="flag">--agent</span> <span class="string">code-reviewer</span>

<span class="comment"># Plugin subagent</span>
<span class="command">claude</span> <span class="flag">--agent</span> <span class="string">my-plugin:specialized-agent</span>`,invokeConfig:`
<span class="comment">// .claude/settings.json</span>
{
  <span class="string">"agent"</span>: <span class="string">"code-reviewer"</span>
}`,parallelResearch:`
<span class="string">Research the authentication, database, and API modules</span>
<span class="string">in parallel using separate subagents</span>`,chainAgents:`
<span class="string">Use the code-reviewer to find performance issues,</span>
<span class="string">then use the optimizer subagent to fix them</span>`,resumeAgent:`
<span class="string">Use the code-reviewer subagent to review the authentication module</span>
<span class="comment">[Subagente completa]</span>

<span class="string">Continue that code review and now analyze the authorization logic</span>
<span class="comment">[Claude reanuda el subagente con historial completo]</span>`,agentTeamsConfig:`
<span class="comment">// settings.json \u2014 habilitar Agent Teams</span>
{
  <span class="string">"env"</span>: {
    <span class="string">"CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS"</span>: <span class="string">"1"</span>
  }
}`,debuggerAgent:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: debugger</span>
<span class="keyword">description</span><span class="string">: Debugging specialist for errors, test failures, and unexpected
  behavior. Use proactively when encountering any issues.</span>
<span class="keyword">tools</span><span class="string">: Read, Edit, Bash, Grep, Glob</span>
<span class="comment">---</span>

<span class="string">You are an expert debugger specializing in root cause analysis.</span>

<span class="string">When invoked:</span>
<span class="string">1. Capture error message and stack trace</span>
<span class="string">2. Identify reproduction steps</span>
<span class="string">3. Isolate the failure location</span>
<span class="string">4. Implement minimal fix</span>
<span class="string">5. Verify solution works</span>

<span class="string">For each issue, provide:</span>
<span class="string">- Root cause explanation with evidence</span>
<span class="string">- Specific code fix</span>
<span class="string">- Prevention recommendations</span>`,dataScientistAgent:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: data-scientist</span>
<span class="keyword">description</span><span class="string">: Data analysis expert for SQL queries, BigQuery operations, and data
  insights. Use proactively for data analysis tasks and queries.</span>
<span class="keyword">tools</span><span class="string">: Bash, Read, Write</span>
<span class="keyword">model</span><span class="string">: sonnet</span>
<span class="comment">---</span>

<span class="string">You are a data scientist specializing in SQL and BigQuery analysis.</span>

<span class="string">When invoked:</span>
<span class="string">1. Understand the analysis requirement</span>
<span class="string">2. Write efficient SQL queries</span>
<span class="string">3. Analyze and summarize results</span>
<span class="string">4. Provide data-driven recommendations</span>

<span class="string">Key practices:</span>
<span class="string">- Write optimized queries with proper filters</span>
<span class="string">- Include comments explaining complex logic</span>
<span class="string">- Highlight key findings and suggest next steps</span>`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=d({type:r,selectors:[["app-modulo-07"]],decls:738,vars:26,consts:[[1,"container"],["number","Modulo 7 de 11","title","Subagentes y Agent Teams","subtitle","Asistentes especializados con su propia ventana de contexto, herramientas restringidas y memoria persistente"],[1,"concept-grid"],["title","Preservar contexto","description","Operaciones verbosas (tests, logs, exploracion masiva) se quedan en el contexto del subagente, no en el tuyo."],["title","Aplicar restricciones","description","Limita que herramientas puede usar para una tarea. Un revisor que solo lee, no puede escribir accidentalmente."],["title","Especializacion","description","System prompts enfocados en un dominio: code review, debugging, analisis de datos, queries de DB."],["title","Control de costos","description","Rutea tareas de exploracion a Haiku en vez de Opus. El subagente Explore ya hace esto por defecto."],["type","warn","title","Limitacion importante"],[1,"table-wrapper"],["type","info","title","Explore y la ventana de contexto"],[3,"code"],["type","info","title","Los subagentes se cargan al inicio de sesion"],["type","info","title","Como funciona internamente"],["type","info","title","Descripcion como trigger"],["type","warn","title","Background y permisos"],["type","good","title","Bien \u2014 el output verboso queda fuera de tu contexto"],["type","bad","title","Mal \u2014 correr tests en la conversacion principal"],[1,"string"],["type","warn","title","Cuidado con la sintesis"],["title","Usa la conversacion principal cuando...","description","Necesitas ida y vuelta iterativa. Multiples fases comparten contexto significativo. Es un cambio rapido y puntual. La latencia importa (los subagentes arrancan desde cero)."],["title","Usa subagentes cuando...","description","La tarea produce output verboso que no quieres en tu contexto. Quieres restricciones especificas de herramientas o permisos. El trabajo es autocontenido y puede devolver un resumen. Quieres paralelismo real."],["title","Considera Skills cuando...","description","Quieres prompts o workflows reutilizables que corran en el contexto principal (no aislado). Las Skills son instrucciones; los subagentes son contextos separados."],["title","Usa /btw cuando...","description","Tienes una pregunta rapida sobre algo que ya esta en tu conversacion. Ve el contexto completo pero sin acceso a herramientas. La respuesta se descarta del historial."],["type","warn","title","Estado actual"],["type","good","title","Subagente bien disenado"],["type","bad","title","Subagente mal disenado"],[3,"prev","next"]],template:function(l,s){l&1&&(t(0,"div",0),a(1,"app-module-header",1),t(2,"section")(3,"h2"),e(4,"7.1 \u2014 Que son los Subagentes"),n(),t(5,"p"),e(6," Un subagente es un "),t(7,"strong"),e(8,"asistente especializado que corre en su propia ventana de contexto"),n(),e(9,", con un system prompt propio, acceso restringido a herramientas y permisos independientes. Cuando Claude encuentra una tarea que coincide con la descripcion de un subagente, delega el trabajo ahi y recibe el resultado de vuelta. "),n(),t(10,"div",2),a(11,"app-concept-card",3)(12,"app-concept-card",4)(13,"app-concept-card",5)(14,"app-concept-card",6),n(),t(15,"app-callout",7)(16,"p"),e(17," Los subagentes "),t(18,"strong"),e(19,"no pueden crear otros subagentes"),n(),e(20,". Si necesitas anidamiento o delegacion en cadena, hazlo desde la conversacion principal. Cada subagente es un nodo terminal. "),n()()(),t(21,"section")(22,"h2"),e(23,"7.2 \u2014 Subagentes built-in"),n(),t(24,"p"),e(25," Claude Code incluye subagentes listos para usar que se activan automaticamente segun el contexto. "),n(),t(26,"div",8)(27,"table")(28,"thead")(29,"tr")(30,"th"),e(31,"Subagente"),n(),t(32,"th"),e(33,"Modelo"),n(),t(34,"th"),e(35,"Herramientas"),n(),t(36,"th"),e(37,"Cuando Claude lo usa"),n()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"strong"),e(42,"Explore"),n()(),t(43,"td"),e(44,"Haiku"),n(),t(45,"td"),e(46,"Solo lectura (sin Write/Edit)"),n(),t(47,"td"),e(48,"Busqueda y analisis de codigo sin modificar. Niveles: "),t(49,"code"),e(50,"quick"),n(),e(51,", "),t(52,"code"),e(53,"medium"),n(),e(54,", "),t(55,"code"),e(56,"very thorough"),n()()(),t(57,"tr")(58,"td")(59,"strong"),e(60,"Plan"),n()(),t(61,"td"),e(62,"Hereda"),n(),t(63,"td"),e(64,"Solo lectura"),n(),t(65,"td"),e(66,"Investigacion de codebase durante Plan Mode antes de presentar un plan"),n()(),t(67,"tr")(68,"td")(69,"strong"),e(70,"general-purpose"),n()(),t(71,"td"),e(72,"Hereda"),n(),t(73,"td"),e(74,"Todas"),n(),t(75,"td"),e(76,"Tareas complejas que requieren exploracion + modificacion + multiples pasos"),n()(),t(77,"tr")(78,"td")(79,"strong"),e(80,"statusline-setup"),n()(),t(81,"td"),e(82,"Sonnet"),n(),t(83,"td"),e(84,"Limitadas"),n(),t(85,"td"),e(86,"Cuando corres "),t(87,"code"),e(88,"/statusline"),n(),e(89," para configurar la barra de estado"),n()(),t(90,"tr")(91,"td")(92,"strong"),e(93,"claude-code-guide"),n()(),t(94,"td"),e(95,"Haiku"),n(),t(96,"td"),e(97,"Limitadas"),n(),t(98,"td"),e(99,"Cuando preguntas sobre funcionalidades de Claude Code"),n()()()()(),t(100,"app-callout",9)(101,"p"),e(102," Cuando Claude necesita explorar el codebase, delega a "),t(103,"strong"),e(104,"Explore"),n(),e(105," (Haiku, read-only). La exploracion ocurre en el contexto del subagente. Solo el resumen relevante sube a tu conversacion principal, ahorrando miles de tokens. "),n()()(),t(106,"section")(107,"h2"),e(108,"7.3 \u2014 Crear subagentes"),n(),t(109,"h3"),e(110,"Via /agents (recomendado)"),n(),t(111,"p"),e(112," El comando "),t(113,"code"),e(114,"/agents"),n(),e(115," abre una interfaz interactiva para crear, editar, eliminar y ver todos los subagentes disponibles. Es la forma recomendada. "),n(),a(116,"app-code-block",10),t(117,"h3"),e(118,"Manual \u2014 archivo Markdown con frontmatter"),n(),a(119,"app-code-block",10),t(120,"h3"),e(121,"Estructura basica de un subagente"),n(),a(122,"app-code-block",10),t(123,"app-callout",11)(124,"p"),e(125," Si creas un subagente manualmente agregando un archivo, reinicia la sesion o usa "),t(126,"code"),e(127,"/agents"),n(),e(128," para cargarlo de inmediato sin reiniciar. "),n()()(),t(129,"section")(130,"h2"),e(131,"7.4 \u2014 Alcances y precedencia"),n(),t(132,"div",8)(133,"table")(134,"thead")(135,"tr")(136,"th"),e(137,"Ubicacion"),n(),t(138,"th"),e(139,"Alcance"),n(),t(140,"th"),e(141,"Prioridad"),n()()(),t(142,"tbody")(143,"tr")(144,"td"),e(145,"Managed settings"),n(),t(146,"td"),e(147,"Toda la organizacion"),n(),t(148,"td"),e(149,"1 (mas alta)"),n()(),t(150,"tr")(151,"td")(152,"code"),e(153,"--agents"),n(),e(154," CLI flag"),n(),t(155,"td"),e(156,"Sesion actual (no se guarda)"),n(),t(157,"td"),e(158,"2"),n()(),t(159,"tr")(160,"td")(161,"code"),e(162,".claude/agents/"),n()(),t(163,"td"),e(164,"Proyecto actual"),n(),t(165,"td"),e(166,"3"),n()(),t(167,"tr")(168,"td")(169,"code"),e(170,"~/.claude/agents/"),n()(),t(171,"td"),e(172,"Todos tus proyectos"),n(),t(173,"td"),e(174,"4"),n()(),t(175,"tr")(176,"td"),e(177,"Plugin "),t(178,"code"),e(179,"agents/"),n(),e(180," directory"),n(),t(181,"td"),e(182,"Donde el plugin este activo"),n(),t(183,"td"),e(184,"5 (mas baja)"),n()()()()(),t(185,"p"),e(186," Cuando hay nombre duplicado entre niveles, gana el de mayor prioridad. Los subagentes de proyecto en "),t(187,"code"),e(188,".claude/agents/"),n(),e(189," se pueden versionar en git para compartirlos con el equipo. "),n(),t(190,"h3"),e(191,"Via CLI flag (sesion efimera)"),n(),a(192,"app-code-block",10),t(193,"p"),e(194,"Util para testing rapido o scripts de automatizacion. No se guarda en disco."),n()(),t(195,"section")(196,"h2"),e(197,"7.5 \u2014 Frontmatter: todos los campos"),n(),t(198,"div",8)(199,"table")(200,"thead")(201,"tr")(202,"th"),e(203,"Campo"),n(),t(204,"th"),e(205,"Requerido"),n(),t(206,"th"),e(207,"Descripcion"),n()()(),t(208,"tbody")(209,"tr")(210,"td")(211,"code"),e(212,"name"),n()(),t(213,"td"),e(214,"Si"),n(),t(215,"td"),e(216,"Lowercase, guiones, unico por alcance"),n()(),t(217,"tr")(218,"td")(219,"code"),e(220,"description"),n()(),t(221,"td"),e(222,"Si"),n(),t(223,"td"),e(224,"Cuando delegar \u2014 Claude lo usa para decidir automaticamente"),n()(),t(225,"tr")(226,"td")(227,"code"),e(228,"tools"),n()(),t(229,"td"),e(230,"No"),n(),t(231,"td"),e(232,"Allowlist de herramientas. Hereda todas si se omite"),n()(),t(233,"tr")(234,"td")(235,"code"),e(236,"disallowedTools"),n()(),t(237,"td"),e(238,"No"),n(),t(239,"td"),e(240,"Denylist: se resta de las heredadas o del allowlist"),n()(),t(241,"tr")(242,"td")(243,"code"),e(244,"model"),n()(),t(245,"td"),e(246,"No"),n(),t(247,"td")(248,"code"),e(249,"sonnet"),n(),e(250,", "),t(251,"code"),e(252,"opus"),n(),e(253,", "),t(254,"code"),e(255,"haiku"),n(),e(256,", ID completo, o "),t(257,"code"),e(258,"inherit"),n()()(),t(259,"tr")(260,"td")(261,"code"),e(262,"permissionMode"),n()(),t(263,"td"),e(264,"No"),n(),t(265,"td")(266,"code"),e(267,"default"),n(),e(268,", "),t(269,"code"),e(270,"acceptEdits"),n(),e(271,", "),t(272,"code"),e(273,"auto"),n(),e(274,", "),t(275,"code"),e(276,"bypassPermissions"),n(),e(277,", "),t(278,"code"),e(279,"plan"),n()()(),t(280,"tr")(281,"td")(282,"code"),e(283,"maxTurns"),n()(),t(284,"td"),e(285,"No"),n(),t(286,"td"),e(287,"Maximo de turnos antes de detenerse automaticamente"),n()(),t(288,"tr")(289,"td")(290,"code"),e(291,"skills"),n()(),t(292,"td"),e(293,"No"),n(),t(294,"td"),e(295,"Skills a inyectar en el contexto del subagente al inicio"),n()(),t(296,"tr")(297,"td")(298,"code"),e(299,"mcpServers"),n()(),t(300,"td"),e(301,"No"),n(),t(302,"td"),e(303,"Servidores MCP disponibles solo para este subagente"),n()(),t(304,"tr")(305,"td")(306,"code"),e(307,"hooks"),n()(),t(308,"td"),e(309,"No"),n(),t(310,"td"),e(311,"Hooks con scope al ciclo de vida del subagente"),n()(),t(312,"tr")(313,"td")(314,"code"),e(315,"memory"),n()(),t(316,"td"),e(317,"No"),n(),t(318,"td"),e(319,"Memoria persistente: "),t(320,"code"),e(321,"user"),n(),e(322,", "),t(323,"code"),e(324,"project"),n(),e(325,", "),t(326,"code"),e(327,"local"),n()()(),t(328,"tr")(329,"td")(330,"code"),e(331,"background"),n()(),t(332,"td"),e(333,"No"),n(),t(334,"td")(335,"code"),e(336,"true"),n(),e(337," para correr siempre como tarea en background"),n()(),t(338,"tr")(339,"td")(340,"code"),e(341,"effort"),n()(),t(342,"td"),e(343,"No"),n(),t(344,"td")(345,"code"),e(346,"low"),n(),e(347,", "),t(348,"code"),e(349,"medium"),n(),e(350,", "),t(351,"code"),e(352,"high"),n(),e(353,", "),t(354,"code"),e(355,"max"),n(),e(356," (Opus 4.6 only)"),n()(),t(357,"tr")(358,"td")(359,"code"),e(360,"isolation"),n()(),t(361,"td"),e(362,"No"),n(),t(363,"td")(364,"code"),e(365,"worktree"),n(),e(366,": corre en worktree git aislado, se limpia si no hay cambios"),n()(),t(367,"tr")(368,"td")(369,"code"),e(370,"color"),n()(),t(371,"td"),e(372,"No"),n(),t(373,"td")(374,"code"),e(375,"red"),n(),e(376,", "),t(377,"code"),e(378,"blue"),n(),e(379,", "),t(380,"code"),e(381,"green"),n(),e(382,", "),t(383,"code"),e(384,"yellow"),n(),e(385,", "),t(386,"code"),e(387,"purple"),n(),e(388,", "),t(389,"code"),e(390,"orange"),n(),e(391,", "),t(392,"code"),e(393,"pink"),n(),e(394,", "),t(395,"code"),e(396,"cyan"),n()()(),t(397,"tr")(398,"td")(399,"code"),e(400,"initialPrompt"),n()(),t(401,"td"),e(402,"No"),n(),t(403,"td"),e(404,"Prompt inicial auto-enviado cuando corre como sesion principal con "),t(405,"code"),e(406,"--agent"),n()()()()()(),t(407,"h3"),e(408,"Resolucion del modelo"),n(),t(409,"p"),e(410,"El modelo se resuelve en este orden de precedencia:"),n(),a(411,"app-code-block",10),n(),t(412,"section")(413,"h2"),e(414,"7.6 \u2014 Control de herramientas y permisos"),n(),t(415,"h3"),e(416,"Allowlist vs Denylist"),n(),a(417,"app-code-block",10),t(418,"h3"),e(419,"Restringir que subagentes puede crear"),n(),t(420,"p"),e(421," Solo aplica cuando el agente corre como sesion principal con "),t(422,"code"),e(423,"--agent"),n(),e(424,". Los subagentes regulares no pueden crear otros subagentes. "),n(),a(425,"app-code-block",10),t(426,"h3"),e(427,"MCP Servers con scope al subagente"),n(),a(428,"app-code-block",10),t(429,"p"),e(430," Los servidores inline se conectan al inicio del subagente y se desconectan al terminar. Si quieres mantener un MCP server fuera de la conversacion principal (para no consumir tokens con sus tool descriptions), definelo inline aqui. "),n(),t(431,"h3"),e(432,"Deshabilitar subagentes especificos"),n(),a(433,"app-code-block",10),n(),t(434,"section")(435,"h2"),e(436,"7.7 \u2014 Memoria persistente"),n(),t(437,"p"),e(438," Con el campo "),t(439,"code"),e(440,"memory"),n(),e(441,", el subagente tiene un directorio que sobrevive entre conversaciones. Va acumulando conocimiento institucional sobre el codebase, patrones, decisiones arquitectonicas. "),n(),t(442,"div",8)(443,"table")(444,"thead")(445,"tr")(446,"th"),e(447,"Scope"),n(),t(448,"th"),e(449,"Ruta"),n(),t(450,"th"),e(451,"Cuando usarlo"),n()()(),t(452,"tbody")(453,"tr")(454,"td")(455,"code"),e(456,"user"),n()(),t(457,"td")(458,"code"),e(459,"~/.claude/agent-memory/<nombre>/"),n()(),t(460,"td"),e(461,"Conocimiento aplicable en todos los proyectos"),n()(),t(462,"tr")(463,"td")(464,"code"),e(465,"project"),n()(),t(466,"td")(467,"code"),e(468,".claude/agent-memory/<nombre>/"),n()(),t(469,"td"),e(470,"Conocimiento del proyecto, compartible via git (recomendado)"),n()(),t(471,"tr")(472,"td")(473,"code"),e(474,"local"),n()(),t(475,"td")(476,"code"),e(477,".claude/agent-memory-local/<nombre>/"),n()(),t(478,"td"),e(479,"Proyecto-especifico pero NO en version control"),n()()()()(),a(480,"app-code-block",10),t(481,"app-callout",12)(482,"p"),e(483," Cuando "),t(484,"code"),e(485,"memory"),n(),e(486," esta activo, el system prompt del subagente incluye instrucciones de lectura/escritura al directorio de memoria, y las primeras 200 lineas o 25KB de "),t(487,"code"),e(488,"MEMORY.md"),n(),e(489,". Read, Write y Edit se habilitan automaticamente para que pueda mantener sus propios archivos de memoria. "),n()()(),t(490,"section")(491,"h2"),e(492,"7.8 \u2014 Hooks en subagentes"),n(),t(493,"h3"),e(494,"Hooks en el frontmatter del subagente"),n(),t(495,"p"),e(496,"Solo se ejecutan mientras ese subagente esta activo."),n(),a(497,"app-code-block",10),t(498,"p"),e(499,"Script de validacion de solo lectura:"),n(),a(500,"app-code-block",10),t(501,"h3"),e(502,"Hooks en settings.json para ciclo de vida del subagente"),n(),a(503,"app-code-block",10),t(504,"div",8)(505,"table")(506,"thead")(507,"tr")(508,"th"),e(509,"Evento"),n(),t(510,"th"),e(511,"Matcher input"),n(),t(512,"th"),e(513,"Cuando se dispara"),n()()(),t(514,"tbody")(515,"tr")(516,"td")(517,"code"),e(518,"SubagentStart"),n()(),t(519,"td"),e(520,"Nombre del tipo de agente"),n(),t(521,"td"),e(522,"Cuando un subagente comienza ejecucion"),n()(),t(523,"tr")(524,"td")(525,"code"),e(526,"SubagentStop"),n()(),t(527,"td"),e(528,"Nombre del tipo de agente"),n(),t(529,"td"),e(530,"Cuando un subagente completa su trabajo"),n()()()()()(),t(531,"section")(532,"h2"),e(533,"7.9 \u2014 Como invocar subagentes"),n(),t(534,"h3"),e(535,"Lenguaje natural (Claude decide si delega)"),n(),a(536,"app-code-block",10),t(537,"h3"),e(538,"@-mention (garantiza que ese subagente corre)"),n(),a(539,"app-code-block",10),t(540,"p"),e(541," Tu mensaje completo sigue yendo a Claude, que escribe el prompt del subagente. El @-mention controla "),t(542,"em"),e(543,"cual"),n(),e(544," subagente se invoca, no que instrucciones recibe. "),n(),t(545,"h3"),e(546,"--agent flag (toda la sesion como subagente)"),n(),a(547,"app-code-block",10),t(548,"h3"),e(549,"Configuracion permanente por proyecto"),n(),a(550,"app-code-block",10),t(551,"app-callout",13)(552,"p"),e(553," Claude usa el campo "),t(554,"code"),e(555,"description"),n(),e(556," para decidir automaticamente cuando delegar. Para que un subagente se active con mas frecuencia, agrega frases como "),t(557,"strong"),e(558,'"Use proactively"'),n(),e(559," en su descripcion. "),n()()(),t(560,"section")(561,"h2"),e(562,"7.10 \u2014 Foreground vs Background"),n(),t(563,"div",8)(564,"table")(565,"thead")(566,"tr"),a(567,"th"),t(568,"th"),e(569,"Foreground"),n(),t(570,"th"),e(571,"Background"),n()()(),t(572,"tbody")(573,"tr")(574,"td")(575,"strong"),e(576,"Bloquea conversacion"),n()(),t(577,"td"),e(578,"Si"),n(),t(579,"td"),e(580,"No \u2014 continuas trabajando"),n()(),t(581,"tr")(582,"td")(583,"strong"),e(584,"Permission prompts"),n()(),t(585,"td"),e(586,"Pasan al usuario"),n(),t(587,"td"),e(588,"Se aprueban antes de lanzar"),n()(),t(589,"tr")(590,"td")(591,"strong"),e(592,"AskUserQuestion"),n()(),t(593,"td"),e(594,"Pasa al usuario"),n(),t(595,"td"),e(596,"Falla silenciosamente, el subagente continua"),n()(),t(597,"tr")(598,"td")(599,"strong"),e(600,"Como activar"),n()(),t(601,"td"),e(602,"Default"),n(),t(603,"td")(604,"code"),e(605,"background: true"),n(),e(606," en frontmatter o Ctrl+B"),n()()()()(),t(607,"app-callout",14)(608,"p"),e(609," Si un subagente en background falla por permisos insuficientes, lanza uno en foreground con la misma tarea para reintentar con prompts interactivos. Para deshabilitar toda funcionalidad de background: "),t(610,"code"),e(611,"CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1"),n()()()(),t(612,"section")(613,"h2"),e(614,"7.11 \u2014 Patrones comunes"),n(),t(615,"h3"),e(616,"Aislar operaciones de alto volumen"),n(),t(617,"app-callout",15),a(618,"app-code-block",10),t(619,"p"),e(620,"El subagente corre miles de tokens de output de tests en su propio contexto. Solo el resumen sube al tuyo."),n()(),t(621,"app-callout",16)(622,"pre")(623,"code")(624,"span",17),e(625,"Run all the tests and show me the output"),n()()(),t(626,"p"),e(627,"Todo el output de tests entra en tu contexto, consumiendo tokens rapidamente y comprimiendo tu historial."),n()(),t(628,"h3"),e(629,"Investigacion en paralelo"),n(),a(630,"app-code-block",10),t(631,"p"),e(632," Cada subagente explora su area independientemente. Claude sintetiza los hallazgos. Funciona mejor cuando las areas de investigacion no dependen entre si. "),n(),t(633,"app-callout",18)(634,"p"),e(635," Cuando los subagentes completan, sus resultados suben a tu conversacion principal. Si cada uno devuelve resultados muy detallados, puedes agotar el contexto rapidamente. Pide resumenes, no dumps completos. "),n()(),t(636,"h3"),e(637,"Cadena de subagentes"),n(),a(638,"app-code-block",10),t(639,"h3"),e(640,"Reanudar un subagente"),n(),a(641,"app-code-block",10),t(642,"p"),e(643," Los subagentes reanudados retienen su historial completo: tool calls, resultados y razonamiento. Los transcripts se guardan en "),t(644,"code"),e(645,"~/.claude/projects/{project}/{sessionId}/subagents/"),n(),e(646,". "),n()(),t(647,"section")(648,"h2"),e(649,"7.12 \u2014 Cuando usar subagentes vs conversacion principal"),n(),t(650,"div",2),a(651,"app-concept-card",19)(652,"app-concept-card",20)(653,"app-concept-card",21)(654,"app-concept-card",22),n()(),t(655,"section")(656,"h2"),e(657,"7.13 \u2014 Agent Teams (experimental)"),n(),t(658,"p"),e(659," Es un concepto "),t(660,"strong"),e(661,"completamente distinto"),n(),e(662," de los subagentes. Multiples sesiones de Claude Code coordinadas, cada una con su propia ventana de contexto completa, comunicandose directamente entre ellas via "),t(663,"code"),e(664,"SendMessage"),n(),e(665,". "),n(),t(666,"div",8)(667,"table")(668,"thead")(669,"tr"),a(670,"th"),t(671,"th"),e(672,"Subagentes"),n(),t(673,"th"),e(674,"Agent Teams"),n()()(),t(675,"tbody")(676,"tr")(677,"td")(678,"strong"),e(679,"Contexto"),n()(),t(680,"td"),e(681,"Comparten la sesion principal"),n(),t(682,"td"),e(683,"Cada agente tiene su propio contexto completo"),n()(),t(684,"tr")(685,"td")(686,"strong"),e(687,"Comunicacion"),n()(),t(688,"td"),e(689,"Solo reportan de vuelta al principal"),n(),t(690,"td"),e(691,"Se comunican directamente entre si"),n()(),t(692,"tr")(693,"td")(694,"strong"),e(695,"Interaccion"),n()(),t(696,"td"),e(697,"Solo via conversacion principal"),n(),t(698,"td"),e(699,"Puedes hablar con cada agente individualmente"),n()(),t(700,"tr")(701,"td")(702,"strong"),e(703,"Estado"),n()(),t(704,"td"),e(705,"Estable, disponible por defecto"),n(),t(706,"td"),e(707,"Experimental, desactivado por defecto"),n()()()()(),a(708,"app-code-block",10),t(709,"app-callout",23)(710,"p"),e(711," Agent Teams tiene limitaciones conocidas en: resumption de sesiones, coordinacion de tareas y comportamiento de shutdown. Usar en produccion con precaucion. Requiere Claude Code v2.1.32+. "),n()(),t(712,"p"),e(713," Cuando usar Agent Teams vs Subagentes: si tu tarea requiere paralelismo sostenido o excede la ventana de contexto, Agent Teams da a cada trabajador su propio contexto independiente. Para la mayoria de casos, los subagentes regulares son suficientes y mas estables. "),n()(),t(714,"section")(715,"h2"),e(716,"7.14 \u2014 Ejemplos completos"),n(),t(717,"h3"),e(718,"Debugger con acceso completo"),n(),a(719,"app-code-block",10),t(720,"h3"),e(721,"Data scientist especializado"),n(),a(722,"app-code-block",10),t(723,"h3"),e(724,"Buenas practicas de diseno"),n(),t(725,"app-callout",24)(726,"p"),e(727," Un subagente, una responsabilidad. El "),t(728,"code"),e(729,"debugger"),n(),e(730," solo debuggea, el "),t(731,"code"),e(732,"code-reviewer"),n(),e(733,' solo revisa. La descripcion es especifica e incluye "use proactively". Las herramientas son las minimas necesarias. Esta en version control para que el equipo lo use. '),n()(),t(734,"app-callout",25)(735,"p"),e(736,' Un subagente "asistente general" con acceso a todas las herramientas y una descripcion vaga ("helps with coding tasks"). Claude nunca sabe cuando usarlo, y cuando lo usa puede hacer cambios destructivos donde no debia. '),n()()(),a(737,"app-module-nav",26),n()),l&2&&(i(116),o("code",s.code.agentsCommand),i(3),o("code",s.code.agentScope),i(3),o("code",s.code.basicAgentStructure),i(70),o("code",s.code.cliFlag),i(219),o("code",s.code.modelResolution),i(6),o("code",s.code.toolsAllowDeny),i(8),o("code",s.code.agentRestrictions),i(3),o("code",s.code.mcpScopedAgent),i(5),o("code",s.code.disableAgents),i(47),o("code",s.code.memoryAgent),i(17),o("code",s.code.hooksInFrontmatter),i(3),o("code",s.code.validateReadonlyScript),i(3),o("code",s.code.hooksInSettings),i(33),o("code",s.code.invokeNatural),i(3),o("code",s.code.invokeMention),i(8),o("code",s.code.invokeFlag),i(3),o("code",s.code.invokeConfig),i(68),o("code",s.code.parallelResearch),i(12),o("code",s.code.parallelResearch),i(8),o("code",s.code.chainAgents),i(3),o("code",s.code.resumeAgent),i(67),o("code",s.code.agentTeamsConfig),i(11),o("code",s.code.debuggerAgent),i(3),o("code",s.code.dataScientistAgent),i(15),o("prev",s.prev)("next",s.next))},dependencies:[u,g,c,m,p],encapsulation:2})};export{x as Modulo07Component};

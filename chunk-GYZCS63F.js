import{a as m,b as c,c as p,d as u,e as x}from"./chunk-LCHIYWU5.js";import{e as s,f as r,i as l,j as t,k as n,l as a,t as e}from"./chunk-HIV27VVN.js";var E=class d{prev={label:"Modulo 1: Fundamentos",route:"/cursos/claude-code/modulo-01"};next={label:"Modulo 3: Manejo del Contexto",route:"/cursos/claude-code/modulo-03"};code={importsAt:`
<span class="comment"># Instrucciones del Proyecto</span>

Ver <span class="keyword">@README</span> para el overview del proyecto.
Ver <span class="keyword">@package.json</span> para los comandos npm disponibles.

<span class="comment"># Git workflow</span>
Seguir las instrucciones en <span class="keyword">@docs/git-instructions.md</span>

<span class="comment"># Importar instrucciones personales desde home</span>
<span class="keyword">@~/.claude/mis-instrucciones-proyecto.md</span>`,agentsMd:`
@AGENTS.md

## Claude Code
Usar plan mode para cambios en \`src/billing/\`.`,rulesFolder:`
.claude/
  rules/
    code-style.md      <span class="comment"># Siempre se carga</span>
    testing.md          <span class="comment"># Siempre se carga</span>
    api-rules.md        <span class="comment"># Solo cuando trabaja en src/api/ (con frontmatter paths)</span>`,rulesConditional:`
<span class="comment">---</span>
<span class="keyword">paths</span>:
  - <span class="string">"src/api/**/*.ts"</span>
<span class="comment">---</span>

<span class="comment"># Reglas para el API</span>
- Todos los endpoints deben validar input
- Usar formato estandar de error response
- Incluir tests de integracion para cada endpoint`,generateClaudeMd:`
<span class="comment"># Genera un CLAUDE.md analizando tu codebase</span>
/init

<span class="comment"># Version interactiva multi-fase</span>
<span class="command">export</span> CLAUDE_CODE_NEW_INIT=true
/init`,claudeMdBueno:'\n<span class="comment"># CLAUDE.md - Proyecto API</span>\n\n<span class="comment">## Build y Test</span>\n- Build: `npm run build`\n- Test: `npm test`\n- Lint: `npm run lint`\n- Test individual: `npm test -- --grep "nombre"`\n\n<span class="comment">## Convenciones</span>\n- Indentacion: 2 espacios\n- Nombres de archivos: kebab-case\n- Exports: named exports, nunca default\n- Errores API: usar `AppError` de `src/lib/errors.ts`\n\n<span class="comment">## Arquitectura</span>\n- Handlers en `src/api/handlers/`\n- Servicios en `src/services/`\n- Cada handler tiene su test en `__tests__/`',claudeMdMalo:`
<span class="comment"># CLAUDE.md</span>

Este es un proyecto de Node.js que usa TypeScript.
Por favor formatea el codigo correctamente y sigue
las mejores practicas. Asegurate de que el codigo
sea limpio y mantenible. Los tests son importantes.
Trata de no romper nada. El proyecto es complejo
asi que ten cuidado. Usamos una base de datos
PostgreSQL y Redis para cache. El frontend esta
en React. Tenemos muchos microservicios...

(... 500 lineas mas de texto vago ...)`,claudeMdExcludes:`
{
  <span class="string">"claudeMdExcludes"</span>: [
    <span class="string">"**/otro-equipo/CLAUDE.md"</span>,
    <span class="string">"/home/user/monorepo/legacy/.claude/rules/**"</span>
  ]
}`,settingsBueno:`
<span class="comment">// .claude/settings.json (compartido con el equipo)</span>
{
  <span class="string">"$schema"</span>: <span class="string">"https://json.schemastore.org/claude-code-settings.json"</span>,
  <span class="string">"permissions"</span>: {
    <span class="string">"allow"</span>: [<span class="string">"Bash(npm test *)"</span>, <span class="string">"Bash(npm run lint)"</span>],
    <span class="string">"deny"</span>: [<span class="string">"Bash(git push *)"</span>, <span class="string">"Read(./.env*)"</span>]
  },
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{ <span class="string">"matcher"</span>: <span class="string">"Edit"</span>, <span class="string">"command"</span>: <span class="string">"npm run lint --fix $FILE"</span> }]
  }
}

<span class="comment">// .claude/settings.local.json (solo tu)</span>
{
  <span class="string">"model"</span>: <span class="string">"opus"</span>,
  <span class="string">"effortLevel"</span>: <span class="string">"high"</span>,
  <span class="string">"claudeMdExcludes"</span>: [<span class="string">"**/team-mobile/CLAUDE.md"</span>]
}`,settingsMalo:`
<span class="comment">// .claude/settings.json (committeado a git)</span>
{
  <span class="string">"model"</span>: <span class="string">"opus"</span>,           <span class="comment">// Forzas TU modelo al equipo</span>
  <span class="string">"effortLevel"</span>: <span class="string">"max"</span>,     <span class="comment">// Gasto innecesario para otros</span>
  <span class="string">"claudeMdExcludes"</span>: [      <span class="comment">// TUS exclusiones afectan a todos</span>
    <span class="string">"**/docs/CLAUDE.md"</span>
  ],
  <span class="string">"permissions"</span>: {
    <span class="string">"allow"</span>: [<span class="string">"Bash(rm -rf *)"</span>] <span class="comment">// PELIGROSO: permite borrado masivo a todos</span>
  }
}`,settingsSchema:`
{
  <span class="string">"$schema"</span>: <span class="string">"https://json.schemastore.org/claude-code-settings.json"</span>,
  ...
}`,settingsAttribution:`
{
  <span class="string">"attribution"</span>: {
    <span class="string">"commit"</span>: <span class="string">"Generated with AI\\n\\nCo-Authored-By: AI &lt;ai@example.com&gt;"</span>,
    <span class="string">"pr"</span>: <span class="string">""</span>
  }
}`,ignoreRules:`
<span class="comment">// En .claude/settings.json o settings.local.json</span>
{
  <span class="string">"permissions"</span>: {
    <span class="string">"deny"</span>: [
      <span class="string">"Read(./.env)"</span>,            <span class="comment">// Archivo exacto</span>
      <span class="string">"Read(./.env.*)"</span>,           <span class="comment">// Wildcard de extension</span>
      <span class="string">"Read(./secrets/**)"</span>,       <span class="comment">// Directorio recursivo</span>
      <span class="string">"Read(./node_modules/**)"</span>,  <span class="comment">// Dependencias</span>
      <span class="string">"Read(./build/**)"</span>,         <span class="comment">// Output de build</span>
      <span class="string">"Read(*.key)"</span>,              <span class="comment">// Archivos de clave</span>
      <span class="string">"Read(*.pem)"</span>              <span class="comment">// Certificados</span>
    ]
  }
}`,keybindingsFormat:`
{
  <span class="string">"$schema"</span>: <span class="string">"https://www.schemastore.org/claude-code-keybindings.json"</span>,
  <span class="string">"bindings"</span>: [
    {
      <span class="string">"context"</span>: <span class="string">"Chat"</span>,
      <span class="string">"bindings"</span>: {
        <span class="string">"ctrl+e"</span>: <span class="string">"chat:externalEditor"</span>,
        <span class="string">"ctrl+s"</span>: <span class="string">"chat:stash"</span>,
        <span class="string">"ctrl+u"</span>: <span class="keyword">null</span>          <span class="comment">// Desactivar atajo</span>
      }
    }
  ]
}`,keybindingsContexts:`
<span class="comment">// Contextos principales:</span>
<span class="string">"Global"</span>          <span class="comment">// Siempre activo</span>
<span class="string">"Chat"</span>            <span class="comment">// En el input de chat</span>
<span class="string">"Autocomplete"</span>    <span class="comment">// Cuando hay sugerencias</span>
<span class="string">"Confirmation"</span>    <span class="comment">// En prompts de permisos</span>
<span class="string">"HistorySearch"</span>   <span class="comment">// Buscando en historial</span>
<span class="string">"Task"</span>            <span class="comment">// En vista de tareas</span>
<span class="string">"DiffDialog"</span>      <span class="comment">// Revisando diffs</span>
<span class="string">"ModelPicker"</span>     <span class="comment">// Seleccionando modelo</span>`,keybindingsChords:`
<span class="comment">// Secuencia: Ctrl+K luego Ctrl+S (separado por espacio)</span>
<span class="string">"ctrl+k ctrl+s"</span>: <span class="string">"chat:submit"</span>

<span class="comment">// Reclamar un prefijo: desactivar chords y reasignar</span>
{
  <span class="string">"context"</span>: <span class="string">"Chat"</span>,
  <span class="string">"bindings"</span>: {
    <span class="string">"ctrl+x ctrl+k"</span>: <span class="keyword">null</span>,     <span class="comment">// Liberar chord</span>
    <span class="string">"ctrl+x ctrl+e"</span>: <span class="keyword">null</span>,     <span class="comment">// Liberar chord</span>
    <span class="string">"ctrl+x"</span>: <span class="string">"chat:newline"</span>    <span class="comment">// Reasignar prefijo</span>
  }
}`,projectStructure:`
proyecto/
  <span class="keyword">CLAUDE.md</span>                  <span class="comment"># Instrucciones (alternativa: .claude/CLAUDE.md)</span>
  <span class="keyword">.mcp.json</span>                  <span class="comment"># Servidores MCP del proyecto</span>
  <span class="keyword">.claude/</span>
    <span class="keyword">CLAUDE.md</span>              <span class="comment"># Instrucciones del proyecto</span>
    <span class="keyword">settings.json</span>          <span class="comment"># Settings compartidos (commitear a git)</span>
    <span class="keyword">settings.local.json</span>    <span class="comment"># Settings locales (gitignored)</span>
    <span class="keyword">rules/</span>                 <span class="comment"># Instrucciones modulares</span>
      code-style.md
      testing.md
      security.md
    <span class="keyword">agents/</span>                <span class="comment"># Definiciones de subagentes custom</span>
    <span class="keyword">commands/</span>              <span class="comment"># Slash commands personalizados</span>`,userStructure:`
~/.claude/
  <span class="keyword">CLAUDE.md</span>                  <span class="comment"># Instrucciones personales (todos los proyectos)</span>
  <span class="keyword">settings.json</span>              <span class="comment"># Settings de usuario</span>
  <span class="keyword">keybindings.json</span>           <span class="comment"># Atajos de teclado personalizados</span>
  <span class="keyword">rules/</span>                     <span class="comment"># Reglas personales (todos los proyectos)</span>
    preferences.md
    workflows.md
  <span class="keyword">agents/</span>                    <span class="comment"># Subagentes de usuario</span>
  <span class="keyword">commands/</span>                  <span class="comment"># Commands de usuario</span>
  <span class="keyword">projects/</span>                  <span class="comment"># Auto memoria por proyecto</span>
    &lt;hash-proyecto&gt;/
      memory/
        MEMORY.md            <span class="comment"># Indice de memorias</span>
        topic-file.md        <span class="comment"># Archivos por tema</span>`,enterpriseStructure:`
<span class="comment"># macOS</span>
/Library/Application Support/ClaudeCode/
  <span class="keyword">managed-settings.json</span>      <span class="comment"># Settings que nadie puede sobreescribir</span>
  <span class="keyword">managed-settings.d/</span>        <span class="comment"># Fragmentos de diferentes equipos</span>
    10-telemetry.json
    20-security.json
  <span class="keyword">CLAUDE.md</span>                  <span class="comment"># Instrucciones enterprise obligatorias</span>
  <span class="keyword">managed-mcp.json</span>           <span class="comment"># MCP servers administrados</span>

<span class="comment"># Linux / WSL</span>
/etc/claude-code/
  managed-settings.json
  CLAUDE.md

<span class="comment"># Windows</span>
C:\\Program Files\\ClaudeCode\\
  managed-settings.json
  CLAUDE.md`};static \u0275fac=function(o){return new(o||d)};static \u0275cmp=r({type:d,selectors:[["app-modulo-02"]],decls:880,vars:21,consts:[[1,"container"],["number","Modulo 2 de 11","title","Archivos de Configuracion","subtitle","CLAUDE.md, settings.json, reglas modulares, keybindings y estructura del directorio .claude/"],[1,"table-wrapper"],[3,"code"],["type","info","title","\u24D8 Compatibilidad con AGENTS.md"],["type","good","title","\u2714 Buena practica \u2014 CLAUDE.md efectivo"],["type","bad","title","\u2718 Mala practica \u2014 CLAUDE.md inefectivo"],["type","warn","title","\u26A0 Tamano maximo recomendado"],["type","info","title","\u24D8 Tip: comentarios HTML"],["type","good","title","\u2714 Buena practica \u2014 Separar shared vs personal"],["type","bad","title","\u2718 Mala practica \u2014 Mezclar todo en un solo archivo"],["type","warn","title","\u26A0 Limitacion importante"],["type","info","title","\u24D8 Alternativa comunitaria"],["type","info","title","\u24D8 Diagnostico"],["type","good","title","\u2714 Buena practica \u2014 Organizacion clara"],["type","bad","title","\u2718 Mala practica"],[1,"concept-grid"],["title","CLAUDE.md","description","Instrucciones en lenguaje natural. Maximo ~200 lineas. Especifico y verificable. Soporta @imports y rules/ modulares."],["title","settings.json","description","Configuracion tecnica: permisos, hooks, modelo, env. Separar shared (.claude/) de personal (~/.claude/ y .local)."],["title",".claudeignore","description","No existe nativamente. Usa reglas deny con Read(path) en settings.json."],["title","keybindings.json","description","En ~/.claude/keybindings.json. Soporta chords, contextos y se aplica sin reiniciar. Usa /doctor para diagnostico."],[3,"prev","next"]],template:function(o,i){o&1&&(t(0,"div",0),a(1,"app-module-header",1),t(2,"section")(3,"h2"),e(4,"2.1 \u2014 CLAUDE.md"),n(),t(5,"p"),e(6," Archivo markdown que le da a Claude "),t(7,"strong"),e(8,"instrucciones persistentes"),n(),e(9," para tu proyecto. Se carga en el contexto al inicio de cada sesion. No es configuracion forzada \u2014 es "),t(10,"strong"),e(11,"contexto"),n(),e(12,", asi que la forma en que escribes las instrucciones afecta que tan bien Claude las sigue. "),n(),t(13,"h3"),e(14,"Donde colocarlo (multiples niveles)"),n(),t(15,"div",2)(16,"table")(17,"thead")(18,"tr")(19,"th"),e(20,"Scope"),n(),t(21,"th"),e(22,"Ubicacion"),n(),t(23,"th"),e(24,"Compartido?"),n(),t(25,"th"),e(26,"Proposito"),n()()(),t(27,"tbody")(28,"tr")(29,"td")(30,"strong"),e(31,"Managed"),n()(),t(32,"td")(33,"code"),e(34,"/Library/Application Support/ClaudeCode/CLAUDE.md"),n(),e(35," (macOS)"),n(),t(36,"td"),e(37,"Toda la org"),n(),t(38,"td"),e(39,"Politicas enterprise, estandares corporativos"),n()(),t(40,"tr")(41,"td")(42,"strong"),e(43,"Proyecto"),n()(),t(44,"td")(45,"code"),e(46,"./CLAUDE.md"),n(),e(47," o "),t(48,"code"),e(49,"./.claude/CLAUDE.md"),n()(),t(50,"td"),e(51,"Equipo (git)"),n(),t(52,"td"),e(53,"Convenciones del proyecto, comandos de build/test"),n()(),t(54,"tr")(55,"td")(56,"strong"),e(57,"Usuario"),n()(),t(58,"td")(59,"code"),e(60,"~/.claude/CLAUDE.md"),n()(),t(61,"td"),e(62,"Solo tu"),n(),t(63,"td"),e(64,"Preferencias personales en todos los proyectos"),n()(),t(65,"tr")(66,"td")(67,"strong"),e(68,"Subdirectorio"),n()(),t(69,"td")(70,"code"),e(71,"./cualquier/sub/CLAUDE.md"),n()(),t(72,"td"),e(73,"Equipo (git)"),n(),t(74,"td"),e(75,"Instrucciones especificas de esa carpeta"),n()()()()(),t(76,"h3"),e(77,"Herencia y orden de carga"),n(),t(78,"ul")(79,"li"),e(80," Claude camina "),t(81,"strong"),e(82,"hacia arriba"),n(),e(83," en el arbol de directorios cargando cada CLAUDE.md que encuentra "),n(),t(84,"li"),e(85," Si ejecutas Claude en "),t(86,"code"),e(87,"foo/bar/"),n(),e(88,", carga "),t(89,"code"),e(90,"foo/bar/CLAUDE.md"),n(),e(91," Y "),t(92,"code"),e(93,"foo/CLAUDE.md"),n()(),t(94,"li"),e(95," Los de subdirectorios se cargan "),t(96,"strong"),e(97,"bajo demanda"),n(),e(98," cuando Claude lee archivos ahi (no al inicio) "),n(),t(99,"li"),e(100," Reglas de usuario ("),t(101,"code"),e(102,"~/.claude/rules/"),n(),e(103,") cargan "),t(104,"strong"),e(105,"antes"),n(),e(106," que las del proyecto \u2014 proyecto tiene mayor prioridad "),n(),t(107,"li"),e(108,"Managed CLAUDE.md "),t(109,"strong"),e(110,"no se puede excluir"),n(),e(111," nunca"),n()(),t(112,"h3"),e(113,"Imports con @"),n(),t(114,"p"),e(115,"Puedes referenciar otros archivos directamente dentro de CLAUDE.md:"),n(),a(116,"app-code-block",3),t(117,"ul")(118,"li"),e(119,"Rutas relativas (se resuelven desde el archivo que importa) o absolutas"),n(),t(120,"li"),e(121,"Imports recursivos hasta "),t(122,"strong"),e(123,"5 niveles"),n(),e(124," de profundidad"),n(),t(125,"li"),e(126,"El primer import externo dispara un dialogo de aprobacion"),n()(),t(127,"app-callout",4)(128,"p"),e(129," Si tu repo ya tiene "),t(130,"code"),e(131,"AGENTS.md"),n(),e(132," para otras herramientas, importalo desde CLAUDE.md: "),n(),a(133,"app-code-block",3),n(),t(134,"h3"),e(135,".claude/rules/ \u2014 Instrucciones modulares"),n(),t(136,"p"),e(137,"Para proyectos grandes, divide instrucciones en archivos separados:"),n(),a(138,"app-code-block",3),t(139,"p"),e(140,"Las reglas pueden ser "),t(141,"strong"),e(142,"condicionales por path"),n(),e(143," usando frontmatter YAML:"),n(),a(144,"app-code-block",3),t(145,"p"),e(146," Globs soportados: "),t(147,"code"),e(148,"**/*.ts"),n(),e(149,", "),t(150,"code"),e(151,"src/**/*"),n(),e(152,", "),t(153,"code"),e(154,"*.md"),n(),e(155,", "),t(156,"code"),e(157,"**/*.{ts,tsx}"),n()(),t(158,"h3"),e(159,"Generar CLAUDE.md automaticamente"),n(),a(160,"app-code-block",3),t(161,"app-callout",5),a(162,"app-code-block",3),t(163,"p"),e(164," Especifico, verificable, corto (~30 lineas). Claude puede seguir cada instruccion sin ambiguedad. "),n()(),t(165,"app-callout",6),a(166,"app-code-block",3),t(167,"p"),e(168,' Vago, no verificable, demasiado largo. Claude no puede seguir "formatea correctamente" ni "ten cuidado" porque no son acciones concretas. Consume contexto innecesariamente. '),n()(),t(169,"h3"),e(170,"claudeMdExcludes"),n(),t(171,"p"),e(172,"En monorepos, excluye CLAUDE.md irrelevantes en "),t(173,"code"),e(174,"settings.local.json"),n(),e(175,":"),n(),a(176,"app-code-block",3),t(177,"app-callout",7)(178,"p"),e(179," Maximo "),t(180,"strong"),e(181,"~200 lineas"),n(),e(182," por archivo CLAUDE.md. Archivos mas largos consumen contexto valioso y reducen la adherencia a las instrucciones. Si necesitas mas, usa "),t(183,"code"),e(184,".claude/rules/"),n(),e(185," para modularizar. "),n()(),t(186,"app-callout",8)(187,"p"),e(188," Los comentarios HTML ("),t(189,"code"),e(190,"<!-- nota -->"),n(),e(191,") se "),t(192,"strong"),e(193,"eliminan"),n(),e(194," antes de inyectar al contexto. Usalos para notas humanas que ahorran tokens de contexto. "),n()()(),t(195,"section")(196,"h2"),e(197,"2.2 \u2014 settings.json"),n(),t(198,"h3"),e(199,"Niveles de configuracion"),n(),t(200,"div",2)(201,"table")(202,"thead")(203,"tr")(204,"th"),e(205,"Scope"),n(),t(206,"th"),e(207,"Ubicacion"),n(),t(208,"th"),e(209,"Compartido?"),n(),t(210,"th"),e(211,"Prioridad"),n()()(),t(212,"tbody")(213,"tr")(214,"td")(215,"strong"),e(216,"Managed"),n()(),t(217,"td"),e(218,"Directorio del sistema (enterprise)"),n(),t(219,"td"),e(220,"Si (IT deploy)"),n(),t(221,"td"),e(222,"Maxima"),n()(),t(223,"tr")(224,"td")(225,"strong"),e(226,"CLI args"),n()(),t(227,"td"),e(228,"Flags al ejecutar "),t(229,"code"),e(230,"claude"),n()(),t(231,"td"),e(232,"No"),n(),t(233,"td"),e(234,"Alta"),n()(),t(235,"tr")(236,"td")(237,"strong"),e(238,"Local"),n()(),t(239,"td")(240,"code"),e(241,".claude/settings.local.json"),n()(),t(242,"td"),e(243,"No (gitignored)"),n(),t(244,"td"),e(245,"Media-alta"),n()(),t(246,"tr")(247,"td")(248,"strong"),e(249,"Proyecto"),n()(),t(250,"td")(251,"code"),e(252,".claude/settings.json"),n()(),t(253,"td"),e(254,"Si (git)"),n(),t(255,"td"),e(256,"Media"),n()(),t(257,"tr")(258,"td")(259,"strong"),e(260,"Usuario"),n()(),t(261,"td")(262,"code"),e(263,"~/.claude/settings.json"),n()(),t(264,"td"),e(265,"No"),n(),t(266,"td"),e(267,"Baja"),n()()()()(),t(268,"p")(269,"strong"),e(270,"Regla importante:"),n(),e(271," los arrays se "),t(272,"strong"),e(273,"mezclan"),n(),e(274," (concatenan y deduplican), no se reemplazan entre niveles. "),n(),t(275,"h3"),e(276,"Keys principales"),n(),t(277,"div",2)(278,"table")(279,"thead")(280,"tr")(281,"th"),e(282,"Key"),n(),t(283,"th"),e(284,"Descripcion"),n(),t(285,"th"),e(286,"Ejemplo"),n()()(),t(287,"tbody")(288,"tr")(289,"td")(290,"code"),e(291,"permissions"),n()(),t(292,"td"),e(293,"Reglas allow/deny/ask"),n(),t(294,"td")(295,"code"),e(296,'{"allow": [...], "deny": [...]}'),n()()(),t(297,"tr")(298,"td")(299,"code"),e(300,"env"),n()(),t(301,"td"),e(302,"Variables de entorno por sesion"),n(),t(303,"td")(304,"code"),e(305,'{"NODE_ENV": "test"}'),n()()(),t(306,"tr")(307,"td")(308,"code"),e(309,"model"),n()(),t(310,"td"),e(311,"Modelo por defecto"),n(),t(312,"td")(313,"code"),e(314,'"sonnet"'),n()()(),t(315,"tr")(316,"td")(317,"code"),e(318,"availableModels"),n()(),t(319,"td"),e(320,"Restringir modelos disponibles"),n(),t(321,"td")(322,"code"),e(323,'["sonnet", "haiku"]'),n()()(),t(324,"tr")(325,"td")(326,"code"),e(327,"effortLevel"),n()(),t(328,"td"),e(329,"Nivel de esfuerzo persistente"),n(),t(330,"td")(331,"code"),e(332,'"high"'),n()()(),t(333,"tr")(334,"td")(335,"code"),e(336,"hooks"),n()(),t(337,"td"),e(338,"Hooks de ciclo de vida"),n(),t(339,"td"),e(340,"(ver Modulo 5)"),n()(),t(341,"tr")(342,"td")(343,"code"),e(344,"language"),n()(),t(345,"td"),e(346,"Idioma de respuestas"),n(),t(347,"td")(348,"code"),e(349,'"spanish"'),n()()(),t(350,"tr")(351,"td")(352,"code"),e(353,"outputStyle"),n()(),t(354,"td"),e(355,"Estilo del system prompt"),n(),t(356,"td")(357,"code"),e(358,'"Explanatory"'),n()()(),t(359,"tr")(360,"td")(361,"code"),e(362,"autoMemoryEnabled"),n()(),t(363,"td"),e(364,"Activar/desactivar memoria"),n(),t(365,"td")(366,"code"),e(367,"true"),n()()(),t(368,"tr")(369,"td")(370,"code"),e(371,"claudeMdExcludes"),n()(),t(372,"td"),e(373,"Excluir CLAUDE.md por glob"),n(),t(374,"td")(375,"code"),e(376,'["**/legacy/**"]'),n()()(),t(377,"tr")(378,"td")(379,"code"),e(380,"cleanupPeriodDays"),n()(),t(381,"td"),e(382,"Retencion de sesiones (default 30)"),n(),t(383,"td")(384,"code"),e(385,"15"),n()()(),t(386,"tr")(387,"td")(388,"code"),e(389,"defaultShell"),n()(),t(390,"td"),e(391,"Shell para comandos "),t(392,"code"),e(393,"!"),n()(),t(394,"td")(395,"code"),e(396,'"bash"'),n()()(),t(397,"tr")(398,"td")(399,"code"),e(400,"alwaysThinkingEnabled"),n()(),t(401,"td"),e(402,"Extended thinking por defecto"),n(),t(403,"td")(404,"code"),e(405,"true"),n()()(),t(406,"tr")(407,"td")(408,"code"),e(409,"voiceEnabled"),n()(),t(410,"td"),e(411,"Dictado por voz push-to-talk"),n(),t(412,"td")(413,"code"),e(414,"true"),n()()(),t(415,"tr")(416,"td")(417,"code"),e(418,"autoUpdatesChannel"),n()(),t(419,"td")(420,"code"),e(421,'"stable"'),n(),e(422," o "),t(423,"code"),e(424,'"latest"'),n()(),t(425,"td")(426,"code"),e(427,'"stable"'),n()()()()()(),t(428,"h3"),e(429,"settings.json vs settings.local.json"),n(),t(430,"div",2)(431,"table")(432,"thead")(433,"tr")(434,"th"),e(435,"Aspecto"),n(),t(436,"th")(437,"code"),e(438,"settings.json"),n()(),t(439,"th")(440,"code"),e(441,"settings.local.json"),n()()()(),t(442,"tbody")(443,"tr")(444,"td"),e(445,"En git?"),n(),t(446,"td"),e(447,"Si"),n(),t(448,"td"),e(449,"No (gitignored)"),n()(),t(450,"tr")(451,"td"),e(452,"Para el equipo?"),n(),t(453,"td"),e(454,"Si"),n(),t(455,"td"),e(456,"Solo tu"),n()(),t(457,"tr")(458,"td"),e(459,"Usar para"),n(),t(460,"td"),e(461,"Permisos del equipo, hooks compartidos, estandares"),n(),t(462,"td"),e(463,"Overrides personales, "),t(464,"code"),e(465,"claudeMdExcludes"),n(),e(466,", config de maquina"),n()(),t(467,"tr")(468,"td"),e(469,"Prioridad"),n(),t(470,"td"),e(471,"Menor"),n(),t(472,"td"),e(473,"Mayor"),n()()()()(),t(474,"app-callout",9),a(475,"app-code-block",3),t(476,"p"),e(477," El equipo comparte permisos y hooks. Tu personalizas modelo y excluyes CLAUDE.md de equipos que no te afectan. "),n()(),t(478,"app-callout",10),a(479,"app-code-block",3),t(480,"p"),e(481," Preferencias personales en el archivo compartido afectan a todo el equipo. Permisos peligrosos quedan committeados. "),n()(),t(482,"h3"),e(483,"Schema para autocompletado en tu editor"),n(),a(484,"app-code-block",3),t(485,"p"),e(486," Usa "),t(487,"code"),e(488,"/status"),n(),e(489," dentro de Claude Code para ver que settings estan activos y de donde vienen. "),n(),t(490,"h3"),e(491,"Keys exclusivas de enterprise (managed settings)"),n(),t(492,"div",2)(493,"table")(494,"thead")(495,"tr")(496,"th"),e(497,"Key"),n(),t(498,"th"),e(499,"Descripcion"),n()()(),t(500,"tbody")(501,"tr")(502,"td")(503,"code"),e(504,"companyAnnouncements"),n()(),t(505,"td"),e(506,"Mensajes al iniciar sesion para todos los usuarios"),n()(),t(507,"tr")(508,"td")(509,"code"),e(510,"forceLoginMethod"),n()(),t(511,"td")(512,"code"),e(513,'"claudeai"'),n(),e(514," o "),t(515,"code"),e(516,'"console"'),n()()(),t(517,"tr")(518,"td")(519,"code"),e(520,"allowManagedHooksOnly"),n()(),t(521,"td"),e(522,"Bloquear hooks de usuario/proyecto/plugin"),n()(),t(523,"tr")(524,"td")(525,"code"),e(526,"allowManagedPermissionRulesOnly"),n()(),t(527,"td"),e(528,"Solo reglas managed aplican"),n()(),t(529,"tr")(530,"td")(531,"code"),e(532,"allowManagedMcpServersOnly"),n()(),t(533,"td"),e(534,"Solo MCP servers definidos por admin"),n()(),t(535,"tr")(536,"td")(537,"code"),e(538,"disableAutoMode"),n()(),t(539,"td"),e(540,"Prevenir activacion de auto mode"),n()()()()(),t(541,"h3"),e(542,"Attribution (mensajes en commits y PRs)"),n(),a(543,"app-code-block",3),n(),t(544,"section")(545,"h2"),e(546,"2.3 \u2014 .claudeignore (no existe nativamente)"),n(),t(547,"p")(548,"strong"),e(549,"No existe"),n(),e(550," un archivo "),t(551,"code"),e(552,".claudeignore"),n(),e(553," nativo en Claude Code. La forma oficial de excluir archivos es con "),t(554,"strong"),e(555,"reglas deny"),n(),e(556," en settings.json. "),n(),t(557,"h3"),e(558,"Como lograr el mismo efecto"),n(),a(559,"app-code-block",3),t(560,"h3"),e(561,"Que archivos tipicamente excluir"),n(),t(562,"div",2)(563,"table")(564,"thead")(565,"tr")(566,"th"),e(567,"Tipo"),n(),t(568,"th"),e(569,"Patron"),n(),t(570,"th"),e(571,"Razon"),n()()(),t(572,"tbody")(573,"tr")(574,"td"),e(575,"Secrets"),n(),t(576,"td")(577,"code"),e(578,".env"),n(),e(579,", "),t(580,"code"),e(581,".env.*"),n()(),t(582,"td"),e(583,"Variables con API keys y passwords"),n()(),t(584,"tr")(585,"td"),e(586,"Credenciales"),n(),t(587,"td")(588,"code"),e(589,"secrets/**"),n(),e(590,", "),t(591,"code"),e(592,"*.key"),n(),e(593,", "),t(594,"code"),e(595,"*.pem"),n()(),t(596,"td"),e(597,"Claves privadas y certificados"),n()(),t(598,"tr")(599,"td"),e(600,"Dependencias"),n(),t(601,"td")(602,"code"),e(603,"node_modules/**"),n(),e(604,", "),t(605,"code"),e(606,"vendor/**"),n()(),t(607,"td"),e(608,"Demasiados archivos, no relevantes"),n()(),t(609,"tr")(610,"td"),e(611,"Build output"),n(),t(612,"td")(613,"code"),e(614,"build/**"),n(),e(615,", "),t(616,"code"),e(617,"dist/**"),n()(),t(618,"td"),e(619,"Archivos generados"),n()()()()(),t(620,"app-callout",11)(621,"p"),e(622," Las reglas deny previenen que Claude "),t(623,"strong"),e(624,"lea"),n(),e(625," el archivo, pero "),t(626,"strong"),e(627,"no es una frontera de seguridad dura"),n(),e(628,". Para secrets verdaderamente sensibles, usa un secrets manager (no dependas solo de deny rules). "),n()(),t(629,"h3"),e(630,"respectGitignore"),n(),t(631,"p"),e(632," El setting "),t(633,"code"),e(634,"respectGitignore"),n(),e(635," (default "),t(636,"code"),e(637,"true"),n(),e(638,") hace que el file picker "),t(639,"code"),e(640,"@"),n(),e(641," respete los patrones de "),t(642,"code"),e(643,".gitignore"),n(),e(644,". Los archivos que matchean se excluyen de las sugerencias de autocompletado. "),n(),t(645,"app-callout",12)(646,"p"),e(647," Existe el paquete "),t(648,"code"),e(649,"claude-ignore"),n(),e(650," que implementa un hook PreToolUse con sintaxis tipo "),t(651,"code"),e(652,".gitignore"),n(),e(653,", pero "),t(654,"strong"),e(655,"no es oficial"),n(),e(656," de Anthropic. "),n()()(),t(657,"section")(658,"h2"),e(659,"2.4 \u2014 keybindings.json"),n(),t(660,"p"),e(661," Ubicacion: "),t(662,"code"),e(663,"~/.claude/keybindings.json"),n(),e(664,". Ejecuta "),t(665,"code"),e(666,"/keybindings"),n(),e(667," para crear o abrir el archivo. Los cambios se aplican "),t(668,"strong"),e(669,"automaticamente sin reiniciar"),n(),e(670,". "),n(),t(671,"h3"),e(672,"Formato del archivo"),n(),a(673,"app-code-block",3),t(674,"h3"),e(675,"Atajos mas utiles"),n(),t(676,"div",2)(677,"table")(678,"thead")(679,"tr")(680,"th"),e(681,"Accion"),n(),t(682,"th"),e(683,"Default"),n(),t(684,"th"),e(685,"Que hace"),n()()(),t(686,"tbody")(687,"tr")(688,"td")(689,"code"),e(690,"chat:submit"),n()(),t(691,"td"),e(692,"Enter"),n(),t(693,"td"),e(694,"Enviar mensaje"),n()(),t(695,"tr")(696,"td")(697,"code"),e(698,"chat:newline"),n()(),t(699,"td"),e(700,"(sin asignar)"),n(),t(701,"td"),e(702,"Nueva linea sin enviar"),n()(),t(703,"tr")(704,"td")(705,"code"),e(706,"chat:cycleMode"),n()(),t(707,"td"),e(708,"Shift+Tab"),n(),t(709,"td"),e(710,"Cambiar modo de permisos"),n()(),t(711,"tr")(712,"td")(713,"code"),e(714,"chat:modelPicker"),n()(),t(715,"td"),e(716,"Cmd+P"),n(),t(717,"td"),e(718,"Selector de modelo"),n()(),t(719,"tr")(720,"td")(721,"code"),e(722,"chat:externalEditor"),n()(),t(723,"td"),e(724,"Ctrl+G"),n(),t(725,"td"),e(726,"Abrir prompt en editor externo"),n()(),t(727,"tr")(728,"td")(729,"code"),e(730,"chat:fastMode"),n()(),t(731,"td"),e(732,"Meta+O"),n(),t(733,"td"),e(734,"Toggle fast mode"),n()(),t(735,"tr")(736,"td")(737,"code"),e(738,"chat:stash"),n()(),t(739,"td"),e(740,"Ctrl+S"),n(),t(741,"td"),e(742,"Guardar prompt actual"),n()(),t(743,"tr")(744,"td")(745,"code"),e(746,"chat:killAgents"),n()(),t(747,"td"),e(748,"Ctrl+X Ctrl+K"),n(),t(749,"td"),e(750,"Matar agentes en background"),n()(),t(751,"tr")(752,"td")(753,"code"),e(754,"app:toggleTodos"),n()(),t(755,"td"),e(756,"Ctrl+T"),n(),t(757,"td"),e(758,"Toggle lista de tareas"),n()(),t(759,"tr")(760,"td")(761,"code"),e(762,"app:toggleTranscript"),n()(),t(763,"td"),e(764,"Ctrl+O"),n(),t(765,"td"),e(766,"Toggle transcript verboso"),n()(),t(767,"tr")(768,"td")(769,"code"),e(770,"history:search"),n()(),t(771,"td"),e(772,"Ctrl+R"),n(),t(773,"td"),e(774,"Buscar en historial"),n()(),t(775,"tr")(776,"td")(777,"code"),e(778,"task:background"),n()(),t(779,"td"),e(780,"Ctrl+B"),n(),t(781,"td"),e(782,"Enviar tarea a background"),n()()()()(),t(783,"h3"),e(784,"Contextos disponibles"),n(),t(785,"p"),e(786,"Cada atajo pertenece a un contexto que define cuando esta activo:"),n(),a(787,"app-code-block",3),t(788,"h3"),e(789,"Chords (secuencias de teclas)"),n(),a(790,"app-code-block",3),t(791,"h3"),e(792,"Teclas reservadas (no se pueden reasignar)"),n(),t(793,"div",2)(794,"table")(795,"thead")(796,"tr")(797,"th"),e(798,"Atajo"),n(),t(799,"th"),e(800,"Razon"),n()()(),t(801,"tbody")(802,"tr")(803,"td")(804,"code"),e(805,"Ctrl+C"),n()(),t(806,"td"),e(807,"Interrupt hardcodeado en la terminal"),n()(),t(808,"tr")(809,"td")(810,"code"),e(811,"Ctrl+D"),n()(),t(812,"td"),e(813,"Exit hardcodeado en la terminal"),n()(),t(814,"tr")(815,"td")(816,"code"),e(817,"Ctrl+M"),n()(),t(818,"td"),e(819,"Identico a Enter en terminales"),n()()()()(),t(820,"app-callout",13)(821,"p"),e(822," Ejecuta "),t(823,"code"),e(824,"/doctor"),n(),e(825," para ver advertencias de keybindings: errores de parseo, contextos invalidos, conflictos con teclas reservadas y duplicados. "),n()()(),t(826,"section")(827,"h2"),e(828,"2.5 \u2014 Estructura completa de archivos"),n(),t(829,"h3"),e(830,"A nivel de proyecto"),n(),a(831,"app-code-block",3),t(832,"h3"),e(833,"A nivel de usuario"),n(),a(834,"app-code-block",3),t(835,"h3"),e(836,"A nivel enterprise (managed)"),n(),a(837,"app-code-block",3),t(838,"app-callout",14)(839,"p"),e(840,"Usa esta regla simple para decidir donde poner cada cosa:"),n(),t(841,"ul")(842,"li")(843,"strong"),e(844,"Afecta al equipo?"),n(),e(845," \u2192 "),t(846,"code"),e(847,".claude/settings.json"),n(),e(848," + "),t(849,"code"),e(850,"CLAUDE.md"),n(),e(851," (commiteados) "),n(),t(852,"li")(853,"strong"),e(854,"Solo a ti?"),n(),e(855," \u2192 "),t(856,"code"),e(857,".claude/settings.local.json"),n(),e(858," + "),t(859,"code"),e(860,"~/.claude/"),n()(),t(861,"li")(862,"strong"),e(863,"A toda la empresa?"),n(),e(864," \u2192 Managed settings (deploy por IT)"),n()()(),t(865,"app-callout",15)(866,"p"),e(867," Poner preferencias personales (modelo, effort, exclusiones) en "),t(868,"code"),e(869,".claude/settings.json"),n(),e(870," que se commitea a git. Tus companeros terminan con tu configuracion sin quererlo. "),n()()(),t(871,"section")(872,"h2"),e(873,"Resumen rapido"),n(),t(874,"div",16),a(875,"app-concept-card",17)(876,"app-concept-card",18)(877,"app-concept-card",19)(878,"app-concept-card",20),n()(),a(879,"app-module-nav",21),n()),o&2&&(s(116),l("code",i.code.importsAt),s(17),l("code",i.code.agentsMd),s(5),l("code",i.code.rulesFolder),s(6),l("code",i.code.rulesConditional),s(16),l("code",i.code.generateClaudeMd),s(2),l("code",i.code.claudeMdBueno),s(4),l("code",i.code.claudeMdMalo),s(10),l("code",i.code.claudeMdExcludes),s(299),l("code",i.code.settingsBueno),s(4),l("code",i.code.settingsMalo),s(5),l("code",i.code.settingsSchema),s(59),l("code",i.code.settingsAttribution),s(16),l("code",i.code.ignoreRules),s(114),l("code",i.code.keybindingsFormat),s(114),l("code",i.code.keybindingsContexts),s(3),l("code",i.code.keybindingsChords),s(41),l("code",i.code.projectStructure),s(3),l("code",i.code.userStructure),s(3),l("code",i.code.enterpriseStructure),s(42),l("prev",i.prev)("next",i.next))},dependencies:[u,x,m,p,c],encapsulation:2})};export{E as Modulo02Component};

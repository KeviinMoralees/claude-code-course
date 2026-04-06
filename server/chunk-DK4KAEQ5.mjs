import './polyfills.server.mjs';
import{a as m,b as c,c as p,d as u,e as E}from"./chunk-73AZYDYL.mjs";import{F as r,G as a,H as t,I as n,Q as e,v as o,y as d}from"./chunk-3WFMEKHE.mjs";import"./chunk-T55IDOPT.mjs";var x=class l{prev={label:"Modulo 3: Manejo del Contexto",route:"/cursos/claude-code/modulo-03"};next={label:"Modulo 5: Hooks",route:"/cursos/claude-code/modulo-05"};code={storagePath:`
~/.claude/projects/<span class="keyword">&lt;proyecto&gt;</span>/memory/
  <span class="keyword">MEMORY.md</span>              <span class="comment"># Indice (NO es una memoria en si)</span>
  <span class="keyword">user_profile.md</span>        <span class="comment"># Memoria individual</span>
  <span class="keyword">feedback_testing.md</span>    <span class="comment"># Memoria individual</span>
  <span class="keyword">project_migration.md</span>   <span class="comment"># Memoria individual</span>
  <span class="keyword">reference_grafana.md</span>   <span class="comment"># etc.</span>`,userMemory:`
<span class="comment">---</span>
<span class="keyword">name</span>: Kevin - Perfil
<span class="keyword">description</span>: Desarrollador backend senior aprendiendo React, prefiere explicaciones concisas
<span class="keyword">type</span>: user
<span class="comment">---</span>

Kevin es desarrollador backend con 5 anos de experiencia en Go.
Esta aprendiendo React y el frontend de este proyecto.
Prefiere explicaciones concisas con analogias al backend.`,feedbackMemory:`
<span class="comment">---</span>
<span class="keyword">name</span>: No mockear la base de datos en tests
<span class="keyword">description</span>: Tests de integracion deben usar DB real, no mocks, por incidente Q1
<span class="keyword">type</span>: feedback
<span class="comment">---</span>

Tests de integracion deben usar una base de datos real, no mocks.

<span class="keyword">**Why:**</span> Incidente en Q1 donde tests con mocks pasaron pero la
migracion de prod fallo porque el schema real era diferente.

<span class="keyword">**How to apply:**</span> En cualquier test bajo src/tests/integration/,
siempre usar testcontainers con Postgres real.`,feedbackSuccess:`
<span class="comment">---</span>
<span class="keyword">name</span>: PR bundleado para refactors
<span class="keyword">description</span>: Para refactors, usuario prefiere 1 PR grande en vez de muchos pequenos
<span class="keyword">type</span>: feedback
<span class="comment">---</span>

Para refactors en este area, el usuario prefiere un PR bundleado
en vez de muchos PRs pequenos.

<span class="keyword">**Why:**</span> Confirmado despues de que elegi este approach y el usuario
lo aprobo sin objeciones. Separarlo habria sido churn innecesario.

<span class="keyword">**How to apply:**</span> En refactors que tocan multiples archivos
relacionados, proponer un solo PR.`,projectMemory:`
<span class="comment">---</span>
<span class="keyword">name</span>: Migracion REST a GraphQL
<span class="keyword">description</span>: Migracion en curso de REST a GraphQL, deadline Q3 2026
<span class="keyword">type</span>: project
<span class="comment">---</span>

Estamos migrando de REST a GraphQL. Deadline: Q3 2026.

<span class="keyword">**Why:**</span> El equipo mobile necesita queries flexibles y el
REST actual genera over-fetching significativo.

<span class="keyword">**How to apply:**</span> Nuevos endpoints deben ser GraphQL.
Los REST existentes se mantienen hasta migracion completa.
No agregar nuevos endpoints REST.`,referenceMemory:`
<span class="comment">---</span>
<span class="keyword">name</span>: Dashboard de latencia API
<span class="keyword">description</span>: Grafana dashboard que oncall monitorea para latencia de requests
<span class="keyword">type</span>: reference
<span class="comment">---</span>

El dashboard de latencia API esta en grafana.internal/d/api-latency.
Es lo que oncall monitorea. Revisarlo antes de tocar codigo
de request handling.`,memoryMdExample:`
<span class="comment"># Ejemplo de MEMORY.md bien estructurado</span>

- [Kevin - Perfil](user_profile.md) \u2014 Backend senior aprendiendo React, prefiere conciso
- [No mockear DB](feedback_testing.md) \u2014 Tests integracion con DB real por incidente Q1
- [PR bundleado](feedback_pr_style.md) \u2014 Prefiere 1 PR grande para refactors
- [Migracion GraphQL](project_migration.md) \u2014 REST a GraphQL, deadline Q3 2026
- [Dashboard latencia](reference_grafana.md) \u2014 grafana.internal/d/api-latency para oncall
- [Bugs en Linear](reference_linear.md) \u2014 Proyecto INGEST para bugs de pipeline`,memoryFileFormat:`
<span class="comment">---</span>
<span class="keyword">name</span>: {nombre de la memoria}
<span class="keyword">description</span>: {1 linea \u2014 se usa para decidir relevancia en futuras sesiones}
<span class="keyword">type</span>: {user | feedback | project | reference}
<span class="comment">---</span>

{contenido de la memoria}

<span class="comment"># Para feedback y project, usar esta estructura:</span>
{regla o hecho}

<span class="keyword">**Why:**</span> {motivacion, incidente o preferencia que lo origino}
<span class="keyword">**How to apply:**</span> {cuando y donde aplicar esta regla}`,memoryMdGood:`
<span class="comment"># Organizado por tema (semantico), no por fecha</span>

<span class="comment">## Usuario</span>
- [Perfil Kevin](user_profile.md) \u2014 Backend senior, Go, aprendiendo React

<span class="comment">## Feedback</span>
- [No mockear DB](feedback_testing.md) \u2014 DB real en tests integracion
- [PR bundleado](feedback_pr_style.md) \u2014 1 PR grande para refactors

<span class="comment">## Proyecto</span>
- [Migracion GraphQL](project_migration.md) \u2014 REST a GraphQL, Q3 2026

<span class="comment">## Referencias</span>
- [Dashboard latencia](reference_grafana.md) \u2014 Grafana oncall
- [Bugs pipeline](reference_linear.md) \u2014 Linear proyecto INGEST`,memoryMdBad:`
<span class="comment"># MAL: contenido completo en el indice</span>

- Kevin es un desarrollador backend senior con 5 anos de experiencia
  en Go que esta aprendiendo React. Prefiere explicaciones concisas
  con analogias al backend. Trabaja en el equipo de platform.

- Los tests de integracion deben usar una base de datos real porque
  en Q1 tuvimos un incidente donde los mocks pasaron pero la migracion
  de produccion fallo. Siempre usar testcontainers con Postgres real
  en cualquier test bajo src/tests/integration/. Esto fue validado
  por el tech lead y es politica del equipo desde marzo 2026.

- Estamos migrando de REST a GraphQL con deadline en Q3 2026 porque
  el equipo mobile necesita queries flexibles y el REST actual genera
  over-fetching significativo...

<span class="comment"># Con 10 memorias asi, MEMORY.md pasa de 200 lineas</span>
<span class="comment"># y el contenido extra NO se carga al inicio</span>`,goodToSave:`
<span class="comment"># No-obvio, recurrente, estable:</span>
"El CI tarda 45 min porque corre E2E contra 3 browsers.
Para PRs que solo tocan backend, se puede skipear con [skip-e2e]."

<span class="comment"># Preferencia validada:</span>
"Kevin prefiere que le muestre el diff completo, no un resumen."

<span class="comment"># Contexto no derivable del codigo:</span>
"El modulo billing esta congelado por revision legal hasta Q3."`,notWorthSaving:`
<span class="comment"># Derivable del codigo:</span>
"El proyecto usa TypeScript con ESLint y Prettier."
<span class="comment"># Claude lo ve al leer package.json y tsconfig.json</span>

<span class="comment"># Git history:</span>
"Kevin hizo 12 PRs esta semana, 3 en el modulo auth."
<span class="comment"># git log lo dice mejor y mas actualizado</span>

<span class="comment"># Efimero:</span>
"Estamos en el paso 3 de 7 del refactor actual."
<span class="comment"># Usar Tasks para esto, no memoria</span>`,settingsCode:`
<span class="comment">// Desactivar auto memory</span>
{ <span class="string">"autoMemoryEnabled"</span>: <span class="keyword">false</span> }

<span class="comment">// Directorio custom de memoria</span>
{ <span class="string">"autoMemoryDirectory"</span>: <span class="string">"~/mi-memoria-custom"</span> }`,envVarCI:`
<span class="comment"># Desactivar completamente en CI (toma precedencia sobre todo)</span>
<span class="command">export</span> CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`,completeMemoryMd:`
<span class="comment">## Usuario</span>
- [Perfil Kevin](user_profile.md) \u2014 Backend senior Go, aprendiendo React

<span class="comment">## Feedback</span>
- [Testing real](feedback_testing.md) \u2014 DB real en tests, no mocks
- [Estilo PRs](feedback_pr_style.md) \u2014 PRs bundleados para refactors
- [Sin resumen final](feedback_responses.md) \u2014 No resumir al final de cada respuesta

<span class="comment">## Proyecto</span>
- [Migracion GraphQL](project_graphql.md) \u2014 REST a GraphQL, Q3 2026
- [Freeze billing](project_billing.md) \u2014 Congelado por legal hasta revision

<span class="comment">## Referencias</span>
- [Grafana oncall](reference_grafana.md) \u2014 grafana.internal/d/api-latency
- [Linear bugs](reference_linear.md) \u2014 Proyecto INGEST para pipeline`,feedbackTestingMd:`
<span class="comment">---</span>
<span class="keyword">name</span>: No mockear la base de datos en tests
<span class="keyword">description</span>: Tests de integracion deben usar DB real, no mocks, por incidente Q1
<span class="keyword">type</span>: feedback
<span class="comment">---</span>

Tests de integracion deben usar una base de datos real, no mocks.

<span class="keyword">**Why:**</span> Incidente en Q1 donde tests con mocks pasaron pero
la migracion de prod fallo. El schema del mock divergio del real.

<span class="keyword">**How to apply:**</span> En cualquier test bajo src/tests/integration/,
usar testcontainers con Postgres real. Para tests unitarios
(src/tests/unit/) los mocks estan bien.`};static \u0275fac=function(s){return new(s||l)};static \u0275cmp=d({type:l,selectors:[["app-modulo-04"]],decls:576,vars:18,consts:[[1,"container"],["number","Modulo 4 de 11","title","Sistema de Memoria","subtitle","Auto memory, tipos de memoria, MEMORY.md, que guardar y que no, mejores practicas"],[1,"table-wrapper"],[3,"code"],[1,"concept-grid"],["title","Recurrencia","description","Va a surgir de nuevo en futuras conversaciones?"],["title","Inferibilidad","description","Se puede deducir leyendo el codigo, o es no-obvio?"],["title","Estabilidad","description","Es probable que siga siendo verdad, o es efimero?"],["title","Especificidad","description","Es particular de este proyecto?"],["type","info","title","Dato clave"],["type","info","title","Ejemplo \u2014 Memoria tipo User"],["type","info","title","Ejemplo \u2014 Memoria tipo Feedback"],["type","good","title","Registrar exitos, no solo fracasos"],["type","info","title","Ejemplo \u2014 Memoria tipo Project"],["type","info","title","Ejemplo \u2014 Memoria tipo Reference"],["type","good","title","Buena practica \u2014 MEMORY.md conciso y organizado"],["type","bad","title","Mala practica \u2014 Todo el contenido en MEMORY.md"],["type","good","title","Esto SI vale guardar"],["type","bad","title","Esto NO vale guardar"],["type","warn","title","Regla simple para decidir"],["type","warn","title","Seguridad"],["type","warn","title","Regla critica"],["title","1. Revisar periodicamente","description","Usa /memory para auditar. Borra entries stale despues de refactors grandes."],["title","2. Organizar por tema","description","Semantico, no cronologico. Agrupa por area (testing, deploy, preferencias)."],["title","3. Merge, no duplicar","description","Actualiza archivos existentes en vez de crear memorias casi identicas."],["title","4. Fechas absolutas","description",'Convertir "el jueves" a "2026-04-03" para que la memoria tenga sentido despues.'],["title","5. MEMORY.md < 200 lineas","description","Lo que excede no se carga al inicio. Mover detalle a topic files."],["title","6. Entries < 150 chars","description","Cada linea de MEMORY.md debe ser un puntero conciso, no contenido."],["title","7. Detalle en topic files","description","El contenido real va en archivos individuales, no en el indice."],["title","8. Desactivar en CI","description","CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 para pipelines automatizados."],["title","9. Feedback de exitos Y fracasos","description","No solo correcciones. Registrar tambien cuando un approach funciono bien."],["title","10. Verificar antes de recomendar","description","Las memorias pueden estar desactualizadas. Grep/Read antes de actuar."],[3,"prev","next"]],template:function(s,i){s&1&&(a(0,"div",0),n(1,"app-module-header",1),a(2,"section")(3,"h2"),e(4,"4.1 \u2014 Que es Auto Memory"),t(),a(5,"p"),e(6," Auto memory es un sistema donde Claude Code "),a(7,"strong"),e(8,"se escribe notas a si mismo"),t(),e(9," mientras trabaja contigo, acumulando conocimiento entre sesiones sin esfuerzo manual. Requiere "),a(10,"strong"),e(11,"Claude Code v2.1.59+"),t(),e(12,". "),t(),a(13,"h3"),e(14,"CLAUDE.md vs Auto Memory"),t(),a(15,"div",2)(16,"table")(17,"thead")(18,"tr")(19,"th"),e(20,"Aspecto"),t(),a(21,"th"),e(22,"CLAUDE.md"),t(),a(23,"th"),e(24,"Auto Memory"),t()()(),a(25,"tbody")(26,"tr")(27,"td")(28,"strong"),e(29,"Quien lo escribe"),t()(),a(30,"td"),e(31,"Tu"),t(),a(32,"td"),e(33,"Claude"),t()(),a(34,"tr")(35,"td")(36,"strong"),e(37,"Que contiene"),t()(),a(38,"td"),e(39,"Instrucciones y reglas"),t(),a(40,"td"),e(41,"Aprendizajes y patrones"),t()(),a(42,"tr")(43,"td")(44,"strong"),e(45,"Scope"),t()(),a(46,"td"),e(47,"Proyecto, usuario u organizacion"),t(),a(48,"td"),e(49,"Por directorio de trabajo (repo git)"),t()(),a(50,"tr")(51,"td")(52,"strong"),e(53,"Carga al inicio"),t()(),a(54,"td"),e(55,"Completo"),t(),a(56,"td"),e(57,"Primeras 200 lineas / 25KB de MEMORY.md"),t()(),a(58,"tr")(59,"td")(60,"strong"),e(61,"Sobrevive /compact"),t()(),a(62,"td"),e(63,"Si (re-leido del disco)"),t(),a(64,"td"),e(65,"Si (persiste fuera del contexto)"),t()()()()(),a(66,"h3"),e(67,"Donde se almacena"),t(),n(68,"app-code-block",3),a(69,"p"),e(70," El "),a(71,"code"),e(72,"<proyecto>"),t(),e(73," se deriva del "),a(74,"strong"),e(75,"root del repo git"),t(),e(76,", asi que todos los worktrees y subdirectorios del mismo repo comparten la misma memoria. Es "),a(77,"strong"),e(78,"local a la maquina"),t(),e(79," \u2014 no se comparte entre maquinas ni cloud. "),t(),a(80,"h3"),e(81,"Cuando Claude decide guardar una memoria"),t(),a(82,"p"),e(83,"Claude no guarda algo en cada sesion. Evalua 4 criterios:"),t(),a(84,"div",4),n(85,"app-concept-card",5)(86,"app-concept-card",6)(87,"app-concept-card",7)(88,"app-concept-card",8),t(),a(89,"h3"),e(90,"Como se carga la memoria"),t(),a(91,"ol")(92,"li")(93,"strong"),e(94,"Al inicio de sesion:"),t(),e(95," Primeras 200 lineas / 25KB de MEMORY.md se inyectan al contexto"),t(),a(96,"li")(97,"strong"),e(98,"Bajo demanda:"),t(),e(99," Los topic files se leen solo cuando Claude los necesita"),t(),a(100,"li")(101,"strong"),e(102,"Filtrado por relevancia:"),t(),e(103," Un sub-agente examina tu query contra nombres y descripciones para decidir que cargar (max 5 archivos) "),t()(),a(104,"app-callout",9)(105,"p"),e(106," Solo las primeras "),a(107,"strong"),e(108,"200 lineas"),t(),e(109," de MEMORY.md se cargan al inicio. Todo lo que exceda ese limite es "),a(110,"strong"),e(111,"invisible"),t(),e(112," al arrancar la sesion. Por eso es critico mantener MEMORY.md conciso y mover el detalle a topic files. "),t()()(),a(113,"section")(114,"h2"),e(115,"4.2 \u2014 Los 4 tipos de memoria"),t(),a(116,"h3"),e(117,"1. User (usuario)"),t(),a(118,"p"),e(119," Informacion sobre el rol, metas, responsabilidades y conocimiento del usuario. Permite a Claude adaptar su comportamiento a la persona especifica. "),t(),a(120,"app-callout",10),n(121,"app-code-block",3),t(),a(122,"p")(123,"strong"),e(124,"Cuando guardar:"),t(),e(125," Al aprender detalles del rol, preferencias o conocimiento del usuario."),t(),a(126,"p")(127,"strong"),e(128,"Como usar:"),t(),e(129," Adaptar respuestas al perfil. Un senior no necesita que le expliques conceptos basicos. "),t(),a(130,"h3"),e(131,"2. Feedback (retroalimentacion)"),t(),a(132,"p"),e(133," Guia sobre como trabajar \u2014 que evitar "),a(134,"strong"),e(135,"Y"),t(),e(136," que seguir haciendo. Es critico registrar tanto fracasos como exitos. Si solo guardas correcciones, Claude evitara errores pasados pero se alejara de enfoques que ya validaste. "),t(),a(137,"app-callout",11),n(138,"app-code-block",3),t(),a(139,"p")(140,"strong"),e(141,"Cuando guardar:"),t(),e(142," Correcciones ("),a(143,"em"),e(144,'"no hagas eso"'),t(),e(145,") O confirmaciones ("),a(146,"em"),e(147,'"si, exactamente asi"'),t(),e(148,"). "),t(),a(149,"app-callout",12),n(150,"app-code-block",3),t(),a(151,"h3"),e(152,"3. Project (proyecto)"),t(),a(153,"p"),e(154," Informacion sobre trabajo en curso, metas, bugs o incidentes que "),a(155,"strong"),e(156,"no se pueden derivar"),t(),e(157," del codigo o git history. Estas memorias decaen rapido, asi que el "),a(158,"em"),e(159,"why"),t(),e(160," ayuda a juzgar si la memoria sigue siendo relevante. "),t(),a(161,"app-callout",13),n(162,"app-code-block",3),t(),a(163,"p")(164,"strong"),e(165,"Cuando guardar:"),t(),e(166," Al aprender quien hace que, por que o para cuando. Siempre convertir fechas relativas a absolutas ("),a(167,"em"),e(168,'"el jueves"'),t(),e(169," \u2192 "),a(170,"em"),e(171,'"2026-04-03"'),t(),e(172,"). "),t(),a(173,"h3"),e(174,"4. Reference (referencia)"),t(),a(175,"p"),e(176," Punteros a "),a(177,"strong"),e(178,"donde encontrar informacion"),t(),e(179," en sistemas externos. No el contenido en si, sino la ubicacion. "),t(),a(180,"app-callout",14),n(181,"app-code-block",3),t(),a(182,"p")(183,"strong"),e(184,"Cuando guardar:"),t(),e(185," Al aprender sobre recursos en sistemas externos (Linear, Slack, Grafana, wikis, etc.). "),t(),a(186,"h3"),e(187,"Resumen de los 4 tipos"),t(),a(188,"div",2)(189,"table")(190,"thead")(191,"tr")(192,"th"),e(193,"Tipo"),t(),a(194,"th"),e(195,"Que guarda"),t(),a(196,"th"),e(197,"Ejemplo de trigger"),t()()(),a(198,"tbody")(199,"tr")(200,"td")(201,"code"),e(202,"user"),t()(),a(203,"td"),e(204,"Rol, preferencias, conocimiento del usuario"),t(),a(205,"td")(206,"em"),e(207,'"Soy data scientist investigando el logging"'),t()()(),a(208,"tr")(209,"td")(210,"code"),e(211,"feedback"),t()(),a(212,"td"),e(213,"Como trabajar: que evitar y que repetir"),t(),a(214,"td")(215,"em"),e(216,'"No, no uses mocks ahi"'),t(),e(217," o "),a(218,"em"),e(219,'"Si, perfecto asi"'),t()()(),a(220,"tr")(221,"td")(222,"code"),e(223,"project"),t()(),a(224,"td"),e(225,"Trabajo en curso, metas, deadlines, contexto"),t(),a(226,"td")(227,"em"),e(228,'"Estamos en merge freeze hasta el viernes"'),t()()(),a(229,"tr")(230,"td")(231,"code"),e(232,"reference"),t()(),a(233,"td"),e(234,"Donde encontrar info externa"),t(),a(235,"td")(236,"em"),e(237,'"Los bugs se trackean en Linear proyecto INGEST"'),t()()()()()()(),a(238,"section")(239,"h2"),e(240,"4.3 \u2014 Estructura de archivos"),t(),a(241,"h3"),e(242,"MEMORY.md \u2014 El indice"),t(),a(243,"p"),e(244," MEMORY.md es un "),a(245,"strong"),e(246,"indice"),t(),e(247,", no una memoria. Cada entrada es 1 linea con menos de ~150 caracteres. Sin frontmatter. "),t(),n(248,"app-code-block",3),a(249,"h3"),e(250,"Archivos de memoria individuales"),t(),a(251,"p"),e(252,"Cada memoria es un archivo "),a(253,"code"),e(254,".md"),t(),e(255," con frontmatter YAML obligatorio:"),t(),n(256,"app-code-block",3),a(257,"h3"),e(258,"Proceso de guardar memoria (2 pasos)"),t(),a(259,"div",2)(260,"table")(261,"thead")(262,"tr")(263,"th"),e(264,"Paso"),t(),a(265,"th"),e(266,"Accion"),t(),a(267,"th"),e(268,"Herramienta"),t()()(),a(269,"tbody")(270,"tr")(271,"td")(272,"strong"),e(273,"1"),t()(),a(274,"td"),e(275,"Escribir el archivo de memoria con frontmatter"),t(),a(276,"td"),e(277,"Write tool"),t()(),a(278,"tr")(279,"td")(280,"strong"),e(281,"2"),t()(),a(282,"td"),e(283,"Agregar puntero de 1 linea en MEMORY.md"),t(),a(284,"td"),e(285,"Edit tool"),t()()()()(),a(286,"app-callout",15),n(287,"app-code-block",3),a(288,"p"),e(289,"Organizado semanticamente, cada linea <150 chars, detalle en topic files."),t()(),a(290,"app-callout",16),n(291,"app-code-block",3),a(292,"p"),e(293," MEMORY.md se llena rapido, el contenido extra se pierde al inicio, y no hay topic files para carga bajo demanda. "),t()()(),a(294,"section")(295,"h2"),e(296,"4.4 \u2014 Que NO guardar en memoria"),t(),a(297,"div",2)(298,"table")(299,"thead")(300,"tr")(301,"th"),e(302,"No guardar"),t(),a(303,"th"),e(304,"Por que"),t(),a(305,"th"),e(306,"Alternativa"),t()()(),a(307,"tbody")(308,"tr")(309,"td"),e(310,"Patrones de codigo, arquitectura, estructura de archivos"),t(),a(311,"td"),e(312,"Se puede derivar leyendo el codebase actual"),t(),a(313,"td"),e(314,"Claude lo lee cuando lo necesita"),t()(),a(315,"tr")(316,"td"),e(317,"Git history, cambios recientes, quien cambio que"),t(),a(318,"td")(319,"code"),e(320,"git log"),t(),e(321," / "),a(322,"code"),e(323,"git blame"),t(),e(324," son la fuente de verdad"),t(),a(325,"td"),e(326,"Consultar git directamente"),t()(),a(327,"tr")(328,"td"),e(329,"Soluciones de debugging ya aplicadas"),t(),a(330,"td"),e(331,"El fix esta en el codigo; el commit message tiene el contexto"),t(),a(332,"td"),e(333,"Revisar commits"),t()(),a(334,"tr")(335,"td"),e(336,"Lo que ya esta en CLAUDE.md"),t(),a(337,"td"),e(338,"Duplicacion innecesaria"),t(),a(339,"td"),e(340,"Mantener en CLAUDE.md"),t()(),a(341,"tr")(342,"td"),e(343,"Detalles efimeros de tarea actual"),t(),a(344,"td"),e(345,"Solo util en esta conversacion"),t(),a(346,"td"),e(347,"Usar Tasks o Plans"),t()(),a(348,"tr")(349,"td"),e(350,"Listas de PRs o resumenes de actividad"),t(),a(351,"td"),e(352,"Se vuelven stale inmediatamente"),t(),a(353,"td"),e(354,"Preguntar que fue "),a(355,"em"),e(356,"sorprendente"),t(),e(357," y guardar eso"),t()()()()(),a(358,"app-callout",17),n(359,"app-code-block",3),t(),a(360,"app-callout",18),n(361,"app-code-block",3),t()(),a(362,"section")(363,"h2"),e(364,"4.5 \u2014 Memoria vs otras formas de persistencia"),t(),a(365,"div",2)(366,"table")(367,"thead")(368,"tr")(369,"th"),e(370,"Mecanismo"),t(),a(371,"th"),e(372,"Usar para"),t(),a(373,"th"),e(374,"Scope"),t(),a(375,"th"),e(376,"Quien lo escribe"),t()()(),a(377,"tbody")(378,"tr")(379,"td")(380,"strong"),e(381,"Auto Memory"),t()(),a(382,"td"),e(383,"Info util en "),a(384,"strong"),e(385,"futuras"),t(),e(386," conversaciones"),t(),a(387,"td"),e(388,"Entre conversaciones"),t(),a(389,"td"),e(390,"Claude"),t()(),a(391,"tr")(392,"td")(393,"strong"),e(394,"CLAUDE.md"),t()(),a(395,"td"),e(396,"Instrucciones permanentes que quieres "),a(397,"strong"),e(398,"forzar"),t()(),a(399,"td"),e(400,"Entre conversaciones"),t(),a(401,"td"),e(402,"Tu"),t()(),a(403,"tr")(404,"td")(405,"strong"),e(406,"Plans"),t()(),a(407,"td"),e(408,"Alinear approach de implementacion antes de empezar"),t(),a(409,"td"),e(410,"Conversacion actual"),t(),a(411,"td"),e(412,"Claude + tu"),t()(),a(413,"tr")(414,"td")(415,"strong"),e(416,"Tasks"),t()(),a(417,"td"),e(418,"Trackear pasos discretos y progreso"),t(),a(419,"td"),e(420,"Conversacion actual"),t(),a(421,"td"),e(422,"Claude"),t()()()()(),a(423,"app-callout",19)(424,"p")(425,"strong"),e(426,"Necesito esto en la proxima conversacion?"),t(),e(427," \u2192 Memory o CLAUDE.md"),n(428,"br"),a(429,"strong"),e(430,"Necesito esto solo ahora?"),t(),e(431," \u2192 Plans o Tasks"),n(432,"br"),a(433,"strong"),e(434,"Quiero que Claude lo siga siempre?"),t(),e(435," \u2192 CLAUDE.md"),n(436,"br"),a(437,"strong"),e(438,"Es un aprendizaje que Claude descubrio?"),t(),e(439," \u2192 Auto Memory "),t()()(),a(440,"section")(441,"h2"),e(442,"4.6 \u2014 Comandos y settings"),t(),a(443,"h3"),e(444,"Comando /memory"),t(),a(445,"ul")(446,"li"),e(447,"Lista todos los CLAUDE.md y rules cargados en la sesion"),t(),a(448,"li"),e(449,"Toggle auto memory on/off"),t(),a(450,"li"),e(451,"Link para abrir la carpeta de memoria en tu editor"),t(),a(452,"li"),e(453,"Seleccionar un archivo para editarlo directamente"),t()(),a(454,"h3"),e(455,"Settings"),t(),n(456,"app-code-block",3),a(457,"app-callout",20)(458,"p")(459,"code"),e(460,"autoMemoryDirectory"),t(),a(461,"strong"),e(462,"no se acepta"),t(),e(463," desde "),a(464,"code"),e(465,".claude/settings.json"),t(),e(466," (proyecto compartido) para prevenir que un repo rediriga escrituras de memoria a ubicaciones sensibles. Solo funciona desde policy, local o user settings. "),t()(),a(467,"h3"),e(468,"Variable de entorno para CI/pipelines"),t(),n(469,"app-code-block",3),a(470,"h3"),e(471,"Guardar y borrar manualmente"),t(),a(472,"div",2)(473,"table")(474,"thead")(475,"tr")(476,"th"),e(477,"Accion"),t(),a(478,"th"),e(479,"Como"),t()()(),a(480,"tbody")(481,"tr")(482,"td"),e(483,"Guardar memoria"),t(),a(484,"td"),e(485,"Di "),a(486,"em"),e(487,'"recuerda que usamos pnpm, no npm"'),t()()(),a(488,"tr")(489,"td"),e(490,"Agregar a CLAUDE.md en vez de memoria"),t(),a(491,"td"),e(492,"Di "),a(493,"em"),e(494,'"agrega esto al CLAUDE.md"'),t()()(),a(495,"tr")(496,"td"),e(497,"Editar memorias"),t(),a(498,"td")(499,"code"),e(500,"/memory"),t(),e(501," \u2192 seleccionar archivo, o editar directamente en el filesystem"),t()(),a(502,"tr")(503,"td"),e(504,"Borrar memorias"),t(),a(505,"td"),e(506,"Di "),a(507,"em"),e(508,'"olvida lo de pnpm"'),t(),e(509," o borra el archivo manualmente"),t()()()()(),a(510,"h3"),e(511,"Verificacion de memorias stale"),t(),a(512,"p"),e(513,"Claude debe verificar memorias antes de actuar sobre ellas:"),t(),a(514,"div",2)(515,"table")(516,"thead")(517,"tr")(518,"th"),e(519,"Si la memoria nombra..."),t(),a(520,"th"),e(521,"Verificar con..."),t()()(),a(522,"tbody")(523,"tr")(524,"td"),e(525,"Un archivo"),t(),a(526,"td"),e(527,"Confirmar que el archivo existe"),t()(),a(528,"tr")(529,"td"),e(530,"Una funcion o flag"),t(),a(531,"td"),e(532,"Grep para confirmar que sigue ahi"),t()(),a(533,"tr")(534,"td"),e(535,"Estado del repo"),t(),a(536,"td"),e(537,"Preferir "),a(538,"code"),e(539,"git log"),t(),e(540," sobre la memoria"),t()()()()(),a(541,"app-callout",21)(542,"p")(543,"strong"),e(544,'"La memoria dice que X existe"'),t(),e(545," no es lo mismo que "),a(546,"strong"),e(547,'"X existe ahora."'),t(),e(548," Las memorias pueden quedar desactualizadas despues de refactors, renames o eliminaciones. Siempre verificar antes de recomendar basado en memoria. "),t()()(),a(549,"section")(550,"h2"),e(551,"4.7 \u2014 Las 10 mejores practicas"),t(),a(552,"div",4),n(553,"app-concept-card",22)(554,"app-concept-card",23)(555,"app-concept-card",24)(556,"app-concept-card",25)(557,"app-concept-card",26)(558,"app-concept-card",27)(559,"app-concept-card",28)(560,"app-concept-card",29)(561,"app-concept-card",30)(562,"app-concept-card",31),t()(),a(563,"section")(564,"h2"),e(565,"Ejemplo completo: memoria bien organizada"),t(),a(566,"h3"),e(567,"MEMORY.md (indice)"),t(),n(568,"app-code-block",3),a(569,"p")(570,"strong"),e(571,"12 lineas. Claro. Cada archivo tiene el detalle."),t()(),a(572,"h3"),e(573,"Archivo individual: feedback_testing.md"),t(),n(574,"app-code-block",3),t(),n(575,"app-module-nav",32),t()),s&2&&(o(68),r("code",i.code.storagePath),o(53),r("code",i.code.userMemory),o(17),r("code",i.code.feedbackMemory),o(12),r("code",i.code.feedbackSuccess),o(12),r("code",i.code.projectMemory),o(19),r("code",i.code.referenceMemory),o(67),r("code",i.code.memoryMdExample),o(8),r("code",i.code.memoryFileFormat),o(31),r("code",i.code.memoryMdGood),o(4),r("code",i.code.memoryMdBad),o(68),r("code",i.code.goodToSave),o(2),r("code",i.code.notWorthSaving),o(95),r("code",i.code.settingsCode),o(13),r("code",i.code.envVarCI),o(99),r("code",i.code.completeMemoryMd),o(6),r("code",i.code.feedbackTestingMd),o(),r("prev",i.prev)("next",i.next))},dependencies:[u,E,m,p,c],encapsulation:2})};export{x as Modulo04Component};

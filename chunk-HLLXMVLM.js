import{a as m}from"./chunk-HSI73NXQ.js";import{a as c,b as p,c as u,d as S}from"./chunk-C7DOBPJR.js";import{e as i,f as d,i as l,j as t,k as n,l as a,t as e}from"./chunk-HIV27VVN.js";var x=class r{prev={label:"Modulo 5: Hooks",route:"/cursos/claude-code/modulo-05"};next={label:"Modulo 7: Subagentes",route:"/cursos/claude-code/modulo-07"};code={dirStructure:`
<span class="string">~/.claude/skills/</span>
<span class="comment">\u2514\u2500\u2500 mi-skill/</span>
<span class="comment">    \u251C\u2500\u2500 SKILL.md          \u2190 Punto de entrada (obligatorio)</span>
<span class="comment">    \u251C\u2500\u2500 GUIDE.md          \u2190 Guia adicional (opcional)</span>
<span class="comment">    \u251C\u2500\u2500 examples.md       \u2190 Ejemplos concretos (opcional)</span>
<span class="comment">    \u251C\u2500\u2500 reference.md      \u2190 Referencia detallada (opcional)</span>
<span class="comment">    \u2514\u2500\u2500 scripts/</span>
<span class="comment">        \u251C\u2500\u2500 validate.py   \u2190 Script ejecutable</span>
<span class="comment">        \u2514\u2500\u2500 process.sh    \u2190 Script ejecutable</span>`,skillMdAnatomy:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: explain-code</span>
<span class="keyword">description</span><span class="string">: Explains code with diagrams and analogies. Use when explaining</span>
<span class="string">  how code works, teaching about a codebase, or when the user asks</span>
<span class="string">  "how does this work?"</span>
<span class="comment">---</span>

<span class="keyword">## When explaining code, always include:</span>

<span class="string">1. **An analogy**: Compare the code to something from everyday life</span>
<span class="string">2. **A diagram**: Use ASCII art to show flow or relationships</span>
<span class="string">3. **Step-by-step walkthrough**: What happens at each stage</span>
<span class="string">4. **A gotcha**: A common mistake or misconception</span>

<span class="comment">Keep explanations conversational. For complex concepts, use multiple analogies.</span>`,frontmatterFull:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: deploy</span>                   <span class="comment"># max 64 chars, solo lowercase/numeros/guiones</span>
<span class="keyword">description</span><span class="string">: "Deploy to prod"</span>  <span class="comment"># max 1024 chars, tercera persona, sin XML</span>
<span class="keyword">argument-hint</span><span class="string">: "[env]"</span>         <span class="comment"># hint en autocompletado</span>

<span class="keyword">disable-model-invocation</span><span class="string">: true</span>  <span class="comment"># solo TU lo invocas, Claude no</span>
<span class="keyword">user-invocable</span><span class="string">: false</span>          <span class="comment"># solo Claude lo usa, no aparece en /menu</span>

<span class="keyword">context</span><span class="string">: fork</span>                  <span class="comment"># ejecuta en subagente aislado</span>
<span class="keyword">agent</span><span class="string">: Explore</span>                 <span class="comment"># tipo de subagente (Explore, Plan, general-purpose)</span>

<span class="keyword">allowed-tools</span><span class="string">: Read, Grep, Bash(git *)</span>  <span class="comment"># limitar herramientas disponibles</span>
<span class="keyword">model</span><span class="string">: claude-opus-4-6</span>        <span class="comment"># modelo especifico para esta skill</span>
<span class="keyword">effort</span><span class="string">: high</span>                   <span class="comment"># low | medium | high | max</span>
<span class="keyword">paths</span><span class="string">: "src/**/*.ts"</span>          <span class="comment"># activar solo para archivos que coincidan</span>
<span class="keyword">shell</span><span class="string">: bash</span>                    <span class="comment"># shell para bloques !&#96;command&#96; (bash o powershell)</span>
<span class="comment">---</span>`,argSimple:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: fix-issue</span>
<span class="keyword">description</span><span class="string">: Fixes a GitHub issue given its number</span>
<span class="keyword">disable-model-invocation</span><span class="string">: true</span>
<span class="keyword">argument-hint</span><span class="string">: "[issue-number]"</span>
<span class="comment">---</span>

<span class="string">Fix GitHub issue $ARGUMENTS following our coding standards.</span>

<span class="string">1. Read the issue description with &#96;gh issue view $ARGUMENTS&#96;</span>
<span class="string">2. Understand the requirements</span>
<span class="string">3. Implement the fix</span>
<span class="string">4. Write or update tests</span>
<span class="string">5. Create a commit with co-author attribution</span>`,argPositional:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: migrate-component</span>
<span class="keyword">description</span><span class="string">: Migrates a UI component from one framework to another</span>
<span class="keyword">argument-hint</span><span class="string">: "[component] [from-framework] [to-framework]"</span>
<span class="comment">---</span>

<span class="string">Migrate the $0 component from $1 to $2.</span>
<span class="string">Preserve all existing behavior and tests.</span>
<span class="string">Update imports and dependencies accordingly.</span>`,dynamicContext:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: pr-summary</span>
<span class="keyword">description</span><span class="string">: Summarizes changes in the current pull request</span>
<span class="keyword">context</span><span class="string">: fork</span>
<span class="keyword">agent</span><span class="string">: Explore</span>
<span class="keyword">allowed-tools</span><span class="string">: Bash(gh *)</span>
<span class="comment">---</span>

<span class="keyword">## Pull request context</span>
<span class="string">- Diff: </span><span class="command">!&#96;gh pr diff&#96;</span>
<span class="string">- Comments: </span><span class="command">!&#96;gh pr view --comments&#96;</span>
<span class="string">- Files changed: </span><span class="command">!&#96;gh pr diff --name-only&#96;</span>
<span class="string">- Current branch: </span><span class="command">!&#96;git branch --show-current&#96;</span>

<span class="keyword">## Your task</span>
<span class="string">Write a clear, concise PR summary covering:</span>
<span class="string">1. What was changed and why</span>
<span class="string">2. Key technical decisions</span>
<span class="string">3. Testing approach</span>`,contextFork:`
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: deep-research</span>
<span class="keyword">description</span><span class="string">: Researches a topic thoroughly across the codebase</span>
<span class="keyword">context</span><span class="string">: fork</span>
<span class="keyword">agent</span><span class="string">: Explore</span>
<span class="comment">---</span>

<span class="string">Research $ARGUMENTS thoroughly:</span>

<span class="string">1. Find relevant files using Glob and Grep</span>
<span class="string">2. Read and analyze the code</span>
<span class="string">3. Identify patterns, dependencies, edge cases</span>
<span class="string">4. Summarize findings with specific file:line references</span>`,goodConcise:`
<span class="keyword">## Extract PDF text</span>

<span class="string">Use pdfplumber for text extraction:</span>

<span class="keyword">&#96;&#96;&#96;python</span>
<span class="keyword">import</span> <span class="string">pdfplumber</span>

<span class="keyword">with</span> pdfplumber.open(<span class="string">"file.pdf"</span>) <span class="keyword">as</span> pdf:
    text = pdf.pages[0].extract_text()
<span class="keyword">&#96;&#96;&#96;</span>`,badVerbose:`
<span class="keyword">## Extract PDF text</span>

<span class="comment">PDF (Portable Document Format) files are a common file format that contains</span>
<span class="comment">text, images, and other content. To extract text from a PDF, you'll need to</span>
<span class="comment">use a library. There are many libraries available for PDF processing, but</span>
<span class="comment">pdfplumber is recommended because it's easy to use and handles most cases well.</span>
<span class="comment">First, you'll need to install it using pip. Then you can use the code below...</span>`,goodDescription:`
<span class="keyword">description</span><span class="string">: Extract text and tables from PDF files, fill forms, merge documents.</span>
<span class="string">  Use when working with PDF files or when the user mentions PDFs, forms,</span>
<span class="string">  or document extraction.</span>`,badDescription:`
<span class="keyword">description</span><span class="string">: Helps with documents</span>`,goodProgressiveDisclosure:`
<span class="comment">## Quick start</span>
<span class="string">Run &#96;analyze_form.py&#96; to inspect a PDF form.</span>

<span class="comment">## Additional resources</span>
<span class="string">- For form filling, see [FORMS.md](FORMS.md)</span>
<span class="string">- For API reference, see [reference.md](reference.md)</span>`,feedbackLoop:`
<span class="comment">## Workflow con verificacion</span>

<span class="string">Task Progress:</span>
<span class="string">- [ ] Step 1: Analyze the form (run analyze_form.py)</span>
<span class="string">- [ ] Step 2: Create field mapping (edit fields.json)</span>
<span class="string">- [ ] Step 3: Validate mapping (run validate_fields.py)</span>
<span class="string">- [ ] Step 4: Fill the form (run fill_form.py)</span>
<span class="string">- [ ] Step 5: Verify output (run verify_output.py)</span>`,goodScriptErrors:`
<span class="keyword">def</span> <span class="command">process_file</span>(path):
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="command">open</span>(path) <span class="keyword">as</span> f:
            <span class="keyword">return</span> f.read()
    <span class="keyword">except</span> FileNotFoundError:
        <span class="command">print</span>(<span class="string">f"File {path} not found, creating default"</span>)
        <span class="keyword">with</span> <span class="command">open</span>(path, <span class="string">"w"</span>) <span class="keyword">as</span> f:
            f.write(<span class="string">""</span>)
        <span class="keyword">return</span> <span class="string">""</span>
    <span class="keyword">except</span> PermissionError:
        <span class="command">print</span>(<span class="string">f"Cannot access {path}, using default"</span>)
        <span class="keyword">return</span> <span class="string">""</span>`,badScriptErrors:`
<span class="keyword">def</span> <span class="command">process_file</span>(path):
    <span class="keyword">with</span> <span class="command">open</span>(path) <span class="keyword">as</span> f:    <span class="comment"># Si el archivo no existe, explota</span>
        <span class="keyword">return</span> f.read()       <span class="comment"># y Claude tiene que improvisar</span>`,antiPatternOptions:`
<span class="comment"># MAL</span>
<span class="string">You can use pypdf, or pdfplumber, or PyMuPDF, or pdf2image, or...</span>

<span class="comment"># BIEN</span>
<span class="string">Use pdfplumber for text extraction.</span>
<span class="string">For scanned PDFs requiring OCR, use pdf2image with pytesseract instead.</span>`,antiPatternPaths:`
<span class="comment"># MAL</span>
<span class="string">scriptshelper.py</span>

<span class="comment"># BIEN</span>
<span class="string">scripts/helper.py</span>`,antiPatternDates:`
<span class="comment"># MAL \u2014 quedara desactualizado</span>
<span class="string">As of March 2025, the API supports...</span>
<span class="string">In version 3.2.1, use the following...</span>

<span class="comment"># BIEN \u2014 atemporal</span>
<span class="string">Use the latest stable version from npm.</span>
<span class="string">Check the CHANGELOG.md for version-specific notes.</span>`,antiPatternMagicConst:`
<span class="comment"># MAL</span>
REQUEST_TIMEOUT = <span class="string">30</span>
MAX_RETRIES = <span class="string">3</span>

<span class="comment"># BIEN</span>
<span class="comment"># HTTP requests typically complete within 30 seconds</span>
REQUEST_TIMEOUT = <span class="string">30</span>

<span class="comment"># Three retries balances reliability vs speed</span>
MAX_RETRIES = <span class="string">3</span>`};static \u0275fac=function(o){return new(o||r)};static \u0275cmp=d({type:r,selectors:[["app-modulo-06"]],decls:639,vars:21,consts:[[1,"container"],["number","6 de 11","title","Skills","subtitle","Capacidades reutilizables que extienden a Claude: instrucciones, codigo y recursos cargados bajo demanda"],[1,"table-wrapper"],["type","info","title","Regla de oro"],["type","warn","title","Custom Commands (legacy)"],[3,"code"],["type","info","title","Por que importa la carga progresiva"],["type","info","title","Monorepos"],["type","info","title","Extended thinking en skills"],["type","warn","title","Advertencia"],["type","good","title","Bien \u2014 conciso (~50 tokens)"],["type","bad","title","Mal \u2014 verboso (~150 tokens)"],[1,"concept-grid"],["title","Alta libertad (texto)","description","Multiples enfoques son validos, las decisiones dependen del contexto. Ej: code review, analisis."],["title","Media libertad (pseudocodigo)","description","Hay un patron preferido pero con variacion aceptable. Ej: generacion de reportes con parametros."],["title","Baja libertad (script exacto)","description","La operacion es fragil, la consistencia es critica. Ej: migraciones de DB que deben seguir un orden exacto."],["type","good","title","Bien \u2014 descripcion especifica"],["type","bad","title","Mal \u2014 descripcion vaga"],["type","good","title","Bien \u2014 SKILL.md corto con referencias"],["type","bad","title","Mal \u2014 todo en SKILL.md"],["type","good","title","Bien \u2014 el script maneja errores"],["type","bad","title","Mal \u2014 dejar que el script falle a Claude"],["title","Claude Haiku","description","Rapido y economico. Pregunta: da la skill suficiente orientacion para que Haiku lo ejecute bien?"],["title","Claude Sonnet","description","Balanceado. Pregunta: es la skill clara y eficiente sin ser redundante?"],["title","Claude Opus","description","Razonamiento potente. Pregunta: evita la skill sobrexplicar cosas que Opus ya sabe?"],["type","bad","title","Ofrecer multiples opciones sin default"],["type","bad","title","Paths estilo Windows"],["type","bad","title","Informacion que envejece"],["type","bad","title","Constantes magicas sin explicacion"],["title","Calidad del contenido","description",`\u2610 Descripcion especifica con keywords clave
\u2610 Descripcion incluye que hace Y cuando usarla
\u2610 SKILL.md bajo 500 lineas
\u2610 Detalles extra en archivos separados
\u2610 Sin informacion que envejece
\u2610 Terminologia consistente
\u2610 Referencias maximo 1 nivel de profundidad`],["title","Scripts y codigo","description",`\u2610 Scripts manejan errores internamente
\u2610 Sin constantes magicas (todas justificadas)
\u2610 Paquetes requeridos listados y verificados
\u2610 Sin paths estilo Windows
\u2610 Pasos de validacion para operaciones criticas
\u2610 Feedback loops para tareas de calidad critica`],["title","Testing","description",`\u2610 Al menos 3 evaluaciones creadas
\u2610 Probada con Haiku, Sonnet y Opus
\u2610 Probada con escenarios reales
\u2610 Feedback del equipo incorporado
\u2610 Iterada con Claude A (crea) y Claude B (prueba)`],[3,"prev","next"]],template:function(o,s){o&1&&(t(0,"div",0),a(1,"app-module-header",1),t(2,"section")(3,"h2"),e(4,"6.1 \u2014 Commands vs Skills: diferencia clave"),n(),t(5,"p"),e(6,"Son dos conceptos distintos. Confundirlos lleva a errores de configuracion y expectativas incorrectas."),n(),t(7,"h3"),e(8,"Commands built-in"),n(),t(9,"p"),e(10," Son comandos "),t(11,"strong"),e(12,"hardcoded en el binario de Claude Code"),n(),e(13,". No los creas, no los modificas, no viven en archivos. Ejecutan logica fija del sistema cuando los invocas con "),t(14,"code"),e(15,"/"),n(),e(16,". "),n(),t(17,"div",2)(18,"table")(19,"thead")(20,"tr")(21,"th"),e(22,"Comando"),n(),t(23,"th"),e(24,"Funcion"),n()()(),t(25,"tbody")(26,"tr")(27,"td")(28,"code"),e(29,"/help"),n()(),t(30,"td"),e(31,"Muestra ayuda general de Claude Code"),n()(),t(32,"tr")(33,"td")(34,"code"),e(35,"/compact [focus]"),n()(),t(36,"td"),e(37,"Compacta el contexto con instruccion de foco opcional"),n()(),t(38,"tr")(39,"td")(40,"code"),e(41,"/clear"),n()(),t(42,"td"),e(43,"Limpia la conversacion completa"),n()(),t(44,"tr")(45,"td")(46,"code"),e(47,"/context"),n()(),t(48,"td"),e(49,"Muestra el uso actual del contexto por categoria"),n()(),t(50,"tr")(51,"td")(52,"code"),e(53,"/mcp"),n()(),t(54,"td"),e(55,"Lista y administra servidores MCP activos"),n()(),t(56,"tr")(57,"td")(58,"code"),e(59,"/permissions"),n()(),t(60,"td"),e(61,"Ver y editar reglas de permisos de la sesion"),n()(),t(62,"tr")(63,"td")(64,"code"),e(65,"/init"),n()(),t(66,"td"),e(67,"Genera un CLAUDE.md para el proyecto actual"),n()(),t(68,"tr")(69,"td")(70,"code"),e(71,"/cost"),n()(),t(72,"td"),e(73,"Muestra el costo de tokens de la sesion"),n()(),t(74,"tr")(75,"td")(76,"code"),e(77,"/doctor"),n()(),t(78,"td"),e(79,"Diagnostico de instalacion y configuracion"),n()(),t(80,"tr")(81,"td")(82,"code"),e(83,"/fast"),n()(),t(84,"td"),e(85,"Alterna el modo rapido (Fast mode)"),n()(),t(86,"tr")(87,"td")(88,"code"),e(89,"/memory"),n()(),t(90,"td"),e(91,"Ver y editar archivos de memoria del sistema"),n()(),t(92,"tr")(93,"td")(94,"code"),e(95,"/skills"),n()(),t(96,"td"),e(97,"Listar skills disponibles en la sesion actual"),n()()()()(),t(98,"app-callout",3),e(99," Los Commands built-in son de Claude Code, no tuyos. Las Skills son tuyas: las creas, las configuras y Claude las usa automaticamente o cuando las invocas. "),n(),t(100,"h3"),e(101,"Skills \u2014 el sistema moderno"),n(),t(102,"p"),e(103," Las Skills son "),t(104,"strong"),e(105,"archivos en disco que empaquetan instrucciones, recursos y codigo ejecutable"),n(),e(106,'. Claude las descubre y carga bajo demanda segun relevancia. Son el reemplazo y evolucion de los "custom commands" legacy ('),t(107,"code"),e(108,".claude/commands/"),n(),e(109,"). "),n(),t(110,"app-callout",4),e(111," El sistema antiguo usaba "),t(112,"code"),e(113,".claude/commands/deploy.md"),n(),e(114," para crear "),t(115,"code"),e(116,"/deploy"),n(),e(117,". Sigue funcionando, pero Skills es el sistema unificado que lo reemplaza con mucho mas poder. Un archivo en "),t(118,"code"),e(119,".claude/commands/deploy.md"),n(),e(120," y una skill en "),t(121,"code"),e(122,".claude/skills/deploy/SKILL.md"),n(),e(123," producen el mismo "),t(124,"code"),e(125,"/deploy"),n(),e(126," \u2014 pero la skill admite frontmatter, archivos de soporte, scripts y control de invocacion. "),n()(),t(127,"section")(128,"h2"),e(129,"6.2 \u2014 Arquitectura de una Skill"),n(),t(130,"h3"),e(131,"Estructura de directorios"),n(),a(132,"app-code-block",5),t(133,"h3"),e(134,"Anatomia de SKILL.md"),n(),a(135,"app-code-block",5),t(136,"h3"),e(137,"Los tres niveles de carga (Progressive Disclosure)"),n(),t(138,"div",2)(139,"table")(140,"thead")(141,"tr")(142,"th"),e(143,"Nivel"),n(),t(144,"th"),e(145,"Cuando carga"),n(),t(146,"th"),e(147,"Costo tokens"),n(),t(148,"th"),e(149,"Contenido"),n()()(),t(150,"tbody")(151,"tr")(152,"td")(153,"strong"),e(154,"1 \u2014 Metadata"),n()(),t(155,"td"),e(156,"Siempre, al inicio"),n(),t(157,"td"),e(158,"~100 tokens por skill"),n(),t(159,"td")(160,"code"),e(161,"name"),n(),e(162," y "),t(163,"code"),e(164,"description"),n(),e(165," del YAML"),n()(),t(166,"tr")(167,"td")(168,"strong"),e(169,"2 \u2014 Instrucciones"),n()(),t(170,"td"),e(171,"Cuando la skill es relevante"),n(),t(172,"td"),e(173,"<5k tokens"),n(),t(174,"td"),e(175,"Cuerpo completo de SKILL.md"),n()(),t(176,"tr")(177,"td")(178,"strong"),e(179,"3 \u2014 Recursos"),n()(),t(180,"td"),e(181,"Solo si se necesitan"),n(),t(182,"td"),e(183,"Sin limite practico"),n(),t(184,"td"),e(185,"Archivos extra, scripts (solo output al ejecutar)"),n()()()()(),t(186,"app-callout",6),e(187," Puedes tener decenas de skills instaladas sin penalizar el contexto. Solo la metadata (nombre + descripcion) de todas las skills vive en el sistema prompt. El cuerpo de SKILL.md solo se carga cuando Claude decide que esa skill es relevante para tu tarea. Los scripts nunca entran al contexto \u2014 solo su output. "),n()(),t(188,"section")(189,"h2"),e(190,"6.3 \u2014 Donde viven las Skills"),n(),t(191,"div",2)(192,"table")(193,"thead")(194,"tr")(195,"th"),e(196,"Alcance"),n(),t(197,"th"),e(198,"Ruta"),n(),t(199,"th"),e(200,"Se aplica a"),n()()(),t(201,"tbody")(202,"tr")(203,"td")(204,"strong"),e(205,"Enterprise"),n()(),t(206,"td"),e(207,"Managed settings (admin)"),n(),t(208,"td"),e(209,"Todos los usuarios de la organizacion"),n()(),t(210,"tr")(211,"td")(212,"strong"),e(213,"Personal"),n()(),t(214,"td")(215,"code"),e(216,"~/.claude/skills/<skill>/SKILL.md"),n()(),t(217,"td"),e(218,"Todos tus proyectos"),n()(),t(219,"tr")(220,"td")(221,"strong"),e(222,"Proyecto"),n()(),t(223,"td")(224,"code"),e(225,".claude/skills/<skill>/SKILL.md"),n()(),t(226,"td"),e(227,"Solo este proyecto"),n()(),t(228,"tr")(229,"td")(230,"strong"),e(231,"Plugin"),n()(),t(232,"td")(233,"code"),e(234,"<plugin>/skills/<skill>/SKILL.md"),n()(),t(235,"td"),e(236,"Donde el plugin este activo"),n()()()()(),t(237,"p"),e(238," Cuando skills comparten el mismo nombre en distintos niveles, gana la mayor precedencia: "),t(239,"strong"),e(240,"enterprise > personal > proyecto > plugin"),n(),e(241,". "),n(),t(242,"app-callout",7),e(243," Claude Code descubre skills automaticamente en subdirectorios. Si tienes "),t(244,"code"),e(245,"packages/api/.claude/skills/"),n(),e(246,", las skills ahi se activan cuando trabajas con archivos de ese subdirectorio. "),n()(),t(247,"section")(248,"h2"),e(249,"6.4 \u2014 Skills bundled (incluidas en Claude Code)"),n(),t(250,"p"),e(251," Estas skills vienen preinstaladas y disponibles en todas las sesiones. A diferencia de los commands built-in, estan implementadas como skills de prompt: le dan a Claude un playbook detallado y dejan que orqueste el trabajo con sus herramientas. "),n(),t(252,"div",2)(253,"table")(254,"thead")(255,"tr")(256,"th"),e(257,"Skill"),n(),t(258,"th"),e(259,"Proposito"),n()()(),t(260,"tbody")(261,"tr")(262,"td")(263,"code"),e(264,"/batch <instruccion>"),n()(),t(265,"td"),e(266," Cambios masivos en paralelo. Descompone el trabajo en 5-30 unidades independientes, crea un plan, luego lanza un agente por unidad en worktrees aislados. Cada agente implementa, corre tests y abre un PR. Requiere repositorio git. "),n()(),t(267,"tr")(268,"td")(269,"code"),e(270,"/claude-api"),n()(),t(271,"td"),e(272," Carga referencia de la API de Claude para el lenguaje del proyecto (Python, TS, Go, Java, Ruby, C#, PHP, cURL). Se activa automaticamente cuando detecta imports de "),t(273,"code"),e(274,"anthropic"),n(),e(275," o "),t(276,"code"),e(277,"@anthropic-ai/sdk"),n(),e(278,". "),n()(),t(279,"tr")(280,"td")(281,"code"),e(282,"/debug [descripcion]"),n()(),t(283,"td"),e(284," Activa debug logging para la sesion actual y analiza el log para diagnosticar problemas. El debug esta desactivado por default a menos que hayas iniciado con "),t(285,"code"),e(286,"claude --debug"),n(),e(287,". "),n()(),t(288,"tr")(289,"td")(290,"code"),e(291,"/loop [intervalo] <prompt>"),n()(),t(292,"td"),e(293," Ejecuta un prompt repetidamente mientras la sesion este abierta. Util para polling de deploys, monitoreo de PRs, tareas periodicas. Ej: "),t(294,"code"),e(295,"/loop 5m check if the deploy finished"),n(),e(296,". "),n()(),t(297,"tr")(298,"td")(299,"code"),e(300,"/simplify [foco]"),n()(),t(301,"td"),e(302," Lanza 3 agentes de revision en paralelo sobre los archivos recien modificados, agrega sus hallazgos y aplica correcciones de reutilizacion, calidad y eficiencia. Ej: "),t(303,"code"),e(304,"/simplify focus on memory efficiency"),n(),e(305,". "),n()()()()()(),t(306,"section")(307,"h2"),e(308,"6.5 \u2014 Frontmatter: todos los campos"),n(),a(309,"app-code-block",5),t(310,"h3"),e(311,"Control de invocacion"),n(),t(312,"div",2)(313,"table")(314,"thead")(315,"tr")(316,"th"),e(317,"Frontmatter"),n(),t(318,"th"),e(319,"Tu invocas"),n(),t(320,"th"),e(321,"Claude invoca"),n(),t(322,"th"),e(323,"En contexto"),n(),t(324,"th"),e(325,"Caso de uso"),n()()(),t(326,"tbody")(327,"tr")(328,"td"),e(329,"(default)"),n(),t(330,"td"),e(331,"\u2713"),n(),t(332,"td"),e(333,"\u2713"),n(),t(334,"td"),e(335,"Descripcion siempre"),n(),t(336,"td"),e(337,"Skills de proposito general"),n()(),t(338,"tr")(339,"td")(340,"code"),e(341,"disable-model-invocation: true"),n()(),t(342,"td"),e(343,"\u2713"),n(),t(344,"td"),e(345,"\u2717"),n(),t(346,"td"),e(347,"No en contexto"),n(),t(348,"td"),e(349,"/deploy, /commit, acciones con side effects"),n()(),t(350,"tr")(351,"td")(352,"code"),e(353,"user-invocable: false"),n()(),t(354,"td"),e(355,"\u2717"),n(),t(356,"td"),e(357,"\u2713"),n(),t(358,"td"),e(359,"Descripcion siempre"),n(),t(360,"td"),e(361,"Conocimiento de fondo, convenciones del proyecto"),n()()()()()(),t(362,"section")(363,"h2"),e(364,"6.6 \u2014 Argumentos y sustituciones dinamicas"),n(),t(365,"h3"),e(366,"Variables disponibles"),n(),t(367,"div",2)(368,"table")(369,"thead")(370,"tr")(371,"th"),e(372,"Variable"),n(),t(373,"th"),e(374,"Descripcion"),n()()(),t(375,"tbody")(376,"tr")(377,"td")(378,"code"),e(379,"$ARGUMENTS"),n()(),t(380,"td"),e(381,"Todos los argumentos pasados al invocar la skill"),n()(),t(382,"tr")(383,"td")(384,"code"),e(385,"$ARGUMENTS[N]"),n()(),t(386,"td"),e(387,"Argumento en la posicion N (base 0)"),n()(),t(388,"tr")(389,"td")(390,"code"),e(391,"$N"),n()(),t(392,"td"),e(393,"Shorthand de "),t(394,"code"),e(395,"$ARGUMENTS[N]"),n(),e(396,". Ej: "),t(397,"code"),e(398,"$0"),n(),e(399,", "),t(400,"code"),e(401,"$1"),n()()(),t(402,"tr")(403,"td")(404,"code"),e(405,"${CLAUDE_SESSION_ID}"),n()(),t(406,"td"),e(407,"ID de la sesion actual (util para logs)"),n()(),t(408,"tr")(409,"td")(410,"code"),e(411,"${CLAUDE_SKILL_DIR}"),n()(),t(412,"td"),e(413,"Directorio de la skill (para referenciar scripts sin importar el cwd)"),n()()()()(),t(414,"h3"),e(415,"Ejemplo: argumentos simples"),n(),a(416,"app-code-block",5),t(417,"p"),e(418,"Uso: "),t(419,"code"),e(420,"/fix-issue 123"),n(),e(421,' \u2192 Claude recibe "Fix GitHub issue 123 following our coding standards..." '),n(),t(422,"h3"),e(423,"Ejemplo: argumentos posicionales"),n(),a(424,"app-code-block",5),t(425,"p"),e(426,"Uso: "),t(427,"code"),e(428,"/migrate-component SearchBar React Vue"),n()()(),t(429,"section")(430,"h2"),e(431,"6.7 \u2014 Contexto dinamico con "),t(432,"code"),e(433,"!`command`"),n()(),t(434,"p"),e(435," La sintaxis "),t(436,"code"),e(437,"!`comando`"),n(),e(438," ejecuta comandos shell "),t(439,"strong"),e(440,"antes"),n(),e(441," de que Claude vea el contenido de la skill. El output reemplaza el placeholder. Esto es preprocesamiento, no algo que Claude ejecuta. "),n(),a(442,"app-code-block",5),t(443,"app-callout",8),e(444," Para activar razonamiento extendido (ultrathink) dentro de una skill, incluye la palabra "),t(445,"code"),e(446,"ultrathink"),n(),e(447," en cualquier parte del contenido de SKILL.md. "),n()(),t(448,"section")(449,"h2"),e(450,"6.8 \u2014 Skills en subagentes ("),t(451,"code"),e(452,"context: fork"),n(),e(453,")"),n(),t(454,"p"),e(455," Con "),t(456,"code"),e(457,"context: fork"),n(),e(458,", el contenido de SKILL.md se convierte en el prompt que maneja un subagente aislado. El subagente "),t(459,"strong"),e(460,"no tiene acceso al historial de la conversacion"),n(),e(461,". "),n(),a(462,"app-code-block",5),t(463,"div",2)(464,"table")(465,"thead")(466,"tr")(467,"th"),e(468,"Enfoque"),n(),t(469,"th"),e(470,"System prompt"),n(),t(471,"th"),e(472,"Task"),n(),t(473,"th"),e(474,"Tambien carga"),n()()(),t(475,"tbody")(476,"tr")(477,"td"),e(478,"Skill con "),t(479,"code"),e(480,"context: fork"),n()(),t(481,"td"),e(482,"Del tipo de agente (Explore, Plan...)"),n(),t(483,"td"),e(484,"Contenido de SKILL.md"),n(),t(485,"td"),e(486,"CLAUDE.md"),n()(),t(487,"tr")(488,"td"),e(489,"Subagente con campo "),t(490,"code"),e(491,"skills"),n()(),t(492,"td"),e(493,"Markdown del subagente"),n(),t(494,"td"),e(495,"Mensaje de delegacion de Claude"),n(),t(496,"td"),e(497,"Skills precargadas + CLAUDE.md"),n()()()()(),t(498,"app-callout",9)(499,"code"),e(500,"context: fork"),n(),e(501," solo tiene sentido para skills con instrucciones de tarea explicitas. Si tu skill solo contiene guias o conocimiento de fondo sin una tarea concreta, el subagente retornara sin hacer nada util. "),n()(),t(502,"section")(503,"h2"),e(504,"6.9 \u2014 Buenas practicas (documentacion oficial)"),n(),t(505,"h3"),e(506,"Principio 1: Conciso es clave"),n(),t(507,"p"),e(508," El contexto es un bien compartido. Tu skill compite por tokens con el historial de conversacion, otras skills y la solicitud actual. Solo agrega lo que Claude no sabe ya. "),n(),t(509,"app-callout",10),a(510,"app-code-block",5),n(),t(511,"app-callout",11),a(512,"app-code-block",5),t(513,"p"),e(514,"Claude ya sabe que es un PDF y como funcionan las librerias. No lo expliques."),n()(),t(515,"h3"),e(516,"Principio 2: Nivel de libertad apropiado"),n(),t(517,"p"),e(518,"Ajusta la especificidad de las instrucciones segun la fragilidad de la tarea."),n(),t(519,"div",12),a(520,"app-concept-card",13)(521,"app-concept-card",14)(522,"app-concept-card",15),n(),t(523,"h3"),e(524,"Principio 3: Nombres y descripciones efectivas"),n(),t(525,"app-callout",16),a(526,"app-code-block",5),n(),t(527,"app-callout",17),a(528,"app-code-block",5),t(529,"p"),e(530,'Claude no puede saber cuando usar esta skill vs otra que tambien "ayuda con documentos".'),n()(),t(531,"p"),e(532," Reglas para nombres: usa "),t(533,"strong"),e(534,"gerundio"),n(),e(535," ("),t(536,"code"),e(537,"processing-pdfs"),n(),e(538,", "),t(539,"code"),e(540,"analyzing-spreadsheets"),n(),e(541,", "),t(542,"code"),e(543,"managing-databases"),n(),e(544,"). Evita nombres vagos como "),t(545,"code"),e(546,"helper"),n(),e(547,", "),t(548,"code"),e(549,"utils"),n(),e(550,", "),t(551,"code"),e(552,"tools"),n(),e(553,". "),n(),t(554,"p"),e(555," Reglas para descripciones: escribe en "),t(556,"strong"),e(557,"tercera persona"),n(),e(558,' ("Processes Excel files" \u2014 no "I can help you"). Incluye tanto '),t(559,"em"),e(560,"que hace"),n(),e(561," la skill como "),t(562,"em"),e(563,"cuando usarla"),n(),e(564,". Las descripciones se truncan a 250 caracteres si hay muchas skills instaladas, asi que pon lo mas importante primero. "),n(),t(565,"h3"),e(566,"Principio 4: Divulgacion progresiva"),n(),t(567,"app-callout",18),a(568,"app-code-block",5),n(),t(569,"app-callout",19),e(570," Meter 800 lineas de documentacion, ejemplos, referencia de API y casos edge en un solo SKILL.md. Esto carga todo en contexto aunque solo se necesite el 10%. "),n(),t(571,"p"),e(572,"Mantener SKILL.md "),t(573,"strong"),e(574,"bajo 500 lineas"),n(),e(575,". Las referencias deben ser "),t(576,"strong"),e(577,"maximo 1 nivel de profundidad"),n(),e(578," desde SKILL.md."),n(),t(579,"h3"),e(580,"Principio 5: Feedback loops para calidad"),n(),a(581,"app-code-block",5),t(582,"h3"),e(583,"Principio 6: Scripts que resuelven, no que delegan"),n(),t(584,"app-callout",20),a(585,"app-code-block",5),n(),t(586,"app-callout",21),a(587,"app-code-block",5),t(588,"p"),e(589,"Los errores no manejados obligan a Claude a improvisar recuperacion, gastando tokens y produciendo resultados inconsistentes."),n()(),t(590,"h3"),e(591,"Principio 7: Probar con todos los modelos"),n(),t(592,"p"),e(593,"Las skills se comportan diferente segun el modelo que las usa. Prueba con los tres:"),n(),t(594,"div",12),a(595,"app-concept-card",22)(596,"app-concept-card",23)(597,"app-concept-card",24),n(),t(598,"h3"),e(599,"Principio 8: Desarrollo iterativo con evaluaciones"),n(),t(600,"p"),e(601,"Crea evaluaciones "),t(602,"strong"),e(603,"antes"),n(),e(604," de escribir documentacion extensa. El proceso es:"),n(),t(605,"ol")(606,"li"),e(607,"Ejecuta la tarea sin skill \u2014 identifica que falla"),n(),t(608,"li"),e(609,"Crea 3 evaluaciones que prueben esos gaps"),n(),t(610,"li"),e(611,"Mide el baseline de Claude sin skill"),n(),t(612,"li"),e(613,"Escribe el minimo de instrucciones para cubrir los gaps"),n(),t(614,"li"),e(615,"Itera: Claude A crea/refina la skill, Claude B la prueba en tareas reales"),n()()(),t(616,"section")(617,"h2"),e(618,"6.10 \u2014 Anti-patrones a evitar"),n(),t(619,"app-callout",25),a(620,"app-code-block",5),t(621,"p"),e(622,"Dale a Claude una respuesta, no una pregunta. Un default claro con una escotilla de escape para casos especiales."),n()(),t(623,"app-callout",26),a(624,"app-code-block",5),t(625,"p"),e(626,"Siempre usa forward slashes, incluso en Windows."),n()(),t(627,"app-callout",27),a(628,"app-code-block",5),n(),t(629,"app-callout",28),a(630,"app-code-block",5),n()(),t(631,"section")(632,"h2"),e(633,"6.11 \u2014 Checklist para una Skill efectiva"),n(),t(634,"div",12),a(635,"app-concept-card",29)(636,"app-concept-card",30)(637,"app-concept-card",31),n()(),a(638,"app-module-nav",32),n()),o&2&&(i(132),l("code",s.code.dirStructure),i(3),l("code",s.code.skillMdAnatomy),i(174),l("code",s.code.frontmatterFull),i(107),l("code",s.code.argSimple),i(8),l("code",s.code.argPositional),i(18),l("code",s.code.dynamicContext),i(20),l("code",s.code.contextFork),i(48),l("code",s.code.goodConcise),i(2),l("code",s.code.badVerbose),i(14),l("code",s.code.goodDescription),i(2),l("code",s.code.badDescription),i(40),l("code",s.code.goodProgressiveDisclosure),i(13),l("code",s.code.feedbackLoop),i(4),l("code",s.code.goodScriptErrors),i(2),l("code",s.code.badScriptErrors),i(33),l("code",s.code.antiPatternOptions),i(4),l("code",s.code.antiPatternPaths),i(4),l("code",s.code.antiPatternDates),i(2),l("code",s.code.antiPatternMagicConst),i(8),l("prev",s.prev)("next",s.next))},dependencies:[u,S,c,m,p],encapsulation:2})};export{x as Modulo06Component};

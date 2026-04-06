import{a as m}from"./chunk-HSI73NXQ.js";import{a as c,b as d,c as u,d as g}from"./chunk-C7DOBPJR.js";import{e as i,f as p,i as o,j as a,k as t,l as n,t as e}from"./chunk-HIV27VVN.js";var x=class r{prev={label:"Modulo 7: Subagentes",route:"/cursos/claude-code/modulo-07"};next={label:"Modulo 9: Integraciones",route:"/cursos/claude-code/modulo-09"};code={installHttp:`
<span class="comment"># Sintaxis basica</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">&lt;nombre&gt; &lt;url&gt;</span>

<span class="comment"># Ejemplo: Notion</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">notion https://mcp.notion.com/mcp</span>

<span class="comment"># Con header de autenticacion Bearer</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">secure-api https://api.example.com/mcp</span>   <span class="flag">--header</span> <span class="string">"Authorization: Bearer your-token"</span>`,installSse:`
<span class="comment"># El transporte SSE esta deprecado \u2014 usa HTTP cuando sea posible</span>
<span class="command">claude mcp add</span> <span class="flag">--transport sse</span> <span class="string">asana https://mcp.asana.com/sse</span>`,installStdio:`
<span class="comment"># El -- separa las opciones de Claude del comando del servidor MCP</span>
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span>   <span class="flag">--env</span> <span class="string">AIRTABLE_API_KEY=YOUR_KEY</span>   <span class="string">airtable</span> <span class="flag">--</span> <span class="string">npx -y airtable-mcp-server</span>

<span class="comment"># PostgreSQL read-only</span>
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span> <span class="string">db</span> <span class="flag">--</span> <span class="string">npx -y @bytebase/dbhub</span>   <span class="flag">--dsn</span> <span class="string">"postgresql://readonly:pass@prod.db.com:5432/analytics"</span>

<span class="comment"># Sentry via HTTP</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">sentry https://mcp.sentry.dev/mcp</span>

<span class="comment"># GitHub</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">github https://api.githubcopilot.com/mcp/</span>`,windowsWrapper:`
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span> <span class="string">my-server</span> <span class="flag">--</span> <span class="command">cmd /c npx</span> <span class="flag">-y</span> <span class="string">@some/package</span>`,managementCommands:`
<span class="comment"># Ver todos los servidores configurados</span>
<span class="command">claude mcp list</span>

<span class="comment"># Detalles de un servidor especifico</span>
<span class="command">claude mcp get</span> <span class="string">github</span>

<span class="comment"># Eliminar un servidor</span>
<span class="command">claude mcp remove</span> <span class="string">github</span>

<span class="comment"># Agregar desde config JSON directamente</span>
<span class="command">claude mcp add-json</span> <span class="string">weather-api</span> <span class="string">'{"type":"http","url":"https://api.weather.com/mcp"}'</span>

<span class="comment"># Importar servidores desde Claude Desktop (macOS / WSL)</span>
<span class="command">claude mcp add-from-claude-desktop</span>

<span class="comment"># Dentro de Claude Code: ver estado, autenticar con OAuth</span>
<span class="command">/mcp</span>

<span class="comment"># Verificar timeout de conexion (default: sin limite explicito)</span>
<span class="string">MCP_TIMEOUT=10000</span> <span class="command">claude</span>  <span class="comment"># timeout de 10 segundos</span>`,scopeExamples:`
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">stripe</span>  <span class="flag">--scope local</span>   <span class="string">https://mcp.stripe.com</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">paypal</span>  <span class="flag">--scope project</span> <span class="string">https://mcp.paypal.com/mcp</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">hubspot</span> <span class="flag">--scope user</span>   <span class="string">https://mcp.hubspot.com/anthropic</span>`,mcpJsonFormat:`
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"shared-server"</span>: {
      <span class="string">"command"</span>: <span class="string">"/path/to/server"</span>,
      <span class="string">"args"</span>: [],
      <span class="string">"env"</span>: {}
    }
  }
}`,mcpJsonEnvVars:`
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"api-server"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="keyword">"url"</span>: <span class="string">"\${API_BASE_URL:-https://api.example.com}/mcp"</span>,
      <span class="string">"headers"</span>: {
        <span class="string">"Authorization"</span>: <span class="string">"Bearer \${API_KEY}"</span>
      }
    }
  }
}`,oauthBasic:`
<span class="comment"># 1. Agregar el servidor</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">sentry https://mcp.sentry.dev/mcp</span>

<span class="comment"># 2. Autenticar</span>
<span class="command">/mcp</span>  <span class="comment">\u2192 seleccionar servidor \u2192 "Authenticate" \u2192 login en navegador</span>`,oauthFixedPort:`
<span class="command">claude mcp add</span> <span class="flag">--transport http</span>   <span class="flag">--callback-port 8080</span>   <span class="string">my-server https://mcp.example.com/mcp</span>`,oauthPreConfigured:`
<span class="comment"># Cuando el servidor no soporta Dynamic Client Registration</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span>   <span class="flag">--client-id</span> <span class="string">your-client-id</span> <span class="flag">--client-secret --callback-port 8080</span>   <span class="string">my-server https://mcp.example.com/mcp</span>

<span class="comment"># Via variable de entorno (para CI/CD)</span>
<span class="string">MCP_CLIENT_SECRET=your-secret</span> <span class="command">claude mcp add</span> <span class="flag">--transport http</span>   <span class="flag">--client-id</span> <span class="string">your-client-id</span> <span class="flag">--client-secret --callback-port 8080</span>   <span class="string">my-server https://mcp.example.com/mcp</span>`,headersHelper:`
<span class="comment">// .mcp.json</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"internal-api"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"https://mcp.internal.example.com"</span>,
      <span class="keyword">"headersHelper"</span>: <span class="string">"/opt/bin/get-mcp-auth-headers.sh"</span>
    }
  }
}`,atMentions:`
<span class="comment"># Analizar un issue de GitHub</span>
<span class="string">Can you analyze @github:issue://123 and suggest a fix?</span>

<span class="comment"># Revisar documentacion</span>
<span class="string">Please review @docs:file://api/authentication</span>

<span class="comment"># Comparar recursos de dos servidores</span>
<span class="string">Compare @postgres:schema://users with @docs:file://database/user-model</span>`,mcpPrompts:`
<span class="comment"># Sin argumentos</span>
<span class="command">/mcp__github__list_prs</span>

<span class="comment"># Con argumentos (separados por espacio)</span>
<span class="command">/mcp__github__pr_review</span> <span class="string">456</span>
<span class="command">/mcp__jira__create_issue</span> <span class="string">"Bug in login flow"</span> <span class="string">high</span>`,toolSearch:`
<span class="comment"># Umbral personalizado del 5%</span>
<span class="string">ENABLE_TOOL_SEARCH=auto:5</span> <span class="command">claude</span>

<span class="comment"># Desactivar Tool Search (cargar todo upfront)</span>
<span class="string">ENABLE_TOOL_SEARCH=false</span> <span class="command">claude</span>

<span class="comment"># Deshabilitar ToolSearch como herramienta en settings.json</span>
{
  <span class="string">"permissions"</span>: { <span class="string">"deny"</span>: [<span class="string">"ToolSearch"</span>] }
}`,outputLimits:`
<span class="comment"># Warning cuando un tool produce mas de 10,000 tokens</span>
<span class="comment"># Limite default: 25,000 tokens</span>
<span class="comment"># Para aumentar el limite:</span>
<span class="string">MAX_MCP_OUTPUT_TOKENS=50000</span> <span class="command">claude</span>`,mcpServe:`
<span class="comment"># Iniciar Claude como servidor MCP stdio</span>
<span class="command">claude mcp serve</span>`,desktopConfig:`
<span class="comment">// claude_desktop_config.json</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"claude-code"</span>: {
      <span class="string">"type"</span>: <span class="string">"stdio"</span>,
      <span class="keyword">"command"</span>: <span class="string">"/full/path/to/claude"</span>,  <span class="comment">// usa "which claude" para encontrar la ruta</span>
      <span class="string">"args"</span>: [<span class="string">"mcp"</span>, <span class="string">"serve"</span>],
      <span class="string">"env"</span>: {}
    }
  }
}`,managedMcpJson:`
<span class="comment">// managed-mcp.json</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"github"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"https://api.githubcopilot.com/mcp/"</span>
    },
    <span class="string">"company-internal"</span>: {
      <span class="string">"type"</span>: <span class="string">"stdio"</span>,
      <span class="string">"command"</span>: <span class="string">"/usr/local/bin/company-mcp-server"</span>,
      <span class="string">"args"</span>: [<span class="string">"--config"</span>, <span class="string">"/etc/company/mcp-config.json"</span>],
      <span class="string">"env"</span>: { <span class="string">"COMPANY_API_URL"</span>: <span class="string">"https://internal.company.com"</span> }
    }
  }
}`,allowlistDenylist:`
<span class="comment">// managed settings</span>
{
  <span class="string">"allowedMcpServers"</span>: [
    { <span class="string">"serverName"</span>: <span class="string">"github"</span> },                                        <span class="comment">// por nombre</span>
    { <span class="string">"serverCommand"</span>: [<span class="string">"npx"</span>, <span class="string">"-y"</span>, <span class="string">"@modelcontextprotocol/server-filesystem"</span>] }, <span class="comment">// por comando exacto</span>
    { <span class="string">"serverUrl"</span>: <span class="string">"https://mcp.company.com/*"</span> },                       <span class="comment">// por URL con wildcard</span>
    { <span class="string">"serverUrl"</span>: <span class="string">"https://*.internal.corp/*"</span> }                         <span class="comment">// wildcard en subdominio</span>
  ],
  <span class="string">"deniedMcpServers"</span>: [
    { <span class="string">"serverName"</span>: <span class="string">"dangerous-server"</span> },
    { <span class="string">"serverUrl"</span>: <span class="string">"https://*.untrusted.com/*"</span> }
  ]
}`,credentialsBad:`
<span class="comment">// .mcp.json \u2014 MAL: esto va a git con el token expuesto</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"api"</span>: {
      <span class="string">"env"</span>: { <span class="string">"API_KEY"</span>: <span class="string">"sk-real-api-key-aqui"</span> }
    }
  }
}`,credentialsGood:`
<span class="comment">// .mcp.json \u2014 BIEN: el token viene del entorno</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"api"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"\${API_BASE_URL:-https://api.example.com}/mcp"</span>,
      <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer \${API_KEY}"</span> }
    }
  }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=p({type:r,selectors:[["app-modulo-08"]],decls:458,vars:24,consts:[[1,"container"],["number","8 de 11","title","MCP \u2014 Model Context Protocol","subtitle","Conecta Claude Code a herramientas externas: bases de datos, APIs, issue trackers, monitoreo y mas"],[1,"concept-grid"],["title","Issue trackers","description",'"Implementa el feature del JIRA ENG-4521 y crea un PR en GitHub"'],["title","Monitoreo","description",'"Revisa Sentry y Statsig para ver el uso del feature ENG-4521"'],["title","Bases de datos","description",'"Encuentra clientes que no han comprado en 90 dias en PostgreSQL"'],["title","Diseno y comunicacion","description",'"Actualiza el template de email con los nuevos disenos de Figma posteados en Slack"'],["title","Automatizacion","description",'"Crea borradores en Gmail invitando a estos 10 usuarios a una sesion de feedback"'],["title","Eventos externos (Channels)","description","Un servidor MCP puede hacer push de mensajes a tu sesion: reaccionar a Telegram, Discord, webhooks mientras no estas"],["type","warn","title","Seguridad"],[3,"code"],["type","info","title","Orden de opciones \u2014 importante"],["type","warn","title","Windows (sin WSL)"],[1,"table-wrapper"],["type","info","title","Nota sobre terminologia"],["type","good","title","Un script para multiples servidores"],["type","warn","title","Modelos soportados"],["type","info","title","Para autores de servidores MCP"],["type","warn","title","Ruta del ejecutable"],["type","warn","title","Reglas criticas de las politicas"],["type","good","title","Bien \u2014 scope correcto por caso de uso"],["type","bad","title","Mal \u2014 credenciales en .mcp.json de proyecto"],["type","good","title","Bien \u2014 variables de entorno en .mcp.json"],["type","good","title","Bien \u2014 servidor con acceso de solo lectura"],["type","bad","title","Mal \u2014 instalar servidores MCP sin verificar"],[3,"prev","next"]],template:function(l,s){l&1&&(a(0,"div",0),n(1,"app-module-header",1),a(2,"section")(3,"h2"),e(4,"8.1 \u2014 Que es MCP"),t(),a(5,"p"),e(6," MCP es un "),a(7,"strong"),e(8,"protocolo abierto para integrar herramientas externas con Claude"),t(),e(9,". Un servidor MCP expone tools, resources y prompts que Claude puede usar dentro de una sesion. Una vez conectado, Claude tiene acceso directo a tus sistemas. "),t(),a(10,"h3"),e(11,"Lo que puedes hacer con MCP"),t(),a(12,"div",2),n(13,"app-concept-card",3)(14,"app-concept-card",4)(15,"app-concept-card",5)(16,"app-concept-card",6)(17,"app-concept-card",7)(18,"app-concept-card",8),t(),a(19,"app-callout",9)(20,"p"),e(21," Usa servidores MCP de terceros bajo tu propio riesgo. Anthropic no ha verificado la seguridad de todos los servidores disponibles. Ten especial cuidado con servidores que consumen contenido externo \u2014 pueden exponerte a prompt injection. Solo instala servidores de fuentes en las que confias. "),t()()(),a(22,"section")(23,"h2"),e(24,"8.2 \u2014 Instalar servidores MCP"),t(),a(25,"h3"),e(26,"Opcion 1: HTTP (recomendado para servidores remotos)"),t(),n(27,"app-code-block",10),a(28,"h3"),e(29,"Opcion 2: SSE (deprecado)"),t(),n(30,"app-code-block",10),a(31,"h3"),e(32,"Opcion 3: Stdio (procesos locales)"),t(),n(33,"app-code-block",10),a(34,"app-callout",11)(35,"p"),e(36," Todas las opciones ("),a(37,"code"),e(38,"--transport"),t(),e(39,", "),a(40,"code"),e(41,"--env"),t(),e(42,", "),a(43,"code"),e(44,"--scope"),t(),e(45,", "),a(46,"code"),e(47,"--header"),t(),e(48,") deben ir "),a(49,"strong"),e(50,"antes"),t(),e(51," del nombre del servidor. El "),a(52,"code"),e(53,"--"),t(),e(54," separa el nombre del servidor del comando que se pasa al servidor MCP. Esto evita conflictos entre los flags de Claude y los del servidor. "),t()(),a(55,"app-callout",12)(56,"p"),e(57,"En Windows nativo, los servidores stdio con "),a(58,"code"),e(59,"npx"),t(),e(60," requieren el wrapper "),a(61,"code"),e(62,"cmd /c"),t(),e(63,":"),t(),n(64,"app-code-block",10),a(65,"p"),e(66,'Sin esto obtienes errores "Connection closed".'),t()()(),a(67,"section")(68,"h2"),e(69,"8.3 \u2014 Comandos de gestion"),t(),n(70,"app-code-block",10),t(),a(71,"section")(72,"h2"),e(73,"8.4 \u2014 Scopes de instalacion"),t(),a(74,"div",13)(75,"table")(76,"thead")(77,"tr")(78,"th"),e(79,"Scope"),t(),a(80,"th"),e(81,"Donde se guarda"),t(),a(82,"th"),e(83,"Para que"),t()()(),a(84,"tbody")(85,"tr")(86,"td")(87,"code"),e(88,"local"),t(),e(89," (default)"),t(),a(90,"td")(91,"code"),e(92,"~/.claude.json"),t(),e(93," bajo la ruta del proyecto"),t(),a(94,"td"),e(95,"Personal, credentials sensibles, experimental para este proyecto"),t()(),a(96,"tr")(97,"td")(98,"code"),e(99,"project"),t()(),a(100,"td")(101,"code"),e(102,".mcp.json"),t(),e(103," en el root del proyecto"),t(),a(104,"td"),e(105,"Compartido con el equipo via git, herramientas del proyecto"),t()(),a(106,"tr")(107,"td")(108,"code"),e(109,"user"),t()(),a(110,"td")(111,"code"),e(112,"~/.claude.json"),t(),e(113," global"),t(),a(114,"td"),e(115,"Herramientas personales que usas en todos los proyectos"),t()()()()(),n(116,"app-code-block",10),a(117,"p")(118,"strong"),e(119,"Precedencia:"),t(),e(120," local > project > user. Si un servidor esta configurado en local y ademas como conector de Claude.ai, gana la configuracion local. "),t(),a(121,"h3"),e(122,"Formato de .mcp.json"),t(),n(123,"app-code-block",10),a(124,"h3"),e(125,"Variables de entorno en .mcp.json"),t(),n(126,"app-code-block",10),a(127,"p"),e(128," Sintaxis: "),a(129,"code"),e(130,"${VAR}"),t(),e(131," expande la variable. "),a(132,"code"),e(133,"${VAR:-default}"),t(),e(134," usa el default si VAR no esta definida. Se puede usar en "),a(135,"code"),e(136,"command"),t(),e(137,", "),a(138,"code"),e(139,"args"),t(),e(140,", "),a(141,"code"),e(142,"env"),t(),e(143,", "),a(144,"code"),e(145,"url"),t(),e(146," y "),a(147,"code"),e(148,"headers"),t(),e(149,". "),t(),a(150,"app-callout",14)(151,"p"),e(152,' El scope MCP "local" se guarda en '),a(153,"code"),e(154,"~/.claude.json"),t(),e(155,' (home directory), no en el directorio del proyecto. Esto es diferente a los settings generales de Claude Code donde "local" se refiere a '),a(156,"code"),e(157,".claude/settings.local.json"),t(),e(158," dentro del proyecto. "),t()()(),a(159,"section")(160,"h2"),e(161,"8.5 \u2014 Autenticacion"),t(),a(162,"h3"),e(163,"OAuth 2.0 automatico"),t(),n(164,"app-code-block",10),a(165,"p"),e(166," Los tokens se guardan de forma segura y se refrescan automaticamente. Para revocar: "),a(167,"code"),e(168,'/mcp \u2192 "Clear authentication"'),t(),e(169,". "),t(),a(170,"h3"),e(171,"Puerto OAuth fijo (para redirect URIs pre-registradas)"),t(),n(172,"app-code-block",10),a(173,"h3"),e(174,"Credenciales OAuth pre-configuradas"),t(),n(175,"app-code-block",10),a(176,"h3"),e(177,"Headers dinamicos (Kerberos, tokens efimeros, SSO interno)"),t(),n(178,"app-code-block",10),a(179,"p"),e(180," El script corre en cada conexion, escribe JSON de headers a stdout. Variables disponibles para el script: "),a(181,"code"),e(182,"CLAUDE_CODE_MCP_SERVER_NAME"),t(),e(183," y "),a(184,"code"),e(185,"CLAUDE_CODE_MCP_SERVER_URL"),t(),e(186,". Timeout: 10 segundos. "),t(),a(187,"app-callout",15)(188,"p"),e(189," Usando las variables "),a(190,"code"),e(191,"CLAUDE_CODE_MCP_SERVER_NAME"),t(),e(192," y "),a(193,"code"),e(194,"CLAUDE_CODE_MCP_SERVER_URL"),t(),e(195,", puedes escribir un solo "),a(196,"code"),e(197,"headersHelper"),t(),e(198," que sirva para todos tus servidores internos, generando el token correcto segun el servidor que lo solicite. "),t()()(),a(199,"section")(200,"h2"),e(201,"8.6 \u2014 Resources y @-menciones"),t(),a(202,"p"),e(203," Los servidores MCP pueden exponer recursos que se referencian en prompts con "),a(204,"code"),e(205,"@"),t(),e(206,", igual que referencias a archivos. "),t(),n(207,"app-code-block",10),a(208,"p"),e(209," Escribe "),a(210,"code"),e(211,"@"),t(),e(212," en el prompt para ver autocompletado con todos los recursos disponibles de los servidores conectados. Los recursos se incluyen automaticamente como adjuntos al referenciarlos. "),t()(),a(213,"section")(214,"h2"),e(215,"8.7 \u2014 MCP Prompts como comandos"),t(),a(216,"p"),e(217," Los servidores MCP pueden exponer prompts que aparecen como comandos "),a(218,"code"),e(219,"/"),t(),e(220," en Claude Code. Formato: "),a(221,"code"),e(222,"/mcp__<servidor>__<prompt>"),t()(),n(223,"app-code-block",10),a(224,"p"),e(225,"Los espacios en nombres de servidores o prompts se convierten automaticamente en guiones bajos."),t()(),a(226,"section")(227,"h2"),e(228,"8.8 \u2014 Tool Search \u2014 carga diferida"),t(),a(229,"p"),e(230," Por defecto los tools de MCP se cargan "),a(231,"strong"),e(232,"bajo demanda"),t(),e(233,", no todos al inicio. Solo los nombres se cargan en el system prompt. Claude busca los tools relevantes cuando los necesita. Esto permite tener decenas de servidores sin penalizar el contexto. "),t(),a(234,"div",13)(235,"table")(236,"thead")(237,"tr")(238,"th"),e(239,"Valor "),a(240,"code"),e(241,"ENABLE_TOOL_SEARCH"),t()(),a(242,"th"),e(243,"Comportamiento"),t()()(),a(244,"tbody")(245,"tr")(246,"td"),e(247,"(no definido)"),t(),a(248,"td"),e(249," Todos los tools diferidos y cargados bajo demanda. Carga upfront si "),a(250,"code"),e(251,"ANTHROPIC_BASE_URL"),t(),e(252," apunta a host no oficial "),t()(),a(253,"tr")(254,"td")(255,"code"),e(256,"true"),t()(),a(257,"td"),e(258,"Todos los tools diferidos, incluso con "),a(259,"code"),e(260,"ANTHROPIC_BASE_URL"),t(),e(261," no oficial"),t()(),a(262,"tr")(263,"td")(264,"code"),e(265,"auto"),t()(),a(266,"td"),e(267,"Modo umbral: carga upfront si caben en el 10% del contexto, diferidos en caso contrario"),t()(),a(268,"tr")(269,"td")(270,"code"),e(271,"auto:N"),t()(),a(272,"td"),e(273,"Modo umbral con porcentaje personalizado (ej: "),a(274,"code"),e(275,"auto:5"),t(),e(276," para 5%)"),t()(),a(277,"tr")(278,"td")(279,"code"),e(280,"false"),t()(),a(281,"td"),e(282,"Todos los tools cargados upfront, sin deferral"),t()()()()(),n(283,"app-code-block",10),a(284,"app-callout",16)(285,"p"),e(286," Tool Search requiere modelos que soporten bloques "),a(287,"code"),e(288,"tool_reference"),t(),e(289,": Sonnet 4+ y Opus 4+. "),a(290,"strong"),e(291,"Haiku no lo soporta."),t()()(),a(292,"app-callout",17)(293,"p"),e(294," El campo "),a(295,"code"),e(296,"server instructions"),t(),e(297," del servidor se vuelve mas valioso con Tool Search activo. Ayuda a Claude a saber cuando buscar tus tools. Explica que categoria de tareas maneja tu servidor y cuando usarlo. Claude Code trunca las tool descriptions e instrucciones del servidor a 2KB cada una. "),t()()(),a(298,"section")(299,"h2"),e(300,"8.9 \u2014 Limites de output y actualizaciones dinamicas"),t(),a(301,"h3"),e(302,"Limites de output"),t(),n(303,"app-code-block",10),a(304,"h3"),e(305,"Actualizaciones dinamicas de tools"),t(),a(306,"p"),e(307," Claude Code soporta notificaciones "),a(308,"code"),e(309,"list_changed"),t(),e(310," de MCP. Cuando un servidor actualiza sus tools disponibles, Claude Code los refresca automaticamente sin necesidad de desconectar y reconectar el servidor. "),t()(),a(311,"section")(312,"h2"),e(313,"8.10 \u2014 Claude Code como servidor MCP"),t(),a(314,"p"),e(315,"Claude Code puede exponerse como servidor MCP para que otras aplicaciones lo usen."),t(),n(316,"app-code-block",10),a(317,"h3"),e(318,"Configuracion para Claude Desktop"),t(),n(319,"app-code-block",10),a(320,"app-callout",18)(321,"p"),e(322," El campo "),a(323,"code"),e(324,"command"),t(),e(325," debe apuntar al ejecutable de Claude Code. Si "),a(326,"code"),e(327,"claude"),t(),e(328," no esta en el PATH del sistema, usa la ruta completa obtenida con "),a(329,"code"),e(330,"which claude"),t(),e(331,". Sin esto obtienes errores "),a(332,"code"),e(333,"spawn claude ENOENT"),t(),e(334,". "),t()()(),a(335,"section")(336,"h2"),e(337,"8.11 \u2014 MCP gestionado (Enterprise)"),t(),a(338,"h3"),e(339,"Opcion 1: Control exclusivo con managed-mcp.json"),t(),a(340,"p"),e(341," El archivo toma control total de todos los servidores MCP. Los usuarios no pueden agregar ni modificar servidores. "),t(),a(342,"div",13)(343,"table")(344,"thead")(345,"tr")(346,"th"),e(347,"Sistema"),t(),a(348,"th"),e(349,"Ruta del archivo"),t()()(),a(350,"tbody")(351,"tr")(352,"td"),e(353,"macOS"),t(),a(354,"td")(355,"code"),e(356,"/Library/Application Support/ClaudeCode/managed-mcp.json"),t()()(),a(357,"tr")(358,"td"),e(359,"Linux / WSL"),t(),a(360,"td")(361,"code"),e(362,"/etc/claude-code/managed-mcp.json"),t()()(),a(363,"tr")(364,"td"),e(365,"Windows"),t(),a(366,"td")(367,"code"),e(368,"C:\\Program Files\\ClaudeCode\\managed-mcp.json"),t()()()()()(),n(369,"app-code-block",10),a(370,"h3"),e(371,"Opcion 2: Allowlists y Denylists (control con flexibilidad)"),t(),a(372,"p"),e(373,"Permite a los usuarios agregar servidores propios dentro de politicas definidas por el administrador."),t(),n(374,"app-code-block",10),a(375,"div",13)(376,"table")(377,"thead")(378,"tr")(379,"th"),e(380,"Campo allowedMcpServers"),t(),a(381,"th"),e(382,"Comportamiento"),t()()(),a(383,"tbody")(384,"tr")(385,"td")(386,"code"),e(387,"undefined"),t(),e(388," (default)"),t(),a(389,"td"),e(390,"Sin restricciones \u2014 usuarios pueden configurar cualquier servidor"),t()(),a(391,"tr")(392,"td")(393,"code"),e(394,"[]"),t(),e(395," (array vacio)"),t(),a(396,"td"),e(397,"Lockdown total \u2014 nadie puede agregar servidores"),t()(),a(398,"tr")(399,"td"),e(400,"Lista de entradas"),t(),a(401,"td"),e(402,"Solo se permiten servidores que coincidan por nombre, comando o URL"),t()()()()(),a(403,"app-callout",19)(404,"p")(405,"strong"),e(406,"Denylist tiene precedencia absoluta"),t(),e(407," \u2014 si un servidor coincide con la denylist, queda bloqueado aunque este en la allowlist. "),t(),a(408,"p"),e(409," Los comandos stdio usan "),a(410,"strong"),e(411,"match exacto"),t(),e(412,": mismo comando y todos los argumentos en orden. "),a(413,"code"),e(414,'["npx", "-y", "server"]'),t(),e(415," no coincide con "),a(416,"code"),e(417,'["npx", "server"]'),t(),e(418,". "),t(),a(419,"p"),e(420,"Las URLs soportan wildcards "),a(421,"code"),e(422,"*"),t(),e(423," para cualquier secuencia de caracteres."),t()()(),a(424,"section")(425,"h2"),e(426,"8.12 \u2014 Buenas y malas practicas"),t(),a(427,"app-callout",20)(428,"p"),e(429," Bases de datos con credenciales en "),a(430,"code"),e(431,"--scope local"),t(),e(432,", nunca en el proyecto. Herramientas del equipo (GitHub, Sentry) en "),a(433,"code"),e(434,"--scope project"),t(),e(435," via "),a(436,"code"),e(437,".mcp.json"),t(),e(438," versionado en git. Herramientas personales de dev en "),a(439,"code"),e(440,"--scope user"),t(),e(441,". "),t()(),a(442,"app-callout",21),n(443,"app-code-block",10),a(444,"p"),e(445," Usa "),a(446,"code"),e(447,"${API_KEY}"),t(),e(448," y define el valor real en variables de entorno del sistema, nunca en el archivo. "),t()(),a(449,"app-callout",22),n(450,"app-code-block",10),t(),a(451,"app-callout",23)(452,"p"),e(453," Para bases de datos o APIs de produccion, conecta con credenciales de solo lectura. Si el servidor MCP solo necesita leer datos, no le des permisos de escritura. Reduce el radio de impacto de un error o prompt injection. "),t()(),a(454,"app-callout",24)(455,"p"),e(456," Un servidor MCP con acceso a tu filesystem y credenciales puede exfiltrar datos si esta comprometido o maliciosamente disenado. Verifica la fuente, revisa el codigo si es posible, y usa servidores solo de fuentes de confianza. "),t()()(),n(457,"app-module-nav",25),t()),l&2&&(i(27),o("code",s.code.installHttp),i(3),o("code",s.code.installSse),i(3),o("code",s.code.installStdio),i(31),o("code",s.code.windowsWrapper),i(6),o("code",s.code.managementCommands),i(46),o("code",s.code.scopeExamples),i(7),o("code",s.code.mcpJsonFormat),i(3),o("code",s.code.mcpJsonEnvVars),i(38),o("code",s.code.oauthBasic),i(8),o("code",s.code.oauthFixedPort),i(3),o("code",s.code.oauthPreConfigured),i(3),o("code",s.code.headersHelper),i(29),o("code",s.code.atMentions),i(16),o("code",s.code.mcpPrompts),i(60),o("code",s.code.toolSearch),i(20),o("code",s.code.outputLimits),i(13),o("code",s.code.mcpServe),i(3),o("code",s.code.desktopConfig),i(50),o("code",s.code.managedMcpJson),i(5),o("code",s.code.allowlistDenylist),i(69),o("code",s.code.credentialsBad),i(7),o("code",s.code.credentialsGood),i(7),o("prev",s.prev)("next",s.next))},dependencies:[u,g,c,m,d],encapsulation:2})};export{x as Modulo08Component};

import{a as d,b as c,c as m,d as g,e as u}from"./chunk-LCHIYWU5.js";import{e as i,f as p,i as o,j as t,k as n,l as s,t as e}from"./chunk-HIV27VVN.js";var E=class r{prev={label:"Modulo 4: Sistema de Memoria",route:"/cursos/claude-code/modulo-04"};next={label:"Modulo 6: Skills",route:"/cursos/claude-code/modulo-06"};code={formatoBasico:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"NombreEvento"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"patron_regex"</span>,       <span class="comment">// Filtra que dispara el hook</span>
        <span class="string">"hooks"</span>: [
          {
            <span class="string">"type"</span>: <span class="string">"command"</span>,             <span class="comment">// command | http | prompt | agent</span>
            <span class="string">"command"</span>: <span class="string">"ruta/al/script.sh"</span>, <span class="comment">// El comando a ejecutar</span>
            <span class="string">"timeout"</span>: 600,                   <span class="comment">// Timeout en segundos (default 600)</span>
            <span class="string">"async"</span>: <span class="keyword">false</span>,                   <span class="comment">// Fire-and-forget?</span>
            <span class="string">"if"</span>: <span class="string">"Bash(git *)"</span>              <span class="comment">// Filtro adicional (v2.1.85+)</span>
          }
        ]
      }
    ]
  }
}`,otrosTipos:`
<span class="comment">// HTTP hook</span>
{
  <span class="string">"type"</span>: <span class="string">"http"</span>,
  <span class="string">"url"</span>: <span class="string">"http://localhost:8080/hooks/pre-tool-use"</span>,
  <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer $MY_TOKEN"</span> },
  <span class="string">"allowedEnvVars"</span>: [<span class="string">"MY_TOKEN"</span>]
}

<span class="comment">// Prompt hook (LLM single-turn, Haiku por default)</span>
{
  <span class="string">"type"</span>: <span class="string">"prompt"</span>,
  <span class="string">"prompt"</span>: <span class="string">"Evaluate if this change is safe..."</span>,
  <span class="string">"model"</span>: <span class="string">"claude-opus-4-1"</span>
}

<span class="comment">// Agent hook (subagente multi-turn con herramientas)</span>
{
  <span class="string">"type"</span>: <span class="string">"agent"</span>,
  <span class="string">"prompt"</span>: <span class="string">"Run tests and verify they pass. $ARGUMENTS"</span>,
  <span class="string">"timeout"</span>: 120
}`,campoIf:`
{
  <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
  <span class="string">"hooks"</span>: [{
    <span class="string">"type"</span>: <span class="string">"command"</span>,
    <span class="string">"if"</span>: <span class="string">"Bash(git *)"</span>,              <span class="comment">// Solo comandos git</span>
    <span class="string">"command"</span>: <span class="string">"./check-git-policy.sh"</span>
  }]
}

<span class="comment">// Otros ejemplos de if:</span>
<span class="string">"if"</span>: <span class="string">"Bash(rm *)"</span>                   <span class="comment">// Solo comandos rm</span>
<span class="string">"if"</span>: <span class="string">"Edit(*.ts)"</span>                   <span class="comment">// Solo edits a TypeScript</span>`,inputJson:`
<span class="comment">// Campos base (todos los eventos)</span>
{
  <span class="string">"session_id"</span>: <span class="string">"abc123"</span>,
  <span class="string">"cwd"</span>: <span class="string">"/ruta/actual"</span>,
  <span class="string">"permission_mode"</span>: <span class="string">"default"</span>,
  <span class="string">"hook_event_name"</span>: <span class="string">"PreToolUse"</span>
}

<span class="comment">// + campos de tool events (PreToolUse, PostToolUse)</span>
{
  <span class="string">"tool_name"</span>: <span class="string">"Bash"</span>,
  <span class="string">"tool_input"</span>: { <span class="string">"command"</span>: <span class="string">"npm test"</span> },
  <span class="string">"tool_use_id"</span>: <span class="string">"toolu_01ABC..."</span>
}

<span class="comment">// + campo extra de PostToolUse</span>
{
  <span class="string">"tool_response"</span>: { <span class="string">"stdout"</span>: <span class="string">"..."</span>, <span class="string">"exit_code"</span>: 0 }
}`,outputJson:`
<span class="comment">// Output general</span>
{
  <span class="string">"decision"</span>: <span class="string">"block"</span>,
  <span class="string">"reason"</span>: <span class="string">"Comando peligroso bloqueado"</span>,
  <span class="string">"additionalContext"</span>: <span class="string">"Texto inyectado al contexto de Claude"</span>
}

<span class="comment">// Output especifico para PreToolUse</span>
{
  <span class="string">"hookSpecificOutput"</span>: {
    <span class="string">"hookEventName"</span>: <span class="string">"PreToolUse"</span>,
    <span class="string">"permissionDecision"</span>: <span class="string">"allow|deny|ask|defer"</span>,
    <span class="string">"permissionDecisionReason"</span>: <span class="string">"razon"</span>,
    <span class="string">"updatedInput"</span>: {}   <span class="comment">// Puede reescribir argumentos de la herramienta</span>
  }
}`,blockDangerous:`
<span class="comment">#!/bin/bash</span>
<span class="comment"># .claude/hooks/block-dangerous.sh</span>

COMMAND=$(jq -r <span class="string">'.tool_input.command'</span> &lt; /dev/stdin)

<span class="keyword">if</span> [[ <span class="string">"$COMMAND"</span> == rm -rf* ]]; then
  jq -n <span class="string">'{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Comando destructivo bloqueado por politica"
    }
  }'</span>
  exit 0
<span class="keyword">fi</span>

exit 0`,blockDangerousConfig:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">""$CLAUDE_PROJECT_DIR"/.claude/hooks/block-dangerous.sh"</span>
      }]
    }]
  }
}`,protectFiles:`
<span class="comment">#!/bin/bash</span>
<span class="comment"># .claude/hooks/protect-files.sh</span>

INPUT=$(cat)
FILE_PATH=$(echo <span class="string">"$INPUT"</span> | jq -r <span class="string">'.tool_input.file_path // empty'</span>)

PROTECTED=(<span class="string">".env"</span> <span class="string">"package-lock.json"</span> <span class="string">".git/"</span>)
<span class="keyword">for</span> pattern <span class="keyword">in</span> <span class="string">"\${PROTECTED[@]}"</span>; <span class="keyword">do</span>
  <span class="keyword">if</span> [[ <span class="string">"$FILE_PATH"</span> == *<span class="string">"$pattern"</span>* ]]; <span class="keyword">then</span>
    echo <span class="string">"Blocked: $FILE_PATH matches protected '$pattern'"</span> &gt;&amp;2
    exit 2   <span class="comment"># Error bloqueante: stderr se envia a Claude</span>
  <span class="keyword">fi</span>
<span class="keyword">done</span>

exit 0`,hookEquipo:`
<span class="comment">// .claude/settings.json (compartido con el equipo)</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""$CLAUDE_PROJECT_DIR"/.claude/hooks/block-dangerous.sh"</span>
        }]
      },
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""$CLAUDE_PROJECT_DIR"/.claude/hooks/protect-files.sh"</span>
        }]
      }
    ]
  }
}`,autoApprove:`
<span class="comment">// MAL: auto-approve sin ningun check</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">".*"</span>,   <span class="comment">// Matchea TODO</span>
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"echo '{\\"hookSpecificOutput\\":{\\"permissionDecision\\":\\"allow\\"}}'"</span>
      }]
    }]
  }
}`,postFormat:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
      }]
    }]
  }
}`,postLog:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.command' >> ~/.claude/command-log.txt"</span>
      }]
    }]
  }
}`,postFormatLint:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
      <span class="string">"hooks"</span>: [
        {
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
        },
        {
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx eslint --fix"</span>,
          <span class="string">"async"</span>: <span class="keyword">true</span>   <span class="comment">// No bloquea, corre en background</span>
        }
      ]
    }]
  }
}`,sessionStartCompact:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"SessionStart"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"compact"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"echo 'Recordar: usar Bun no npm. Sprint actual: refactor auth.'"</span>
      }]
    }]
  }
}`,notificationMac:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Notification"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">""</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification "Claude necesita atencion" with title "Claude Code"'"</span>
      }]
    }]
  }
}`,stopPrompt:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"prompt"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains\\"}."</span>
      }]
    }]
  }
}`,stopAgent:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"agent"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Run the test suite and verify all tests pass. $ARGUMENTS"</span>,
        <span class="string">"timeout"</span>: 120
      }]
    }]
  }
}`,stopLoop:`
<span class="comment">#!/bin/bash</span>
INPUT=$(cat)
<span class="keyword">if</span> [ <span class="string">"$(echo "$INPUT" | jq -r '.stop_hook_active')"</span> = <span class="string">"true"</span> ]; <span class="keyword">then</span>
  exit 0  <span class="comment"># Permitir que Claude pare (ya estamos en el hook)</span>
<span class="keyword">fi</span>
<span class="comment"># ... tu logica de verificacion ...</span>`,cwdChanged:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"CwdChanged"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"direnv export bash >> "$CLAUDE_ENV_FILE""</span>
      }]
    }]
  }
}`,httpAudit:`
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"http"</span>,
        <span class="string">"url"</span>: <span class="string">"http://localhost:8080/hooks/tool-use"</span>,
        <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer $MY_TOKEN"</span> },
        <span class="string">"allowedEnvVars"</span>: [<span class="string">"MY_TOKEN"</span>]
      }]
    }]
  }
}`,debuggingHooks:`
<span class="comment"># Ver todos los hooks configurados</span>
/hooks

<span class="comment"># Modo verbose para ver output de hooks en transcript</span>
Ctrl+O

<span class="comment"># Debug completo de ejecucion</span>
<span class="command">claude</span> <span class="flag">--debug</span>

<span class="comment"># Test manual de un script hook</span>
echo <span class="string">'{"tool_name":"Bash","tool_input":{"command":"ls"}}'</span> | ./mi-hook.sh`,receta1:`
<span class="comment">// .claude/settings.json (todo el equipo)</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"if"</span>: <span class="string">"Bash(rm -rf *)"</span>,
          <span class="string">"command"</span>: <span class="string">"echo 'Blocked: rm -rf' >&amp;2 &amp;&amp; exit 2"</span>
        }]
      },
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""$CLAUDE_PROJECT_DIR"/.claude/hooks/protect-files.sh"</span>
        }]
      }
    ],
    <span class="string">"PostToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
        }]
      }
    ],
    <span class="string">"SessionStart"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"compact"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"echo 'Sprint: auth refactor. Usar bun, no npm.'"</span>
        }]
      }
    ],
    <span class="string">"Notification"</span>: [
      {
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification "Claude Code" with title "Atencion"'"</span>
        }]
      }
    ]
  }
}`,receta2:`
<span class="comment">// Agente que corre tests antes de que Claude declare "listo"</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"agent"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Run 'npm test' and verify all tests pass. If any fail, report which ones. $ARGUMENTS"</span>,
        <span class="string">"timeout"</span>: 120
      }]
    }]
  }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=p({type:r,selectors:[["app-modulo-05"]],decls:726,vars:25,consts:[[1,"container"],["number","Modulo 5 de 11","title","Hooks","subtitle","Comandos automaticos en el ciclo de vida de Claude Code: PreToolUse, PostToolUse, Stop, Notification y mas"],[1,"table-wrapper"],[1,"concept-grid"],["title","stdin","description","JSON con datos del evento (tool name, input, session, etc.)"],["title","stdout","description","JSON con decisiones (allow, deny, block, additionalContext)"],["title","stderr","description","Mensajes de error"],["title","exit code","description","0 = exito, 2 = error bloqueante, otro = no-bloqueante"],[3,"code"],["type","info","title","Precedencia de decisiones"],["type","warn","title","Limite de output"],["type","good","title","Buena practica \u2014 Hooks de seguridad en el equipo"],["type","bad","title","Mala practica \u2014 Hook que permite todo sin validar"],["type","good","title","Buena practica \u2014 Formateo + linting automatico"],["type","warn","title","Cuidado con Stop hooks y loops infinitos"],["title","Hooks NO bypasean deny rules","description","Un hook que devuelve allow no sobreescribe deny rules de managed settings."],["title","PreToolUse antes de permisos","description","Un hook con deny bloquea incluso en bypassPermissions. Ideal para politicas enterprise."],["title","Output limitado","description","additionalContext max 10,000 chars. Exceso se guarda en archivo."],["title","HTTP seguro","description","Headers solo resuelven env vars listadas en allowedEnvVars."],["type","good","title","Receta 1 \u2014 Setup de equipo completo"],["type","good","title","Receta 2 \u2014 Quality gate antes de terminar"],[3,"prev","next"]],template:function(l,a){l&1&&(t(0,"div",0),s(1,"app-module-header",1),t(2,"section")(3,"h2"),e(4,"5.1 \u2014 Que son los Hooks"),n(),t(5,"p"),e(6," Los hooks son "),t(7,"strong"),e(8,"comandos que se ejecutan automaticamente"),n(),e(9," en puntos especificos del ciclo de vida de Claude Code. Proporcionan "),t(10,"strong"),e(11,"control deterministico"),n(),e(12," \u2014 garantizan que ciertas acciones siempre ocurran, en vez de depender de que el LLM elija hacerlas. "),n(),t(13,"h3"),e(14,"4 tipos de hooks"),n(),t(15,"div",2)(16,"table")(17,"thead")(18,"tr")(19,"th"),e(20,"Tipo"),n(),t(21,"th"),e(22,"Descripcion"),n(),t(23,"th"),e(24,"Caso de uso"),n()()(),t(25,"tbody")(26,"tr")(27,"td")(28,"code"),e(29,"command"),n()(),t(30,"td"),e(31,"Ejecuta un comando shell"),n(),t(32,"td"),e(33,"El mas comun: scripts, formateo, logs"),n()(),t(34,"tr")(35,"td")(36,"code"),e(37,"http"),n()(),t(38,"td"),e(39,"POST de datos a un endpoint HTTP"),n(),t(40,"td"),e(41,"Audit logging, webhooks, integraciones"),n()(),t(42,"tr")(43,"td")(44,"code"),e(45,"prompt"),n()(),t(46,"td"),e(47,"Evaluacion single-turn con LLM (Haiku por default)"),n(),t(48,"td"),e(49,"Verificar calidad, validar completitud"),n()(),t(50,"tr")(51,"td")(52,"code"),e(53,"agent"),n()(),t(54,"td"),e(55,"Subagente multi-turn con acceso a herramientas"),n(),t(56,"td"),e(57,"Correr tests, verificaciones complejas"),n()()()()(),t(58,"h3"),e(59,"Comunicacion"),n(),t(60,"div",3),s(61,"app-concept-card",4)(62,"app-concept-card",5)(63,"app-concept-card",6)(64,"app-concept-card",7),n()(),t(65,"section")(66,"h2"),e(67,"5.2 \u2014 Eventos disponibles"),n(),t(68,"h3"),e(69,"Eventos principales"),n(),t(70,"div",2)(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Evento"),n(),t(76,"th"),e(77,"Cuando se dispara"),n(),t(78,"th"),e(79,"Bloquea?"),n(),t(80,"th"),e(81,"Matcher filtra por"),n()()(),t(82,"tbody")(83,"tr")(84,"td")(85,"code"),e(86,"SessionStart"),n()(),t(87,"td"),e(88,"Sesion inicia o se reanuda"),n(),t(89,"td"),e(90,"No"),n(),t(91,"td")(92,"code"),e(93,"startup"),n(),e(94,", "),t(95,"code"),e(96,"resume"),n(),e(97,", "),t(98,"code"),e(99,"clear"),n(),e(100,", "),t(101,"code"),e(102,"compact"),n()()(),t(103,"tr")(104,"td")(105,"code"),e(106,"UserPromptSubmit"),n()(),t(107,"td"),e(108,"Usuario envia prompt"),n(),t(109,"td"),e(110,"Si"),n(),t(111,"td"),e(112,"(sin matcher)"),n()(),t(113,"tr")(114,"td")(115,"code"),e(116,"PreToolUse"),n()(),t(117,"td")(118,"strong"),e(119,"Antes"),n(),e(120," de ejecutar herramienta"),n(),t(121,"td"),e(122,"Si"),n(),t(123,"td"),e(124,"Nombre: "),t(125,"code"),e(126,"Bash"),n(),e(127,", "),t(128,"code"),e(129,"Edit|Write"),n(),e(130,", "),t(131,"code"),e(132,"mcp__.*"),n()()(),t(133,"tr")(134,"td")(135,"code"),e(136,"PermissionRequest"),n()(),t(137,"td"),e(138,"Dialogo de permiso va a aparecer"),n(),t(139,"td"),e(140,"Si"),n(),t(141,"td"),e(142,"Nombre de herramienta"),n()(),t(143,"tr")(144,"td")(145,"code"),e(146,"PostToolUse"),n()(),t(147,"td")(148,"strong"),e(149,"Despues"),n(),e(150," de ejecucion exitosa"),n(),t(151,"td"),e(152,"No"),n(),t(153,"td"),e(154,"Nombre: "),t(155,"code"),e(156,"Bash"),n(),e(157,", "),t(158,"code"),e(159,"Edit|Write"),n()()(),t(160,"tr")(161,"td")(162,"code"),e(163,"PostToolUseFailure"),n()(),t(164,"td"),e(165,"Despues de ejecucion fallida"),n(),t(166,"td"),e(167,"No"),n(),t(168,"td"),e(169,"Nombre de herramienta"),n()(),t(170,"tr")(171,"td")(172,"code"),e(173,"Stop"),n()(),t(174,"td"),e(175,"Claude termina de responder"),n(),t(176,"td"),e(177,"Si"),n(),t(178,"td"),e(179,"(sin matcher)"),n()(),t(180,"tr")(181,"td")(182,"code"),e(183,"Notification"),n()(),t(184,"td"),e(185,"Claude envia notificacion"),n(),t(186,"td"),e(187,"No"),n(),t(188,"td")(189,"code"),e(190,"permission_prompt"),n(),e(191,", "),t(192,"code"),e(193,"idle_prompt"),n()()(),t(194,"tr")(195,"td")(196,"code"),e(197,"SubagentStop"),n()(),t(198,"td"),e(199,"Subagente termino"),n(),t(200,"td"),e(201,"Si"),n(),t(202,"td"),e(203,"Tipo: "),t(204,"code"),e(205,"Explore"),n(),e(206,", "),t(207,"code"),e(208,"Plan"),n(),e(209,", custom"),n()(),t(210,"tr")(211,"td")(212,"code"),e(213,"PreCompact"),n(),e(214," / "),t(215,"code"),e(216,"PostCompact"),n()(),t(217,"td"),e(218,"Antes/despues de compactacion"),n(),t(219,"td"),e(220,"No"),n(),t(221,"td")(222,"code"),e(223,"manual"),n(),e(224,", "),t(225,"code"),e(226,"auto"),n()()(),t(227,"tr")(228,"td")(229,"code"),e(230,"CwdChanged"),n()(),t(231,"td"),e(232,"Cambio de directorio"),n(),t(233,"td"),e(234,"No"),n(),t(235,"td"),e(236,"(sin matcher)"),n()(),t(237,"tr")(238,"td")(239,"code"),e(240,"FileChanged"),n()(),t(241,"td"),e(242,"Archivo vigilado cambio en disco"),n(),t(243,"td"),e(244,"No"),n(),t(245,"td"),e(246,"Basename: "),t(247,"code"),e(248,".envrc"),n(),e(249,", "),t(250,"code"),e(251,".env"),n()()(),t(252,"tr")(253,"td")(254,"code"),e(255,"ConfigChange"),n()(),t(256,"td"),e(257,"Cambio en configuracion"),n(),t(258,"td"),e(259,"Si"),n(),t(260,"td")(261,"code"),e(262,"user_settings"),n(),e(263,", "),t(264,"code"),e(265,"project_settings"),n()()(),t(266,"tr")(267,"td")(268,"code"),e(269,"SessionEnd"),n()(),t(270,"td"),e(271,"Sesion termina"),n(),t(272,"td"),e(273,"No"),n(),t(274,"td")(275,"code"),e(276,"clear"),n(),e(277,", "),t(278,"code"),e(279,"resume"),n(),e(280,", "),t(281,"code"),e(282,"logout"),n()()()()()()(),t(283,"section")(284,"h2"),e(285,"5.3 \u2014 Configuracion"),n(),t(286,"h3"),e(287,"Donde configurar hooks"),n(),t(288,"div",2)(289,"table")(290,"thead")(291,"tr")(292,"th"),e(293,"Ubicacion"),n(),t(294,"th"),e(295,"Scope"),n(),t(296,"th"),e(297,"Compartido?"),n()()(),t(298,"tbody")(299,"tr")(300,"td")(301,"code"),e(302,"~/.claude/settings.json"),n()(),t(303,"td"),e(304,"Todos tus proyectos"),n(),t(305,"td"),e(306,"No"),n()(),t(307,"tr")(308,"td")(309,"code"),e(310,".claude/settings.json"),n()(),t(311,"td"),e(312,"Proyecto"),n(),t(313,"td"),e(314,"Si (git)"),n()(),t(315,"tr")(316,"td")(317,"code"),e(318,".claude/settings.local.json"),n()(),t(319,"td"),e(320,"Proyecto (personal)"),n(),t(321,"td"),e(322,"No"),n()(),t(323,"tr")(324,"td"),e(325,"Managed policy settings"),n(),t(326,"td"),e(327,"Organizacion"),n(),t(328,"td"),e(329,"Si (admin)"),n()()()()(),t(330,"h3"),e(331,"Formato basico"),n(),s(332,"app-code-block",8),t(333,"h3"),e(334,"Otros tipos de hooks"),n(),s(335,"app-code-block",8),t(336,"h3"),e(337,"El campo "),t(338,"code"),e(339,"if"),n(),e(340," (v2.1.85+)"),n(),t(341,"p"),e(342,"Filtra por herramienta Y argumentos, usando sintaxis de permission rules:"),n(),s(343,"app-code-block",8),n(),t(344,"section")(345,"h2"),e(346,"5.4 \u2014 Input y Output"),n(),t(347,"h3"),e(348,"Input (JSON via stdin)"),n(),t(349,"p"),e(350,"Todos los eventos reciben campos base. Los tool events agregan datos de la herramienta:"),n(),s(351,"app-code-block",8),t(352,"h3"),e(353,"Tool input por herramienta"),n(),t(354,"div",2)(355,"table")(356,"thead")(357,"tr")(358,"th"),e(359,"Herramienta"),n(),t(360,"th")(361,"code"),e(362,"tool_input"),n(),e(363," que recibe"),n()()(),t(364,"tbody")(365,"tr")(366,"td")(367,"code"),e(368,"Bash"),n()(),t(369,"td")(370,"code"),e(371,'{ "command": "npm test", "timeout": 120000 }'),n()()(),t(372,"tr")(373,"td")(374,"code"),e(375,"Write"),n()(),t(376,"td")(377,"code"),e(378,'{ "file_path": "/path", "content": "..." }'),n()()(),t(379,"tr")(380,"td")(381,"code"),e(382,"Edit"),n()(),t(383,"td")(384,"code"),e(385,'{ "file_path": "/path", "old_string": "...", "new_string": "..." }'),n()()(),t(386,"tr")(387,"td")(388,"code"),e(389,"Read"),n()(),t(390,"td")(391,"code"),e(392,'{ "file_path": "/path", "offset": 10, "limit": 50 }'),n()()(),t(393,"tr")(394,"td")(395,"code"),e(396,"Glob"),n()(),t(397,"td")(398,"code"),e(399,'{ "pattern": "**/*.ts", "path": "/dir" }'),n()()(),t(400,"tr")(401,"td")(402,"code"),e(403,"Grep"),n()(),t(404,"td")(405,"code"),e(406,'{ "pattern": "regex", "path": "/path", "glob": "*.ts" }'),n()()()()()(),t(407,"h3"),e(408,"Output (JSON via stdout)"),n(),s(409,"app-code-block",8),t(410,"h3"),e(411,"Exit codes"),n(),t(412,"div",2)(413,"table")(414,"thead")(415,"tr")(416,"th"),e(417,"Exit code"),n(),t(418,"th"),e(419,"Comportamiento"),n()()(),t(420,"tbody")(421,"tr")(422,"td")(423,"strong"),e(424,"0"),n()(),t(425,"td"),e(426,"Exito. Se parsea JSON de stdout para decisiones"),n()(),t(427,"tr")(428,"td")(429,"strong"),e(430,"2"),n()(),t(431,"td"),e(432,"Error bloqueante. "),t(433,"code"),e(434,"stderr"),n(),e(435," se envia directamente a Claude"),n()(),t(436,"tr")(437,"td")(438,"strong"),e(439,"Otro"),n()(),t(440,"td"),e(441,"Error no-bloqueante. "),t(442,"code"),e(443,"stderr"),n(),e(444," solo visible en modo verbose"),n()()()()(),t(445,"app-callout",9),e(446," Cuando multiples hooks matchean el mismo evento, la decision mas restrictiva gana: "),t(447,"strong"),e(448,"deny > defer > ask > allow"),n()(),t(449,"app-callout",10),e(450," El "),t(451,"code"),e(452,"additionalContext"),n(),e(453," inyectado al contexto esta limitado a "),t(454,"strong"),e(455,"10,000 caracteres"),n(),e(456,". Lo que exceda se guarda en archivo con un preview y ruta. "),n()(),t(457,"section")(458,"h2"),e(459,"5.5 \u2014 PreToolUse (el mas poderoso)"),n(),t(460,"p"),e(461," Intercepta "),t(462,"strong"),e(463,"antes"),n(),e(464," de que una herramienta se ejecute. Puede permitir, denegar o pedir confirmacion. Es el hook mas usado para seguridad y validacion. "),n(),t(465,"h3"),e(466,"Decisiones posibles"),n(),t(467,"div",2)(468,"table")(469,"thead")(470,"tr")(471,"th"),e(472,"Decision"),n(),t(473,"th"),e(474,"Efecto"),n()()(),t(475,"tbody")(476,"tr")(477,"td")(478,"code"),e(479,"allow"),n()(),t(480,"td"),e(481,"Salta el prompt de permiso (deny rules siguen aplicando)"),n()(),t(482,"tr")(483,"td")(484,"code"),e(485,"deny"),n()(),t(486,"td"),e(487,"Cancela la herramienta, envia razon a Claude"),n()(),t(488,"tr")(489,"td")(490,"code"),e(491,"ask"),n()(),t(492,"td"),e(493,"Muestra el prompt de permiso al usuario"),n()(),t(494,"tr")(495,"td")(496,"code"),e(497,"defer"),n()(),t(498,"td"),e(499,"Disponible en modo no-interactivo ("),t(500,"code"),e(501,"-p"),n(),e(502,")"),n()()()()(),t(503,"h3"),e(504,"Ejemplo: Bloquear comandos destructivos"),n(),s(505,"app-code-block",8),t(506,"p"),e(507,"Configuracion:"),n(),s(508,"app-code-block",8),t(509,"h3"),e(510,"Ejemplo: Proteger archivos sensibles"),n(),s(511,"app-code-block",8),t(512,"app-callout",11),s(513,"app-code-block",8),t(514,"p"),e(515,"Todo el equipo tiene las mismas protecciones. Los scripts estan en el repo junto al codigo."),n()(),t(516,"app-callout",12),s(517,"app-code-block",8),t(518,"p"),e(519," Esto bypasea todos los prompts de permiso sin ninguna validacion. Equivale a "),t(520,"code"),e(521,"bypassPermissions"),n(),e(522," pero peor porque parece seguro. "),n()()(),t(523,"section")(524,"h2"),e(525,"5.6 \u2014 PostToolUse (despues de ejecutar)"),n(),t(526,"p"),e(527," Se ejecuta "),t(528,"strong"),e(529,"despues"),n(),e(530," de que una herramienta termina exitosamente. "),t(531,"strong"),e(532,"No puede deshacer la accion"),n(),e(533," \u2014 sirve para formatear, loguear, notificar e inyectar contexto. "),n(),t(534,"h3"),e(535,"Ejemplo: Auto-format con Prettier"),n(),s(536,"app-code-block",8),t(537,"p"),e(538,"Cada vez que Claude edita o escribe un archivo, Prettier lo formatea automaticamente."),n(),t(539,"h3"),e(540,"Ejemplo: Log de todos los comandos Bash"),n(),s(541,"app-code-block",8),t(542,"app-callout",13),s(543,"app-code-block",8),t(544,"p"),e(545," Prettier formatea de inmediato, ESLint corre en background sin bloquear. El codigo siempre queda limpio. "),n()()(),t(546,"section")(547,"h2"),e(548,"5.7 \u2014 Otros hooks importantes"),n(),t(549,"h3"),e(550,"SessionStart \u2014 Re-inyectar contexto post-compactacion"),n(),s(551,"app-code-block",8),t(552,"p"),e(553,"Se ejecuta automaticamente despues de cada compactacion, re-inyectando informacion critica al contexto."),n(),t(554,"h3"),e(555,"Notification \u2014 Alerta macOS"),n(),s(556,"app-code-block",8),t(557,"h3"),e(558,"Stop \u2014 Verificar con prompt LLM antes de terminar"),n(),s(559,"app-code-block",8),t(560,"h3"),e(561,"Stop \u2014 Verificar con agente que corre tests"),n(),s(562,"app-code-block",8),t(563,"app-callout",14),e(564," Stop hooks se disparan en "),t(565,"strong"),e(566,"cada respuesta"),n(),e(567," de Claude. Para evitar loops infinitos, verifica el campo "),t(568,"code"),e(569,"stop_hook_active"),n(),e(570,": "),s(571,"app-code-block",8),n(),t(572,"h3"),e(573,"CwdChanged \u2014 Recargar entorno (direnv)"),n(),s(574,"app-code-block",8),t(575,"h3"),e(576,"HTTP hook \u2014 Audit logging para el equipo"),n(),s(577,"app-code-block",8),n(),t(578,"section")(579,"h2"),e(580,"5.8 \u2014 Seguridad y limitaciones"),n(),t(581,"h3"),e(582,"Modelo de seguridad"),n(),t(583,"div",3),s(584,"app-concept-card",15)(585,"app-concept-card",16)(586,"app-concept-card",17)(587,"app-concept-card",18),n(),t(588,"h3"),e(589,"Timeouts"),n(),t(590,"div",2)(591,"table")(592,"thead")(593,"tr")(594,"th"),e(595,"Tipo"),n(),t(596,"th"),e(597,"Default"),n(),t(598,"th"),e(599,"Configurable?"),n()()(),t(600,"tbody")(601,"tr")(602,"td"),e(603,"command"),n(),t(604,"td"),e(605,"600 segundos (10 min)"),n(),t(606,"td"),e(607,"Si, via "),t(608,"code"),e(609,"timeout"),n()()(),t(610,"tr")(611,"td"),e(612,"prompt"),n(),t(613,"td"),e(614,"30 segundos"),n(),t(615,"td"),e(616,"Si"),n()(),t(617,"tr")(618,"td"),e(619,"agent"),n(),t(620,"td"),e(621,"60 segundos, max 50 turns"),n(),t(622,"td"),e(623,"Si"),n()()()()(),t(624,"h3"),e(625,"Gotchas comunes"),n(),t(626,"div",2)(627,"table")(628,"thead")(629,"tr")(630,"th"),e(631,"Problema"),n(),t(632,"th"),e(633,"Solucion"),n()()(),t(634,"tbody")(635,"tr")(636,"td")(637,"code"),e(638,"echo"),n(),e(639," en shell profile corrompe JSON output"),n(),t(640,"td"),e(641,"Envolver en "),t(642,"code"),e(643,"if [[ $- == *i* ]]; then"),n()()(),t(644,"tr")(645,"td"),e(646,"Script no ejecutable"),n(),t(647,"td")(648,"code"),e(649,"chmod +x script.sh"),n()()(),t(650,"tr")(651,"td"),e(652,"Matchers son case-sensitive"),n(),t(653,"td")(654,"code"),e(655,"Bash"),n(),e(656," no es "),t(657,"code"),e(658,"bash"),n()()(),t(659,"tr")(660,"td")(661,"code"),e(662,"PermissionRequest"),n(),e(663," no dispara en "),t(664,"code"),e(665,"-p"),n()(),t(666,"td"),e(667,"Usar "),t(668,"code"),e(669,"PreToolUse"),n(),e(670," en modo headless"),n()(),t(671,"tr")(672,"td"),e(673,"Stop hook en cada respuesta, no solo al final"),n(),t(674,"td"),e(675,"Verificar "),t(676,"code"),e(677,"stop_hook_active"),n(),e(678," para evitar loops"),n()()()()(),t(679,"h3"),e(680,"Variables de entorno disponibles"),n(),t(681,"div",2)(682,"table")(683,"thead")(684,"tr")(685,"th"),e(686,"Variable"),n(),t(687,"th"),e(688,"Disponible en"),n()()(),t(689,"tbody")(690,"tr")(691,"td")(692,"code"),e(693,"$CLAUDE_PROJECT_DIR"),n()(),t(694,"td"),e(695,"Todos los hooks"),n()(),t(696,"tr")(697,"td")(698,"code"),e(699,"$CLAUDE_ENV_FILE"),n()(),t(700,"td"),e(701,"SessionStart, CwdChanged, FileChanged"),n()(),t(702,"tr")(703,"td")(704,"code"),e(705,"$CLAUDE_CODE_REMOTE"),n()(),t(706,"td"),e(707,"Todos ("),t(708,"code"),e(709,'"true"'),n(),e(710," en entornos web remotos)"),n()()()()(),t(711,"h3"),e(712,"Debugging hooks"),n(),s(713,"app-code-block",8),n(),t(714,"section")(715,"h2"),e(716,"Recetas practicas completas"),n(),t(717,"app-callout",19),s(718,"app-code-block",8),t(719,"p"),e(720," Bloqueo de comandos peligrosos + proteccion de archivos + auto-format + context post-compact + notificaciones. Todo en un solo archivo compartido. "),n()(),t(721,"app-callout",20),s(722,"app-code-block",8),t(723,"p"),e(724,"Claude no puede declarar que termino hasta que un agente independiente confirme que los tests pasan."),n()()(),s(725,"app-module-nav",21),n()),l&2&&(i(332),o("code",a.code.formatoBasico),i(3),o("code",a.code.otrosTipos),i(8),o("code",a.code.campoIf),i(8),o("code",a.code.inputJson),i(58),o("code",a.code.outputJson),i(96),o("code",a.code.blockDangerous),i(3),o("code",a.code.blockDangerousConfig),i(3),o("code",a.code.protectFiles),i(2),o("code",a.code.hookEquipo),i(4),o("code",a.code.autoApprove),i(19),o("code",a.code.postFormat),i(5),o("code",a.code.postLog),i(2),o("code",a.code.postFormatLint),i(8),o("code",a.code.sessionStartCompact),i(5),o("code",a.code.notificationMac),i(3),o("code",a.code.stopPrompt),i(3),o("code",a.code.stopAgent),i(9),o("code",a.code.stopLoop),i(3),o("code",a.code.cwdChanged),i(3),o("code",a.code.httpAudit),i(136),o("code",a.code.debuggingHooks),i(5),o("code",a.code.receta1),i(4),o("code",a.code.receta2),i(3),o("prev",a.prev)("next",a.next))},dependencies:[g,u,d,m,c],encapsulation:2})};export{E as Modulo05Component};

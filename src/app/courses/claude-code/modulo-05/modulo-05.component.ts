import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-05',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-05.component.html',
})
export class Modulo05Component {
  readonly prev: NavLink = {
    label: 'Modulo 4: Sistema de Memoria',
    route: '/cursos/claude-code/modulo-04',
  };

  readonly next: NavLink = {
    label: 'Modulo 6: Skills',
    route: '/cursos/claude-code/modulo-06',
  };

  readonly code = {
    formatoBasico: `
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
}`,

    otrosTipos: `
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
}`,

    campoIf: `
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
<span class="string">"if"</span>: <span class="string">"Edit(*.ts)"</span>                   <span class="comment">// Solo edits a TypeScript</span>`,

    inputJson: `
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
}`,

    outputJson: `
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
}`,

    blockDangerous: `
<span class="comment">#!/bin/bash</span>
<span class="comment"># .claude/hooks/block-dangerous.sh</span>

COMMAND=$(jq -r <span class="string">'.tool_input.command'</span> &lt; /dev/stdin)

<span class="keyword">if</span> [[ <span class="string">"$COMMAND"</span> == rm\ -rf* ]]; then
  jq -n <span class="string">'{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Comando destructivo bloqueado por politica"
    }
  }'</span>
  exit 0
<span class="keyword">fi</span>

exit 0`,

    blockDangerousConfig: `
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-dangerous.sh"</span>
      }]
    }]
  }
}`,

    protectFiles: `
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

exit 0`,

    hookEquipo: `
<span class="comment">// .claude/settings.json (compartido con el equipo)</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-dangerous.sh"</span>
        }]
      },
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/protect-files.sh"</span>
        }]
      }
    ]
  }
}`,

    autoApprove: `
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
}`,

    postFormat: `
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
}`,

    postLog: `
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
}`,

    postFormatLint: `
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
}`,

    sessionStartCompact: `
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
}`,

    notificationMac: `
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Notification"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">""</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification \"Claude necesita atencion\" with title \"Claude Code\"'"</span>
      }]
    }]
  }
}`,

    stopPrompt: `
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"prompt"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains\\"}."</span>
      }]
    }]
  }
}`,

    stopAgent: `
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
}`,

    stopLoop: `
<span class="comment">#!/bin/bash</span>
INPUT=$(cat)
<span class="keyword">if</span> [ <span class="string">"$(echo "$INPUT" | jq -r '.stop_hook_active')"</span> = <span class="string">"true"</span> ]; <span class="keyword">then</span>
  exit 0  <span class="comment"># Permitir que Claude pare (ya estamos en el hook)</span>
<span class="keyword">fi</span>
<span class="comment"># ... tu logica de verificacion ...</span>`,

    cwdChanged: `
{
  <span class="string">"hooks"</span>: {
    <span class="string">"CwdChanged"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"direnv export bash >> \"$CLAUDE_ENV_FILE\""</span>
      }]
    }]
  }
}`,

    httpAudit: `
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
}`,

    debuggingHooks: `
<span class="comment"># Ver todos los hooks configurados</span>
/hooks

<span class="comment"># Modo verbose para ver output de hooks en transcript</span>
Ctrl+O

<span class="comment"># Debug completo de ejecucion</span>
<span class="command">claude</span> <span class="flag">--debug</span>

<span class="comment"># Test manual de un script hook</span>
echo <span class="string">'{"tool_name":"Bash","tool_input":{"command":"ls"}}'</span> | ./mi-hook.sh`,

    receta1: `
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
          <span class="string">"command"</span>: <span class="string">"\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/protect-files.sh"</span>
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
          <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification \"Claude Code\" with title \"Atencion\"'"</span>
        }]
      }
    ]
  }
}`,

    receta2: `
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
}`,
  };
}

import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-07',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-07.component.html',
})
export class Modulo07Component {
  readonly prev: NavLink = {
    label: 'Modulo 6: Skills',
    route: '/cursos/claude-code/modulo-06',
  };

  readonly next: NavLink = {
    label: 'Modulo 8: MCP',
    route: '/cursos/claude-code/modulo-08',
  };

  readonly code = {
    agentsCommand: `
<span class="command">/agents</span>  <span class="comment">→ "Create new agent" → Personal/Project → "Generate with Claude"</span>

<span class="comment"># Desde CLI sin sesion interactiva:</span>
<span class="command">claude agents</span>  <span class="comment">→ lista todos los agentes agrupados por fuente</span>`,

    agentScope: `
<span class="comment"># Personal (todos los proyectos)</span>
<span class="string">~/.claude/agents/code-reviewer.md</span>

<span class="comment"># Proyecto (compartible via git)</span>
<span class="string">.claude/agents/code-reviewer.md</span>`,

    basicAgentStructure: `
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

<span class="string">Output: critical issues, warnings, suggestions (ordered by priority)</span>`,

    cliFlag: `
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
}'</span>`,

    modelResolution: `
<span class="string">1.</span> Variable de entorno <span class="keyword">CLAUDE_CODE_SUBAGENT_MODEL</span>
<span class="string">2.</span> Parametro <span class="keyword">model</span> de la invocacion especifica
<span class="string">3.</span> Campo <span class="keyword">model</span> en el frontmatter del subagente
<span class="string">4.</span> Modelo de la conversacion principal (<span class="keyword">inherit</span>)`,

    toolsAllowDeny: `
<span class="comment"># Allowlist — SOLO estas herramientas</span>
<span class="keyword">tools</span><span class="string">: Read, Grep, Glob, Bash</span>

<span class="comment"># Denylist — todo excepto estas</span>
<span class="keyword">disallowedTools</span><span class="string">: Write, Edit</span>

<span class="comment"># Si ambas estan definidas:</span>
<span class="comment"># primero se aplica disallowedTools, luego se resuelve tools contra lo que queda</span>
<span class="comment"># un tool en ambas listas queda removido</span>`,

    agentRestrictions: `
<span class="comment"># Allowlist de subagentes que puede crear</span>
<span class="keyword">tools</span><span class="string">: Agent(worker, researcher), Read, Bash</span>

<span class="comment"># Sin restriccion de subagentes</span>
<span class="keyword">tools</span><span class="string">: Agent, Read, Bash</span>

<span class="comment"># No puede crear ningun subagente (omitir Agent del tools)</span>
<span class="keyword">tools</span><span class="string">: Read, Bash</span>`,

    mcpScopedAgent: `
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

<span class="string">Use the Playwright tools to navigate, screenshot, and interact with pages.</span>`,

    disableAgents: `
<span class="comment">// settings.json</span>
{
  <span class="string">"permissions"</span>: {
    <span class="string">"deny"</span>: [<span class="string">"Agent(Explore)"</span>, <span class="string">"Agent(my-custom-agent)"</span>]
  }
}

<span class="comment"># O via CLI flag:</span>
<span class="command">claude</span> <span class="flag">--disallowedTools</span> <span class="string">"Agent(Explore)"</span>`,

    memoryAgent: `
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
<span class="string">After finishing, save what you learned to your memory.</span>`,

    hooksInFrontmatter: `
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
<span class="comment">---</span>`,

    validateReadonlyScript: `
<span class="comment">#!/bin/bash</span>
<span class="comment"># ./scripts/validate-readonly-query.sh</span>

INPUT=$(<span class="keyword">cat</span>)
COMMAND=$(<span class="command">echo</span> <span class="string">"$INPUT"</span> | <span class="command">jq</span> <span class="flag">-r</span> <span class="string">'.tool_input.command // empty'</span>)

<span class="comment"># Bloquear operaciones de escritura SQL</span>
<span class="keyword">if</span> <span class="command">echo</span> <span class="string">"$COMMAND"</span> | <span class="command">grep</span> <span class="flag">-iE</span> <span class="string">'\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE)\b'</span> &gt; <span class="string">/dev/null</span>; <span class="keyword">then</span>
  <span class="command">echo</span> <span class="string">"Blocked: Only SELECT queries are allowed"</span> <span class="flag">&gt;&amp;2</span>
  <span class="command">exit</span> <span class="string">2</span>
<span class="keyword">fi</span>

<span class="command">exit</span> <span class="string">0</span>`,

    hooksInSettings: `
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
}`,

    invokeNatural: `
<span class="string">Use the code-reviewer subagent to look at my recent changes</span>
<span class="string">Have the debugger subagent analyze this error</span>`,

    invokeMention: `
<span class="string">@"code-reviewer (agent)" review the auth module</span>
<span class="string">@"debugger (agent)" fix the failing tests in src/api/</span>`,

    invokeFlag: `
<span class="comment"># La sesion completa corre con ese system prompt</span>
<span class="command">claude</span> <span class="flag">--agent</span> <span class="string">code-reviewer</span>

<span class="comment"># Plugin subagent</span>
<span class="command">claude</span> <span class="flag">--agent</span> <span class="string">my-plugin:specialized-agent</span>`,

    invokeConfig: `
<span class="comment">// .claude/settings.json</span>
{
  <span class="string">"agent"</span>: <span class="string">"code-reviewer"</span>
}`,

    parallelResearch: `
<span class="string">Research the authentication, database, and API modules</span>
<span class="string">in parallel using separate subagents</span>`,

    chainAgents: `
<span class="string">Use the code-reviewer to find performance issues,</span>
<span class="string">then use the optimizer subagent to fix them</span>`,

    resumeAgent: `
<span class="string">Use the code-reviewer subagent to review the authentication module</span>
<span class="comment">[Subagente completa]</span>

<span class="string">Continue that code review and now analyze the authorization logic</span>
<span class="comment">[Claude reanuda el subagente con historial completo]</span>`,

    agentTeamsConfig: `
<span class="comment">// settings.json — habilitar Agent Teams</span>
{
  <span class="string">"env"</span>: {
    <span class="string">"CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS"</span>: <span class="string">"1"</span>
  }
}`,

    debuggerAgent: `
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
<span class="string">- Prevention recommendations</span>`,

    dataScientistAgent: `
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
<span class="string">- Highlight key findings and suggest next steps</span>`,
  };
}

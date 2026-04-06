import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-02',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-02.component.html',
})
export class Modulo02Component {
  readonly prev: NavLink = {
    label: 'Modulo 1: Fundamentos',
    route: '/cursos/claude-code/modulo-01',
  };

  readonly next: NavLink = {
    label: 'Modulo 3: Manejo del Contexto',
    route: '/cursos/claude-code/modulo-03',
  };

  readonly code = {
    importsAt: `
<span class="comment"># Instrucciones del Proyecto</span>

Ver <span class="keyword">@README</span> para el overview del proyecto.
Ver <span class="keyword">@package.json</span> para los comandos npm disponibles.

<span class="comment"># Git workflow</span>
Seguir las instrucciones en <span class="keyword">@docs/git-instructions.md</span>

<span class="comment"># Importar instrucciones personales desde home</span>
<span class="keyword">@~/.claude/mis-instrucciones-proyecto.md</span>`,

    agentsMd: `
@AGENTS.md

## Claude Code
Usar plan mode para cambios en \`src/billing/\`.`,

    rulesFolder: `
.claude/
  rules/
    code-style.md      <span class="comment"># Siempre se carga</span>
    testing.md          <span class="comment"># Siempre se carga</span>
    api-rules.md        <span class="comment"># Solo cuando trabaja en src/api/ (con frontmatter paths)</span>`,

    rulesConditional: `
<span class="comment">---</span>
<span class="keyword">paths</span>:
  - <span class="string">"src/api/**/*.ts"</span>
<span class="comment">---</span>

<span class="comment"># Reglas para el API</span>
- Todos los endpoints deben validar input
- Usar formato estandar de error response
- Incluir tests de integracion para cada endpoint`,

    generateClaudeMd: `
<span class="comment"># Genera un CLAUDE.md analizando tu codebase</span>
/init

<span class="comment"># Version interactiva multi-fase</span>
<span class="command">export</span> CLAUDE_CODE_NEW_INIT=true
/init`,

    claudeMdBueno: `
<span class="comment"># CLAUDE.md - Proyecto API</span>

<span class="comment">## Build y Test</span>
- Build: \`npm run build\`
- Test: \`npm test\`
- Lint: \`npm run lint\`
- Test individual: \`npm test -- --grep "nombre"\`

<span class="comment">## Convenciones</span>
- Indentacion: 2 espacios
- Nombres de archivos: kebab-case
- Exports: named exports, nunca default
- Errores API: usar \`AppError\` de \`src/lib/errors.ts\`

<span class="comment">## Arquitectura</span>
- Handlers en \`src/api/handlers/\`
- Servicios en \`src/services/\`
- Cada handler tiene su test en \`__tests__/\``,

    claudeMdMalo: `
<span class="comment"># CLAUDE.md</span>

Este es un proyecto de Node.js que usa TypeScript.
Por favor formatea el codigo correctamente y sigue
las mejores practicas. Asegurate de que el codigo
sea limpio y mantenible. Los tests son importantes.
Trata de no romper nada. El proyecto es complejo
asi que ten cuidado. Usamos una base de datos
PostgreSQL y Redis para cache. El frontend esta
en React. Tenemos muchos microservicios...

(... 500 lineas mas de texto vago ...)`,

    claudeMdExcludes: `
{
  <span class="string">"claudeMdExcludes"</span>: [
    <span class="string">"**/otro-equipo/CLAUDE.md"</span>,
    <span class="string">"/home/user/monorepo/legacy/.claude/rules/**"</span>
  ]
}`,

    settingsBueno: `
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
}`,

    settingsMalo: `
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
}`,

    settingsSchema: `
{
  <span class="string">"$schema"</span>: <span class="string">"https://json.schemastore.org/claude-code-settings.json"</span>,
  ...
}`,

    settingsAttribution: `
{
  <span class="string">"attribution"</span>: {
    <span class="string">"commit"</span>: <span class="string">"Generated with AI\\n\\nCo-Authored-By: AI &lt;ai@example.com&gt;"</span>,
    <span class="string">"pr"</span>: <span class="string">""</span>
  }
}`,

    ignoreRules: `
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
}`,

    keybindingsFormat: `
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
}`,

    keybindingsContexts: `
<span class="comment">// Contextos principales:</span>
<span class="string">"Global"</span>          <span class="comment">// Siempre activo</span>
<span class="string">"Chat"</span>            <span class="comment">// En el input de chat</span>
<span class="string">"Autocomplete"</span>    <span class="comment">// Cuando hay sugerencias</span>
<span class="string">"Confirmation"</span>    <span class="comment">// En prompts de permisos</span>
<span class="string">"HistorySearch"</span>   <span class="comment">// Buscando en historial</span>
<span class="string">"Task"</span>            <span class="comment">// En vista de tareas</span>
<span class="string">"DiffDialog"</span>      <span class="comment">// Revisando diffs</span>
<span class="string">"ModelPicker"</span>     <span class="comment">// Seleccionando modelo</span>`,

    keybindingsChords: `
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
}`,

    projectStructure: `
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
    <span class="keyword">commands/</span>              <span class="comment"># Slash commands personalizados</span>`,

    userStructure: `
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
        topic-file.md        <span class="comment"># Archivos por tema</span>`,

    enterpriseStructure: `
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
  CLAUDE.md`,
  };
}

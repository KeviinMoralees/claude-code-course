import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-01',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-01.component.html',
})
export class Modulo01Component {
  readonly next: NavLink = {
    label: 'Modulo 2: Configuracion',
    route: '/cursos/claude-code/modulo-02',
  };

  readonly code = {
    interactivo: `
<span class="comment"># Abrir el TUI</span>
<span class="command">claude</span>

<span class="comment"># Abrir con un prompt inicial</span>
<span class="command">claude</span> <span class="string">"explica la arquitectura de este proyecto"</span>

<span class="comment"># Reanudar la ultima sesion</span>
<span class="command">claude</span> <span class="flag">-c</span>

<span class="comment"># Reanudar una sesion especifica</span>
<span class="command">claude</span> <span class="flag">-r</span> <span class="string">"session-id-o-nombre"</span>`,

    headless: `
<span class="comment"># Pregunta simple</span>
<span class="command">claude</span> <span class="flag">-p</span> <span class="string">"Que hace el modulo de auth?"</span>

<span class="comment"># Con salida JSON estructurada</span>
<span class="command">claude</span> <span class="flag">-p</span> <span class="string">"lista las dependencias"</span> <span class="flag">--output-format</span> json

<span class="comment"># Limitar gasto y turnos</span>
<span class="command">claude</span> <span class="flag">-p</span> <span class="string">"refactoriza el modulo X"</span> <span class="flag">--max-turns</span> 10 <span class="flag">--max-budget-usd</span> 5

<span class="comment"># Modo bare: sin hooks, MCP, CLAUDE.md (rapido y limpio para CI)</span>
<span class="command">claude</span> <span class="flag">--bare</span> <span class="flag">-p</span> <span class="string">"resume este archivo"</span>`,

    pipe: `
<span class="comment"># Analizar logs en busca de anomalias</span>
<span class="command">tail</span> -200 app.log | <span class="command">claude</span> <span class="flag">-p</span> <span class="string">"hay anomalias aqui?"</span>

<span class="comment"># Review de seguridad sobre archivos cambiados</span>
<span class="command">git diff</span> main --name-only | <span class="command">claude</span> <span class="flag">-p</span> <span class="string">"revisa estos archivos por vulnerabilidades"</span>

<span class="comment"># Traducir strings y crear PR</span>
<span class="command">claude</span> <span class="flag">-p</span> <span class="string">"traduce los strings nuevos al frances y crea un PR"</span>`,

    buenoCI: `
<span class="comment"># En tu pipeline de CI</span>
<span class="command">claude</span> <span class="flag">--bare</span> <span class="flag">-p</span> <span class="string">"revisa este PR por problemas"</span> <span class="flag">--output-format</span> json`,

    maloCI: `
<span class="comment"># MAL: esto se cuelga en CI porque espera input</span>
<span class="command">claude</span> <span class="string">"haz el deploy"</span>

<span class="comment"># BIEN: usa -p para que sea no-interactivo</span>
<span class="command">claude</span> <span class="flag">-p</span> <span class="string">"haz el deploy"</span> <span class="flag">--allowedTools</span> <span class="string">"Bash,Read,Edit"</span>`,

    cambiarModelo: `
<span class="comment"># 1. Durante la sesion (slash command)</span>
/model opus

<span class="comment"># 2. Al iniciar Claude Code</span>
<span class="command">claude</span> <span class="flag">--model</span> opus

<span class="comment"># 3. Variable de entorno</span>
<span class="command">export</span> ANTHROPIC_MODEL=opus

<span class="comment"># 4. En settings.json</span>
{ <span class="string">"model"</span>: <span class="string">"opus"</span> }`,

    esfuerzo: `
<span class="comment"># Cambiar esfuerzo en sesion</span>
/effort high

<span class="comment"># Al iniciar</span>
<span class="command">claude</span> <span class="flag">--effort</span> high

<span class="comment"># Variable de entorno</span>
<span class="command">export</span> CLAUDE_CODE_EFFORT_LEVEL=high`,

    permisosModo: `
<span class="comment"># Cambiar modo durante sesion</span>
Shift+Tab    <span class="comment"># Cicla: default → acceptEdits → plan → auto</span>

<span class="comment"># Al iniciar</span>
<span class="command">claude</span> <span class="flag">--permission-mode</span> plan

<span class="comment"># En settings.json</span>
{ <span class="string">"permissions"</span>: { <span class="string">"defaultMode"</span>: <span class="string">"acceptEdits"</span> } }`,

    allowDeny: `
{
  <span class="string">"permissions"</span>: {
    <span class="string">"allow"</span>: [
      <span class="string">"Bash(npm run *)"</span>,        <span class="comment">// Cualquier script npm</span>
      <span class="string">"Bash(git commit *)"</span>,     <span class="comment">// Commits</span>
      <span class="string">"Read"</span>,                    <span class="comment">// Leer cualquier archivo</span>
      <span class="string">"Edit(/src/**/*.ts)"</span>      <span class="comment">// Editar solo .ts en /src</span>
    ],
    <span class="string">"deny"</span>: [
      <span class="string">"Bash(git push *)"</span>,       <span class="comment">// Nunca push automatico</span>
      <span class="string">"Read(./.env)"</span>            <span class="comment">// No leer secrets</span>
    ]
  }
}`,

    buenoDeny: `
<span class="comment">// Seguro: permite leer y editar tu codigo, bloquea push y env</span>
{
  "allow": ["Read", "Edit(/src/**)", "Bash(npm test *)"],
  "deny": ["Bash(git push *)", "Bash(rm -rf *)", "Read(.env*)"]
}`,

    maloDeny: `
<span class="comment">// PELIGROSO: en tu maquina local esto podria borrar archivos importantes</span>
<span class="command">claude</span> <span class="flag">--dangerously-skip-permissions</span> <span class="flag">-p</span> <span class="string">"limpia el proyecto"</span>`,

    sandbox: `
<span class="comment">// Configuracion de sandbox en settings.json</span>
{
  <span class="string">"sandbox"</span>: {
    <span class="string">"network"</span>: {
      <span class="string">"allowedDomains"</span>: [<span class="string">"registry.npmjs.org"</span>, <span class="string">"api.github.com"</span>],
      <span class="string">"allowLocalBinding"</span>: <span class="keyword">false</span>
    }
  }
}

<span class="comment"># Activar sandbox durante sesion</span>
/sandbox`,
  };
}

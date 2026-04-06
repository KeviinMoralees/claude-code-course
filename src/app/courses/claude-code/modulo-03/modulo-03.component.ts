import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-03',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-03.component.html',
})
export class Modulo03Component {
  readonly prev: NavLink = {
    label: 'Modulo 2: Configuracion',
    route: '/cursos/claude-code/modulo-02',
  };

  readonly next: NavLink = {
    label: 'Modulo 4: Sistema de Memoria',
    route: '/cursos/claude-code/modulo-04',
  };

  readonly code = {
    leerBien: `
<span class="comment"># BIEN: leer solo las lineas que necesitas</span>
<span class="comment"># "Lee las lineas 50 a 100 de auth.ts" (~50 lineas = ~200 tokens)</span>

<span class="comment"># BIEN: leer solo las paginas relevantes de un PDF</span>
<span class="comment"># Read con pages: "3-5" (~3 paginas)</span>`,

    leerMal: `
<span class="comment"># MAL: "lee todo el archivo package-lock.json"</span>
<span class="comment"># Puede ser 50,000+ tokens que llenan 25% del contexto de golpe</span>

<span class="comment"># MAL: "lee este PDF de 200 paginas"</span>
<span class="comment"># Falla porque el maximo es 20 paginas por request</span>`,

    mentionsBien: `
<span class="comment"># Incluir archivos especificos en tu prompt</span>
Revisa <span class="keyword">@src/auth/middleware.ts</span> y <span class="keyword">@src/auth/types.ts</span>
y dime si hay vulnerabilidades de seguridad.

<span class="comment"># Incluir una carpeta completa</span>
Analiza la arquitectura de <span class="keyword">@src/services/</span>`,

    mentionsMal: `
<span class="comment"># MAL: esto hace que Claude lea docenas de archivos buscando</span>
"Mejora el codigo del proyecto"

<span class="comment"># MAL: pipe de un log gigante</span>
cat /var/log/syslog | claude -p "que paso?"
<span class="comment"># Puede ser 100,000+ tokens de golpe</span>`,

    instruccionesBien: `
<span class="comment"># EN CLAUDE.md (sobrevive compactacion)</span>
<span class="comment"># Convenciones</span>
- Usar Bun, no npm
- Correr bun test antes de cada commit
- No usar any en TypeScript

<span class="comment"># NO en un mensaje de chat</span>
<span class="comment"># "Oye recuerda siempre usar Bun y no npm"</span>
<span class="comment"># Esto se pierde cuando el contexto se compacta</span>`,

    instruccionesMal: `
<span class="comment"># MAL: instruccion importante solo en chat</span>
Tu: "De ahora en adelante, todos los componentes deben usar
     el patron Container/Presenter"

<span class="comment"># 30 minutos despues, tras compactacion...</span>
Claude: *ya no recuerda la instruccion y vuelve a su estilo default*`,

    compactInstrucciones: `
<span class="comment"># Compactar enfocandose en cambios del API</span>
/compact focus on the API changes

<span class="comment"># Compactar preservando errores y testing</span>
/compact enfocate en los cambios de testing y los errores encontrados

<span class="comment"># Compactar preservando codigo especifico</span>
/compact Focus on code samples and API usage`,

    compactPermanente: `
<span class="comment"># En tu CLAUDE.md del proyecto</span>

<span class="keyword"># Compact instructions</span>
When you are using compact, please focus on:
- Test output and failures
- Code changes and their reasoning
- Architectural decisions made`,

    compactHook: `
<span class="comment">// En settings.json</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"SessionStart"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"compact"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"echo 'Reminder: usar Bun, no npm. Correr bun test antes de commit.'"</span>
      }]
    }]
  }
}`,

    renameClear: `
<span class="comment"># 1. Terminaste una tarea, nombra la sesion</span>
/rename refactor-auth-module

<span class="comment"># 2. Limpia el contexto para la siguiente tarea</span>
/clear

<span class="comment"># 3. Mas tarde, puedes reanudar si necesitas</span>
<span class="command">claude</span> <span class="flag">-r</span> refactor-auth-module`,

    sesionInfinita: `
<span class="comment"># MAL: usar la misma sesion para TODO durante horas</span>
Tu: "arregla el bug de login"
Tu: "ahora agrega la feature de notificaciones"
Tu: "ahora refactoriza la base de datos"
Tu: "ahora haz el deploy"
<span class="comment"># El contexto esta lleno de basura de tareas anteriores</span>
<span class="comment"># Claude responde mas lento y menos preciso</span>`,

    activar1m: `
<span class="comment"># Activar via model picker</span>
/model opus[1m]
/model sonnet[1m]

<span class="comment"># Fijar via variable de entorno</span>
<span class="command">export</span> ANTHROPIC_DEFAULT_OPUS_MODEL=<span class="string">'claude-opus-4-6[1m]'</span>

<span class="comment"># Desactivar 1M completamente</span>
<span class="command">export</span> CLAUDE_CODE_DISABLE_1M_CONTEXT=1`,

    flujoOptimo: `
<span class="comment"># 1. Empezar con contexto limpio</span>
/clear

<span class="comment"># 2. Planificar antes de implementar</span>
/plan <span class="comment"># o pedir un plan en modo plan</span>

<span class="comment"># 3. Implementar (Claude lee y edita archivos)</span>

<span class="comment"># 4. Si el contexto se llena, compactar con foco</span>
/compact enfocate en los cambios del modulo auth

<span class="comment"># 5. Verificar que esta consumiendo contexto</span>
/context

<span class="comment"># 6. Antes de cambiar de tarea</span>
/rename tarea-completada
/clear`,

    megaPrompt: `
<span class="comment"># MAL: cargar CLAUDE.md de 500 lineas + 4 MCP servers</span>
<span class="comment"># + leer 15 archivos de golpe + pedir "mejora todo"</span>

Tu: "Lee @src/ @lib/ @tests/ @docs/ @config/
     y mejora la calidad general del codigo,
     agrega tests faltantes, actualiza la documentacion
     y optimiza el rendimiento."

<span class="comment"># Resultado: contexto lleno en el primer turno,</span>
<span class="comment"># Claude no puede ni empezar a trabajar efectivamente</span>`,
  };
}

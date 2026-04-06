import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-04',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-04.component.html',
})
export class Modulo04Component {
  readonly prev: NavLink = {
    label: 'Modulo 3: Manejo del Contexto',
    route: '/cursos/claude-code/modulo-03',
  };

  readonly next: NavLink = {
    label: 'Modulo 5: Hooks',
    route: '/cursos/claude-code/modulo-05',
  };

  readonly code = {
    storagePath: `
~/.claude/projects/<span class="keyword">&lt;proyecto&gt;</span>/memory/
  <span class="keyword">MEMORY.md</span>              <span class="comment"># Indice (NO es una memoria en si)</span>
  <span class="keyword">user_profile.md</span>        <span class="comment"># Memoria individual</span>
  <span class="keyword">feedback_testing.md</span>    <span class="comment"># Memoria individual</span>
  <span class="keyword">project_migration.md</span>   <span class="comment"># Memoria individual</span>
  <span class="keyword">reference_grafana.md</span>   <span class="comment"># etc.</span>`,

    userMemory: `
<span class="comment">---</span>
<span class="keyword">name</span>: Kevin - Perfil
<span class="keyword">description</span>: Desarrollador backend senior aprendiendo React, prefiere explicaciones concisas
<span class="keyword">type</span>: user
<span class="comment">---</span>

Kevin es desarrollador backend con 5 anos de experiencia en Go.
Esta aprendiendo React y el frontend de este proyecto.
Prefiere explicaciones concisas con analogias al backend.`,

    feedbackMemory: `
<span class="comment">---</span>
<span class="keyword">name</span>: No mockear la base de datos en tests
<span class="keyword">description</span>: Tests de integracion deben usar DB real, no mocks, por incidente Q1
<span class="keyword">type</span>: feedback
<span class="comment">---</span>

Tests de integracion deben usar una base de datos real, no mocks.

<span class="keyword">**Why:**</span> Incidente en Q1 donde tests con mocks pasaron pero la
migracion de prod fallo porque el schema real era diferente.

<span class="keyword">**How to apply:**</span> En cualquier test bajo src/tests/integration/,
siempre usar testcontainers con Postgres real.`,

    feedbackSuccess: `
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
relacionados, proponer un solo PR.`,

    projectMemory: `
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
No agregar nuevos endpoints REST.`,

    referenceMemory: `
<span class="comment">---</span>
<span class="keyword">name</span>: Dashboard de latencia API
<span class="keyword">description</span>: Grafana dashboard que oncall monitorea para latencia de requests
<span class="keyword">type</span>: reference
<span class="comment">---</span>

El dashboard de latencia API esta en grafana.internal/d/api-latency.
Es lo que oncall monitorea. Revisarlo antes de tocar codigo
de request handling.`,

    memoryMdExample: `
<span class="comment"># Ejemplo de MEMORY.md bien estructurado</span>

- [Kevin - Perfil](user_profile.md) — Backend senior aprendiendo React, prefiere conciso
- [No mockear DB](feedback_testing.md) — Tests integracion con DB real por incidente Q1
- [PR bundleado](feedback_pr_style.md) — Prefiere 1 PR grande para refactors
- [Migracion GraphQL](project_migration.md) — REST a GraphQL, deadline Q3 2026
- [Dashboard latencia](reference_grafana.md) — grafana.internal/d/api-latency para oncall
- [Bugs en Linear](reference_linear.md) — Proyecto INGEST para bugs de pipeline`,

    memoryFileFormat: `
<span class="comment">---</span>
<span class="keyword">name</span>: {nombre de la memoria}
<span class="keyword">description</span>: {1 linea — se usa para decidir relevancia en futuras sesiones}
<span class="keyword">type</span>: {user | feedback | project | reference}
<span class="comment">---</span>

{contenido de la memoria}

<span class="comment"># Para feedback y project, usar esta estructura:</span>
{regla o hecho}

<span class="keyword">**Why:**</span> {motivacion, incidente o preferencia que lo origino}
<span class="keyword">**How to apply:**</span> {cuando y donde aplicar esta regla}`,

    memoryMdGood: `
<span class="comment"># Organizado por tema (semantico), no por fecha</span>

<span class="comment">## Usuario</span>
- [Perfil Kevin](user_profile.md) — Backend senior, Go, aprendiendo React

<span class="comment">## Feedback</span>
- [No mockear DB](feedback_testing.md) — DB real en tests integracion
- [PR bundleado](feedback_pr_style.md) — 1 PR grande para refactors

<span class="comment">## Proyecto</span>
- [Migracion GraphQL](project_migration.md) — REST a GraphQL, Q3 2026

<span class="comment">## Referencias</span>
- [Dashboard latencia](reference_grafana.md) — Grafana oncall
- [Bugs pipeline](reference_linear.md) — Linear proyecto INGEST`,

    memoryMdBad: `
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
<span class="comment"># y el contenido extra NO se carga al inicio</span>`,

    goodToSave: `
<span class="comment"># No-obvio, recurrente, estable:</span>
"El CI tarda 45 min porque corre E2E contra 3 browsers.
Para PRs que solo tocan backend, se puede skipear con [skip-e2e]."

<span class="comment"># Preferencia validada:</span>
"Kevin prefiere que le muestre el diff completo, no un resumen."

<span class="comment"># Contexto no derivable del codigo:</span>
"El modulo billing esta congelado por revision legal hasta Q3."`,

    notWorthSaving: `
<span class="comment"># Derivable del codigo:</span>
"El proyecto usa TypeScript con ESLint y Prettier."
<span class="comment"># Claude lo ve al leer package.json y tsconfig.json</span>

<span class="comment"># Git history:</span>
"Kevin hizo 12 PRs esta semana, 3 en el modulo auth."
<span class="comment"># git log lo dice mejor y mas actualizado</span>

<span class="comment"># Efimero:</span>
"Estamos en el paso 3 de 7 del refactor actual."
<span class="comment"># Usar Tasks para esto, no memoria</span>`,

    settingsCode: `
<span class="comment">// Desactivar auto memory</span>
{ <span class="string">"autoMemoryEnabled"</span>: <span class="keyword">false</span> }

<span class="comment">// Directorio custom de memoria</span>
{ <span class="string">"autoMemoryDirectory"</span>: <span class="string">"~/mi-memoria-custom"</span> }`,

    envVarCI: `
<span class="comment"># Desactivar completamente en CI (toma precedencia sobre todo)</span>
<span class="command">export</span> CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`,

    completeMemoryMd: `
<span class="comment">## Usuario</span>
- [Perfil Kevin](user_profile.md) — Backend senior Go, aprendiendo React

<span class="comment">## Feedback</span>
- [Testing real](feedback_testing.md) — DB real en tests, no mocks
- [Estilo PRs](feedback_pr_style.md) — PRs bundleados para refactors
- [Sin resumen final](feedback_responses.md) — No resumir al final de cada respuesta

<span class="comment">## Proyecto</span>
- [Migracion GraphQL](project_graphql.md) — REST a GraphQL, Q3 2026
- [Freeze billing](project_billing.md) — Congelado por legal hasta revision

<span class="comment">## Referencias</span>
- [Grafana oncall](reference_grafana.md) — grafana.internal/d/api-latency
- [Linear bugs](reference_linear.md) — Proyecto INGEST para pipeline`,

    feedbackTestingMd: `
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
(src/tests/unit/) los mocks estan bien.`,
  };
}

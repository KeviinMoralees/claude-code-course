import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-09',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-09.component.html',
})
export class Modulo09Component {
  readonly apiKeyRef = '${{ secrets.ANTHROPIC_API_KEY }}';

  readonly prev: NavLink = {
    label: 'Modulo 8: MCP',
    route: '/cursos/claude-code/modulo-08',
  };

  readonly next: NavLink = {
    label: 'Modulo 10: Técnicas Avanzadas',
    route: '/cursos/claude-code/modulo-10',
  };

  readonly code = {
    triggers: `
<span class="keyword">on</span>:
  <span class="string">issue_comment</span>:           <span class="comment"># comentarios en issues y PRs</span>
    types: [created]
  <span class="string">pull_request_review_comment</span>:
    types: [created]
  <span class="string">issues</span>:                   <span class="comment"># nuevo issue abierto/asignado</span>
    types: [opened, assigned]
  <span class="string">pull_request</span>:             <span class="comment"># PR abierto o actualizado</span>
    types: [opened, synchronize]
  <span class="string">schedule</span>:                 <span class="comment"># cron programado</span>
    - cron: <span class="string">"0 9 * * 1-5"</span>
  <span class="string">push</span>:                     <span class="comment"># push a rama específica</span>
    branches: [main]`,

    basicWorkflow: `
<span class="keyword">name</span>: Claude Code
<span class="keyword">on</span>:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

<span class="keyword">jobs</span>:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>`,

    reviewWorkflow: `
<span class="keyword">name</span>: Automated PR Review
<span class="keyword">on</span>:
  pull_request:
    types: [opened, synchronize]

<span class="keyword">jobs</span>:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Review this PR for code quality, security issues,
            and adherence to project standards. Post inline review comments."</span>
          claude_args: <span class="string">"--max-turns 5 --model claude-sonnet-4-6"</span>`,

    claudeArgs: `
claude_args: <span class="string">"--max-turns 10 --model claude-sonnet-4-6 --allowedTools Edit,Write,Bash"</span>

<span class="comment"># Múltiples flags con bloque multilinea</span>
claude_args: |
  --max-turns 5
  --model claude-opus-4-6
  --append-system-prompt <span class="string">"Always add unit tests for changes"</span>
  --mcp-config <span class="string">.mcp.json</span>`,

    bedrockWorkflow: `
<span class="comment"># AWS Bedrock con OIDC (sin credenciales estáticas)</span>
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: <span class="string">\${{ secrets.AWS_ROLE_TO_ASSUME }}</span>
    aws-region: us-west-2

- uses: anthropics/claude-code-action@v1
  with:
    github_token: <span class="string">\${{ steps.app-token.outputs.token }}</span>
    use_bedrock: <span class="string">"true"</span>
    claude_args: <span class="string">'--model us.anthropic.claude-sonnet-4-6 --max-turns 10'</span>`,

    atMentions: `
<span class="comment"># Referenciar archivo con rango de líneas</span>
Explain the logic in @auth.ts#5-10

<span class="comment"># Fuzzy matching — encuentra auth.js, AuthService.ts, etc.</span>
Review @auth

<span class="comment"># Directorio completo</span>
What's the structure of @src/components/

<span class="comment"># Recurso MCP</span>
Show me @github:repos/owner/repo/issues

<span class="comment"># Atajo: selecciona código y presiona Option+K para insertar referencia</span>
Check this: @UserController.ts#45-67`,

    vscodeUri: `
<span class="comment"># URI handler — abre nueva tab en VS Code</span>
open "vscode://anthropic.claude-code/open"

<span class="comment"># Con prompt pre-cargado</span>
open "vscode://anthropic.claude-code/open?prompt=review%20my%20changes"

<span class="comment"># Retomando sesión específica</span>
open "vscode://anthropic.claude-code/open?session=abc123"`,

    jetbrainsTerminal: `
<span class="comment"># Conectar Claude Code externo al IDE JetBrains activo</span>
claude
/ide

<span class="comment"># Asegurarse de iniciar Claude desde el mismo directorio que el proyecto</span>
cd /path/to/project && claude`,

    cronSyntax: `
<span class="comment"># Formato: minuto hora día-del-mes mes día-de-la-semana</span>
<span class="string">"0 9 * * *"</span>        <span class="comment"># todos los días a las 9am UTC</span>
<span class="string">"0 9 * * 1-5"</span>      <span class="comment"># lunes a viernes 9am UTC</span>
<span class="string">"0 */6 * * *"</span>      <span class="comment"># cada 6 horas</span>
<span class="string">"0 9 1 * *"</span>        <span class="comment"># primer día de cada mes 9am</span>
<span class="string">"30 14 * * 5"</span>      <span class="comment"># viernes 2:30pm UTC</span>

<span class="comment"># Nota: GitHub Actions cron usa UTC siempre</span>`,

    dailyCron: `
<span class="keyword">name</span>: Daily PR Review
<span class="keyword">on</span>:
  schedule:
    - cron: <span class="string">"0 9 * * 1-5"</span>   <span class="comment"># 9am lunes a viernes UTC</span>

<span class="keyword">jobs</span>:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Review all open PRs labeled 'needs-review'.
            Post inline comments for any issues found.
            Post a summary in the PR description when done."</span>
          claude_args: <span class="string">"--max-turns 15 --model claude-sonnet-4-6"</span>`,

    securityAudit: `
<span class="keyword">name</span>: Weekly Security Audit
<span class="keyword">on</span>:
  schedule:
    - cron: <span class="string">"0 8 * * 1"</span>    <span class="comment"># lunes 8am UTC</span>
  workflow_dispatch:              <span class="comment"># también permite ejecución manual</span>

<span class="keyword">permissions</span>:
  contents: write
  issues: write
  pull-requests: write

<span class="keyword">jobs</span>:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: <span class="string">\${{ secrets.ANTHROPIC_API_KEY }}</span>
          prompt: <span class="string">"Perform a security audit of this codebase:
            1. Check for hardcoded secrets or credentials
            2. Review authentication and authorization logic
            3. Check for common vulnerabilities (SQL injection, XSS, etc.)
            4. Review dependency versions for known CVEs
            Create a GitHub issue titled 'Weekly Security Report - [date]'
            with your findings categorized by severity (Critical/High/Medium/Low).
            If you find critical issues, label the issue as 'critical'."</span>
          claude_args: <span class="string">"--max-turns 20 --model claude-opus-4-6"</span>`,

    gitCommands: `
<span class="comment"># Claude puede hacer todo el flujo git por ti</span>
commit my changes with a descriptive message
create a pr for this feature with a detailed description
summarize the changes I've made to the auth module

<span class="comment"># Resume sesión ligada a un PR específico</span>
claude --from-pr 123

<span class="comment"># Setup GitHub App (desde dentro de Claude)</span>
/install-github-app`,

    worktrees: `
<span class="comment"># Crear worktree con nombre específico</span>
claude --worktree feature-auth
<span class="comment"># Crea .claude/worktrees/feature-auth/ con rama worktree-feature-auth</span>

<span class="comment"># Worktree con nombre auto-generado</span>
claude --worktree
<span class="comment"># Genera nombre como "bright-running-fox"</span>

<span class="comment"># Dos sesiones paralelas sin conflictos</span>
claude --worktree feature-payments   <span class="comment"># terminal 1</span>
claude --worktree bugfix-login       <span class="comment"># terminal 2</span>`,

    worktreeinclude: `
<span class="comment"># .worktreeinclude en la raíz del repo</span>
.env
.env.local
config/secrets.json
.credentials`,

    worktreeCleanup: `
<span class="comment"># Gestión manual de worktrees</span>
git worktree list
git worktree remove .claude/worktrees/feature-auth

<span class="comment"># Re-sincronizar rama base si cambió el default branch en GitHub</span>
git remote set-head origin -a`,

    resumeCommands: `
<span class="comment"># Retomar la conversación más reciente del directorio actual</span>
claude --continue

<span class="comment"># Abrir picker interactivo de conversaciones</span>
claude --resume

<span class="comment"># Retomar por nombre</span>
claude --resume auth-refactor

<span class="comment"># Nombrar sesión al iniciar</span>
claude -n auth-refactor

<span class="comment"># Retomar sesión ligada a un PR</span>
claude --from-pr 456`,
  };
}

import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-08',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-08.component.html',
})
export class Modulo08Component {
  readonly prev: NavLink = {
    label: 'Modulo 7: Subagentes',
    route: '/cursos/claude-code/modulo-07',
  };

  readonly next: NavLink = {
    label: 'Modulo 9: Integraciones',
    route: '/cursos/claude-code/modulo-09',
  };

  readonly code = {
    installHttp: `
<span class="comment"># Sintaxis basica</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">&lt;nombre&gt; &lt;url&gt;</span>

<span class="comment"># Ejemplo: Notion</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">notion https://mcp.notion.com/mcp</span>

<span class="comment"># Con header de autenticacion Bearer</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">secure-api https://api.example.com/mcp</span> \
  <span class="flag">--header</span> <span class="string">"Authorization: Bearer your-token"</span>`,

    installSse: `
<span class="comment"># El transporte SSE esta deprecado — usa HTTP cuando sea posible</span>
<span class="command">claude mcp add</span> <span class="flag">--transport sse</span> <span class="string">asana https://mcp.asana.com/sse</span>`,

    installStdio: `
<span class="comment"># El -- separa las opciones de Claude del comando del servidor MCP</span>
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span> \
  <span class="flag">--env</span> <span class="string">AIRTABLE_API_KEY=YOUR_KEY</span> \
  <span class="string">airtable</span> <span class="flag">--</span> <span class="string">npx -y airtable-mcp-server</span>

<span class="comment"># PostgreSQL read-only</span>
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span> <span class="string">db</span> <span class="flag">--</span> <span class="string">npx -y @bytebase/dbhub</span> \
  <span class="flag">--dsn</span> <span class="string">"postgresql://readonly:pass@prod.db.com:5432/analytics"</span>

<span class="comment"># Sentry via HTTP</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">sentry https://mcp.sentry.dev/mcp</span>

<span class="comment"># GitHub</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">github https://api.githubcopilot.com/mcp/</span>`,

    windowsWrapper: `
<span class="command">claude mcp add</span> <span class="flag">--transport stdio</span> <span class="string">my-server</span> <span class="flag">--</span> <span class="command">cmd /c npx</span> <span class="flag">-y</span> <span class="string">@some/package</span>`,

    managementCommands: `
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
<span class="string">MCP_TIMEOUT=10000</span> <span class="command">claude</span>  <span class="comment"># timeout de 10 segundos</span>`,

    scopeExamples: `
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">stripe</span>  <span class="flag">--scope local</span>   <span class="string">https://mcp.stripe.com</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">paypal</span>  <span class="flag">--scope project</span> <span class="string">https://mcp.paypal.com/mcp</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">hubspot</span> <span class="flag">--scope user</span>   <span class="string">https://mcp.hubspot.com/anthropic</span>`,

    mcpJsonFormat: `
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"shared-server"</span>: {
      <span class="string">"command"</span>: <span class="string">"/path/to/server"</span>,
      <span class="string">"args"</span>: [],
      <span class="string">"env"</span>: {}
    }
  }
}`,

    mcpJsonEnvVars: `
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
}`,

    oauthBasic: `
<span class="comment"># 1. Agregar el servidor</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> <span class="string">sentry https://mcp.sentry.dev/mcp</span>

<span class="comment"># 2. Autenticar</span>
<span class="command">/mcp</span>  <span class="comment">→ seleccionar servidor → "Authenticate" → login en navegador</span>`,

    oauthFixedPort: `
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> \
  <span class="flag">--callback-port 8080</span> \
  <span class="string">my-server https://mcp.example.com/mcp</span>`,

    oauthPreConfigured: `
<span class="comment"># Cuando el servidor no soporta Dynamic Client Registration</span>
<span class="command">claude mcp add</span> <span class="flag">--transport http</span> \
  <span class="flag">--client-id</span> <span class="string">your-client-id</span> <span class="flag">--client-secret --callback-port 8080</span> \
  <span class="string">my-server https://mcp.example.com/mcp</span>

<span class="comment"># Via variable de entorno (para CI/CD)</span>
<span class="string">MCP_CLIENT_SECRET=your-secret</span> <span class="command">claude mcp add</span> <span class="flag">--transport http</span> \
  <span class="flag">--client-id</span> <span class="string">your-client-id</span> <span class="flag">--client-secret --callback-port 8080</span> \
  <span class="string">my-server https://mcp.example.com/mcp</span>`,

    headersHelper: `
<span class="comment">// .mcp.json</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"internal-api"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"https://mcp.internal.example.com"</span>,
      <span class="keyword">"headersHelper"</span>: <span class="string">"/opt/bin/get-mcp-auth-headers.sh"</span>
    }
  }
}`,

    atMentions: `
<span class="comment"># Analizar un issue de GitHub</span>
<span class="string">Can you analyze @github:issue://123 and suggest a fix?</span>

<span class="comment"># Revisar documentacion</span>
<span class="string">Please review @docs:file://api/authentication</span>

<span class="comment"># Comparar recursos de dos servidores</span>
<span class="string">Compare @postgres:schema://users with @docs:file://database/user-model</span>`,

    mcpPrompts: `
<span class="comment"># Sin argumentos</span>
<span class="command">/mcp__github__list_prs</span>

<span class="comment"># Con argumentos (separados por espacio)</span>
<span class="command">/mcp__github__pr_review</span> <span class="string">456</span>
<span class="command">/mcp__jira__create_issue</span> <span class="string">"Bug in login flow"</span> <span class="string">high</span>`,

    toolSearch: `
<span class="comment"># Umbral personalizado del 5%</span>
<span class="string">ENABLE_TOOL_SEARCH=auto:5</span> <span class="command">claude</span>

<span class="comment"># Desactivar Tool Search (cargar todo upfront)</span>
<span class="string">ENABLE_TOOL_SEARCH=false</span> <span class="command">claude</span>

<span class="comment"># Deshabilitar ToolSearch como herramienta en settings.json</span>
{
  <span class="string">"permissions"</span>: { <span class="string">"deny"</span>: [<span class="string">"ToolSearch"</span>] }
}`,

    outputLimits: `
<span class="comment"># Warning cuando un tool produce mas de 10,000 tokens</span>
<span class="comment"># Limite default: 25,000 tokens</span>
<span class="comment"># Para aumentar el limite:</span>
<span class="string">MAX_MCP_OUTPUT_TOKENS=50000</span> <span class="command">claude</span>`,

    mcpServe: `
<span class="comment"># Iniciar Claude como servidor MCP stdio</span>
<span class="command">claude mcp serve</span>`,

    desktopConfig: `
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
}`,

    managedMcpJson: `
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
}`,

    allowlistDenylist: `
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
}`,

    credentialsBad: `
<span class="comment">// .mcp.json — MAL: esto va a git con el token expuesto</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"api"</span>: {
      <span class="string">"env"</span>: { <span class="string">"API_KEY"</span>: <span class="string">"sk-real-api-key-aqui"</span> }
    }
  }
}`,

    credentialsGood: `
<span class="comment">// .mcp.json — BIEN: el token viene del entorno</span>
{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"api"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"\${API_BASE_URL:-https://api.example.com}/mcp"</span>,
      <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer \${API_KEY}"</span> }
    }
  }
}`,
  };
}

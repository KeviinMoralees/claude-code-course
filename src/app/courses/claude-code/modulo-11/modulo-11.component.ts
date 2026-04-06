import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-11',
  imports: [ModuleHeaderComponent, ModuleNavComponent, CalloutComponent, CodeBlockComponent],
  templateUrl: './modulo-11.component.html',
})
export class Modulo11Component {
  readonly prev: NavLink = {
    label: 'Modulo 10: Técnicas Avanzadas',
    route: '/cursos/claude-code/modulo-10',
  };

  readonly code = {
    requestMinimo: `curl https://api.anthropic.com/v1/messages \\
  -H <span class="string">"x-api-key: $ANTHROPIC_API_KEY"</span> \\
  -H <span class="string">"anthropic-version: 2023-06-01"</span> \\
  -H <span class="string">"content-type: application/json"</span> \\
  -d <span class="string">'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Explain what a closure is in JavaScript"}
    ]
  }'</span>`,

    responseSample: `{
  <span class="string">"id"</span>: <span class="string">"msg_01XFDUDYJgAACzvnptvVoYEL"</span>,
  <span class="string">"type"</span>: <span class="string">"message"</span>,
  <span class="string">"role"</span>: <span class="string">"assistant"</span>,
  <span class="string">"content"</span>: [
    { <span class="string">"type"</span>: <span class="string">"text"</span>, <span class="string">"text"</span>: <span class="string">"A closure is..."</span> }
  ],
  <span class="string">"model"</span>: <span class="string">"claude-sonnet-4-6"</span>,
  <span class="string">"stop_reason"</span>: <span class="string">"end_turn"</span>,
  <span class="string">"usage"</span>: {
    <span class="string">"input_tokens"</span>: 25,
    <span class="string">"output_tokens"</span>: 189,
    <span class="string">"cache_read_input_tokens"</span>: 0,
    <span class="string">"cache_creation_input_tokens"</span>: 0
  }
}`,

    contentBlocks: `<span class="comment">// Texto simple</span>
{ "type": "text", "text": "Hello" }

<span class="comment">// Imagen en base64</span>
{ "type": "image", "source": { "type": "base64", "media_type": "image/jpeg", "data": "..." } }

<span class="comment">// URL de imagen</span>
{ "type": "image", "source": { "type": "url", "url": "https://example.com/img.png" } }

<span class="comment">// PDF o documento</span>
{ "type": "document", "source": { "type": "base64", "media_type": "application/pdf", "data": "..." } }

<span class="comment">// Resultado de herramienta (en mensajes user)</span>
{ "type": "tool_result", "tool_use_id": "toolu_01...", "content": "Result text" }

<span class="comment">// Pensamiento (en respuestas assistant con extended thinking)</span>
{ "type": "thinking", "thinking": "Let me reason step by step...", "signature": "..." }`,

    multiTurno: `{
  "model": "claude-sonnet-4-6",
  "max_tokens": 1024,
  "system": "You are a helpful coding assistant.",
  "messages": [
    { "role": "user", "content": "What's a closure in JavaScript?" },
    { "role": "assistant", "content": "A closure is a function that..." },
    { "role": "user", "content": "Can you show me an example?" }
  ]
}`,

    assistantPrefix: `messages: [
  { "role": "user", "content": "Pick A, B, or C: ..." },
  { "role": "assistant", "content": "The answer is (" }  <span class="comment">// Claude continúa aquí</span>
]`,

    streamingPython: `<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()

<span class="keyword">with</span> client.messages.stream(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=1024,
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Write a haiku about coding"</span>}],
) <span class="keyword">as</span> stream:
    <span class="keyword">for</span> text <span class="keyword">in</span> stream.text_stream:
        print(text, end=<span class="string">""</span>, flush=<span class="keyword">True</span>)

<span class="comment"># Obtener el mensaje completo al final</span>
message = stream.get_final_message()
print(f<span class="string">"\nTokens: {message.usage.input_tokens} in, {message.usage.output_tokens} out"</span>)`,

    streamingTs: `<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;

<span class="keyword">const</span> client = <span class="keyword">new</span> Anthropic();

<span class="keyword">const</span> stream = <span class="keyword">await</span> client.messages.stream({
  model: <span class="string">"claude-sonnet-4-6"</span>,
  max_tokens: 1024,
  messages: [{ role: <span class="string">"user"</span>, content: <span class="string">"Write a haiku about coding"</span> }],
});

<span class="keyword">for await</span> (<span class="keyword">const</span> text <span class="keyword">of</span> stream.textStream) {
  process.stdout.write(text);
}

<span class="keyword">const</span> finalMessage = <span class="keyword">await</span> stream.finalMessage();
console.log(<span class="string">\`\nTokens: \${finalMessage.usage.input_tokens} in\`</span>);`,

    serverTool: `<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model=<span class="string">"claude-opus-4-6"</span>,
    max_tokens=1024,
    tools=[{<span class="string">"type"</span>: <span class="string">"web_search_20260209"</span>, <span class="string">"name"</span>: <span class="string">"web_search"</span>}],
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"What happened in AI news today?"</span>}],
)
print(response.content)`,

    defineClientTool: `<span class="keyword">tools</span> = [
  {
    <span class="string">"name"</span>: <span class="string">"get_stock_price"</span>,
    <span class="string">"description"</span>: <span class="string">"Get current stock price for a ticker symbol"</span>,
    <span class="string">"input_schema"</span>: {
      <span class="string">"type"</span>: <span class="string">"object"</span>,
      <span class="string">"properties"</span>: {
        <span class="string">"ticker"</span>: {
          <span class="string">"type"</span>: <span class="string">"string"</span>,
          <span class="string">"description"</span>: <span class="string">"Stock ticker symbol (e.g., AAPL, MSFT)"</span>
        }
      },
      <span class="string">"required"</span>: [<span class="string">"ticker"</span>]
    }
  }
]`,

    toolChoice: `<span class="comment"># auto — Claude decide si usar alguna herramienta (default)</span>
"tool_choice": {"type": "auto"}

<span class="comment"># any — Claude DEBE usar alguna herramienta</span>
"tool_choice": {"type": "any"}

<span class="comment"># tool — Claude DEBE usar esta herramienta específica</span>
"tool_choice": {"type": "tool", "name": "get_stock_price"}

<span class="comment"># none — Claude NO puede usar herramientas</span>
"tool_choice": {"type": "none"}`,

    toolUseLoop: `<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()

<span class="keyword">def</span> get_stock_price(ticker: str) -> str:
    <span class="comment"># Tu lógica real aquí</span>
    prices = {<span class="string">"AAPL"</span>: <span class="string">"$182.50"</span>, <span class="string">"MSFT"</span>: <span class="string">"$412.30"</span>}
    <span class="keyword">return</span> prices.get(ticker, <span class="string">"Price not found"</span>)

messages = [{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"What's the price of Apple stock?"</span>}]

<span class="keyword">while True</span>:
    response = client.messages.create(
        model=<span class="string">"claude-sonnet-4-6"</span>,
        max_tokens=1024,
        tools=tools,
        messages=messages,
    )

    <span class="keyword">if</span> response.stop_reason == <span class="string">"end_turn"</span>:
        print(response.content[0].text)
        <span class="keyword">break</span>

    <span class="keyword">if</span> response.stop_reason == <span class="string">"tool_use"</span>:
        <span class="comment"># Agregar respuesta del asistente al historial</span>
        messages.append({<span class="string">"role"</span>: <span class="string">"assistant"</span>, <span class="string">"content"</span>: response.content})

        <span class="comment"># Ejecutar todas las tool calls</span>
        tool_results = []
        <span class="keyword">for</span> block <span class="keyword">in</span> response.content:
            <span class="keyword">if</span> block.type == <span class="string">"tool_use"</span>:
                result = get_stock_price(block.input[<span class="string">"ticker"</span>])
                tool_results.append({
                    <span class="string">"type"</span>: <span class="string">"tool_result"</span>,
                    <span class="string">"tool_use_id"</span>: block.id,
                    <span class="string">"content"</span>: result,
                })

        <span class="comment"># Agregar resultados y continuar</span>
        messages.append({<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: tool_results})`,

    strictToolUse: `{
  "name": "get_stock_price",
  "strict": true,    <span class="comment">// ← garantiza conformidad exacta</span>
  "description": "...",
  "input_schema": { ... }
}`,

    installation: `<span class="comment"># Python</span>
pip install anthropic

<span class="comment"># TypeScript / Node.js</span>
npm install @anthropic-ai/sdk`,

    authentication: `<span class="comment"># Python — desde variable de entorno (recomendado)</span>
<span class="keyword">import</span> anthropic
client = anthropic.Anthropic()  <span class="comment"># lee ANTHROPIC_API_KEY automáticamente</span>

<span class="comment"># Python — explícito (solo en dev)</span>
client = anthropic.Anthropic(api_key=<span class="string">"sk-ant-..."</span>)

<span class="comment"># TypeScript</span>
<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;
<span class="keyword">const</span> client = <span class="keyword">new</span> Anthropic();  <span class="comment"># lee ANTHROPIC_API_KEY</span>`,

    pythonExamples: `<span class="keyword">import</span> anthropic
client = anthropic.Anthropic()

<span class="comment"># Request básico</span>
message = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=1024,
    system=<span class="string">"You are a helpful assistant."</span>,
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Hello!"</span>}],
)
print(message.content[0].text)

<span class="comment"># Contar tokens antes de enviar</span>
token_count = client.messages.count_tokens(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Hello!"</span>}],
)
print(f<span class="string">"Input tokens: {token_count.input_tokens}"</span>)

<span class="comment"># Batch API — procesar múltiples requests a menor costo</span>
batch = client.messages.batches.create(
    requests=[
        {<span class="string">"custom_id"</span>: <span class="string">"req-1"</span>, <span class="string">"params"</span>: {
            <span class="string">"model"</span>: <span class="string">"claude-sonnet-4-6"</span>,
            <span class="string">"max_tokens"</span>: 1024,
            <span class="string">"messages"</span>: [{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Translate to Spanish: Hello"</span>}],
        }},
    ]
)
print(f<span class="string">"Batch ID: {batch.id}"</span>)`,

    typescriptExamples: `<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;
<span class="keyword">const</span> client = <span class="keyword">new</span> Anthropic();

<span class="comment">// Request básico</span>
<span class="keyword">const</span> message = <span class="keyword">await</span> client.messages.create({
  model: <span class="string">"claude-sonnet-4-6"</span>,
  max_tokens: 1024,
  system: <span class="string">"You are a helpful assistant."</span>,
  messages: [{ role: <span class="string">"user"</span>, content: <span class="string">"Hello!"</span> }],
});
console.log(message.content[0].text);

<span class="comment">// Manejo de errores tipado</span>
<span class="keyword">try</span> {
  <span class="keyword">const</span> msg = <span class="keyword">await</span> client.messages.create({ ... });
} <span class="keyword">catch</span> (err) {
  <span class="keyword">if</span> (err <span class="keyword">instanceof</span> Anthropic.APIError) {
    console.log(err.status);   <span class="comment">// 400, 401, 429, etc.</span>
    console.log(err.message);
    console.log(err.error);    <span class="comment">// error body completo</span>
  }
}

<span class="comment">// Retry automático con backoff exponencial (default: 2 reintentos)</span>
<span class="keyword">const</span> clientConRetry = <span class="keyword">new</span> Anthropic({ maxRetries: 3 });

<span class="comment">// Timeout personalizado</span>
<span class="keyword">const</span> clientConTimeout = <span class="keyword">new</span> Anthropic({ timeout: 30_000 }); <span class="comment">// 30 segundos</span>`,

    thinkingPython: `<span class="comment"># Python</span>
response = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=16000,
    thinking={<span class="string">"type"</span>: <span class="string">"enabled"</span>, <span class="string">"budget_tokens"</span>: 10000},
    messages=[{
        <span class="string">"role"</span>: <span class="string">"user"</span>,
        <span class="string">"content"</span>: <span class="string">"Are there infinite primes p where p mod 4 == 3?"</span>
    }],
)

<span class="keyword">for</span> block <span class="keyword">in</span> response.content:
    <span class="keyword">if</span> block.type == <span class="string">"thinking"</span>:
        print(f<span class="string">"Thinking: {block.thinking}"</span>)
    <span class="keyword">elif</span> block.type == <span class="string">"text"</span>:
        print(f<span class="string">"Response: {block.text}"</span>)`,

    thinkingTs: `<span class="comment">// TypeScript</span>
<span class="keyword">const</span> response = <span class="keyword">await</span> client.messages.create({
  model: <span class="string">"claude-sonnet-4-6"</span>,
  max_tokens: 16000,
  thinking: { type: <span class="string">"enabled"</span>, budget_tokens: 10000 },
  messages: [{ role: <span class="string">"user"</span>, content: <span class="string">"Analyze the time complexity of quicksort"</span> }],
});

<span class="keyword">for</span> (<span class="keyword">const</span> block <span class="keyword">of</span> response.content) {
  <span class="keyword">if</span> (block.type === <span class="string">"thinking"</span>) console.log(<span class="string">"Thinking:"</span>, block.thinking);
  <span class="keyword">if</span> (block.type === <span class="string">"text"</span>) console.log(<span class="string">"Response:"</span>, block.text);
}`,

    thinkingWithTools: `<span class="comment"># CRÍTICO: los thinking blocks deben pasarse tal cual en conversaciones multi-turno</span>
response = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=16000,
    thinking={<span class="string">"type"</span>: <span class="string">"enabled"</span>, <span class="string">"budget_tokens"</span>: 10000},
    tools=[weather_tool],
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"What's the weather in Paris?"</span>}],
)

thinking_block = next(b <span class="keyword">for</span> b <span class="keyword">in</span> response.content <span class="keyword">if</span> b.type == <span class="string">"thinking"</span>)
tool_block = next(b <span class="keyword">for</span> b <span class="keyword">in</span> response.content <span class="keyword">if</span> b.type == <span class="string">"tool_use"</span>)

continuation = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=16000,
    thinking={<span class="string">"type"</span>: <span class="string">"enabled"</span>, <span class="string">"budget_tokens"</span>: 10000},
    tools=[weather_tool],
    messages=[
        {<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"What's the weather in Paris?"</span>},
        {<span class="string">"role"</span>: <span class="string">"assistant"</span>, <span class="string">"content"</span>: [thinking_block, tool_block]},  <span class="comment"># ← ambos bloques</span>
        {<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: [{
            <span class="string">"type"</span>: <span class="string">"tool_result"</span>,
            <span class="string">"tool_use_id"</span>: tool_block.id,
            <span class="string">"content"</span>: <span class="string">"Current temperature: 18°C, partly cloudy"</span>,
        }]},
    ],
)`,

    chatbot: `<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()
conversation_history = []

<span class="keyword">def</span> chat(user_message: str) -> str:
    conversation_history.append({
        <span class="string">"role"</span>: <span class="string">"user"</span>,
        <span class="string">"content"</span>: user_message
    })

    response = client.messages.create(
        model=<span class="string">"claude-sonnet-4-6"</span>,
        max_tokens=8096,
        system=<span class="string">"You are a helpful coding assistant."</span>,
        messages=conversation_history,
    )

    assistant_message = response.content[0].text
    conversation_history.append({
        <span class="string">"role"</span>: <span class="string">"assistant"</span>,
        <span class="string">"content"</span>: assistant_message
    })

    <span class="keyword">return</span> assistant_message

<span class="comment"># Uso</span>
print(chat(<span class="string">"What is a closure in Python?"</span>))
print(chat(<span class="string">"Can you show me an example?"</span>))`,

    pipeline: `<span class="keyword">import</span> anthropic
<span class="keyword">import</span> json

client = anthropic.Anthropic()

tools = [
    {
        <span class="string">"name"</span>: <span class="string">"analyze_code"</span>,
        <span class="string">"description"</span>: <span class="string">"Analyze code for bugs and security issues"</span>,
        <span class="string">"strict"</span>: <span class="keyword">True</span>,
        <span class="string">"input_schema"</span>: {
            <span class="string">"type"</span>: <span class="string">"object"</span>,
            <span class="string">"properties"</span>: {
                <span class="string">"issues"</span>: {
                    <span class="string">"type"</span>: <span class="string">"array"</span>,
                    <span class="string">"items"</span>: {
                        <span class="string">"type"</span>: <span class="string">"object"</span>,
                        <span class="string">"properties"</span>: {
                            <span class="string">"severity"</span>: {<span class="string">"type"</span>: <span class="string">"string"</span>, <span class="string">"enum"</span>: [<span class="string">"critical"</span>, <span class="string">"high"</span>, <span class="string">"medium"</span>, <span class="string">"low"</span>]},
                            <span class="string">"line"</span>: {<span class="string">"type"</span>: <span class="string">"integer"</span>},
                            <span class="string">"description"</span>: {<span class="string">"type"</span>: <span class="string">"string"</span>},
                        },
                        <span class="string">"required"</span>: [<span class="string">"severity"</span>, <span class="string">"line"</span>, <span class="string">"description"</span>]
                    }
                }
            },
            <span class="string">"required"</span>: [<span class="string">"issues"</span>]
        }
    }
]

<span class="keyword">def</span> analyze_security(code: str) -> list:
    response = client.messages.create(
        model=<span class="string">"claude-opus-4-6"</span>,
        max_tokens=4096,
        tools=tools,
        tool_choice={<span class="string">"type"</span>: <span class="string">"tool"</span>, <span class="string">"name"</span>: <span class="string">"analyze_code"</span>},
        messages=[{
            <span class="string">"role"</span>: <span class="string">"user"</span>,
            <span class="string">"content"</span>: f<span class="string">"Analyze this code for security issues:\n\n{code}"</span>
        }],
    )
    tool_call = next(b <span class="keyword">for</span> b <span class="keyword">in</span> response.content <span class="keyword">if</span> b.type == <span class="string">"tool_use"</span>)
    <span class="keyword">return</span> tool_call.input[<span class="string">"issues"</span>]`,

    promptCaching: `<span class="comment"># Cache un system prompt o documento grande</span>
response = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=1024,
    system=[
        {<span class="string">"type"</span>: <span class="string">"text"</span>, <span class="string">"text"</span>: <span class="string">"You are an expert code reviewer."</span>},
        {
            <span class="string">"type"</span>: <span class="string">"text"</span>,
            <span class="string">"text"</span>: very_large_codebase_context,  <span class="comment"># miles de tokens</span>
            <span class="string">"cache_control"</span>: {<span class="string">"type"</span>: <span class="string">"ephemeral"</span>}  <span class="comment"># ← marcar para cache</span>
        }
    ],
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Review the auth module"</span>}],
)

<span class="comment"># Siguientes requests reutilizan el cache — 90% descuento en tokens cacheados</span>
print(f<span class="string">"Cache read: {response.usage.cache_read_input_tokens} tokens"</span>)
print(f<span class="string">"Cache created: {response.usage.cache_creation_input_tokens} tokens"</span>)`,

    batchApi: `<span class="comment"># Hasta 50% descuento en precio, procesamiento asíncrono</span>
<span class="comment"># Ideal para: clasificación masiva, generación de datos, migración de código</span>

batch = client.messages.batches.create(
    requests=[
        {
            <span class="string">"custom_id"</span>: f<span class="string">"item-{i}"</span>,
            <span class="string">"params"</span>: {
                <span class="string">"model"</span>: <span class="string">"claude-haiku-4-5-20251001"</span>,
                <span class="string">"max_tokens"</span>: 256,
                <span class="string">"messages"</span>: [{
                    <span class="string">"role"</span>: <span class="string">"user"</span>,
                    <span class="string">"content"</span>: f<span class="string">"Classify sentiment: {text}"</span>
                }],
            }
        }
        <span class="keyword">for</span> i, text <span class="keyword">in</span> enumerate(texts)
    ]
)

<span class="comment"># Verificar estado</span>
<span class="keyword">import</span> time
<span class="keyword">while True</span>:
    batch_status = client.messages.batches.retrieve(batch.id)
    <span class="keyword">if</span> batch_status.processing_status == <span class="string">"ended"</span>:
        <span class="keyword">break</span>
    time.sleep(60)

<span class="comment"># Obtener resultados</span>
<span class="keyword">for</span> result <span class="keyword">in</span> client.messages.batches.results(batch.id):
    <span class="keyword">if</span> result.result.type == <span class="string">"succeeded"</span>:
        print(f<span class="string">"{result.custom_id}: {result.result.message.content[0].text}"</span>)`,

    endpointRef: `POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: $ANTHROPIC_API_KEY
  anthropic-version: 2023-06-01
  content-type: application/json`,
  };
}

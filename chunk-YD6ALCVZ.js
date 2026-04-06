import{a as c,b as d,c as m,d as u}from"./chunk-C7DOBPJR.js";import{e as a,f as p,i,j as n,k as t,l as s,t as e}from"./chunk-HIV27VVN.js";var g=class r{prev={label:"Modulo 10: T\xE9cnicas Avanzadas",route:"/cursos/claude-code/modulo-10"};code={requestMinimo:`curl https://api.anthropic.com/v1/messages \\
  -H <span class="string">"x-api-key: $ANTHROPIC_API_KEY"</span> \\
  -H <span class="string">"anthropic-version: 2023-06-01"</span> \\
  -H <span class="string">"content-type: application/json"</span> \\
  -d <span class="string">'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Explain what a closure is in JavaScript"}
    ]
  }'</span>`,responseSample:`{
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
}`,contentBlocks:`<span class="comment">// Texto simple</span>
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
{ "type": "thinking", "thinking": "Let me reason step by step...", "signature": "..." }`,multiTurno:`{
  "model": "claude-sonnet-4-6",
  "max_tokens": 1024,
  "system": "You are a helpful coding assistant.",
  "messages": [
    { "role": "user", "content": "What's a closure in JavaScript?" },
    { "role": "assistant", "content": "A closure is a function that..." },
    { "role": "user", "content": "Can you show me an example?" }
  ]
}`,assistantPrefix:`messages: [
  { "role": "user", "content": "Pick A, B, or C: ..." },
  { "role": "assistant", "content": "The answer is (" }  <span class="comment">// Claude contin\xFAa aqu\xED</span>
]`,streamingPython:`<span class="keyword">import</span> anthropic

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
print(f<span class="string">"
Tokens: {message.usage.input_tokens} in, {message.usage.output_tokens} out"</span>)`,streamingTs:`<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;

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
console.log(<span class="string">\`
Tokens: \${finalMessage.usage.input_tokens} in\`</span>);`,serverTool:`<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model=<span class="string">"claude-opus-4-6"</span>,
    max_tokens=1024,
    tools=[{<span class="string">"type"</span>: <span class="string">"web_search_20260209"</span>, <span class="string">"name"</span>: <span class="string">"web_search"</span>}],
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"What happened in AI news today?"</span>}],
)
print(response.content)`,defineClientTool:`<span class="keyword">tools</span> = [
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
]`,toolChoice:`<span class="comment"># auto \u2014 Claude decide si usar alguna herramienta (default)</span>
"tool_choice": {"type": "auto"}

<span class="comment"># any \u2014 Claude DEBE usar alguna herramienta</span>
"tool_choice": {"type": "any"}

<span class="comment"># tool \u2014 Claude DEBE usar esta herramienta espec\xEDfica</span>
"tool_choice": {"type": "tool", "name": "get_stock_price"}

<span class="comment"># none \u2014 Claude NO puede usar herramientas</span>
"tool_choice": {"type": "none"}`,toolUseLoop:`<span class="keyword">import</span> anthropic

client = anthropic.Anthropic()

<span class="keyword">def</span> get_stock_price(ticker: str) -> str:
    <span class="comment"># Tu l\xF3gica real aqu\xED</span>
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
        messages.append({<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: tool_results})`,strictToolUse:`{
  "name": "get_stock_price",
  "strict": true,    <span class="comment">// \u2190 garantiza conformidad exacta</span>
  "description": "...",
  "input_schema": { ... }
}`,installation:`<span class="comment"># Python</span>
pip install anthropic

<span class="comment"># TypeScript / Node.js</span>
npm install @anthropic-ai/sdk`,authentication:`<span class="comment"># Python \u2014 desde variable de entorno (recomendado)</span>
<span class="keyword">import</span> anthropic
client = anthropic.Anthropic()  <span class="comment"># lee ANTHROPIC_API_KEY autom\xE1ticamente</span>

<span class="comment"># Python \u2014 expl\xEDcito (solo en dev)</span>
client = anthropic.Anthropic(api_key=<span class="string">"sk-ant-..."</span>)

<span class="comment"># TypeScript</span>
<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;
<span class="keyword">const</span> client = <span class="keyword">new</span> Anthropic();  <span class="comment"># lee ANTHROPIC_API_KEY</span>`,pythonExamples:`<span class="keyword">import</span> anthropic
client = anthropic.Anthropic()

<span class="comment"># Request b\xE1sico</span>
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

<span class="comment"># Batch API \u2014 procesar m\xFAltiples requests a menor costo</span>
batch = client.messages.batches.create(
    requests=[
        {<span class="string">"custom_id"</span>: <span class="string">"req-1"</span>, <span class="string">"params"</span>: {
            <span class="string">"model"</span>: <span class="string">"claude-sonnet-4-6"</span>,
            <span class="string">"max_tokens"</span>: 1024,
            <span class="string">"messages"</span>: [{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Translate to Spanish: Hello"</span>}],
        }},
    ]
)
print(f<span class="string">"Batch ID: {batch.id}"</span>)`,typescriptExamples:`<span class="keyword">import</span> Anthropic <span class="keyword">from</span> <span class="string">"@anthropic-ai/sdk"</span>;
<span class="keyword">const</span> client = <span class="keyword">new</span> Anthropic();

<span class="comment">// Request b\xE1sico</span>
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

<span class="comment">// Retry autom\xE1tico con backoff exponencial (default: 2 reintentos)</span>
<span class="keyword">const</span> clientConRetry = <span class="keyword">new</span> Anthropic({ maxRetries: 3 });

<span class="comment">// Timeout personalizado</span>
<span class="keyword">const</span> clientConTimeout = <span class="keyword">new</span> Anthropic({ timeout: 30_000 }); <span class="comment">// 30 segundos</span>`,thinkingPython:`<span class="comment"># Python</span>
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
        print(f<span class="string">"Response: {block.text}"</span>)`,thinkingTs:`<span class="comment">// TypeScript</span>
<span class="keyword">const</span> response = <span class="keyword">await</span> client.messages.create({
  model: <span class="string">"claude-sonnet-4-6"</span>,
  max_tokens: 16000,
  thinking: { type: <span class="string">"enabled"</span>, budget_tokens: 10000 },
  messages: [{ role: <span class="string">"user"</span>, content: <span class="string">"Analyze the time complexity of quicksort"</span> }],
});

<span class="keyword">for</span> (<span class="keyword">const</span> block <span class="keyword">of</span> response.content) {
  <span class="keyword">if</span> (block.type === <span class="string">"thinking"</span>) console.log(<span class="string">"Thinking:"</span>, block.thinking);
  <span class="keyword">if</span> (block.type === <span class="string">"text"</span>) console.log(<span class="string">"Response:"</span>, block.text);
}`,thinkingWithTools:`<span class="comment"># CR\xCDTICO: los thinking blocks deben pasarse tal cual en conversaciones multi-turno</span>
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
        {<span class="string">"role"</span>: <span class="string">"assistant"</span>, <span class="string">"content"</span>: [thinking_block, tool_block]},  <span class="comment"># \u2190 ambos bloques</span>
        {<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: [{
            <span class="string">"type"</span>: <span class="string">"tool_result"</span>,
            <span class="string">"tool_use_id"</span>: tool_block.id,
            <span class="string">"content"</span>: <span class="string">"Current temperature: 18\xB0C, partly cloudy"</span>,
        }]},
    ],
)`,chatbot:`<span class="keyword">import</span> anthropic

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
print(chat(<span class="string">"Can you show me an example?"</span>))`,pipeline:`<span class="keyword">import</span> anthropic
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
            <span class="string">"content"</span>: f<span class="string">"Analyze this code for security issues:

{code}"</span>
        }],
    )
    tool_call = next(b <span class="keyword">for</span> b <span class="keyword">in</span> response.content <span class="keyword">if</span> b.type == <span class="string">"tool_use"</span>)
    <span class="keyword">return</span> tool_call.input[<span class="string">"issues"</span>]`,promptCaching:`<span class="comment"># Cache un system prompt o documento grande</span>
response = client.messages.create(
    model=<span class="string">"claude-sonnet-4-6"</span>,
    max_tokens=1024,
    system=[
        {<span class="string">"type"</span>: <span class="string">"text"</span>, <span class="string">"text"</span>: <span class="string">"You are an expert code reviewer."</span>},
        {
            <span class="string">"type"</span>: <span class="string">"text"</span>,
            <span class="string">"text"</span>: very_large_codebase_context,  <span class="comment"># miles de tokens</span>
            <span class="string">"cache_control"</span>: {<span class="string">"type"</span>: <span class="string">"ephemeral"</span>}  <span class="comment"># \u2190 marcar para cache</span>
        }
    ],
    messages=[{<span class="string">"role"</span>: <span class="string">"user"</span>, <span class="string">"content"</span>: <span class="string">"Review the auth module"</span>}],
)

<span class="comment"># Siguientes requests reutilizan el cache \u2014 90% descuento en tokens cacheados</span>
print(f<span class="string">"Cache read: {response.usage.cache_read_input_tokens} tokens"</span>)
print(f<span class="string">"Cache created: {response.usage.cache_creation_input_tokens} tokens"</span>)`,batchApi:`<span class="comment"># Hasta 50% descuento en precio, procesamiento as\xEDncrono</span>
<span class="comment"># Ideal para: clasificaci\xF3n masiva, generaci\xF3n de datos, migraci\xF3n de c\xF3digo</span>

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
        print(f<span class="string">"{result.custom_id}: {result.result.message.content[0].text}"</span>)`,endpointRef:`POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: $ANTHROPIC_API_KEY
  anthropic-version: 2023-06-01
  content-type: application/json`};static \u0275fac=function(o){return new(o||r)};static \u0275cmp=p({type:r,selectors:[["app-modulo-11"]],decls:693,vars:25,consts:[["number","M\xF3dulo 11","title","Claude API y SDKs","subtitle","Messages API, streaming, tool use, extended thinking y construcci\xF3n de aplicaciones"],[1,"container"],["id","modelos"],[1,"table-wrapper"],["type","info","title","\u2139 IDs en otros proveedores"],["id","messages-api"],[3,"code"],["type","info","title","\u2139 Truco: assistant prefix"],["id","streaming"],["id","tool-use"],["type","good","title","\u2713 Strict tool use \u2014 garantizar conformidad de schema"],["id","sdks"],["id","extended-thinking"],["type","warn","title","\u26A0 Costos del extended thinking"],["id","aplicaciones"],["type","good","title","\u2713 Buenas pr\xE1cticas para aplicaciones"],["type","bad","title","\u2717 Anti-patrones comunes"],["id","resumen"],[3,"prev"]],template:function(o,l){o&1&&(s(0,"app-module-header",0),n(1,"div",1)(2,"section",2)(3,"h2"),e(4,"11.1 \u2014 Modelos disponibles"),t(),n(5,"p"),e(6," La familia Claude ofrece tres modelos principales, cada uno optimizado para distintos casos de uso. Todos soportan texto e im\xE1genes como input. "),t(),n(7,"div",3)(8,"table")(9,"thead")(10,"tr")(11,"th"),e(12,"Modelo"),t(),n(13,"th"),e(14,"API ID"),t(),n(15,"th"),e(16,"Context / Max output"),t(),n(17,"th"),e(18,"Precio (MTok)"),t(),n(19,"th"),e(20,"Usar cuando"),t()()(),n(21,"tbody")(22,"tr")(23,"td")(24,"strong"),e(25,"Opus 4.6"),t()(),n(26,"td")(27,"code"),e(28,"claude-opus-4-6"),t()(),n(29,"td"),e(30,"1M / 128k tokens"),t(),n(31,"td"),e(32,"$5 in / $25 out"),t(),n(33,"td"),e(34,"Agentes complejos, coding avanzado, razonamiento profundo"),t()(),n(35,"tr")(36,"td")(37,"strong"),e(38,"Sonnet 4.6"),t()(),n(39,"td")(40,"code"),e(41,"claude-sonnet-4-6"),t()(),n(42,"td"),e(43,"1M / 64k tokens"),t(),n(44,"td"),e(45,"$3 in / $15 out"),t(),n(46,"td"),e(47,"Balance velocidad/inteligencia \u2014 uso general en producci\xF3n"),t()(),n(48,"tr")(49,"td")(50,"strong"),e(51,"Haiku 4.5"),t()(),n(52,"td")(53,"code"),e(54,"claude-haiku-4-5-20251001"),t()(),n(55,"td"),e(56,"200k / 64k tokens"),t(),n(57,"td"),e(58,"$1 in / $5 out"),t(),n(59,"td"),e(60,"Tareas simples, clasificaci\xF3n, extracci\xF3n r\xE1pida, bajo costo"),t()()()()(),n(61,"app-callout",4)(62,"p")(63,"strong"),e(64,"AWS Bedrock"),t(),e(65,": "),n(66,"code"),e(67,"anthropic.claude-opus-4-6-v1"),t(),e(68,", "),n(69,"code"),e(70,"anthropic.claude-sonnet-4-6"),t(),s(71,"br"),n(72,"strong"),e(73,"Google Vertex AI"),t(),e(74,": "),n(75,"code"),e(76,"claude-opus-4-6"),t(),e(77,", "),n(78,"code"),e(79,"claude-sonnet-4-6"),t(),s(80,"br"),e(81," Los modelos con fecha de snapshot (ej: "),n(82,"code"),e(83,"20250514"),t(),e(84,") son inmutables \u2014 no cambian entre plataformas ni con el tiempo. "),t()()(),n(85,"section",5)(86,"h2"),e(87,"11.2 \u2014 Messages API"),t(),n(88,"p"),e(89," El endpoint central de la API de Claude. Soporta conversaciones multi-turno, contenido mixto (texto, im\xE1genes, documentos), tool use y streaming. "),t(),n(90,"h3"),e(91,"Request m\xEDnimo"),t(),s(92,"app-code-block",6),n(93,"h3"),e(94,"Par\xE1metros principales"),t(),n(95,"div",3)(96,"table")(97,"thead")(98,"tr")(99,"th"),e(100,"Par\xE1metro"),t(),n(101,"th"),e(102,"Tipo"),t(),n(103,"th"),e(104,"Req"),t(),n(105,"th"),e(106,"Descripci\xF3n"),t()()(),n(107,"tbody")(108,"tr")(109,"td")(110,"code"),e(111,"model"),t()(),n(112,"td"),e(113,"string"),t(),n(114,"td"),e(115,"\u2713"),t(),n(116,"td"),e(117,"ID del modelo a usar"),t()(),n(118,"tr")(119,"td")(120,"code"),e(121,"messages"),t()(),n(122,"td"),e(123,"array"),t(),n(124,"td"),e(125,"\u2713"),t(),n(126,"td"),e(127," Array de objetos "),n(128,"code"),e(129,"{role, content}"),t(),e(130," \u2014 roles: "),n(131,"code"),e(132,"user"),t(),e(133," / "),n(134,"code"),e(135,"assistant"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"max_tokens"),t()(),n(140,"td"),e(141,"number"),t(),n(142,"td"),e(143,"\u2713"),t(),n(144,"td"),e(145,"M\xE1ximo de tokens a generar. L\xEDmite var\xEDa por modelo."),t()(),n(146,"tr")(147,"td")(148,"code"),e(149,"system"),t()(),n(150,"td"),e(151,"string/array"),t(),n(152,"td"),e(153,"-"),t(),n(154,"td"),e(155,' System prompt. Usar el par\xE1metro top-level, no como mensaje con role "system". '),t()(),n(156,"tr")(157,"td")(158,"code"),e(159,"tools"),t()(),n(160,"td"),e(161,"array"),t(),n(162,"td"),e(163,"-"),t(),n(164,"td"),e(165,"Definiciones de herramientas disponibles para Claude"),t()(),n(166,"tr")(167,"td")(168,"code"),e(169,"stream"),t()(),n(170,"td"),e(171,"boolean"),t(),n(172,"td"),e(173,"-"),t(),n(174,"td"),e(175,"Habilitar streaming SSE (default: false)"),t()(),n(176,"tr")(177,"td")(178,"code"),e(179,"temperature"),t()(),n(180,"td"),e(181,"number"),t(),n(182,"td"),e(183,"-"),t(),n(184,"td"),e(185,"Aleatoriedad 0.0\u20131.0 (default: 1.0)"),t()(),n(186,"tr")(187,"td")(188,"code"),e(189,"thinking"),t()(),n(190,"td"),e(191,"object"),t(),n(192,"td"),e(193,"-"),t(),n(194,"td"),e(195," Extended thinking: "),n(196,"code"),e(197,'{"type": "enabled", "budget_tokens": N}'),t()()(),n(198,"tr")(199,"td")(200,"code"),e(201,"stop_sequences"),t()(),n(202,"td"),e(203,"array"),t(),n(204,"td"),e(205,"-"),t(),n(206,"td"),e(207,"Secuencias que detienen la generaci\xF3n"),t()()()()(),n(208,"h3"),e(209,"Respuesta"),t(),s(210,"app-code-block",6),n(211,"h3"),e(212,"Stop reasons"),t(),n(213,"div",3)(214,"table")(215,"thead")(216,"tr")(217,"th"),e(218,"Valor"),t(),n(219,"th"),e(220,"Significado"),t()()(),n(221,"tbody")(222,"tr")(223,"td")(224,"code"),e(225,"end_turn"),t()(),n(226,"td"),e(227,"El modelo termin\xF3 naturalmente su respuesta"),t()(),n(228,"tr")(229,"td")(230,"code"),e(231,"max_tokens"),t()(),n(232,"td"),e(233,"Se alcanz\xF3 el l\xEDmite de "),n(234,"code"),e(235,"max_tokens"),t()()(),n(236,"tr")(237,"td")(238,"code"),e(239,"stop_sequence"),t()(),n(240,"td"),e(241,"Se encontr\xF3 una secuencia de stop personalizada"),t()(),n(242,"tr")(243,"td")(244,"code"),e(245,"tool_use"),t()(),n(246,"td"),e(247,"El modelo solicita ejecutar una herramienta"),t()()()()(),n(248,"h3"),e(249,"Content blocks"),t(),s(250,"app-code-block",6),n(251,"h3"),e(252,"Conversaci\xF3n multi-turno"),t(),s(253,"app-code-block",6),n(254,"app-callout",7)(255,"p"),e(256," Puedes pre-llenar la respuesta del asistente para forzar un formato espec\xEDfico. El modelo contin\xFAa desde donde termin\xF3 el assistant: "),t(),s(257,"app-code-block",6),t()(),n(258,"section",8)(259,"h2"),e(260,"11.3 \u2014 Streaming"),t(),n(261,"p"),e(262," Con "),n(263,"code"),e(264,"stream: true"),t(),e(265,", la API env\xEDa eventos Server-Sent Events (SSE) en tiempo real. Ideal para UIs que muestran la respuesta mientras se genera. "),t(),n(266,"h3"),e(267,"Eventos de streaming"),t(),n(268,"div",3)(269,"table")(270,"thead")(271,"tr")(272,"th"),e(273,"Evento"),t(),n(274,"th"),e(275,"Cu\xE1ndo ocurre"),t(),n(276,"th"),e(277,"Contiene"),t()()(),n(278,"tbody")(279,"tr")(280,"td")(281,"code"),e(282,"message_start"),t()(),n(283,"td"),e(284,"Inicio de respuesta"),t(),n(285,"td"),e(286,"ID, modelo, usage inicial"),t()(),n(287,"tr")(288,"td")(289,"code"),e(290,"content_block_start"),t()(),n(291,"td"),e(292,"Nuevo bloque de contenido"),t(),n(293,"td"),e(294,"Tipo del bloque (text, thinking, tool_use)"),t()(),n(295,"tr")(296,"td")(297,"code"),e(298,"content_block_delta"),t()(),n(299,"td"),e(300,"Fragmento incremental"),t(),n(301,"td")(302,"code"),e(303,"text_delta"),t(),e(304,", "),n(305,"code"),e(306,"thinking_delta"),t(),e(307,", "),n(308,"code"),e(309,"input_json_delta"),t()()(),n(310,"tr")(311,"td")(312,"code"),e(313,"content_block_stop"),t()(),n(314,"td"),e(315,"Bloque completo"),t(),n(316,"td"),e(317,"\u2014"),t()(),n(318,"tr")(319,"td")(320,"code"),e(321,"message_delta"),t()(),n(322,"td"),e(323,"Metadata final"),t(),n(324,"td")(325,"code"),e(326,"stop_reason"),t(),e(327,", usage final"),t()(),n(328,"tr")(329,"td")(330,"code"),e(331,"message_stop"),t()(),n(332,"td"),e(333,"Stream terminado"),t(),n(334,"td"),e(335,"\u2014"),t()()()()(),n(336,"h3"),e(337,"Streaming con Python SDK"),t(),s(338,"app-code-block",6),n(339,"h3"),e(340,"Streaming con TypeScript SDK"),t(),s(341,"app-code-block",6),t(),n(342,"section",9)(343,"h2"),e(344,"11.4 \u2014 Tool Use (Function Calling)"),t(),n(345,"p"),e(346," Claude puede llamar a herramientas cuando lo necesite para responder. Existen dos tipos: "),n(347,"strong"),e(348,"client tools"),t(),e(349," (t\xFA las ejecutas) y "),n(350,"strong"),e(351,"server tools"),t(),e(352," (Anthropic las ejecuta). "),t(),n(353,"h3"),e(354,"Client tools vs Server tools"),t(),n(355,"div",3)(356,"table")(357,"thead")(358,"tr")(359,"th"),e(360,"Tipo"),t(),n(361,"th"),e(362,"Qui\xE9n ejecuta"),t(),n(363,"th"),e(364,"Flujo"),t(),n(365,"th"),e(366,"Ejemplos"),t()()(),n(367,"tbody")(368,"tr")(369,"td")(370,"strong"),e(371,"Client tools"),t()(),n(372,"td"),e(373,"Tu aplicaci\xF3n"),t(),n(374,"td"),e(375," Claude responde con "),n(376,"code"),e(377,"tool_use"),t(),e(378," \u2192 t\xFA ejecutas \u2192 env\xEDas "),n(379,"code"),e(380,"tool_result"),t()(),n(381,"td"),e(382,"APIs propias, base de datos, l\xF3gica interna"),t()(),n(383,"tr")(384,"td")(385,"strong"),e(386,"Server tools"),t()(),n(387,"td"),e(388,"Anthropic"),t(),n(389,"td"),e(390,"Claude llama y recibe resultado directamente"),t(),n(391,"td")(392,"code"),e(393,"web_search"),t(),e(394,", "),n(395,"code"),e(396,"code_execution"),t(),e(397,", "),n(398,"code"),e(399,"web_fetch"),t()()()()()(),n(400,"h3"),e(401,"Server tools disponibles"),t(),n(402,"div",3)(403,"table")(404,"thead")(405,"tr")(406,"th"),e(407,"Tool"),t(),n(408,"th"),e(409,"Tipo"),t(),n(410,"th"),e(411,"Descripci\xF3n"),t()()(),n(412,"tbody")(413,"tr")(414,"td")(415,"code"),e(416,"web_search"),t()(),n(417,"td")(418,"code"),e(419,"web_search_20260209"),t()(),n(420,"td"),e(421,"B\xFAsqueda web en tiempo real"),t()(),n(422,"tr")(423,"td")(424,"code"),e(425,"web_fetch"),t()(),n(426,"td")(427,"code"),e(428,"web_fetch_20260309"),t()(),n(429,"td"),e(430,"Obtener y extraer contenido de URLs"),t()(),n(431,"tr")(432,"td")(433,"code"),e(434,"code_execution"),t()(),n(435,"td")(436,"code"),e(437,"code_execution_20260120"),t()(),n(438,"td"),e(439,"Ejecutar Python con estado REPL persistente"),t()(),n(440,"tr")(441,"td")(442,"code"),e(443,"bash"),t()(),n(444,"td")(445,"code"),e(446,"bash_20250124"),t()(),n(447,"td"),e(448,"Ejecutar comandos bash"),t()(),n(449,"tr")(450,"td")(451,"code"),e(452,"memory"),t()(),n(453,"td")(454,"code"),e(455,"memory_20250818"),t()(),n(456,"td"),e(457,"Memoria persistente entre requests"),t()()()()(),n(458,"h3"),e(459,"Server tool \u2014 uso simple"),t(),s(460,"app-code-block",6),n(461,"h3"),e(462,"Definir un client tool"),t(),s(463,"app-code-block",6),n(464,"h3"),e(465,"Tool choice"),t(),s(466,"app-code-block",6),n(467,"h3"),e(468,"Loop completo de client tool use"),t(),s(469,"app-code-block",6),n(470,"app-callout",10)(471,"p"),e(472," Agregar "),n(473,"code"),e(474,'"strict": true'),t(),e(475," a la definici\xF3n del tool hace que Claude siempre retorne inputs que coincidan exactamente con tu schema JSON. Recomendado en producci\xF3n para evitar errores de parsing. "),t(),s(476,"app-code-block",6),t()(),n(477,"section",11)(478,"h2"),e(479,"11.5 \u2014 SDKs \u2014 Python y TypeScript"),t(),n(480,"h3"),e(481,"Instalaci\xF3n"),t(),s(482,"app-code-block",6),n(483,"h3"),e(484,"Autenticaci\xF3n"),t(),s(485,"app-code-block",6),n(486,"h3"),e(487,"Python SDK \u2014 ejemplos clave"),t(),s(488,"app-code-block",6),n(489,"h3"),e(490,"TypeScript SDK \u2014 ejemplos clave"),t(),s(491,"app-code-block",6),t(),n(492,"section",12)(493,"h2"),e(494,"11.6 \u2014 Extended Thinking"),t(),n(495,"p"),e(496," El extended thinking permite que Claude razone paso a paso antes de responder, con visibilidad del proceso de razonamiento interno. Ideal para problemas complejos. "),t(),n(497,"h3"),e(498,"Cu\xE1ndo usar extended thinking"),t(),n(499,"ul")(500,"li"),e(501,"Matem\xE1ticas complejas y l\xF3gica formal"),t(),n(502,"li"),e(503,"Decisiones arquitect\xF3nicas con m\xFAltiples trade-offs"),t(),n(504,"li"),e(505,"Debugging de problemas dif\xEDciles y no obvios"),t(),n(506,"li"),e(507,"An\xE1lisis multi-paso con inferencias encadenadas"),t()(),n(508,"h3"),e(509,"Habilitar extended thinking"),t(),s(510,"app-code-block",6)(511,"app-code-block",6),n(512,"h3"),e(513,"Par\xE1metros del thinking"),t(),n(514,"div",3)(515,"table")(516,"thead")(517,"tr")(518,"th"),e(519,"Par\xE1metro"),t(),n(520,"th"),e(521,"Descripci\xF3n"),t()()(),n(522,"tbody")(523,"tr")(524,"td")(525,"code"),e(526,"budget_tokens"),t()(),n(527,"td"),e(528," Tokens m\xE1ximos para razonamiento interno. M\xEDnimo: 1024. Debe ser menor que "),n(529,"code"),e(530,"max_tokens"),t(),e(531,". Encima de 32k hay rendimientos decrecientes. "),t()(),n(532,"tr")(533,"td")(534,"code"),e(535,'display: "summarized"'),t()(),n(536,"td"),e(537,"Default. Muestra un resumen del pensamiento en la respuesta."),t()(),n(538,"tr")(539,"td")(540,"code"),e(541,'display: "omitted"'),t()(),n(542,"td"),e(543," No incluye el thinking en la respuesta \u2014 menor latencia para apps que no lo muestran. Se cobra igual. "),t()()()()(),n(544,"app-callout",13)(545,"p"),e(546," Se cobran los tokens de "),n(547,"strong"),e(548,"thinking completo"),t(),e(549,", no los del resumen visible. El campo "),n(550,"code"),e(551,"usage.output_tokens"),t(),e(552," puede no coincidir con el texto visible en la respuesta. Para Opus 4.6 y Sonnet 4.6, el razonamiento adaptativo ya est\xE1 incluido \u2014 usar "),n(553,"code"),e(554,"budget_tokens"),t(),e(555," solo en modelos m\xE1s antiguos. "),t()(),n(556,"h3"),e(557,"Thinking con tool use \u2014 preservar thinking blocks"),t(),s(558,"app-code-block",6),t(),n(559,"section",14)(560,"h2"),e(561,"11.7 \u2014 Construir Aplicaciones"),t(),n(562,"h3"),e(563,"Chatbot con historial de conversaci\xF3n"),t(),s(564,"app-code-block",6),n(565,"h3"),e(566,"Pipeline de procesamiento con herramientas"),t(),s(567,"app-code-block",6),n(568,"h3"),e(569,"Prompt caching para reducir costos"),t(),s(570,"app-code-block",6),n(571,"h3"),e(572,"Batch API para procesamiento masivo"),t(),s(573,"app-code-block",6),n(574,"app-callout",15)(575,"ul")(576,"li"),e(577," Usar el SDK en lugar de llamadas HTTP directas \u2014 maneja retry autom\xE1tico con backoff exponencial "),t(),n(578,"li"),e(579," Siempre especificar "),n(580,"code"),e(581,"max_tokens"),t(),e(582," seg\xFAn el output esperado \u2014 evita cargos inesperados "),t(),n(583,"li"),e(584," Usar "),n(585,"code"),e(586,"cache_control"),t(),e(587," para system prompts y documentos que se reusan entre requests "),t(),n(588,"li"),e(589," Para outputs estructurados, usar tool use con "),n(590,"code"),e(591,"strict: true"),t(),e(592," en lugar de pedir JSON en el prompt "),t(),n(593,"li"),e(594,"Batch API para tareas no urgentes de m\xE1s de 100 requests \u2014 hasta 50% de ahorro"),t(),n(595,"li"),e(596,"Manejar rate limits (429) con retry \u2014 el SDK lo hace autom\xE1ticamente"),t()()(),n(597,"app-callout",16)(598,"ul")(599,"li"),e(600,"Hardcodear la API key en el c\xF3digo \u2014 usar variables de entorno o secrets managers"),t(),n(601,"li"),e(602," No manejar "),n(603,"code"),e(604,'stop_reason: "max_tokens"'),t(),e(605," \u2014 la respuesta puede estar truncada "),t(),n(606,"li"),e(607," Pedir JSON en el prompt en lugar de usar tool use \u2014 m\xE1s fr\xE1gil e impredecible "),t(),n(608,"li"),e(609,"Enviar el historial completo sin l\xEDmite \u2014 el contexto crece indefinidamente"),t(),n(610,"li"),e(611,"Usar Opus para tareas simples \u2014 Haiku o Sonnet son 5x\u201315x m\xE1s baratos"),t(),n(612,"li"),e(613,"No usar prompt caching en aplicaciones con system prompts repetitivos"),t()()()(),n(614,"section",17)(615,"h2"),e(616,"11.8 \u2014 Referencia r\xE1pida"),t(),n(617,"h3"),e(618,"Endpoint y autenticaci\xF3n"),t(),s(619,"app-code-block",6),n(620,"h3"),e(621,"Cheatsheet de decisiones"),t(),n(622,"div",3)(623,"table")(624,"thead")(625,"tr")(626,"th"),e(627,"Necesito..."),t(),n(628,"th"),e(629,"Usar"),t()()(),n(630,"tbody")(631,"tr")(632,"td"),e(633,"Respuesta en tiempo real en UI"),t(),n(634,"td")(635,"code"),e(636,"stream: true"),t(),e(637," + SSE"),t()(),n(638,"tr")(639,"td"),e(640,"Output siempre en JSON con schema fijo"),t(),n(641,"td"),e(642,"Tool use con "),n(643,"code"),e(644,"strict: true"),t(),e(645," + "),n(646,"code"),e(647,'tool_choice: "tool"'),t()()(),n(648,"tr")(649,"td"),e(650,"Razonamiento paso a paso visible"),t(),n(651,"td")(652,"code"),e(653,'thinking: {type: "enabled", budget_tokens: N}'),t()()(),n(654,"tr")(655,"td"),e(656,"B\xFAsqueda web sin c\xF3digo extra"),t(),n(657,"td"),e(658,"Server tool "),n(659,"code"),e(660,"web_search_20260209"),t()()(),n(661,"tr")(662,"td"),e(663,"Procesar 1000+ requests con descuento"),t(),n(664,"td"),e(665,"Batch API ("),n(666,"code"),e(667,"/v1/messages/batches"),t(),e(668,")"),t()(),n(669,"tr")(670,"td"),e(671,"Reusar contexto largo entre requests"),t(),n(672,"td")(673,"code"),e(674,'cache_control: {"type": "ephemeral"}'),t()()(),n(675,"tr")(676,"td"),e(677,"An\xE1lisis de PDFs o im\xE1genes"),t(),n(678,"td"),e(679,"Content blocks "),n(680,"code"),e(681,"document"),t(),e(682," o "),n(683,"code"),e(684,"image"),t()()(),n(685,"tr")(686,"td"),e(687,"Pipeline as\xEDncrono con callbacks"),t(),n(688,"td"),e(689,"Webhooks de Batch API o polling de "),n(690,"code"),e(691,"batches.retrieve()"),t()()()()()()(),s(692,"app-module-nav",18),t()),o&2&&(a(92),i("code",l.code.requestMinimo),a(118),i("code",l.code.responseSample),a(40),i("code",l.code.contentBlocks),a(3),i("code",l.code.multiTurno),a(4),i("code",l.code.assistantPrefix),a(81),i("code",l.code.streamingPython),a(3),i("code",l.code.streamingTs),a(119),i("code",l.code.serverTool),a(3),i("code",l.code.defineClientTool),a(3),i("code",l.code.toolChoice),a(3),i("code",l.code.toolUseLoop),a(7),i("code",l.code.strictToolUse),a(6),i("code",l.code.installation),a(3),i("code",l.code.authentication),a(3),i("code",l.code.pythonExamples),a(3),i("code",l.code.typescriptExamples),a(19),i("code",l.code.thinkingPython),a(),i("code",l.code.thinkingTs),a(47),i("code",l.code.thinkingWithTools),a(6),i("code",l.code.chatbot),a(3),i("code",l.code.pipeline),a(3),i("code",l.code.promptCaching),a(3),i("code",l.code.batchApi),a(46),i("code",l.code.endpointRef),a(73),i("prev",l.prev))},dependencies:[m,u,c,d],encapsulation:2})};export{g as Modulo11Component};

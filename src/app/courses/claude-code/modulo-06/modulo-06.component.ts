import { Component } from '@angular/core';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { ConceptCardComponent } from '../../../shared/components/concept-card/concept-card.component';
import { ModuleHeaderComponent } from '../../../shared/components/module-header/module-header.component';
import { ModuleNavComponent, NavLink } from '../../../shared/components/module-nav/module-nav.component';

@Component({
  selector: 'app-modulo-06',
  imports: [
    ModuleHeaderComponent,
    ModuleNavComponent,
    CalloutComponent,
    ConceptCardComponent,
    CodeBlockComponent,
  ],
  templateUrl: './modulo-06.component.html',
})
export class Modulo06Component {
  readonly prev: NavLink = {
    label: 'Modulo 5: Hooks',
    route: '/cursos/claude-code/modulo-05',
  };

  readonly next: NavLink = {
    label: 'Modulo 7: Subagentes',
    route: '/cursos/claude-code/modulo-07',
  };

  readonly code = {
    dirStructure: `
<span class="string">~/.claude/skills/</span>
<span class="comment">└── mi-skill/</span>
<span class="comment">    ├── SKILL.md          ← Punto de entrada (obligatorio)</span>
<span class="comment">    ├── GUIDE.md          ← Guia adicional (opcional)</span>
<span class="comment">    ├── examples.md       ← Ejemplos concretos (opcional)</span>
<span class="comment">    ├── reference.md      ← Referencia detallada (opcional)</span>
<span class="comment">    └── scripts/</span>
<span class="comment">        ├── validate.py   ← Script ejecutable</span>
<span class="comment">        └── process.sh    ← Script ejecutable</span>`,

    skillMdAnatomy: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: explain-code</span>
<span class="keyword">description</span><span class="string">: Explains code with diagrams and analogies. Use when explaining</span>
<span class="string">  how code works, teaching about a codebase, or when the user asks</span>
<span class="string">  "how does this work?"</span>
<span class="comment">---</span>

<span class="keyword">## When explaining code, always include:</span>

<span class="string">1. **An analogy**: Compare the code to something from everyday life</span>
<span class="string">2. **A diagram**: Use ASCII art to show flow or relationships</span>
<span class="string">3. **Step-by-step walkthrough**: What happens at each stage</span>
<span class="string">4. **A gotcha**: A common mistake or misconception</span>

<span class="comment">Keep explanations conversational. For complex concepts, use multiple analogies.</span>`,

    frontmatterFull: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: deploy</span>                   <span class="comment"># max 64 chars, solo lowercase/numeros/guiones</span>
<span class="keyword">description</span><span class="string">: "Deploy to prod"</span>  <span class="comment"># max 1024 chars, tercera persona, sin XML</span>
<span class="keyword">argument-hint</span><span class="string">: "[env]"</span>         <span class="comment"># hint en autocompletado</span>

<span class="keyword">disable-model-invocation</span><span class="string">: true</span>  <span class="comment"># solo TU lo invocas, Claude no</span>
<span class="keyword">user-invocable</span><span class="string">: false</span>          <span class="comment"># solo Claude lo usa, no aparece en /menu</span>

<span class="keyword">context</span><span class="string">: fork</span>                  <span class="comment"># ejecuta en subagente aislado</span>
<span class="keyword">agent</span><span class="string">: Explore</span>                 <span class="comment"># tipo de subagente (Explore, Plan, general-purpose)</span>

<span class="keyword">allowed-tools</span><span class="string">: Read, Grep, Bash(git *)</span>  <span class="comment"># limitar herramientas disponibles</span>
<span class="keyword">model</span><span class="string">: claude-opus-4-6</span>        <span class="comment"># modelo especifico para esta skill</span>
<span class="keyword">effort</span><span class="string">: high</span>                   <span class="comment"># low | medium | high | max</span>
<span class="keyword">paths</span><span class="string">: "src/**/*.ts"</span>          <span class="comment"># activar solo para archivos que coincidan</span>
<span class="keyword">shell</span><span class="string">: bash</span>                    <span class="comment"># shell para bloques !&#96;command&#96; (bash o powershell)</span>
<span class="comment">---</span>`,

    argSimple: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: fix-issue</span>
<span class="keyword">description</span><span class="string">: Fixes a GitHub issue given its number</span>
<span class="keyword">disable-model-invocation</span><span class="string">: true</span>
<span class="keyword">argument-hint</span><span class="string">: "[issue-number]"</span>
<span class="comment">---</span>

<span class="string">Fix GitHub issue $ARGUMENTS following our coding standards.</span>

<span class="string">1. Read the issue description with &#96;gh issue view $ARGUMENTS&#96;</span>
<span class="string">2. Understand the requirements</span>
<span class="string">3. Implement the fix</span>
<span class="string">4. Write or update tests</span>
<span class="string">5. Create a commit with co-author attribution</span>`,

    argPositional: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: migrate-component</span>
<span class="keyword">description</span><span class="string">: Migrates a UI component from one framework to another</span>
<span class="keyword">argument-hint</span><span class="string">: "[component] [from-framework] [to-framework]"</span>
<span class="comment">---</span>

<span class="string">Migrate the $0 component from $1 to $2.</span>
<span class="string">Preserve all existing behavior and tests.</span>
<span class="string">Update imports and dependencies accordingly.</span>`,

    dynamicContext: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: pr-summary</span>
<span class="keyword">description</span><span class="string">: Summarizes changes in the current pull request</span>
<span class="keyword">context</span><span class="string">: fork</span>
<span class="keyword">agent</span><span class="string">: Explore</span>
<span class="keyword">allowed-tools</span><span class="string">: Bash(gh *)</span>
<span class="comment">---</span>

<span class="keyword">## Pull request context</span>
<span class="string">- Diff: </span><span class="command">!&#96;gh pr diff&#96;</span>
<span class="string">- Comments: </span><span class="command">!&#96;gh pr view --comments&#96;</span>
<span class="string">- Files changed: </span><span class="command">!&#96;gh pr diff --name-only&#96;</span>
<span class="string">- Current branch: </span><span class="command">!&#96;git branch --show-current&#96;</span>

<span class="keyword">## Your task</span>
<span class="string">Write a clear, concise PR summary covering:</span>
<span class="string">1. What was changed and why</span>
<span class="string">2. Key technical decisions</span>
<span class="string">3. Testing approach</span>`,

    contextFork: `
<span class="comment">---</span>
<span class="keyword">name</span><span class="string">: deep-research</span>
<span class="keyword">description</span><span class="string">: Researches a topic thoroughly across the codebase</span>
<span class="keyword">context</span><span class="string">: fork</span>
<span class="keyword">agent</span><span class="string">: Explore</span>
<span class="comment">---</span>

<span class="string">Research $ARGUMENTS thoroughly:</span>

<span class="string">1. Find relevant files using Glob and Grep</span>
<span class="string">2. Read and analyze the code</span>
<span class="string">3. Identify patterns, dependencies, edge cases</span>
<span class="string">4. Summarize findings with specific file:line references</span>`,

    goodConcise: `
<span class="keyword">## Extract PDF text</span>

<span class="string">Use pdfplumber for text extraction:</span>

<span class="keyword">&#96;&#96;&#96;python</span>
<span class="keyword">import</span> <span class="string">pdfplumber</span>

<span class="keyword">with</span> pdfplumber.open(<span class="string">"file.pdf"</span>) <span class="keyword">as</span> pdf:
    text = pdf.pages[0].extract_text()
<span class="keyword">&#96;&#96;&#96;</span>`,

    badVerbose: `
<span class="keyword">## Extract PDF text</span>

<span class="comment">PDF (Portable Document Format) files are a common file format that contains</span>
<span class="comment">text, images, and other content. To extract text from a PDF, you'll need to</span>
<span class="comment">use a library. There are many libraries available for PDF processing, but</span>
<span class="comment">pdfplumber is recommended because it's easy to use and handles most cases well.</span>
<span class="comment">First, you'll need to install it using pip. Then you can use the code below...</span>`,

    goodDescription: `
<span class="keyword">description</span><span class="string">: Extract text and tables from PDF files, fill forms, merge documents.</span>
<span class="string">  Use when working with PDF files or when the user mentions PDFs, forms,</span>
<span class="string">  or document extraction.</span>`,

    badDescription: `
<span class="keyword">description</span><span class="string">: Helps with documents</span>`,

    goodProgressiveDisclosure: `
<span class="comment">## Quick start</span>
<span class="string">Run &#96;analyze_form.py&#96; to inspect a PDF form.</span>

<span class="comment">## Additional resources</span>
<span class="string">- For form filling, see [FORMS.md](FORMS.md)</span>
<span class="string">- For API reference, see [reference.md](reference.md)</span>`,

    feedbackLoop: `
<span class="comment">## Workflow con verificacion</span>

<span class="string">Task Progress:</span>
<span class="string">- [ ] Step 1: Analyze the form (run analyze_form.py)</span>
<span class="string">- [ ] Step 2: Create field mapping (edit fields.json)</span>
<span class="string">- [ ] Step 3: Validate mapping (run validate_fields.py)</span>
<span class="string">- [ ] Step 4: Fill the form (run fill_form.py)</span>
<span class="string">- [ ] Step 5: Verify output (run verify_output.py)</span>`,

    goodScriptErrors: `
<span class="keyword">def</span> <span class="command">process_file</span>(path):
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="command">open</span>(path) <span class="keyword">as</span> f:
            <span class="keyword">return</span> f.read()
    <span class="keyword">except</span> FileNotFoundError:
        <span class="command">print</span>(<span class="string">f"File {path} not found, creating default"</span>)
        <span class="keyword">with</span> <span class="command">open</span>(path, <span class="string">"w"</span>) <span class="keyword">as</span> f:
            f.write(<span class="string">""</span>)
        <span class="keyword">return</span> <span class="string">""</span>
    <span class="keyword">except</span> PermissionError:
        <span class="command">print</span>(<span class="string">f"Cannot access {path}, using default"</span>)
        <span class="keyword">return</span> <span class="string">""</span>`,

    badScriptErrors: `
<span class="keyword">def</span> <span class="command">process_file</span>(path):
    <span class="keyword">with</span> <span class="command">open</span>(path) <span class="keyword">as</span> f:    <span class="comment"># Si el archivo no existe, explota</span>
        <span class="keyword">return</span> f.read()       <span class="comment"># y Claude tiene que improvisar</span>`,

    antiPatternOptions: `
<span class="comment"># MAL</span>
<span class="string">You can use pypdf, or pdfplumber, or PyMuPDF, or pdf2image, or...</span>

<span class="comment"># BIEN</span>
<span class="string">Use pdfplumber for text extraction.</span>
<span class="string">For scanned PDFs requiring OCR, use pdf2image with pytesseract instead.</span>`,

    antiPatternPaths: `
<span class="comment"># MAL</span>
<span class="string">scripts\helper.py</span>

<span class="comment"># BIEN</span>
<span class="string">scripts/helper.py</span>`,

    antiPatternDates: `
<span class="comment"># MAL — quedara desactualizado</span>
<span class="string">As of March 2025, the API supports...</span>
<span class="string">In version 3.2.1, use the following...</span>

<span class="comment"># BIEN — atemporal</span>
<span class="string">Use the latest stable version from npm.</span>
<span class="string">Check the CHANGELOG.md for version-specific notes.</span>`,

    antiPatternMagicConst: `
<span class="comment"># MAL</span>
REQUEST_TIMEOUT = <span class="string">30</span>
MAX_RETRIES = <span class="string">3</span>

<span class="comment"># BIEN</span>
<span class="comment"># HTTP requests typically complete within 30 seconds</span>
REQUEST_TIMEOUT = <span class="string">30</span>

<span class="comment"># Three retries balances reliability vs speed</span>
MAX_RETRIES = <span class="string">3</span>`,
  };
}

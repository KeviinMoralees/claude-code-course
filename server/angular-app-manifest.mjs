
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/claude-code-course/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/claude-code-course/cursos/claude-code/modulo-01",
    "route": "/claude-code-course"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FNLQK4LJ.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-01"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GYZCS63F.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-02"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AQOITTLY.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-03"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TOMWGNOO.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-04"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L3COJKCV.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-05"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PI4TZ2I5.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-06"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7TOS62YP.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-07"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N7GJNQOV.js",
      "chunk-LCHIYWU5.js"
    ],
    "route": "/claude-code-course/cursos/claude-code/modulo-08"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11803, hash: 'b46bc747c5e94a1e71363f07c0ff385f8b8ce4e4d3b2030d7ae3e2cdf753516a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '97ef1af05416511681d4bcca72cb0b31956014d31797a32e64c60aeffb271ac6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-01/index.html': {size: 42520, hash: '8f424ea6d538f12689c90f6863cbce1dcb047dd05b32d5b85b3663df7cc1bfca', text: () => import('./assets-chunks/cursos_claude-code_modulo-01_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-06/index.html': {size: 55213, hash: 'cefd1cd2280e32af43aba2cafb8c6ddcfa11d940851a3d92491a62f749b6c8df', text: () => import('./assets-chunks/cursos_claude-code_modulo-06_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-07/index.html': {size: 55977, hash: '976194d60f8211a67999cf088caae55310a7df0efef931629fe92b45c7b0c6f9', text: () => import('./assets-chunks/cursos_claude-code_modulo-07_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-02/index.html': {size: 51331, hash: '1c93eb02bf2ed3ec1ee9600a83e3e36629a7c6acd2d97a5cd1d2564bac0966c4', text: () => import('./assets-chunks/cursos_claude-code_modulo-02_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-03/index.html': {size: 46768, hash: 'e0a996beadf8d2af3d7fcfbf9eb27953cc699f5ff0910eb44783ec91acd696bd', text: () => import('./assets-chunks/cursos_claude-code_modulo-03_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-08/index.html': {size: 49912, hash: 'e7c40a37317392ed0fea21dc0311269d005f55c7ad40cccede217144cfee3813', text: () => import('./assets-chunks/cursos_claude-code_modulo-08_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-04/index.html': {size: 48875, hash: 'e81342bcdcf5945d431d76c3f5633fd1fe5ea005308d150d53ec3513fb8501f9', text: () => import('./assets-chunks/cursos_claude-code_modulo-04_index_html.mjs').then(m => m.default)},
    'cursos/claude-code/modulo-05/index.html': {size: 54339, hash: 'cb0342720aca5f9ae2b876d4d332690800b2de71dbe250d26c63e4ad8c47e566', text: () => import('./assets-chunks/cursos_claude-code_modulo-05_index_html.mjs').then(m => m.default)},
    'styles-4GI5JKFD.css': {size: 19832, hash: 'sLSavi1PEqE', text: () => import('./assets-chunks/styles-4GI5JKFD_css.mjs').then(m => m.default)}
  },
};

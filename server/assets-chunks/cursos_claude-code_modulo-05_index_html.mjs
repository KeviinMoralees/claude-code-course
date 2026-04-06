export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>ClaudeCodeCourse</title>
  <base href="/claude-code-course/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:JetBrains Mono;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}:root{--bg-primary: #0f1117;--bg-secondary: #1a1d2e;--bg-card: #222539;--bg-code: #161829;--text-primary: #e4e6f0;--text-secondary: #9ca3bf;--text-muted: #6b7394;--accent: #c084fc;--accent-light: #dbb6fc;--accent-dark: #7c3aed;--green: #4ade80;--green-bg: #0d2818;--green-border: #166534;--red: #f87171;--red-bg: #2a0f0f;--red-border: #991b1b;--blue: #60a5fa;--blue-bg: #0f1a2e;--blue-border: #1e40af;--yellow: #fbbf24;--yellow-bg: #2a2210;--yellow-border: #92400e;--border: #2d3154;--border-light: #3d4270}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;background:var(--bg-primary);color:var(--text-primary);line-height:1.7;font-size:16px}.container{max-width:900px;margin:0 auto;padding:2rem 1.5rem 4rem}h2{font-size:1.5rem;font-weight:700;color:var(--accent-light);margin-bottom:1rem;padding-bottom:.5rem;border-bottom:2px solid var(--border)}h3{font-size:1.15rem;font-weight:600;color:var(--text-primary);margin:1.5rem 0 .75rem}p{margin-bottom:1rem;color:var(--text-secondary)}strong{color:var(--text-primary);font-weight:600}section{margin-bottom:3rem}code{font-family:JetBrains Mono,Fira Code,Consolas,monospace}p code{background:var(--bg-code);color:var(--accent);padding:.15rem .45rem;border-radius:4px;font-size:.88rem;border:1px solid var(--border)}pre{background:var(--bg-code);border:1px solid var(--border);border-radius:10px;padding:1.25rem 1.5rem;overflow-x:auto;margin:1rem 0 1.5rem;font-size:.88rem;line-height:1.6}pre code{color:var(--text-primary);background:none;padding:0}.keyword{color:#c084fc}.string{color:#4ade80}.comment{color:#6b7394;font-style:italic}.flag{color:#60a5fa}.command{color:#fbbf24}.table-wrapper{overflow-x:auto;margin:1rem 0 1.5rem;border-radius:10px;border:1px solid var(--border)}table{width:100%;border-collapse:collapse;font-size:.92rem}thead th{background:var(--bg-card);color:var(--accent-light);font-weight:600;text-align:left;padding:.85rem 1rem;border-bottom:2px solid var(--accent-dark);white-space:nowrap}tbody td{padding:.75rem 1rem;border-bottom:1px solid var(--border);color:var(--text-secondary);vertical-align:top}tbody td code{background:var(--bg-code);color:var(--accent);padding:.15rem .45rem;border-radius:4px;font-size:.85rem}tbody tr:last-child td{border-bottom:none}tbody tr:hover{background:#c084fc0a}.callout{border-radius:10px;padding:1.25rem 1.5rem;margin:1.5rem 0;border-left:4px solid}.callout pre{margin-top:.75rem;background:#0000004d;border-color:#ffffff1a}.callout-title{font-weight:700;font-size:.9rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem;display:flex;align-items:center;gap:.5rem}.callout-good{background:var(--green-bg);border-color:var(--green)}.callout-good .callout-title{color:var(--green)}.callout-good p{color:#a7f3d0}.callout-bad{background:var(--red-bg);border-color:var(--red)}.callout-bad .callout-title{color:var(--red)}.callout-bad p{color:#fca5a5}.callout-info{background:var(--blue-bg);border-color:var(--blue)}.callout-info .callout-title{color:var(--blue)}.callout-warn{background:var(--yellow-bg);border-color:var(--yellow)}.callout-warn .callout-title{color:var(--yellow)}.concept-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin:1.5rem 0}.concept-card{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1.25rem;transition:border-color .2s}.concept-card:hover{border-color:var(--accent-dark)}.concept-card h4{color:var(--accent);font-size:.95rem;margin-bottom:.5rem}.concept-card p{font-size:.9rem;color:var(--text-secondary);margin:0}.module-header{text-align:center;padding:3rem 0 2rem;border-bottom:1px solid var(--border);margin-bottom:3rem}.module-header h1{font-size:2.2rem;font-weight:800;color:var(--text-primary);margin-bottom:.5rem}.module-header p{color:var(--text-secondary);font-size:1.05rem}.module-number{display:inline-block;background:linear-gradient(135deg,var(--accent-dark),var(--accent));color:#fff;font-size:.85rem;font-weight:700;padding:.3rem 1rem;border-radius:20px;letter-spacing:.05em;text-transform:uppercase;margin-bottom:1rem}.nav-footer{display:flex;justify-content:space-between;align-items:center;margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)}.nav-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:var(--bg-card);color:var(--accent);text-decoration:none;border-radius:8px;border:1px solid var(--border);font-weight:600;font-size:.92rem;transition:all .2s}.nav-btn:hover{background:var(--accent-dark);color:#fff;border-color:var(--accent-dark)}@media(max-width:640px){.container{padding:1rem}.module-header h1{font-size:1.6rem}h2{font-size:1.25rem}pre{padding:1rem;font-size:.82rem}.concept-grid{grid-template-columns:1fr}}
</style><link rel="stylesheet" href="styles-4GI5JKFD.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-4GI5JKFD.css"></noscript></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="21.2.7" ngh="3" ng-server-context="ssg"><router-outlet></router-outlet><app-modulo-05 ngh="2"><div class="container"><app-module-header number="Modulo 5 de 11" title="Hooks" subtitle="Comandos automaticos en el ciclo de vida de Claude Code: PreToolUse, PostToolUse, Stop, Notification y mas" ngh="0"><header class="module-header"><span class="module-number">Modulo Modulo 5 de 11</span><h1>Hooks</h1><p>Comandos automaticos en el ciclo de vida de Claude Code: PreToolUse, PostToolUse, Stop, Notification y mas</p></header></app-module-header><section><h2>5.1 — Que son los Hooks</h2><p> Los hooks son <strong>comandos que se ejecutan automaticamente</strong> en puntos especificos del ciclo de vida de Claude Code. Proporcionan <strong>control deterministico</strong> — garantizan que ciertas acciones siempre ocurran, en vez de depender de que el LLM elija hacerlas. </p><h3>4 tipos de hooks</h3><div class="table-wrapper"><table><thead><tr><th>Tipo</th><th>Descripcion</th><th>Caso de uso</th></tr></thead><tbody><tr><td><code>command</code></td><td>Ejecuta un comando shell</td><td>El mas comun: scripts, formateo, logs</td></tr><tr><td><code>http</code></td><td>POST de datos a un endpoint HTTP</td><td>Audit logging, webhooks, integraciones</td></tr><tr><td><code>prompt</code></td><td>Evaluacion single-turn con LLM (Haiku por default)</td><td>Verificar calidad, validar completitud</td></tr><tr><td><code>agent</code></td><td>Subagente multi-turn con acceso a herramientas</td><td>Correr tests, verificaciones complejas</td></tr></tbody></table></div><h3>Comunicacion</h3><div class="concept-grid"><app-concept-card title="stdin" description="JSON con datos del evento (tool name, input, session, etc.)" ngh="0"><div class="concept-card"><h4>stdin</h4><p>JSON con datos del evento (tool name, input, session, etc.)</p></div></app-concept-card><app-concept-card title="stdout" description="JSON con decisiones (allow, deny, block, additionalContext)" ngh="0"><div class="concept-card"><h4>stdout</h4><p>JSON con decisiones (allow, deny, block, additionalContext)</p></div></app-concept-card><app-concept-card title="stderr" description="Mensajes de error" ngh="0"><div class="concept-card"><h4>stderr</h4><p>Mensajes de error</p></div></app-concept-card><app-concept-card title="exit code" description="0 = exito, 2 = error bloqueante, otro = no-bloqueante" ngh="0"><div class="concept-card"><h4>exit code</h4><p>0 = exito, 2 = error bloqueante, otro = no-bloqueante</p></div></app-concept-card></div></section><section><h2>5.2 — Eventos disponibles</h2><h3>Eventos principales</h3><div class="table-wrapper"><table><thead><tr><th>Evento</th><th>Cuando se dispara</th><th>Bloquea?</th><th>Matcher filtra por</th></tr></thead><tbody><tr><td><code>SessionStart</code></td><td>Sesion inicia o se reanuda</td><td>No</td><td><code>startup</code>, <code>resume</code>, <code>clear</code>, <code>compact</code></td></tr><tr><td><code>UserPromptSubmit</code></td><td>Usuario envia prompt</td><td>Si</td><td>(sin matcher)</td></tr><tr><td><code>PreToolUse</code></td><td><strong>Antes</strong> de ejecutar herramienta</td><td>Si</td><td>Nombre: <code>Bash</code>, <code>Edit|Write</code>, <code>mcp__.*</code></td></tr><tr><td><code>PermissionRequest</code></td><td>Dialogo de permiso va a aparecer</td><td>Si</td><td>Nombre de herramienta</td></tr><tr><td><code>PostToolUse</code></td><td><strong>Despues</strong> de ejecucion exitosa</td><td>No</td><td>Nombre: <code>Bash</code>, <code>Edit|Write</code></td></tr><tr><td><code>PostToolUseFailure</code></td><td>Despues de ejecucion fallida</td><td>No</td><td>Nombre de herramienta</td></tr><tr><td><code>Stop</code></td><td>Claude termina de responder</td><td>Si</td><td>(sin matcher)</td></tr><tr><td><code>Notification</code></td><td>Claude envia notificacion</td><td>No</td><td><code>permission_prompt</code>, <code>idle_prompt</code></td></tr><tr><td><code>SubagentStop</code></td><td>Subagente termino</td><td>Si</td><td>Tipo: <code>Explore</code>, <code>Plan</code>, custom</td></tr><tr><td><code>PreCompact</code> / <code>PostCompact</code></td><td>Antes/despues de compactacion</td><td>No</td><td><code>manual</code>, <code>auto</code></td></tr><tr><td><code>CwdChanged</code></td><td>Cambio de directorio</td><td>No</td><td>(sin matcher)</td></tr><tr><td><code>FileChanged</code></td><td>Archivo vigilado cambio en disco</td><td>No</td><td>Basename: <code>.envrc</code>, <code>.env</code></td></tr><tr><td><code>ConfigChange</code></td><td>Cambio en configuracion</td><td>Si</td><td><code>user_settings</code>, <code>project_settings</code></td></tr><tr><td><code>SessionEnd</code></td><td>Sesion termina</td><td>No</td><td><code>clear</code>, <code>resume</code>, <code>logout</code></td></tr></tbody></table></div></section><section><h2>5.3 — Configuracion</h2><h3>Donde configurar hooks</h3><div class="table-wrapper"><table><thead><tr><th>Ubicacion</th><th>Scope</th><th>Compartido?</th></tr></thead><tbody><tr><td><code>~/.claude/settings.json</code></td><td>Todos tus proyectos</td><td>No</td></tr><tr><td><code>.claude/settings.json</code></td><td>Proyecto</td><td>Si (git)</td></tr><tr><td><code>.claude/settings.local.json</code></td><td>Proyecto (personal)</td><td>No</td></tr><tr><td>Managed policy settings</td><td>Organizacion</td><td>Si (admin)</td></tr></tbody></table></div><h3>Formato basico</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"NombreEvento"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"patron_regex"</span>,       <span class="comment">// Filtra que dispara el hook</span>
        <span class="string">"hooks"</span>: [
          {
            <span class="string">"type"</span>: <span class="string">"command"</span>,             <span class="comment">// command | http | prompt | agent</span>
            <span class="string">"command"</span>: <span class="string">"ruta/al/script.sh"</span>, <span class="comment">// El comando a ejecutar</span>
            <span class="string">"timeout"</span>: 600,                   <span class="comment">// Timeout en segundos (default 600)</span>
            <span class="string">"async"</span>: <span class="keyword">false</span>,                   <span class="comment">// Fire-and-forget?</span>
            <span class="string">"if"</span>: <span class="string">"Bash(git *)"</span>              <span class="comment">// Filtro adicional (v2.1.85+)</span>
          }
        ]
      }
    ]
  }
}</code></pre></app-code-block><h3>Otros tipos de hooks</h3><app-code-block ngh="0"><pre><code><span class="comment">// HTTP hook</span>
{
  <span class="string">"type"</span>: <span class="string">"http"</span>,
  <span class="string">"url"</span>: <span class="string">"http://localhost:8080/hooks/pre-tool-use"</span>,
  <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer \$MY_TOKEN"</span> },
  <span class="string">"allowedEnvVars"</span>: [<span class="string">"MY_TOKEN"</span>]
}

<span class="comment">// Prompt hook (LLM single-turn, Haiku por default)</span>
{
  <span class="string">"type"</span>: <span class="string">"prompt"</span>,
  <span class="string">"prompt"</span>: <span class="string">"Evaluate if this change is safe..."</span>,
  <span class="string">"model"</span>: <span class="string">"claude-opus-4-1"</span>
}

<span class="comment">// Agent hook (subagente multi-turn con herramientas)</span>
{
  <span class="string">"type"</span>: <span class="string">"agent"</span>,
  <span class="string">"prompt"</span>: <span class="string">"Run tests and verify they pass. \$ARGUMENTS"</span>,
  <span class="string">"timeout"</span>: 120
}</code></pre></app-code-block><h3>El campo <code>if</code> (v2.1.85+)</h3><p>Filtra por herramienta Y argumentos, usando sintaxis de permission rules:</p><app-code-block ngh="0"><pre><code>{
  <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
  <span class="string">"hooks"</span>: [{
    <span class="string">"type"</span>: <span class="string">"command"</span>,
    <span class="string">"if"</span>: <span class="string">"Bash(git *)"</span>,              <span class="comment">// Solo comandos git</span>
    <span class="string">"command"</span>: <span class="string">"./check-git-policy.sh"</span>
  }]
}

<span class="comment">// Otros ejemplos de if:</span>
<span class="string">"if"</span>: <span class="string">"Bash(rm *)"</span>                   <span class="comment">// Solo comandos rm</span>
<span class="string">"if"</span>: <span class="string">"Edit(*.ts)"</span>                   <span class="comment">// Solo edits a TypeScript</span></code></pre></app-code-block></section><section><h2>5.4 — Input y Output</h2><h3>Input (JSON via stdin)</h3><p>Todos los eventos reciben campos base. Los tool events agregan datos de la herramienta:</p><app-code-block ngh="0"><pre><code><span class="comment">// Campos base (todos los eventos)</span>
{
  <span class="string">"session_id"</span>: <span class="string">"abc123"</span>,
  <span class="string">"cwd"</span>: <span class="string">"/ruta/actual"</span>,
  <span class="string">"permission_mode"</span>: <span class="string">"default"</span>,
  <span class="string">"hook_event_name"</span>: <span class="string">"PreToolUse"</span>
}

<span class="comment">// + campos de tool events (PreToolUse, PostToolUse)</span>
{
  <span class="string">"tool_name"</span>: <span class="string">"Bash"</span>,
  <span class="string">"tool_input"</span>: { <span class="string">"command"</span>: <span class="string">"npm test"</span> },
  <span class="string">"tool_use_id"</span>: <span class="string">"toolu_01ABC..."</span>
}

<span class="comment">// + campo extra de PostToolUse</span>
{
  <span class="string">"tool_response"</span>: { <span class="string">"stdout"</span>: <span class="string">"..."</span>, <span class="string">"exit_code"</span>: 0 }
}</code></pre></app-code-block><h3>Tool input por herramienta</h3><div class="table-wrapper"><table><thead><tr><th>Herramienta</th><th><code>tool_input</code> que recibe</th></tr></thead><tbody><tr><td><code>Bash</code></td><td><code>{ "command": "npm test", "timeout": 120000 }</code></td></tr><tr><td><code>Write</code></td><td><code>{ "file_path": "/path", "content": "..." }</code></td></tr><tr><td><code>Edit</code></td><td><code>{ "file_path": "/path", "old_string": "...", "new_string": "..." }</code></td></tr><tr><td><code>Read</code></td><td><code>{ "file_path": "/path", "offset": 10, "limit": 50 }</code></td></tr><tr><td><code>Glob</code></td><td><code>{ "pattern": "**/*.ts", "path": "/dir" }</code></td></tr><tr><td><code>Grep</code></td><td><code>{ "pattern": "regex", "path": "/path", "glob": "*.ts" }</code></td></tr></tbody></table></div><h3>Output (JSON via stdout)</h3><app-code-block ngh="0"><pre><code><span class="comment">// Output general</span>
{
  <span class="string">"decision"</span>: <span class="string">"block"</span>,
  <span class="string">"reason"</span>: <span class="string">"Comando peligroso bloqueado"</span>,
  <span class="string">"additionalContext"</span>: <span class="string">"Texto inyectado al contexto de Claude"</span>
}

<span class="comment">// Output especifico para PreToolUse</span>
{
  <span class="string">"hookSpecificOutput"</span>: {
    <span class="string">"hookEventName"</span>: <span class="string">"PreToolUse"</span>,
    <span class="string">"permissionDecision"</span>: <span class="string">"allow|deny|ask|defer"</span>,
    <span class="string">"permissionDecisionReason"</span>: <span class="string">"razon"</span>,
    <span class="string">"updatedInput"</span>: {}   <span class="comment">// Puede reescribir argumentos de la herramienta</span>
  }
}</code></pre></app-code-block><h3>Exit codes</h3><div class="table-wrapper"><table><thead><tr><th>Exit code</th><th>Comportamiento</th></tr></thead><tbody><tr><td><strong>0</strong></td><td>Exito. Se parsea JSON de stdout para decisiones</td></tr><tr><td><strong>2</strong></td><td>Error bloqueante. <code>stderr</code> se envia directamente a Claude</td></tr><tr><td><strong>Otro</strong></td><td>Error no-bloqueante. <code>stderr</code> solo visible en modo verbose</td></tr></tbody></table></div><app-callout type="info" title="Precedencia de decisiones" ngh="0"><div class="callout callout-info"><div class="callout-title">Precedencia de decisiones</div> Cuando multiples hooks matchean el mismo evento, la decision mas restrictiva gana: <strong>deny &gt; defer &gt; ask &gt; allow</strong></div></app-callout><app-callout type="warn" title="Limite de output" ngh="0"><div class="callout callout-warn"><div class="callout-title">Limite de output</div> El <code>additionalContext</code> inyectado al contexto esta limitado a <strong>10,000 caracteres</strong>. Lo que exceda se guarda en archivo con un preview y ruta. </div></app-callout></section><section><h2>5.5 — PreToolUse (el mas poderoso)</h2><p> Intercepta <strong>antes</strong> de que una herramienta se ejecute. Puede permitir, denegar o pedir confirmacion. Es el hook mas usado para seguridad y validacion. </p><h3>Decisiones posibles</h3><div class="table-wrapper"><table><thead><tr><th>Decision</th><th>Efecto</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Salta el prompt de permiso (deny rules siguen aplicando)</td></tr><tr><td><code>deny</code></td><td>Cancela la herramienta, envia razon a Claude</td></tr><tr><td><code>ask</code></td><td>Muestra el prompt de permiso al usuario</td></tr><tr><td><code>defer</code></td><td>Disponible en modo no-interactivo (<code>-p</code>)</td></tr></tbody></table></div><h3>Ejemplo: Bloquear comandos destructivos</h3><app-code-block ngh="0"><pre><code><span class="comment">#!/bin/bash</span>
<span class="comment"># .claude/hooks/block-dangerous.sh</span>

COMMAND=\$(jq -r <span class="string">'.tool_input.command'</span> &lt; /dev/stdin)

<span class="keyword">if</span> [[ <span class="string">"\$COMMAND"</span> == rm -rf* ]]; then
  jq -n <span class="string">'{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Comando destructivo bloqueado por politica"
    }
  }'</span>
  exit 0
<span class="keyword">fi</span>

exit 0</code></pre></app-code-block><p>Configuracion:</p><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">""\$CLAUDE_PROJECT_DIR"/.claude/hooks/block-dangerous.sh"</span>
      }]
    }]
  }
}</code></pre></app-code-block><h3>Ejemplo: Proteger archivos sensibles</h3><app-code-block ngh="0"><pre><code><span class="comment">#!/bin/bash</span>
<span class="comment"># .claude/hooks/protect-files.sh</span>

INPUT=\$(cat)
FILE_PATH=\$(echo <span class="string">"\$INPUT"</span> | jq -r <span class="string">'.tool_input.file_path // empty'</span>)

PROTECTED=(<span class="string">".env"</span> <span class="string">"package-lock.json"</span> <span class="string">".git/"</span>)
<span class="keyword">for</span> pattern <span class="keyword">in</span> <span class="string">"\${PROTECTED[@]}"</span>; <span class="keyword">do</span>
  <span class="keyword">if</span> [[ <span class="string">"\$FILE_PATH"</span> == *<span class="string">"\$pattern"</span>* ]]; <span class="keyword">then</span>
    echo <span class="string">"Blocked: \$FILE_PATH matches protected '\$pattern'"</span> &gt;&amp;2
    exit 2   <span class="comment"># Error bloqueante: stderr se envia a Claude</span>
  <span class="keyword">fi</span>
<span class="keyword">done</span>

exit 0</code></pre></app-code-block><app-callout type="good" title="Buena practica — Hooks de seguridad en el equipo" ngh="0"><div class="callout callout-good"><div class="callout-title">Buena practica — Hooks de seguridad en el equipo</div><app-code-block ngh="0"><pre><code><span class="comment">// .claude/settings.json (compartido con el equipo)</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""\$CLAUDE_PROJECT_DIR"/.claude/hooks/block-dangerous.sh"</span>
        }]
      },
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""\$CLAUDE_PROJECT_DIR"/.claude/hooks/protect-files.sh"</span>
        }]
      }
    ]
  }
}</code></pre></app-code-block><p>Todo el equipo tiene las mismas protecciones. Los scripts estan en el repo junto al codigo.</p></div></app-callout><app-callout type="bad" title="Mala practica — Hook que permite todo sin validar" ngh="0"><div class="callout callout-bad"><div class="callout-title">Mala practica — Hook que permite todo sin validar</div><app-code-block ngh="0"><pre><code><span class="comment">// MAL: auto-approve sin ningun check</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">".*"</span>,   <span class="comment">// Matchea TODO</span>
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"echo '{\\"hookSpecificOutput\\":{\\"permissionDecision\\":\\"allow\\"}}'"</span>
      }]
    }]
  }
}</code></pre></app-code-block><p> Esto bypasea todos los prompts de permiso sin ninguna validacion. Equivale a <code>bypassPermissions</code> pero peor porque parece seguro. </p></div></app-callout></section><section><h2>5.6 — PostToolUse (despues de ejecutar)</h2><p> Se ejecuta <strong>despues</strong> de que una herramienta termina exitosamente. <strong>No puede deshacer la accion</strong> — sirve para formatear, loguear, notificar e inyectar contexto. </p><h3>Ejemplo: Auto-format con Prettier</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
      }]
    }]
  }
}</code></pre></app-code-block><p>Cada vez que Claude edita o escribe un archivo, Prettier lo formatea automaticamente.</p><h3>Ejemplo: Log de todos los comandos Bash</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.command' &gt;&gt; ~/.claude/command-log.txt"</span>
      }]
    }]
  }
}</code></pre></app-code-block><app-callout type="good" title="Buena practica — Formateo + linting automatico" ngh="0"><div class="callout callout-good"><div class="callout-title">Buena practica — Formateo + linting automatico</div><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
      <span class="string">"hooks"</span>: [
        {
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
        },
        {
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx eslint --fix"</span>,
          <span class="string">"async"</span>: <span class="keyword">true</span>   <span class="comment">// No bloquea, corre en background</span>
        }
      ]
    }]
  }
}</code></pre></app-code-block><p> Prettier formatea de inmediato, ESLint corre en background sin bloquear. El codigo siempre queda limpio. </p></div></app-callout></section><section><h2>5.7 — Otros hooks importantes</h2><h3>SessionStart — Re-inyectar contexto post-compactacion</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"SessionStart"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">"compact"</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"echo 'Recordar: usar Bun no npm. Sprint actual: refactor auth.'"</span>
      }]
    }]
  }
}</code></pre></app-code-block><p>Se ejecuta automaticamente despues de cada compactacion, re-inyectando informacion critica al contexto.</p><h3>Notification — Alerta macOS</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"Notification"</span>: [{
      <span class="string">"matcher"</span>: <span class="string">""</span>,
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification "Claude necesita atencion" with title "Claude Code"'"</span>
      }]
    }]
  }
}</code></pre></app-code-block><h3>Stop — Verificar con prompt LLM antes de terminar</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"prompt"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains\\"}."</span>
      }]
    }]
  }
}</code></pre></app-code-block><h3>Stop — Verificar con agente que corre tests</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"agent"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Run the test suite and verify all tests pass. \$ARGUMENTS"</span>,
        <span class="string">"timeout"</span>: 120
      }]
    }]
  }
}</code></pre></app-code-block><app-callout type="warn" title="Cuidado con Stop hooks y loops infinitos" ngh="0"><div class="callout callout-warn"><div class="callout-title">Cuidado con Stop hooks y loops infinitos</div> Stop hooks se disparan en <strong>cada respuesta</strong> de Claude. Para evitar loops infinitos, verifica el campo <code>stop_hook_active</code>: <app-code-block ngh="0"><pre><code><span class="comment">#!/bin/bash</span>
INPUT=\$(cat)
<span class="keyword">if</span> [ <span class="string">"\$(echo "\$INPUT" | jq -r '.stop_hook_active')"</span> = <span class="string">"true"</span> ]; <span class="keyword">then</span>
  exit 0  <span class="comment"># Permitir que Claude pare (ya estamos en el hook)</span>
<span class="keyword">fi</span>
<span class="comment"># ... tu logica de verificacion ...</span></code></pre></app-code-block></div></app-callout><h3>CwdChanged — Recargar entorno (direnv)</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"CwdChanged"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"command"</span>,
        <span class="string">"command"</span>: <span class="string">"direnv export bash &gt;&gt; "\$CLAUDE_ENV_FILE""</span>
      }]
    }]
  }
}</code></pre></app-code-block><h3>HTTP hook — Audit logging para el equipo</h3><app-code-block ngh="0"><pre><code>{
  <span class="string">"hooks"</span>: {
    <span class="string">"PostToolUse"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"http"</span>,
        <span class="string">"url"</span>: <span class="string">"http://localhost:8080/hooks/tool-use"</span>,
        <span class="string">"headers"</span>: { <span class="string">"Authorization"</span>: <span class="string">"Bearer \$MY_TOKEN"</span> },
        <span class="string">"allowedEnvVars"</span>: [<span class="string">"MY_TOKEN"</span>]
      }]
    }]
  }
}</code></pre></app-code-block></section><section><h2>5.8 — Seguridad y limitaciones</h2><h3>Modelo de seguridad</h3><div class="concept-grid"><app-concept-card title="Hooks NO bypasean deny rules" description="Un hook que devuelve allow no sobreescribe deny rules de managed settings." ngh="0"><div class="concept-card"><h4>Hooks NO bypasean deny rules</h4><p>Un hook que devuelve allow no sobreescribe deny rules de managed settings.</p></div></app-concept-card><app-concept-card title="PreToolUse antes de permisos" description="Un hook con deny bloquea incluso en bypassPermissions. Ideal para politicas enterprise." ngh="0"><div class="concept-card"><h4>PreToolUse antes de permisos</h4><p>Un hook con deny bloquea incluso en bypassPermissions. Ideal para politicas enterprise.</p></div></app-concept-card><app-concept-card title="Output limitado" description="additionalContext max 10,000 chars. Exceso se guarda en archivo." ngh="0"><div class="concept-card"><h4>Output limitado</h4><p>additionalContext max 10,000 chars. Exceso se guarda en archivo.</p></div></app-concept-card><app-concept-card title="HTTP seguro" description="Headers solo resuelven env vars listadas en allowedEnvVars." ngh="0"><div class="concept-card"><h4>HTTP seguro</h4><p>Headers solo resuelven env vars listadas en allowedEnvVars.</p></div></app-concept-card></div><h3>Timeouts</h3><div class="table-wrapper"><table><thead><tr><th>Tipo</th><th>Default</th><th>Configurable?</th></tr></thead><tbody><tr><td>command</td><td>600 segundos (10 min)</td><td>Si, via <code>timeout</code></td></tr><tr><td>prompt</td><td>30 segundos</td><td>Si</td></tr><tr><td>agent</td><td>60 segundos, max 50 turns</td><td>Si</td></tr></tbody></table></div><h3>Gotchas comunes</h3><div class="table-wrapper"><table><thead><tr><th>Problema</th><th>Solucion</th></tr></thead><tbody><tr><td><code>echo</code> en shell profile corrompe JSON output</td><td>Envolver en <code>if [[ \$- == *i* ]]; then</code></td></tr><tr><td>Script no ejecutable</td><td><code>chmod +x script.sh</code></td></tr><tr><td>Matchers son case-sensitive</td><td><code>Bash</code> no es <code>bash</code></td></tr><tr><td><code>PermissionRequest</code> no dispara en <code>-p</code></td><td>Usar <code>PreToolUse</code> en modo headless</td></tr><tr><td>Stop hook en cada respuesta, no solo al final</td><td>Verificar <code>stop_hook_active</code> para evitar loops</td></tr></tbody></table></div><h3>Variables de entorno disponibles</h3><div class="table-wrapper"><table><thead><tr><th>Variable</th><th>Disponible en</th></tr></thead><tbody><tr><td><code>\$CLAUDE_PROJECT_DIR</code></td><td>Todos los hooks</td></tr><tr><td><code>\$CLAUDE_ENV_FILE</code></td><td>SessionStart, CwdChanged, FileChanged</td></tr><tr><td><code>\$CLAUDE_CODE_REMOTE</code></td><td>Todos (<code>"true"</code> en entornos web remotos)</td></tr></tbody></table></div><h3>Debugging hooks</h3><app-code-block ngh="0"><pre><code><span class="comment"># Ver todos los hooks configurados</span>
/hooks

<span class="comment"># Modo verbose para ver output de hooks en transcript</span>
Ctrl+O

<span class="comment"># Debug completo de ejecucion</span>
<span class="command">claude</span> <span class="flag">--debug</span>

<span class="comment"># Test manual de un script hook</span>
echo <span class="string">'{"tool_name":"Bash","tool_input":{"command":"ls"}}'</span> | ./mi-hook.sh</code></pre></app-code-block></section><section><h2>Recetas practicas completas</h2><app-callout type="good" title="Receta 1 — Setup de equipo completo" ngh="0"><div class="callout callout-good"><div class="callout-title">Receta 1 — Setup de equipo completo</div><app-code-block ngh="0"><pre><code><span class="comment">// .claude/settings.json (todo el equipo)</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"PreToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Bash"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"if"</span>: <span class="string">"Bash(rm -rf *)"</span>,
          <span class="string">"command"</span>: <span class="string">"echo 'Blocked: rm -rf' &gt;&amp;2 &amp;&amp; exit 2"</span>
        }]
      },
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">""\$CLAUDE_PROJECT_DIR"/.claude/hooks/protect-files.sh"</span>
        }]
      }
    ],
    <span class="string">"PostToolUse"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"Edit|Write"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"jq -r '.tool_input.file_path' | xargs npx prettier --write"</span>
        }]
      }
    ],
    <span class="string">"SessionStart"</span>: [
      {
        <span class="string">"matcher"</span>: <span class="string">"compact"</span>,
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"echo 'Sprint: auth refactor. Usar bun, no npm.'"</span>
        }]
      }
    ],
    <span class="string">"Notification"</span>: [
      {
        <span class="string">"hooks"</span>: [{
          <span class="string">"type"</span>: <span class="string">"command"</span>,
          <span class="string">"command"</span>: <span class="string">"osascript -e 'display notification "Claude Code" with title "Atencion"'"</span>
        }]
      }
    ]
  }
}</code></pre></app-code-block><p> Bloqueo de comandos peligrosos + proteccion de archivos + auto-format + context post-compact + notificaciones. Todo en un solo archivo compartido. </p></div></app-callout><app-callout type="good" title="Receta 2 — Quality gate antes de terminar" ngh="0"><div class="callout callout-good"><div class="callout-title">Receta 2 — Quality gate antes de terminar</div><app-code-block ngh="0"><pre><code><span class="comment">// Agente que corre tests antes de que Claude declare "listo"</span>
{
  <span class="string">"hooks"</span>: {
    <span class="string">"Stop"</span>: [{
      <span class="string">"hooks"</span>: [{
        <span class="string">"type"</span>: <span class="string">"agent"</span>,
        <span class="string">"prompt"</span>: <span class="string">"Run 'npm test' and verify all tests pass. If any fail, report which ones. \$ARGUMENTS"</span>,
        <span class="string">"timeout"</span>: 120
      }]
    }]
  }
}</code></pre></app-code-block><p>Claude no puede declarar que termino hasta que un agente independiente confirme que los tests pasan.</p></div></app-callout></section><app-module-nav ngh="1"><nav class="nav-footer"><a class="nav-btn" href="/claude-code-course/cursos/claude-code/modulo-04" jsaction="click:;">← Modulo 4: Sistema de Memoria</a><!----><!----><a class="nav-btn" href="/claude-code-course/cursos/claude-code/modulo-06" jsaction="click:;">Modulo 6: Skills →</a><!----><!----></nav></app-module-nav></div></app-modulo-05><!----></app-root>
<link rel="modulepreload" href="chunk-HIV27VVN.js"><script src="main-7OBRDMF7.js" type="module"></script>
<link rel="modulepreload" href="chunk-L3COJKCV.js">
<link rel="modulepreload" href="chunk-LCHIYWU5.js">


<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"1":"t0","2":"t1","3":"t2","4":"t3"},"c":{"1":[{"i":"t0","r":1}],"2":[],"3":[{"i":"t2","r":1}],"4":[]}},{"n":{"446":"445f2n","450":"449f2n","513":"512f2n","517":"516f2n","543":"542f2n","564":"563f2n","718":"717f2n","722":"721f2n"}},{"c":{"0":[{"i":"c2916741407","r":1}]}}]}</script></body></html>`;

(() => {
    const language_colors = { "Mercury": "#ff2b2b", "TypeScript": "#2b7489", "PureBasic": "#5a6986", "Objective-C++": "#6866fb", "Self": "#0579aa", "NewLisp": "#87AED7", "Fortran": "#4d41b1", "Ceylon": "#dfa535", "Rebol": "#358a5b", "Frege": "#00cafe", "AspectJ": "#a957b0", "Omgrofl": "#cabbff", "HolyC": "#ffefaf", "Shell": "#89e051", "HiveQL": "#dce200", "AppleScript": "#101F1F", "Eiffel": "#946d57", "XQuery": "#5232e7", "RUNOFF": "#665a4e", "RAML": "#77d9fb", "MTML": "#b7e1f4", "Elixir": "#6e4a7e", "SAS": "#B34936", "MQL4": "#62A8D6", "MQL5": "#4A76B8", "Agda": "#315665", "wisp": "#7582D1", "Dockerfile": "#384d54", "SRecode Template": "#348a34", "D": "#ba595e", "PowerBuilder": "#8f0f8d", "Kotlin": "#F18E33", "Opal": "#f7ede0", "TI Program": "#A0AA87", "Crystal": "#000100", "Objective-C": "#438eff", "Batchfile": "#C1F12E", "Oz": "#fab738", "Mirah": "#c7a938", "ZIL": "#dc75e5", "Objective-J": "#ff0c5a", "ANTLR": "#9DC3FF", "Roff": "#ecdebe", "Ragel": "#9d5200", "FreeMarker": "#0050b2", "Gosu": "#82937f", "Zig": "#ec915c", "Ruby": "#701516", "Nemerle": "#3d3c6e", "Jupyter Notebook": "#DA5B0B", "Component Pascal": "#B0CE4E", "Nextflow": "#3ac486", "Brainfuck": "#2F2530", "SystemVerilog": "#DAE1C2", "APL": "#5A8164", "Hack": "#878787", "Go": "#00ADD8", "Ring": "#2D54CB", "PHP": "#4F5D95", "Cirru": "#ccccff", "SQF": "#3F3F3F", "ZAP": "#0d665e", "Glyph": "#c1ac7f", "1C Enterprise": "#814CCC", "WebAssembly": "#04133b", "Java": "#b07219", "MAXScript": "#00a6a6", "Scala": "#c22d40", "Makefile": "#427819", "Perl": "#0298c3", "Jsonnet": "#0064bd", "Arc": "#aa2afe", "LLVM": "#185619", "GDScript": "#355570", "Verilog": "#b2b7f8", "Factor": "#636746", "Haxe": "#df7900", "Forth": "#341708", "Red": "#f50000", "YARA": "#220000", "Hy": "#7790B2", "mcfunction": "#E22837", "Volt": "#1F1F1F", "AngelScript": "#C7D7DC", "LSL": "#3d9970", "eC": "#913960", "Terra": "#00004c", "CoffeeScript": "#244776", "HTML": "#e34c26", "Lex": "#DBCA00", "UnrealScript": "#a54c4d", "Idris": "#b30000", "Swift": "#ffac45", "Modula-3": "#223388", "C": "#555555", "AutoHotkey": "#6594b9", "P4": "#7055b5", "Isabelle": "#FEFE00", "G-code": "#D08CF2", "Metal": "#8f14e9", "Clarion": "#db901e", "Vue": "#2c3e50", "JSONiq": "#40d47e", "Boo": "#d4bec1", "AutoIt": "#1C3552", "Genie": "#fb855d", "Clojure": "#db5855", "EQ": "#a78649", "Visual Basic": "#945db7", "CSS": "#563d7c", "Prolog": "#74283c", "SourcePawn": "#5c7611", "AMPL": "#E6EFBB", "Shen": "#120F14", "wdl": "#42f1f4", "Harbour": "#0e60e3", "Yacc": "#4B6C4B", "Tcl": "#e4cc98", "Quake": "#882233", "BlitzMax": "#cd6400", "PigLatin": "#fcd7de", "xBase": "#403a40", "Lasso": "#999999", "Processing": "#0096D8", "VHDL": "#adb2cb", "Elm": "#60B5CC", "Dhall": "#dfafff", "Propeller Spin": "#7fa2a7", "Rascal": "#fffaa0", "Alloy": "#64C800", "IDL": "#a3522f", "Slice": "#003fa2", "YASnippet": "#32AB90", "ATS": "#1ac620", "Ada": "#02f88c", "Nu": "#c9df40", "LFE": "#4C3023", "SuperCollider": "#46390b", "Oxygene": "#cdd0e3", "ASP": "#6a40fd", "Assembly": "#6E4C13", "Gnuplot": "#f0a9f0", "FLUX": "#88ccff", "C#": "#178600", "Turing": "#cf142b", "Vala": "#fbe5cd", "ECL": "#8a1267", "ObjectScript": "#424893", "NetLinx": "#0aa0ff", "Perl 6": "#0000fb", "MATLAB": "#e16737", "Emacs Lisp": "#c065db", "Stan": "#b2011d", "SaltStack": "#646464", "Gherkin": "#5B2063", "QML": "#44a51c", "Pike": "#005390", "DataWeave": "#003a52", "LOLCODE": "#cc9900", "ooc": "#b0b77e", "XSLT": "#EB8CEB", "XC": "#99DA07", "J": "#9EEDFF", "Mask": "#f97732", "EmberScript": "#FFF4F3", "TeX": "#3D6117", "Pep8": "#C76F5B", "R": "#198CE7", "Cuda": "#3A4E3A", "KRL": "#28430A", "Vim script": "#199f4b", "Lua": "#000080", "Asymptote": "#4a0c0c", "Ren'Py": "#ff7f7f", "Golo": "#88562A", "PostScript": "#da291c", "Fancy": "#7b9db4", "OCaml": "#3be133", "ColdFusion": "#ed2cd6", "Pascal": "#E3F171", "F#": "#b845fc", "API Blueprint": "#2ACCA8", "ActionScript": "#882B0F", "F*": "#572e30", "Fantom": "#14253c", "Zephir": "#118f9e", "Click": "#E4E6F3", "Smalltalk": "#596706", "Ballerina": "#FF5000", "DM": "#447265", "Ioke": "#078193", "PogoScript": "#d80074", "LiveScript": "#499886", "JavaScript": "#f1e05a", "Wollok": "#a23738", "Rust": "#dea584", "ABAP": "#E8274B", "ZenScript": "#00BCD1", "Slash": "#007eff", "Erlang": "#B83998", "Pan": "#cc0000", "LookML": "#652B81", "Scheme": "#1e4aec", "Squirrel": "#800000", "Nim": "#37775b", "Python": "#3572A5", "Max": "#c4a79c", "Solidity": "#AA6746", "Common Lisp": "#3fb68b", "Dart": "#00B4AB", "Nix": "#7e7eff", "Nearley": "#990000", "Nit": "#009917", "Chapel": "#8dc63f", "Groovy": "#e69f56", "Dylan": "#6c616e", "E": "#ccce35", "Parrot": "#f3ca0a", "Grammatical Framework": "#79aa7a", "Game Maker Language": "#71b417", "VCL": "#148AA8", "Papyrus": "#6600cc", "C++": "#f34b7d", "NetLinx+ERB": "#747faa", "Common Workflow Language": "#B5314C", "Clean": "#3F85AF", "X10": "#4B6BEF", "Puppet": "#302B6D", "Jolie": "#843179", "PLSQL": "#dad8d8", "sed": "#64b970", "Pawn": "#dbb284", "Standard ML": "#dc566d", "PureScript": "#1D222D", "Julia": "#a270ba", "nesC": "#94B0C7", "q": "#0040cd", "Haskell": "#5e5086", "NCL": "#28431f", "Io": "#a9188d", "Rouge": "#cc0088", "Racket": "#3c5caa", "NetLogo": "#ff6375", "AGS Script": "#B9D9FF", "Meson": "#007800", "Dogescript": "#cca760", "PowerShell": "#012456" };
    const global_style = `
.github-repo-card {
    font-size: 14px;
    line-height: 1.5;
}

.github-repo-card * {
    box-sizing: border-box;
}

.github-repo-card p {
    margin-top: 0;
    margin-bottom: 10px;
}

.github-repo-card svg:not(:root) {
    overflow: hidden;
}

.github-repo-card .Box {
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
}

.github-repo-card .p-3 {
    padding: 16px!important;
}

.github-repo-card .f4 {
    font-size: 16px!important;
}

.github-repo-card .text-bold {
    font-weight: 600!important;
}

.github-repo-card .lh-condensed {
    line-height: 1.25!important;
}

.github-repo-card .d-inline-block {
    display: inline-block!important;
}

.github-repo-card .wb-break-all {
    word-break: break-all!important;
}

.github-repo-card .no-underline {
    text-decoration: none!important;
}

.github-repo-card .text-bold {
    font-weight: 600!important;
}

.github-repo-card .dashboard-break-word {
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
}

.github-repo-card .mt-1 {
    margin-top: 4px!important;
}

.github-repo-card .mb-0 {
    margin-bottom: 0!important;
}

.github-repo-card .text-gray-dark {
    color: #24292e!important;
}

.github-repo-card .text-gray {
    color: #586069!important;
}

.github-repo-card .link-gray-dark:not(:hover) {
    color: #24292e!important;
}

.github-repo-card .muted-link:not(:hover) {
    color: #586069!important;
}

.github-repo-card .f6 {
    font-size: 12px!important;
}

.github-repo-card .mt-2 {
    margin-top: 8px!important;
}

.github-repo-card .mr-3 {
    margin-right: 16px!important;
}

.github-repo-card .ml-0, .mx-0 {
    margin-left: 0!important;
}

.github-repo-card .repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.github-repo-card .mr-1 {
    margin-right: 4px!important;
}

.github-repo-card .octicon {
    vertical-align: text-bottom;
}

.github-repo-card .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
}`
    const repo_html = `
<div class="Box p-3">
    <div>
        <div class="f4 lh-condensed text-bold text-gray-dark">
            <a class="link-gray-dark no-underline text-bold wb-break-all d-inline-block"
                href="https://github.com/{full_name}">{full_name}</a>

        </div>
        <div class="dashboard-break-word text-gray mt-1 mb-0 repo-description">
            <p style="font-size: 14px;">{description}</p>
        </div>

        <p class="f6 text-gray mt-2 mb-0">
            {language_html}
            {stargazers_html}
            <span>Updated {updated_at}</span>
        </p>
    </div>
</div>`
    const repos_language_html = `
<span class="d-inline-block text-gray mr-3">
    <span class="ml-0">
        <span class="repo-language-color" style="background-color: {language_color}"></span>
        <span itemprop="programmingLanguage">{language}</span>
    </span>
</span>`
    const repos_stargazers_html = `
<span class="d-inline-block mr-3">
    <a class="muted-link" href="https://github.com/{full_name}/stargazers"><svg class="octicon octicon-star mr-1"
            viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z">
            </path>
        </svg>{stargazers_count}
    </a>
</span>`

    function httpGet(url, response) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                response(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        xhr.send(null);
    }

    const divs = document.getElementsByClassName("github-repo-card");
    for (const div of divs) {

        const dataRepo = div.getAttribute("data-repo");

        httpGet("https://api.github.com/repos/" + dataRepo, json => {

            const data = JSON.parse(json);
            data.language_color = language_colors[data.language];
            data.updated_at = new Date(data.updated_at).toLocaleString();

            let html = repo_html
                .replace("{language_html}", data.language ? repos_language_html : "")
                .replace("{stargazers_html}", data.stargazers_count ? repos_stargazers_html : "")

            for (const key in data) {
                html = html.replace(new RegExp(`{${key}}`, "g"), data[key] ? data[key] : "")
            }

            div.innerHTML = html;
        });
    }

    const globalStyle = document.createElement("style");
    globalStyle.innerHTML = global_style;
    document.head.appendChild(globalStyle);
})()

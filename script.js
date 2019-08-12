let projectTables = [];

function main() {
  let table = null;

  table = new ProjectTable("Game related:");
  table.addGH("JS, WebGL", "Tank-Game", "Top down multiplayer game with tanks");
  table.addGH("C#, OpenGL", "SimCity inspired game");
  table.addGH("JS, WebGL", "AntGame", "Isometric RTS Ant Game (engine only)");
  table.addGH("Java", "NodeEngine", "Risk like game with javafx");

  table = new ProjectTable("Editor related:");
  table.addGH("C#", "2D-isometricRenderer", "Generate isometric graphics from heightmaps");

  table = new ProjectTable("Simulation related:");
  table.addGH("C#", "StarSim", "2D gravitation simulation");

  table = new ProjectTable("OpenGl/WebGL related:");
  table.addGH("JS, WebGL", "Webgl2D", "Simple 2d draw library for WebGL");
  table.addGH("C#, OpenGL", "CSGL2D", "2d library for OpenGL/OpenTK and C#");

  table = new ProjectTable("Parser related:");
  table.addGH("C#", "CsStructParser", "Parser for config files used by CityGame");

  table = new ProjectTable("Experiments:");
  table.addGH("JS, Vulkan", "NVK-Mandelbrot","Learning project for Vulkan");
  table.addGH("JS", "RetroLine3D", "Renderer for 3d wireframe models on canvas 2d");

  table = new ProjectTable("Web:");
  table.addGH("JS", "ColorPicker", "Window for color picking");

  table = new ProjectTable("Other:");
  table.addGH("C#", "ByteStream", "Library to write and read binary data");

  flush();
}
class ProjectTable {
  constructor(title) {
    this.title = title;
    this.code = "";
    projectTables[projectTables.length] = this;
  }
  addGH(tags, repo, name = repo) {
    let link = "https://github.com/Grille/" + repo;
    this.add(tags, link, name);
  }
  add(tags, link, name = link) {
    let array = tags.split(',');
    this.code += `<tr><td><a href=${link}>&#9702 ${name} `;
    for (let i = 0; i < array.length; i++) {
      let lname = array[i].trim();
      let lclass = lname.replace(/[#]/g, "s").replace(/[+]/g, "p").toLowerCase();
      this.code += `<x-lang class=${lclass}>${lname}</x-lang>`;
    }
    this.code += `</a></td>`;
    this.code += `</tr>`;
  }
}
function flush() {
  let html = "";
  for (let i = 0; i < projectTables.length; i++) {
    let table = projectTables[i];
    html += `<h3>${table.title}</h3><table>`;
    html += table.code;
    html += `</table>`;
    if (i < projectTables.length - 1)
      html += `</br>`;
  }
  html_projects.innerHTML = html;
  html_body.style.visibility = "visible";
}

window.onload = main;




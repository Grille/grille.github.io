let projectTables = [];

function main() {
  let table = null;

  table = new ProjectTable("Game/Engine related:");
  table.add("JS, WebGL", "https://www.youtube.com/channel/UC5bMVzJRThGgpYSkNj3cdwQ", "PokeCraft (Wrote the World Generator)")
  table.addGH("JS, WebGL", "Tank-Game", "Top down multiplayer game with tanks");
  table.addGH("C#, WinForm, OpenGL", "CityGame", "SimCity inspired game");
  table.addGH("JS, WebGL", "AntGame", "Isometric RTS Ant Game (engine only)");
  table.addGH("Java, JavaFX", "NodeEngine", "Risk like game with JavaFX");

  table = new ProjectTable("Simulation related:");
  table.addGH("JS, Vulkan", "Starsim3D","N-body simulation with Node-Vulkan");
  table.addGH("C#, WinForm", "StarSim", "2D N-body simulation");

  table = new ProjectTable("GPU/Graphics related:");
  table.addGH("C#, WinForm", "2D-isometricRenderer", "Generate isometric graphics from heightmaps");
  table.addGH("JS, Vulkan", "SimpleNVK","Graphic API similar to WebGPU using Node-Vulkan");
  table.addGH("JS, WebGL", "Webgl2D", "2D drawing library for JS using WebGL");
  //table.addGH("C#, OpenGL", "CSGL2D", "2D drawing library for C# using OpenGL/OpenTK");
  table.addGH("JS", "RetroLine3D", "Renderer for 3D wireframe models on canvas 2D");

  table = new ProjectTable("Parser related:");
  table.addGH("C#", "CsStructParser", "Parser for config files used by CityGame");
  table.addGH("C#, WinForm", "ProLernTranspiler", "Transpiler for ProLern learning language & Editor");

  //table = new ProjectTable("Experiments:");
  //table.addGH("JS, Vulkan", "NVK-Mandelbrot","Realtime mandelbrot renderer in Vulkan");

  table = new ProjectTable("Utils/Other:");
  table.addGH("C#", "BinaryView", "Library to write and read binary data");

  table = new ProjectTable("Web related:");
  table.addGH("JS", "ColorPicker", "Window for color picking");

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
      let lclass = lname.replace(/[#]/g, "s").replace(/[+]/g, "p").replace(/[.]/g, "_").toLowerCase();
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




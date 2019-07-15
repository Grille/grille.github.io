let projectsHTML = "";

function main(){
    let games = new projectTable(html_projectsGam);
    games.addGH("JS,WebGL","Tank-Game","Top down multiplayer game with tanks")
    games.addGH("C#,OpenGL","SimCity inspired game")
    games.addGH("JS,WebGL","AntGame","Isometric RTS Ant Game (engine only)")
    games.addGH("Java","NodeEngine","Risk like game")

    let programs = new projectTable(html_projectsPro);
    programs.addGH("C#","2D-isometricRenderer","Generate isometric graphics from heightmaps")
    programs.addGH("C#","StarSim","2D gravitation simulation")

    let librarys = new projectTable(html_projectsLib);
    librarys.addGH("JS,WebGL","Webgl2D","Simple 2d draw library for WebGL")
    librarys.addGH("C#,OpenGL","CSGL2D","2d library for OpenGL/OpenTK and C#")
    librarys.addGH("C#","CsStructParser","Parser for config files used by CityGame")
    librarys.addGH("C#","ByteStream","Library to write and read binary data")

    let experiments = new projectTable(html_projectsExp);
    experiments.addGH("JS,Vulkan","NVK-Mandelbrot")
    experiments.addGH("JS","RetroLine3D","Renderer for 3d wireframe models on canvas 2d")
    experiments.addGH("JS","ColorPicker","Window for color picking")

    games.flush();
    programs.flush();
    librarys.flush();
    experiments.flush();
}
class projectTable{
    constructor(html){
        this.code = "";
        this.html = html;
    }
    addGH(tags,repo,name = repo) {
        let link = "https://github.com/Grille/"+repo;
        this.add(tags,link,name);
    }
    add(tags,link,name = link) {
        let array = tags.split(',');
        this.code +=
        `
        <tr>
        <td><a href=${link}>&#9702 ${name}
        `
        for (let i = 0; i < array.length; i++) {
            let lname = array[i];
            let lclass = lname.replace(/[#]/g, "s").replace(/[+]/g, "p").toLowerCase();
            this.code += `<x-lang class=${lclass}>${lname}</x-lang>`
        }
        this.code +=
        `
        </a></td>
        `
        //if (demo != null)
        //    this.code +=`<td><a href=${demo}>(demo)</a></td>`;
        this.code+=`</tr>`;
    }
    flush(){
        this.html.innerHTML = this.code;
    }
}

window.onload = main;




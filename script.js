let projectsHTML = "";

function main(){
    let games = new projectTable(html_projectsGam);
    games.add("js","Tank-Game")
    games.add("cs","CityGame")
    games.add("js","AntGame")
    games.add("java","NodeEngine","Risk")

    let programs = new projectTable(html_projectsPro);
    programs.add("cs","2D-isometricRenderer")
    programs.add("cs","StarSim")

    let librarys = new projectTable(html_projectsLib);
    librarys.add("js","Webgl2D")
    librarys.add("cs","CSGL2D")
    librarys.add("cs","CsStructParser")
    librarys.add("cs","ByteStream")

    let experiments = new projectTable(html_projectsExp);
    experiments.add("js","NVK-Mandelbrot")
    experiments.add("js","RetroLine3D")
    experiments.add("js","ColorPicker")
    experiments.add("ts","MonLander")

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
    add(lang,repo,name = repo) {
        let link = "https://github.com/Grille98/"+repo;
        this.code+=
        `
        <tr>
        <td><a href=${link}>* ${name}/<i class=${lang}>${lang}</i></a></td>
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




function main() {

    let includes = document.getElementsByTagName("x-include")
    for (let i = 0; i< includes.length;i++){
        let inc = includes[i];
        inc.getAttribute("href");
    }

    let elements = document.getElementsByTagName("x-projects")

    for (let i = 0; i< elements.length;i++){
        let element = elements[i];

        let titleList = element.getElementsByTagName("x-pt");
        if (titleList.length == 0){
            var title = null
        }
        else {
            var title = titleList[0].innerText.trim()
        }
        var table = new ProjectTable(title)
        let links = element.getElementsByTagName("x-pl")
        for (let j = 0; j < links.length;j++){
            table.parse(links[j].innerText)
        }
        table.update(element);
    }
}

class ProjectTable {
    constructor(title) {
        this.title = title;
        this.code = "";
    }
    parse(text){
        let split = text.split(';');
        this.add(split[2].trim(), split[0].trim(), split[1].trim());
    }
    add(tags, link, name = link) {
        if (link.startsWith("GH:")){
            link = "https://github.com/Grille/" + link.substring(3);
        }
        let array = tags.split(',');
        this.code += `<tr><td><a href=${link}>&#9702 ${name} `;
        for (let i = 0; i < array.length; i++) {
            let lname = array[i].trim();
            if (lname.length == 0){
                continue;
            }
            let lclass = lname.replace(/[#]/g, "s").replace(/[+]/g, "p").replace(/[.]/g, "_").toLowerCase();
            this.code += `<x-lang class=${lclass}>${lname}</x-lang>`;
        }
        this.code += `</a></td>`;
        this.code += `</tr>`;
    }
    build() {
        let html = "";
        if (this.title != null) {
            html += `<h3>${this.title}</h3>`;
        }
        html += `<table>`;
        html += this.code;
        html += `</table>`;
        html += `</br>`;
        return html;
    }
    update(element) {
        element.innerHTML = this.build();
    }
}

window.onload = main;




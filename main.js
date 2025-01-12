//shared header across most sites
class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header><a href="/index"><img src="../../assets/logo.webp" alt="Minelife Logo" class="header_logo"></a></header>
    `
    }
}
customElements.define('shared-header', SharedHeader)

//Legal stuff from the sidebar menu
class SidebarLegal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <legal class="legal">
            <a href="/contact">Contact</a>
        </legal>
    `
    }
}
customElements.define('sidebar-legal', SidebarLegal)

//Sidebar Menu
class SidebarMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <sidebarmenu class="sidebarmenu">
            <p>Technical stuff:</p>
            <button class="collapsible">Worlddownloads</button>
            <div class="submenu">
                <a href="https://drive.google.com/file/d/1CmUdQ_6olIp8GrlYp_Qz5KUgyx4uBDic/view?usp=drive_link">Season I</a> <br>
                <a href="https://drive.google.com/file/d/1ybK5j6b-2OrHNHbhpS7x5DEjfNzVqhRG/view?usp=drive_link">Season II</a> <br>
                <a href="https://drive.google.com/file/d/1VlwUSe5QpIEIyANbPnRk2RVLRueOzl3t/view?usp=drive_link">Season III Year I</a>
                <a href="https://drive.google.com/file/d/10X8HQC3pH4zgmtMfol5_R1Fl6YjGnk0s/view?usp=sharing">Limbo World</a>
            </div>
            <button class="collapsible">Server Maps</button>
            <div class="submenu">
                <a href="https://minelifesmp.com/map">Season III Live Map</a>
            </div>
            <button class="collapsible">Mods and Addons</button>
            <div class="submenu">
                <a href="/wiki/season3addons">- Season III</a><br>
            </div>
            <p>Wiki:</p>
            <button class="collapsible">SEASON I</button>
            <div class="submenu">
            <p>Nothing here yet! Please consider adding missing content through Github Pull requests!</p>
            </div>
            <button class="collapsible">SEASON II</button>
            <div class="submenu">
            <p>Nothing here yet! Please consider adding missing content through Github Pull requests!</p>
            </div>
            <button class="collapsible">SEASON III</button>
            <div class="submenu">
                <a href="/wiki/season3shoppingdistrict">- Shopping District</a><br>
                <a href="/wiki/season3townhall">- Townhall</a>
            </div> 
        </sidebarmenu>
    `
    }
}
customElements.define('sidebar-menu', SidebarMenu)

//collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
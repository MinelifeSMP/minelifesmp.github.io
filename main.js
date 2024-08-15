//shared header across most sites
class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header><a href="/index"><img src="../../assets/logo.webp" alt="Minelife Logo" class="header_logo"></a></header>
    `
    }
}
customElements.define('shared-header', SharedHeader)

//Worlddownloadlinks from the sidebar menu
class SidebarWdls extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <wdls class="wdls">
            <b>Worlddownloads</b> <br><br>
            <a href="https://drive.google.com/file/d/1CmUdQ_6olIp8GrlYp_Qz5KUgyx4uBDic/view?usp=drive_link">Season I</a> <br>
            <a href="https://drive.google.com/file/d/1ybK5j6b-2OrHNHbhpS7x5DEjfNzVqhRG/view?usp=drive_link">Season II</a> <br>
            <a href="https://drive.google.com/file/d/1VlwUSe5QpIEIyANbPnRk2RVLRueOzl3t/view?usp=drive_link">Season III Year I</a>
        </wdls>
    `
    }
}
customElements.define('sidebar-wdls', SidebarWdls)

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

//Wiki Menu
class WikiMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <wikimenu class="wikimenu">
            <p>Wiki:</p>
            <button class="collapsible">SEASON I</button>
            <div class="submenu">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button class="collapsible">SEASON II</button>
            <div class="submenu">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button class="collapsible">SEASON III</button>
            <div class="submenu">
                <a href="../wiki/season3shoppingdistrict">- Shopping District</a><br>
                <a href="../wiki/season3townhall">- Townhall</a>
            </div> 
        </wikimenu>
    `
    }
}
customElements.define('wiki-menu', WikiMenu)

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
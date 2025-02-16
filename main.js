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
            <p>Links:</p>
            <button class="collapsible">Worlddownloads</button>
            <div class="submenu">
                <a href="https://drive.google.com/file/d/1CmUdQ_6olIp8GrlYp_Qz5KUgyx4uBDic/view?usp=drive_link">Season I</a> <br>
                <a href="https://drive.google.com/file/d/1ybK5j6b-2OrHNHbhpS7x5DEjfNzVqhRG/view?usp=drive_link">Season II</a> <br>
                <a href="https://drive.google.com/file/d/1VlwUSe5QpIEIyANbPnRk2RVLRueOzl3t/view?usp=drive_link">Season III Year I</a>
                <a href="https://drive.google.com/file/d/10X8HQC3pH4zgmtMfol5_R1Fl6YjGnk0s/view?usp=sharing">Limbo World</a>
            </div>
            <button class="collapsible">Server Live Maps</button>
            <div class="submenu">
                <a href="https://minelifesmp.com/map">Season III Live Map</a>
            </div>
            <button class="collapsible">Modpacks</button>
            <div class="submenu">
                <a href="https://modrinth.com/modpack/minelife-smp">- Normal version</a><br>
                <a href="https://modrinth.com/modpack/minelife-smp-lite">- Lite version</a><br>
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

//popups
const memberLinks = {
    'craemon': [
        { name: 'YouTube', url: 'https://www.youtube.com/@craemonmc', icon: 'fab fa-youtube' },
        { name: 'YouTube (2nd)', url: 'https://www.youtube.com/@craemondoesrandomstuff', icon: 'fab fa-youtube' },
        { name: 'GitHub', url: 'https://github.com/Craemon', icon: 'fab fa-github' },
        { name: 'Modrinth', url: 'https://modrinth.com/user/Craemon', icon: 'fa-solid fa-download' },
        { name: 'Bluesky', url: 'https://bsky.app/profile/craemon.com', icon: 'fab fa-bluesky' }
    ],
    'venym': [
        { name: 'YouTube', url: 'https://www.youtube.com/@venymMC', icon: 'fab fa-youtube' }
    ],
    'fricaii': [
        { name: 'YouTube', url: 'https://www.youtube.com/@fricaii', icon: 'fab fa-youtube' }
    ],
    'tekeyn': [
        { name: 'YouTube', url: 'https://www.youtube.com/@tekeyn', icon: 'fab fa-youtube' }
    ]
    
};

function openPopup(memberId) {
    const popup = document.getElementById('popup');
    const name = document.getElementById('popup-name');
    const links = document.getElementById('popup-links');

    name.textContent = memberId.charAt(0).toUpperCase() + memberId.slice(1);
    links.innerHTML = '';

    memberLinks[memberId].forEach(link => {
        links.innerHTML += `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer"><i class="${link.icon}"></i>${link.name}</a></li>`;
    });

    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        closePopup();
    }
}
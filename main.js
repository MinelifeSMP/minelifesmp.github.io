//shared header across most sites
class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header><a href="/index"><img src="../../assets/logo.png" alt="Minelife Logo" class="header_logo"></a></header>
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
            <a href="/impressum">Impressum</a>
        </legal>
    `
    }
}
customElements.define('sidebar-legal', SidebarLegal)
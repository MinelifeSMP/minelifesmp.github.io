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

//Wiki Menu
class WikiMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <wikimenu class="wikimenu">
            <ul class="menu">
            <li class="menu-item">
                <button class="expand-btn">Category 1</button>
                <ul class="submenu">
                    <li>Subcategory 1.1</li>
                    <li>Subcategory 1.2</li>
                </ul>
            </li>
            <li class="menu-item">
                <button class="expand-btn">Category 2</button>
                <ul class="submenu">
                    <li>Subcategory 2.1</li>
                    <li>Subcategory 2.2</li>
                </ul>
            </li>
            <li class="menu-item">
                <button class="expand-btn">Category 3</button>
                <ul class="submenu">
                    <li>Subcategory 3.1</li>
                    <li>Subcategory 3.2</li>
                </ul>
            </li>
        </ul>
        </wikimenu>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
            var expandButtons = document.querySelectorAll('.expand-btn');

            expandButtons.forEach(function(button) {
            button.addEventListener('click', function() {
            var submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
            });
            });
            });
        </script>
    `
    }
}
customElements.define('wiki-menu', WikiMenu)
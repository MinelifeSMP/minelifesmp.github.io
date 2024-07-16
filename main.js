class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header><a href="../../index"><img src="../../assets/logo.png" alt="Minelife Logo" class="header_logo"></a></header>
    `
    }
}
customElements.define('shared-header', SharedHeader)
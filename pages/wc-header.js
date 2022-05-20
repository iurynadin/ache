class HeaderElement extends HTMLElement {
    constructor() {
        super(); 
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="bpvisor"><p></p></div>
            <header>
                <nav>

                </nav>

                <!-- secondaryNav -->
                <section class="secondaryNav">
                </section>
            </header>
        `;
    }
}
window.customElements.define('wc-header', HeaderElement);
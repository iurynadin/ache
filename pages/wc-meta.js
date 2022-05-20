class MetaElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <meta name="description" content="${this.getAttribute('title')}" />
            <meta name="author" content="Noctua.Art & RLabs" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <title>${this.getAttribute('title')}</title>
        `;
    }
}
window.customElements.define('wc-meta', MetaElement);  
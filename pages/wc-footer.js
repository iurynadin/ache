class FooterElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const backText = (this.getAttribute('lang')) ? 'Back to top' : 'Voltar ao topo';

        if(this.getAttribute('template') == 'interna') {
            this.innerHTML = `
                <footer class="relative w-full">
                </footer>
            `;
        }else{

            this.innerHTML = `
                <footer class="relative w-full">
                </footer>
            `;
        }
    }
}
window.customElements.define('wc-footer', FooterElement);
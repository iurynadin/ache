class HeroElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const titleColor = (this.getAttribute('title-color')) ? this.getAttribute('title-color') : 'text-white';

        this.innerHTML = `
        <div class="default__hero ${this.getAttribute('background')}">
            <div class="container">
                <p>${this.getAttribute('description')}</p>
                <h1 class="${titleColor}">${this.getAttribute('title')}</h1>
            </div>
            <div class="default__hero--cover"></div>
        </div>
        `;
    }
}
window.customElements.define('wc-hero', HeroElement);  
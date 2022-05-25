class HeroAcheElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="default__hero bg-ache">
            <div class="container">
                <p>A sustentabilidade econômica, social e ambiental embasa nossas decisões de gestão e nos conduz a um crescimento consistente e a uma presença duradoura.</p>
                <h1>Aché</h1>
            </div>
            <div class="default__hero--cover"></div>
        </div>
        `;
    }
}
window.customElements.define('wc-hero-ache', HeroAcheElement);  
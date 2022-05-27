class MenuAcheElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="./propositos-e-valores.html">Propósitos e Valores</a></li>
                <li><a href="./perfil.html">Perfil</a></li>
                <li><a href="./planejamento-estrategico.html">Planejamento estratégico</a></li>
            </ul>
        `;
    }
}
window.customElements.define('wc-menu-ache', MenuAcheElement);  
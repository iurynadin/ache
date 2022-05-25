class MenuGovernancaElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="estrutura-de-governanca.html">Estrutura de governança</a></li>
                <li><a href="#">Compliance e gestão de riscos</a></li>
                <li><a href="#">Inovação</a></li>
                <li><a href="#">Desempenho setorial e do negócio</a></li>
            </ul>
        `;
    }
}
window.customElements.define('wc-menu-governanca', MenuGovernancaElement);  
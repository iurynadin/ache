class MenuGovernancaElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="./estrutura-de-governanca.html">Estrutura de governança</a></li>
                <li><a href="./compliance-e-gestao-de-risco.html">Compliance e gestão de riscos</a></li>
                <li><a href="./inovacao.html">Inovação</a></li>
                <li><a href="./desempenho-setorial-e-do-negocio.html">Desempenho setorial e do negócio</a></li>
            </ul>
        `;
    }
}
window.customElements.define('wc-menu-governanca', MenuGovernancaElement);  